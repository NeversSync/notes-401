- favor composition over inheritance
  - 'has a' versus 'is a'
  - A person has superpowers instead of there are people and then there are superheroes.
- super used in a subclass refers to the same method in the base/super class.
- Super is the way to access the super class within a sub class.

## this
  - call site is what determines the value of 'this', this is where the parens are.
  - if the call site has something to the left of a dot ".", _that_ is the thing that will be used as "this". obj.sayHello(). 
## call - bind - apply 
- ways to explicitly control the context of a function
  - Call
    - explicit way to call a function/method
  - Apply
    - same as call but parameters are in an array. 
  - Bind
    - create a version of the function that is bound to a specified object.
- Arrow functions
  - arrow functions purposefully are context-less, this is defined by the place where the function was defined. 
  - 'this' is based on the time the function is defined, this is 'this' with arrow functions. this is called 'lexical binding'

## React components
  - convention is to use uppercase for components
  - props (properties) set of key/value pairs
  - props is data that has been passed down, state is data that is introduced
  - Pure functions/dumb components dont have state, only subclasses have state.
  ### rules of state
  - Push 'state' to the lowest level possible in the component tree
  - shared state between sibling components, must belong to a common ancestor. 
  