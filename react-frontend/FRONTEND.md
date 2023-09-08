# Front-End

## Required packages

* `axios (^1.5.0)`: Axios is a popular JavaScript library for making HTTP requests. It is often used to fetch data from a server or send data to a server. In a React application, Axios is commonly used to interact with APIs.

* `react-redux (^8.1.2)`: React Redux is the official React bindings for Redux, a state management library. It allows you to connect your React components to the Redux store, making it easier to manage and access application state.

* `redux (^4.2.1)`: Redux is a predictable state container for JavaScript applications. It helps manage the state of your application in a predictable way, making it easier to understand and debug complex state logic.

* `redux-thunk (^2.4.2)` : Redux Thunk is a middleware for Redux that allows you to write asynchronous logic (such as API requests) in your Redux actions. It enables you to dispatch functions as actions, giving you more control over the flow of your application.

React redux is used to globally save the state of the token so that we can access it when its needed.

## File structure

Folder | Contents
-------|---------
`src/components` | The components that we have used in this system is included here. (login and dashboard)
`src/store` | The `action, reduces, selectors` folders are used to manege the redux state and the `request` file is used to include the api related files.
`App.js` | In this file we are managing all the route related functionalities.
`index.js` | This is the entry-point for the application.

## Important code explanations.

### App.js

* `Login Route` : The first <Route> defines the /login route. It renders the Login component and passes a setToken function as a prop. This setToken function will be used to update the token state when the user logs in.

* `Protected Route (Dashboard)` : The second <Route> defines the /dashboard route. It checks whether the token is not null. If the token is not null, it renders the Dashboard component and passes the token as a prop. If the token is null, it uses the <Navigate> component to redirect the user to the /login route.

* `Fallback Route`: The third <Route> is a fallback route that matches any other URL. It also uses <Navigate> to redirect the user to the /login route if they access an undefined route.

### store/request/apiCalls.js

* `BASE_URL`: This constant holds the base URL of the API. It's set to 'http://localhost:4000', but you should replace it with the actual base URL of your API.

* `ApiCall Function:`
    * ApiCall is an asynchronous function that takes three parameters:
        * method: The HTTP request method (e.g., 'GET', 'POST', 'PUT', 'DELETE').
        * url: The endpoint URL relative to the BASE_URL.
        * data: Optional data to be sent with the request, typically used for POST or PUT requests.

* `Getting the Authentication Token:`
    * It uses store.getState().auth.token to retrieve the authentication token from the application's state. The assumption here is that your application uses some state management library (possibly Redux) to store user authentication information, and auth.token is where the token is stored.

* `Configuring the Axios Request:`
    * It creates a config object to configure the Axios request. This includes the HTTP method, the full URL (combining BASE_URL and url), and sets the content type in the request headers to JSON.

* `Adding Authentication Token:`
    * If a token is available, it adds an Authorization header to the request. This header contains the token preceded by 'Bearer', which is a common format for sending authentication tokens.

* `Sending Data:`
    * If data is provided, it adds it to the config object as the request's data. This is typically used for sending data with POST or PUT requests.

* `Making the Axios Request:`
    * It uses Axios to make the HTTP request with the configured config object.

* `Returning Response Data:`
    * If the request is successful, it returns the data property from the Axios response, which contains the response data.

* `Error Handling:`
    * If an error occurs during the request, it throws the error, which can be caught and handled by the caller of the ApiCall function.

In summary, this code is a reusable utility function for making authenticated HTTP requests to your API. It assumes that the authentication token is stored in the application's state under auth.token. You can use this function in different parts of your application to make API calls while automatically including the authentication token when necessary.