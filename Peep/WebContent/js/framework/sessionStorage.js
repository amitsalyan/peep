//----------------------------------------------------------------------------------------------

//@asalian: Aldera custom HTML5 Session storage implementation to handle safari and other private browsing modes.
//Custom sessionStorage implementation to handle those cases

//----------------------------------------------------------------------------------------------


//Replicates sessionStorage, including events. 
var alderaStorage = function() {
	var alderaStorage = {};
	var storage;

	/*
	 * if (window.Storage && window.sessionStorage) { storage =
	 * window.Storage.prototype; } else {
	 */
	window.sessionStorage = {};
	storage = window.sessionStorage;
	// }

	// For older IE
	if (!window.location.origin) {
		window.location.origin = window.location.protocol + "//"
				+ window.location.hostname
				+ (window.location.port ? ':' + window.location.port : '');
	}

	var dispatchStorageEvent = function(key, newValue) {
		var oldValue = (key == null) ? null : storage.getItem(key); 
		var url = location.href.substr(location.origin.length);
		var storageEvent = document.createEvent('StorageEvent'); // For IE, http://stackoverflow.com/a/25514935/1214183
		storageEvent.initStorageEvent('storage', false, false, key, oldValue,
				newValue, url, null);
		window.dispatchEvent(storageEvent);
	};

	storage.key = function(i) {
		var key = Object.keys(alderaStorage)[i];
		return typeof key === 'string' ? key : null;
	};

	storage.getItem = function(key) {
		return typeof alderaStorage[key] === 'string' ? alderaStorage[key]
				: null;
	};

	storage.setItem = function(key, value) {
		dispatchStorageEvent(key, value);
		alderaStorage[key] = String(value);
	};

	storage.removeItem = function(key) {
		dispatchStorageEvent(key, null);
		delete alderaStorage[key];
	};

	storage.clear = function() {
		dispatchStorageEvent(null, null);
		alderaStorage = {};
	};
};

//Example of how to use it
if (typeof window.localStorage === 'object') {
  // Safari will throw a fit if we try to use localStorage.setItem in private browsing mode. 
  try {
    localStorage.setItem('localStorageTest', 1);
    localStorage.removeItem('localStorageTest');
  } catch (e) {
	  alderaStorage();
  }
} else {
  // Use fake localStorage for any browser that does not support it.
	alderaStorage();
}