// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //if obj is undefined or a function return undefined
  if (obj === undefined || typeof obj === 'function') {
  	return undefined;
  }
  // else if obj is a string, return string
  else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }
  // else if obj is a number, bool, or null return String(obj)
  else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
  	return String(obj);
  }
  // else if obj is an array
  else if (obj.constructor === Array) {
  	// if array is empty return empty array string
  	if (!obj.length) {
  		return '[]';
  	};
  	// create accumulator result variable and set to empty array
  	var result = [];
  	// for each element of the array, stringify and then push to result 
  	obj.forEach(element => {
  		result.push(stringifyJSON(element));
  	});
  	return '[' + result.toString() + ']';
    }
  // else if obj is an object
  else if (obj.constructor === Object) {
  	// create accumulator result and set to empty array
  	var result = [];
  	// for each key within the object 
  	Object.keys(obj).forEach(key => {
  		// if the property value is undefined or function, skip
  		if (obj[key] === undefined || typeof obj[key] === 'function') {
  			return;
  		} 
  			result.push('"' + key + '"' + ':' + stringifyJSON(obj[key]));
  		});
  	return '{' + result.toString() + '}';	
  	}
  } 
   