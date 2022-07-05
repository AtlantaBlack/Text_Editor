# (Just Another) Text Editor

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

**(Just Another) Text Editor** – JATE for short – is a convenient, in-browser application that allows users to write and save code snippets wherever they may be. Install the app on your device and use it on the go – it will even work offline!

The app is a single-page application that meets PWA criteria, uses idb for storing and retrieving data from an IndexedDB database, and service workers for data persistence in the event of a network disruption.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Demo](#demo)
5. [Screenshots](#screenshots)
6. [License](#license)
7. [Resources](#resources)
8. [Contact](#contact)

## Technologies Used

This application uses the following technologies:

- [Node.js](https://nodejs.dev/)
- [Express.js](https://expressjs.com/)
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [idb](https://www.npmjs.com/package/idb)
- [Webpack](https://webpack.js.org/guides/progressive-web-application/)
- [Workbox Webpack Plugin](https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin/)
- [babel](https://babeljs.io/docs/en/)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Installation

If you are using the **[application deployed on Heroku]()** in the browser, then no installation is required. If you wish to install the application and use it offline, simply click the install button in the application header and save it to your local machine.

If you wish to use the application locally, you may clone or download the [JATE Git repository](). Then, navigate into the folder using Terminal/CLI and follow the steps below in the root directory of the application:

- Install npm packages: `npm install`
- Build the client and start the server: `npm start`
- Run the app on `localhost:3000` (you may need to clear your browser cache first)

## Usage

JATE is deployed on Heroku: **[check it out now!]()**

You will be able to write your code snippets in the text editor. To save your work, click outside the text area (for example, click the header); the application will remember your notes for the next time you open it. You may install the application by clicking the install button.

## Demo

demo

## Screenshots

screenshots

## License

© 2022 Sushan Yue

This project is licensed under the [MIT License](./LICENSE.txt).

## Resources

- [concurrently](https://www.npmjs.com/package/concurrently)
- [Webpack: Mini CSS Extract Plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)
- [Workbox Modules (recipes, strategies)](https://developer.chrome.com/docs/workbox/modules)
- [Google Chrome Developers - Caching your fonts, images and pages](https://www.youtube.com/watch?v=utxTqssjp-o&t=157s)
- [Stack Overflow - Loading a favicon using HTML Webpack Plugin](https://stackoverflow.com/questions/52024445/index-html-template-isnt-loading-favicon-for-htmlwebpackplugin/66761341#66761341)

## Contact

[Sushan Yue @ GitHub](https://github.com/AtlantaBlack)

[Email me!](mailto:syue.dev@gmail.com)
