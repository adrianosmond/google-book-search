# Google Books Search

An application to search for books from the Google Books API.

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and requires Node >= 8.10. In order to install the dependencies, open a terminal in the project directory and run: `npm ci`

## Running the app

`npm start` runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Building the app

`npm run build` Builds the app for production to the `build` folder.<br>
It bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed!

## What I have done

- Built a page to search the Google Books API and display a list of results showing key information, with a link to view the full information on the Google Books website
- Allowed the user to page through the results
- Provided a link to the Google Books result so that the user can get the full details
- Provided a list of the recent searches, which can be clicked on to re-perform the search
- Mobile first, responsive CSS to allow easy use on smaller screens
- Used semantic HTML, hidden text and some aria tags to make it work a bit better on a screen reader
- Tested on Safari, Chrome, Firefox, Mobile Safari. (My personal MacBook is a bit underpowered for a VM and I live in a household with only iPhones, so no Edge and Chrome for Mobile testing. I don't think I've used any controversial JS / CSS so I don't see any reason why they wouldn't work)
- Separated presentation from business logic, with presentation taken tare of using reusable components (see `src/components`)

## Still to do

If this were a real project there are quite a few things I'd still need (/like) to do:

- Update the URL on search (and perform the search on reload if a URL param is present)
- Allow the user to change params we send to the API (e.g. num results per page)
- Internationalisation (including passing the preferred language to the API)
- Proper error handling
- Test on Edge and Chrome for Mobile
- Get an API key so this can be used on a domain other than localhost
- Create a details page instead of sending people off to Google Books
- Store recent search history so it doesn't disappear on reload
- Write tests
- [Storybook](https://storybook.js.org/) for components
- Get an actual designer to do the visuals!