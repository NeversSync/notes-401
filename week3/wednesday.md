## Multiple tests
- in scripts add:
    - test: mocha --recursive (tests all)
    - test:watch: npm run test -- -w
    - test:unit: mocha test/unit
    - test:e2e: mocha test/e2e
    - start: nodemon server.js
- don't test the libraries you are using themselves, focus on testing the code we wrote that is using them
- adding an underscore to a test file will make it be evaluated first because its alphabetical. This can be leveraged to make implicit "before" statements in that file
- inside a test file (_db.test.js), estabish the mongodb uri and require the connect file to have the connection start before all tests so you don't have to repeat that code in several tests/files.
- You can write a db.drop() function in the helper file and import it, call it at the top of each describe/it that you need to drop the db.

## express middleware
- handlers that do things between the request and the response. one example: a third argument in all express methods(get, use, ect) = (req, res, next) that you call at the end of that handler that then moves onto the next method until you send back at the end of the chain. bodyParser is another express middleware.

##routing
- break out logic and routing in app.js into a routes directory with files for each of the routes/subroutes, with exports of their router and its attached method
    router
        .get('/')
        .post('/')
that get used in app.js in an app.use('path', pets).

