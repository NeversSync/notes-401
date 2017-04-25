## Mongo

- go mongo- start it in one window
- in new window, type mongo
- show dbs- shows all dbs
- use "db name" makes new db
- show collections - shows "tables"
- collections = tables, rows = documents in mongo
- To make new document: db.movies.insert({name: 'Real Genius', year: 1988})
- to find document within db: db.movies.find() - this shows all documents in given collection
- add .pretty to db.collecton.find().pretty to make nicer formatting
CRUD: SQL vs. Mongo
    - Create = INSERT ; insert
    - Read = SELECT ; find
    - Update = UPDATE ; update
    - Delete = DELETE ; remove
- Is sensitive to types, if doing find, make sure to type the right type.
- Id is automatically generated, is called an objectId.
- Filtering finds:
    - db.movies.find({ year: {$gt: 1988}}).pretty() = greater than 1988, gte is greater than or equal to.
    - db.movies.find().limit(3) - only get first 3
    - db.unicorns.find({ loves: { $in: ['carrot', 'apple']} }).pretty() more than one value.
- to count: db.unicorns.count()

## Running mongo in node
- npm i mongodb -S
- const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/cinema';

mongo.connect(url)
    .then(db => {
        console.log('connected to mongo!', db.databaseName);
    })
    .catch(err => {
        console.log('ERROR', err.message);
    })
- run the file in node (node unicorn.js);
- 
