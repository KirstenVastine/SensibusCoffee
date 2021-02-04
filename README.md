

# Welcome to Sensibus Coffee App
----------------------------
* heighten your senses *
by **Kirsten Vastine**

## Introduction
Sensibus Coffee App is meant to help coffee lovers with a highly developed taste in the wonderful beans we know and love discover new origins to enjoy every day. Sensibus Coffee is a local roastery in Frankfort, KY bringing small batch organic coffee from around the world to you.

### Built with
--------------
1. Node: Used for the server application build
2. React: Incorporated in the frontend build
3. Material UI: Used for application design/styling which gave it the professional look.

## Project Planning:
Initial stages of the project was spent carefully planning the details using Trello on a high level. This was then layed out in lucid to provide a more detailed structure and allow us to see the flow of information from the server-side to the frontend and vice versa. Figma was incorporated to provide the mockup for all our app pages. Links to our project planning, diagrams and flowchart are listed below this page.

## Project Setup and Key Features
The server side with a total of 7 endpoints was first built out. This was made up of two user endpoints(login and signup) and 5 profile endpoints(create profile, view profile by id, view profile by name, update and delete). Verification and creation of tokens and JWT_SECRET were incorporated to improve the security of the application and minimize unauthorized processes on the app. 

The signin and signup section allows a user to log into th app.
The profile section is completed by the user and information from this section is collected and stored in postgres database. This is used along with logic in matching our user to the perfect date.
The update profile functionality  allows the user to make changes to their profile.
A user who decides to opt out of the dating app has the ability to delete their information from the applicaton. This functionality automatically logs out the user. This is an added security measure we incorporated to ensure that non-users do not have the ability to see or search profiles of other users.

### Coding fact/Things you will notice
Spread throughout the app you will notice React class components and typescript.  
```
````
``` 








<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->
