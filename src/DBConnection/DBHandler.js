const request = window.indexedDB.open("lyrics", 1); // Create the database
let db;

request.onerror = (event) => console.error(`Database error: ${event.target.errorCode}`);
request.onsuccess = (event) => {
  db = event.target.result;
};
request.onupgradeneeded = (event) => {
  db = event.target.result; // Save the IDBDatabase interface
  const objectStore = db.createObjectStore("chords", { autoIncrement: true }); // Create an objectStore (table) for this database
  objectStore.createIndex("name", "name", { unique: false });

  // This is what our customer data looks like.
  const customerData = [
    {
      ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com",
    },
    {
      ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org",
    },
  ];

  objectStore.transaction.oncomplete = function (event) {
    // Store values in the newly created objectStore.
    const customerObjectStore = db.transaction(["chords"], "readwrite").objectStore("chords");
    customerData.forEach((chord) => customerObjectStore.add(chord));
  };
};

// https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs

// PUT
function put(event) {
  db = event.target.result;
  const transaction = db.transaction(["chords"], "readwrite");
  // Do something when all the data is added to the database.
  transaction.oncomplete = function (event) {
    console.log("All done!");
  };

  transaction.onerror = function (event) {
  // Don't forget to handle errors!
  };

  const objectStore = transaction.objectStore("customers");
  customerData.forEach((customer) => {
    const request = objectStore.add(customer);
    request.onsuccess = function (event) {
    // event.target.result === customer.ssn;
    };
  });
}
