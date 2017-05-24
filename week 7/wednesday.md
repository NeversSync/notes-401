## React misc.
https://github.com/cfpdx-401JS-spring-2017/in-class-work/tree/master/week07_component-architectures/may24_prop-types-forms-immutability

- When setting state- you always set the top level key of whatever you changed. if you changed a subset of something, set the state on the parent key

- propTypes - extension to React
  - enables you to check that a component is getting what you expect as props and to have some validation and feedback as you build and change things. Also clearer errors
  - you can add propTypes object as a way to add 'static properties' on a component
  - this can be a way to validate the type or indicate that something is required on a class component
  - Same type of thing as a schema in mongoose.
  - Mainly for development time checking, not runtime. 
  - If you fail propType validation, the component still renders. 
  - Have to decide if they are worth the investment, not necessary but it can be super helpful as a guard

- Spread operator: '...obj'
  - Spread takes an objects properties and 'spreads' them out into their own higher level properties, when passing an object as 'props', you can use this to pass the properties of that object as their own distinct prop instead of the entire object as one prop with its own properties.

- export default doesn't modify the scope of what you export, as opposed to module.exports
- copy props...
- to key components in a sequence, check rooms.js at the bottom as well as Dungeon.js and Dungeonapp.js
- you can use parens to do a multi line implicit return expression (for example in a map that returns elements)
- If you dont give the rendering component a key property, when state/props changes the component will not be rerendered, it will only change the data within it to save on processing needs. 
- Component mounting- check immutable.js
  - If a component is mounted (rendered to the DOM), then you can change the props within that component without reconstructing/rendering it again, but if you navigate away and unmount it, then you will need to remount it. Life cycle methods like componentDidMount, componentWillMount, ect which can be used to track the life cycle of a component and do certain actions at different stages.
  - Some life cycle methods can't have a 'did mount' (component will unmount) because once the component is not mounted it is already gone, ect.
  - shouldComponentUpdate can check if the component needs to update even if it got new props (for example if search term did not change since last render but button was clicked again)
  - PureComponent checks top level property and state keys and if values are === returns false?
- Immutability
  - If you change any part of an object(array or other), immutability says it should create a completely new array that has the new values as opposed to only updating the value in the original object
  - The role of this in react is to optimize the rerendering cycle. instead of having to look through all children to check if they have been changed when you set state on a particular child, immutability tells the program only to check to see if the top level child has changed and not go to its children if it hasn't. 
  - Use arr.splice() to create new version of the array to maintain the original array.
  - 