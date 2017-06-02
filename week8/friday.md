## Redux
- Three principles
  * single source of truth
    - state of whole app is stored in an object tree within a single store
  * state is read-only 
    - only way to change the state is to emit an actin, an object describing what happened
  * changes are made with pure functions
    - to specify how the state tree is transformed by actions, you write pure reducers.

- Actions 
  - Type - event
  - payload
    - what you need to have to make the action work
- Reducers 
  - how to apply the action to the before version of state to get to the after-action version of state
  - the means by which an action converts the store to its new representation

