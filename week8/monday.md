- Webpack 
  - takes all files, uses a combination of compilers/transpilers (babel, style loaders, ect) to 'bundle' your project code to deliver it to the browser so it is better consumed in the browser.
- Babel 
  - transpiles source to source js based stuff, jsx to js, es5 to es6, ect.

## React Router
- Client side routing that doesn't refresh the page
- Using 'Browser Route' is a better alternative than using a Hash # router
- <Router></Router> tag/component wraps everything that will be rendered
- <Route></Route> path is a condition rendering functionality that checks if route matches/starts with, ect, and renders the appropriate components.
- Based what is in the url bar, the app will 'react' to it and render that state
- You can have multiple matching route tags if you want to render multiple views/components at that route
- If you use a <Switch></Switch> tag before/after the route tag, it will only render the first match in the list.
- <Redirect to='path'/> to redirect user to a specified path if used in component or to a default home page if used after Route tags in case user goes to a route that doesn't exist.
- use render={() => {<Component/>} to do logic, add conditions, pass down props inside a <Route></Route> tag.