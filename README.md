DIT Project : Profile Documentation

Overview
This is a React app that fetches user data from the FakerAPI and displays it as a single page user profile page. The app is made using React Typescript to avoid runtime errors. It displays the user’s full name, gender, birthday, email, city, country phone and finally picture.

File structure
The entire app source code is contained in the src folder. Since the app is very small and covers only one page, the default file structure has been used. The function that fetches data from the API as well as the React UI code are found inside the App.tsx file. All the styling for the page is found in the App.css file. Diving such a small code into components was not performance optimized and the code was readable enough so no other components were used.

Libraries Used
The app uses FakerAPI (https://fakerapi.it/en) to fetch user data. The API provides detailed data about the user that was filtered, parsed and rendered to the current UI.

Running the Project
Visit  [http://localhost:3000](http://localhost:3000) to see the web app, if it is not already opened.
Run `npm install` in the project root directory to install all the required npm packages.
You can run `npm start` to run the project. 

In the project directory, you can run:

### npm start


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.