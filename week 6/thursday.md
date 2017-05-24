## array/object intricacies, undefined verses non-existent, ect
- look at may 18th in class notes (holes.js)
- obj.hasOwnProperty('key') returns boolean that says whether that object has that property.
an object with the 'value' of 'undefined' will look the same in evaluating it or checking if it has a certain property, as it will if it doesn't have that property.
- console.log(Object.keys(object)) returns array of keys (as strings) in that object
- If you need to see what is on an objects prototype chain, you can use the 'in' keyword.
- A hole is 'not a defined property', but is not the same as a key whose value is undefined. javascript quirk.
