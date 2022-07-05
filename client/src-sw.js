const { offlineFallback, warmStrategyCache } = require("workbox-recipes");
const { CacheFirst, StaleWhileRevalidate } = require("workbox-strategies");
const { registerRoute } = require("workbox-routing");
const { CacheableResponsePlugin } = require("workbox-cacheable-response");
const { ExpirationPlugin } = require("workbox-expiration");
const { precacheAndRoute } = require("workbox-precaching/precacheAndRoute");

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
	cacheName: "page-cache",
	plugins: [
		new CacheableResponsePlugin({
			statuses: [0, 200]
		}),
		new ExpirationPlugin({
			maxAgeSeconds: 30 * 24 * 60 * 60
		})
	]
});

warmStrategyCache({
	urls: ["/index.html", "/"],
	strategy: pageCache
});

registerRoute(({ request }) => request.mode === "navigate", pageCache);

// implement asset caching
registerRoute(
	// define callback function that will filter requests to be cached (ie. JS and CSS files)
	({ request }) => ["style", "script", "worker"].includes(request.destination),
	new StaleWhileRevalidate({
		// cache storage name
		cacheName: "asset-cache",
		plugins: [
			// plugin that caches responses with following headers (for max of 30 days)
			new CacheableResponsePlugin({
				statuses: [0, 200]
			})
		]
	})
);

// image caching
// ref: Unpacking the Workbox - caching fonts, images & pages
// https://youtu.be/utxTqssjp-o?t=157
const matchCallback = ({ request }) => request.destination === "image";

registerRoute(
	matchCallback,
	new CacheFirst({
		cacheName: "image-cache",
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200]
			}),
			new ExpirationPlugin({
				// list entries first followed by age
				maxEntries: 5, // max number of entries
				maxAgeSeconds: 30 * 24 * 60 * 60 // max age in seconds
			})
		]
	})
);
