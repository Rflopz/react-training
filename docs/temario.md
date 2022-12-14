# Temario React.js zero to hero
## Entorno de trabajo
Instalaciones que necesitamos 
* Node.js version 16 LTS\
Dependiendo del OS pueden usarse packages managers como:
  * apt (linux)
  ```
    $ sudo apt install -y curl
    $ curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    $ sudo apt install -y nodejs
  ```
  * brew (mac):
  ```
    brew intall node@16
  ```
  * choco (windows)
  ```
    choco install nodejs-lts
  ```
* npm\
Es el manejador de paquetes por default de node, también se puede installar yarn:
```
  npm install --global yarn
```
https://www.freecodecamp.org/news/get-started-with-react-for-beginners/

___

##  Entendiendo React 

Para entender react primero debemos comprender:

### DOM (Document Object Model) and Javascript
https://www.freecodecamp.org/espanol/news/que-es-el-dom-el-significado-del-modelo-de-objeto-de-documento-en-javascript/

### Node modules
https://www.geeksforgeeks.org/node-js-modules/#:~:text=Like%20Article-,In%20Node.,collection%20of%20multiples%20files%2Ffolders.

### Package.json
https://docs.npmjs.com/cli/v8/configuring-npm/package-json

### NPM and Yarn
https://docs.npmjs.com/about-npm\
https://yarnpkg.com/getting-started

### What is babel? 
https://babeljs.io/docs/en/

### What is webpack?
https://webpack.js.org/concepts/

### How react works? 
https://www.freecodecamp.org/news/react-under-the-hood/

### What is JSX?
https://reactjs.org/docs/introducing-jsx.html\
https://reactjs.org/docs/jsx-in-depth.html

### React component life cycle 
https://www.geeksforgeeks.org/reactjs-lifecycle-components/

___

## React philosophy

### Thinking in react 
https://reactjs.org/docs/thinking-in-react.html

### SOLID Principle and React 
https://developero.io/blog/react-solid-example\
https://www.everydayreact.com/articles/solid-principles-in-react

### Functional programming
https://www.geeksforgeeks.org/functional-programming-paradigm/

### Composition vs inheritance
https://reactjs.org/docs/composition-vs-inheritance.html

### File structure
https://reactjs.org/docs/faq-structure.html\
https://www.robinwieruch.de/react-folder-structure/

### Split big Components into small ones
https://joaoforja.com/blog/guideline-on-how-to-decompose-a-react-component

___ 

## Modern Javascript
### ES6 
https://www.w3schools.com/js/js_es6.asp

### let and const
https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

### expressions and operators
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

### export / import 
https://javascript.info/import-export

### async / await 
https://javascript.info/async-await


* Arrow functions \
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* spread and destructuring operators \
https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript
* Arrays \
  https://www.freecodecamp.org/news/the-javascript-array-handbook/
  * map
  * filter
  * some 
  * find 
  * every

### Truthy, falsy and equality comparations
https://www.sitepoint.com/javascript-truthy-falsy/

### High Order Functions
https://dmitripavlutin.com/javascript-higher-order-functions/

---
## React 

### class components / function components
https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/#:~:text=Functional%20Components-,Class%20Components,which%20returns%20a%20React%20element.

### hooks and custom hooks
https://reactjs.org/docs/hooks-intro.html
https://www.freecodecamp.org/news/introduction-to-react-hooks/

### useState and data bindling 
https://www.geeksforgeeks.org/reactjs-data-binding/#:~:text=Data%20Binding%20is%20the%20process,in%20the%20view(UI).

### Re-rendering Optimizations with: 
* React.Memo
* useMemo
* useCallback

### React Context
https://www.freecodecamp.org/news/react-context-for-beginners/
### High Order Components
https://www.smashingmagazine.com/2020/06/higher-order-components-react/

### React styled components || css libraries
* Styled Components \
https://styled-components.com/

* MUI (Material UI) \
https://mui.com/material-ui/getting-started/overview/ 

### React Router
https://reactrouter.com/en/main/start/overview
### React.lazy
https://reactjs.org/docs/code-splitting.html

### React Redux
https://redux.js.org/tutorials/fundamentals/part-5-ui-react \
https://www.youtube.com/watch?v=9jULHSe41ls
