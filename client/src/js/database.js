import { openDB } from "idb";

const initdb = async () =>
	// create a new db called 'jateDB'
	openDB("jate", 1, {
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

// add/update content to database
export const putDb = async (content) => {
	// start with a message
	console.log("Updating content...");

	const jateDB = await openDB("jate", 1); // get the database, v.1
	const tx = jateDB.transaction("jate", "readwrite"); // make a transation
	const store = tx.objectStore("jate"); // connect to an object store
	const request = store.put({ id: 1, content }); // make request to (re)write content into ID: 1 in the db
	const result = await request; // await the result of the request

	// if successful, send the result
	console.log("Content saved to database:", result.content);
};

// get all the content from the database
export const getDb = async () => {
	// start with a message
	console.log("Getting saved content...");

	const jateDB = await openDB("jate", 1); // get the db, v.1
	const tx = jateDB.transaction("jate", "readonly"); // make a read-only transaction
	const store = tx.objectStore("jate"); // connect to an object store
	const request = store.get(1); // request to get something out of the db
	const result = await request; // await the request

	// if successful, send the result
	console.log("Result retrieved:", result.content);
};

initdb();
