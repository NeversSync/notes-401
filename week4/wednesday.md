## desctructuring
- 
```js
    const person = { name: 'yo', age: 20};

    const { name, age } = person;
    = to
    const name = person.name;
    const age = person.age;
```
- makes new variables that hold that property value.
- helpful in function arguments and array index assignmignment to variables.
- can alias (rename) inside of the destructuring object ({ body: pet}), now the body is called pet.
- only used when you are assigning a variable or in function parameter definition.

#aggregation
- can create mongoose method that custom filters/aggregates the data you want back and then use that method in routes.
- https://docs.mongodb.com/getting-started/shell/import-data/
- ex: 
```js
db.getCollection('restaurants').aggregate([
    { $group: { 
        _id: '$borough'
    }}
])
```
