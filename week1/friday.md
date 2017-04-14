## WhiteBoarding
- Normal format of prompt:
  - make a function that:
    - takes an input and creates a certain output. i.e. take in a name, return a greeting with name.
  - first thing to do:
    - clarify needs and cases: what happens if nothing is passed in? Error?
    - talk out loud as you are doing it, for everything you are thinking.
    - don't assume, think out loud. focus is normally on your problem solving process, not the answer. 
    - useful to mention how language has changed, modern vs. es5 syntax, ect. 
    - once done with the code, tracing through the code and various cases shows an understanding of the process and reason for your code.
    - write psuedo code (loop through the things, do this to each thing)
    
  ## Big O 
    - analyze the way we write functions to see if we are taking as few steps, amount of computation, as possible. Helps make our programs scalable. 
    - assuming worst case scenario 
    - 0(1), when function will always take same amount of steps.
    - 0(n), when with each added argument, growth of steps is linear. (argument length is flexible)
    - 0(n^n), as many operations as items in argument/array. growth is exponential for each extra item in argument. 
    - if we can use an object instead of an array to check the contents of a group of items, it takes the number of steps down to nearly 1 no matter what the length of the group of items is. 
    - for efficiency, avoid nested for loops if possible (includes using array methods. If you see a nested for loop, see if you can figure out an object oriented way to do it instead. set items in array to properties in new object and look for it from there. 