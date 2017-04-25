- Can create a project with boiler plate and store in a template directory, add alias in bash_profile that copies cp -R the template into current new projects.
- shorthand for making http servers
```
const http = require('http');
const Server - http..Server;
const server - new Server();

server.on ('request', (req, res) => {
  res.end('hello world);
})

<!--equivalent to:-->

const shortHandServer = http.createServer((req, res) => {
  res.end('hello world');
});

server.listen(3000);
```

## create event emitter
- can create my own Event Emitter by:
```const EventEmitter = require('events');
 const ee = new EventEmitter();

 ee.on('banana', () => {
 console.log('a banana event') 
 });

 ee.emit('banana');
```

## space/memory concerns/streams
- streams are event emitters that emit their data
- think of files not as one thing but instead as a stream of data. 
- req is a readable stream, response is writable. 

ex:
this has 0(n) complexity.
- function readfile(filename) {
  fs.readFile(filename, (err, contents) => {
    console.log(contents);
  }
}

this has 0(1) complexity, which is good for memory usage if reading a huge file.

function streamFile(filename) {
  const stream = fs.createReadStream(filename);

  stream.on('data', chunk => {
    console.log(chunk.length);
  });

  stream.on('end', () => {
    console.log('done reading stream');
  });
}

## Promises
- problems with callbacks
  - need to do manual error checking with each asyc step and propagate that error up.
  - orchestration of tasks- callback hell
  - promisify = take a library and make it so we can use the .then functionality 
  - .catch; catches any errors, also resets flow, any .then's after it will run.
  - promise.all() takes array of promises, runs them in order, quick way to parellelize promise flow, replaces need for counter.
  