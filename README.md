# Single-spa app with React Angular Vite and SystemJS

## Install the npm packages
The applications node version required for each application is different. You need to navigate to the root-config, react-app, and angular-app folders and run the command
```js
$ npm install
```

## Run the application

- Navigate to the angular-app folder and run the below command
  ```js
  $ npm run serve:single-spa:angular-app
  ```
- Navigate to the react-app folder and run the below command
  ```js
  $ npm start
  ```
- Navigate to the root-config folder and run the below command
  ```js
  $ npm start
  ```
  
  In the browser open the application at http://localhost:9000
  
  Now in the top navigation bar click on **React**, you will be routed to the React app, on click of **Angular** you will be redirected to angular app
  
  **http://localhost:9000/react** -> React App
  **http://localhost:9000/angular/** -> Angular App
