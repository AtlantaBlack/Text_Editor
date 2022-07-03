import { openDB } from "idb";

const initdb = async () =>
	// create a new db called 'jateDB'
	openDB("jateDB", 1, {
		upgrade(db) {
			// add an object store called 'jate'
			// if if exists already, do nothing
			if (db.objectStoreNames.contains("jate")) {
				console.log("jate database already exists");
				return;
			}
			db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
			console.log("jate database created");
		}
	});

// adding content to database
export const putDb = async (content) => {
	// get the db (v.1)
	const jateDB = await openDB("jateDB", 1);
	// make a transation
	const tx = jateDB.transaction("jate", "readwrite");
	// make a store
	const store = tx.objectStore("jate");
	// make the request to put content into the db
	const request = store.put({ id: 1, content });
	// await the result of the request
	const result = await request;
	// if successful, send the following message
	console.log("Content saved to database:", result.content);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error("getDb not implemented");

initdb();
