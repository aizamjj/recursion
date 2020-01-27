// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // use document.body, element.childNodes, and element.classList
  // element.childNodes gives the element's children in a list
  // element.classList gives the element's classes in a list
  // create a result array
  var result = [];
  // create a recursive function that traverses the list for the class match
  // input: element
  var containsClass = function(element) {
  	// if element has classList and that classList contains the right class
  	if (element.classList && element.classList.contains(className)) {
  		// pass that element to the result array
  		result.push(element);
  	}
  	// if element has childNodes then iterate through them 
    if (element.childNodes) {
    	element.childNodes.forEach(item => {containsClass(item)});
    }
  };
    containsClass(document.body);
    return result;
    };  

   
