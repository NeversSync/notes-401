Check jun-01 in class

- SCSS
  - Sassy CSS
  - id's are somewhat anti to component architecture 
  - have to import the compiled css file into your component, NOT the scss file
  - good idea to .gitignore the compiled css file
  - you can nest
  - you can use expressions and math within the css
  - putting a $ in front of something at the top makes it a reusable variable
  - if you put an underscore before the scss file name, that file will not be compiled into a css file and you then import it (without the underscore) into a scss file to use the values in it
  - to chain( i.e. for hover and sub classes) use the & and nest
- Styled components : https://www.styled-components.com/
  - write a const that is a 'component', could be a div, ect, write teh styles in the js file, and then use the component in the jsx. 
  - worth installing 'styled components' vscode extension
  - This lets you write a function that has conditional rending of styles for your styled component, wow
  - You can put these components and their styles in the same js file as their use site, or export them from their own file
  - 