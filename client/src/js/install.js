const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// reference: https://web.dev/codelab-make-installable/

// `beforeinstallprompt` event handler
window.addEventListener("beforeinstallprompt", (event) => {
	// stash the event so it can be triggered later
	window.deferredPrompt = event;
	// remove hidden class from install button
	butInstall.classList.toggle("hidden", false);
});

// event handler for clicking on `butInstall` element
butInstall.addEventListener("click", async () => {
	// this is coming from the 'before install prompt' function
	const promptEvent = window.deferredPrompt;

	// if there is no deferred prompt, exit out/do nothing
	if (!promptEvent) {
		return;
	}
	// otherwise, show install prompt
	promptEvent.prompt();
	// reset the deferred prompt value as prompt() can only be called once
	window.deferredPrompt = null;
	// add hidden class to install button
	butInstall.classList.toggle("hidden", true);
});

// `appinstalled` event handler
window.addEventListener("appinstalled", (event) => {
	// clear the deferred prompt value
	window.deferredPrompt = null;
});
