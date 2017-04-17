## common database CRUD pattern

- get all - should get empty array
- post - creates id, get that id to make sure can get that later
- 2x post, then get all to make sure you get array back with everything you posted
- detele something, then get all to make sure it is deleted
- update, then get. 

- TCP = Transmission Control Protocol - sending information raw
- HTTP 
  - protocol on top of TCP, more structured for dealing with web requests. 
- Chai - assertion library with useful methods that is more flexible than built in node testing methods.
- Chai HTTP = chai plug in that integrates with superAgent. It will choose a random server that starts and tears down a server for us. Has different api's (expect, should)
- expect and should make tests readable, but are overkill and avoiding technical but straightforward 'assert'.
- When writing a server, separate out the setup for the server into server.js and what the app does with requests/responses into another file.
- if using nodemon, 'rs' restarts server manually
- can use multiple res.write() statements, but you need to finish with a res.end() to let clinet know you are done. If you are only writing one thing, you can use res.end alone.
- nouns in the path, verbs in the method, modifiers in the query string.
- command + K + D skip text occurance when selecting
