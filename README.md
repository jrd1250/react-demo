This demo will walk you through the funtionality of a simple app using React. This tutorial will demonstratea several simple UI features, routing, and authentication.

## Part 0: Before You Start

Make sure you have a browser extension installed that allows you to inspect React components and view their attributes in your browser. If you're using chrome, [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) works well for this.

Now, run `npm start` in the project directory to run the app. Verify that it's running at localhost:3000. This will allow you to check out each component of the app as you walk through it in the tutorial.

## Part 1: Components

To start things off, we'll see how the app home works, which provides a great example of how React allows you to use components to modularize your webpage design and apply OOP concepts. Take a look at [App.js](src/App.js) and [SpinImage.js](src/SpinImage.js) to see how this is done.

## Step 2: Routing

Now, let's take a look at how React does routing to link paths to each component. Check out [index.js](src/index.js) to see how the Router works in React.

## Step 3: UI Elements and State

To see how Forms and Tables work in React-Bootstrap, as well as how state can be used to dynamically control components at runtime, check out [Dashboard.js](src/Dashboard.js), and play around with the form in your browser. Make sure to inspect the page and look at how the Dashboard component's state changes.

## Step 4: Authentication

Auth0 allows for quick and easy authentication for React apps. Credit for this section and the classes referenced goes to [this tutorial](https://medium.appbase.io/how-to-implement-authentication-for-your-react-app-cf09eef3bb0b). The [Auth](src/Auth.js) class provides an interface to auth0 and handles the direct authentication. The login() and logout() methods will later be wrapped to perform the actual authentication.

## Step 5: Putting It All Together

Now that you understand how authentication works, take a look back through the rest of the classes and see how the authentication is passed down from [index.js](src/index.js) to each of the other components.
