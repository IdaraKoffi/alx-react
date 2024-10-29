0x00. Webpack Project
Overview

This project demonstrates the use of Webpack to bundle JavaScript files and manage dependencies. Throughout the project, you’ll set up Webpack for a basic JavaScript project, configure entry points, output directories, and loaders, and add plugins to optimize and split code into separate modules. Each task builds upon the previous one, leading to a fully optimized and modularized project.
Learning Objectives

By the end of this project, you should be able to:

    Set up Webpack for a basic project.
    Configure entry points, output, and loaders.
    Add plugins to optimize the build.
    Split code into multiple chunks.
    Set up and use a development server.

Project Structure

plaintext

0x00-Webpack/
├── task_0/
│   ├── dist/
│   │   └── index.html
│   ├── src/
│   │   └── index.js
│   └── package.json
├── task_1/
│   ├── js/
│   │   └── dashboard_main.js
│   ├── public/
│   │   └── index.html
│   ├── webpack.config.js
│   └── package.json
├── task_2/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── dashboard_main.js
│   ├── assets/
│   │   └── holberton-logo.jpg
│   ├── public/
│   │   └── index.html
│   ├── webpack.config.js
│   └── package.json
└── task_3/
    ├── modules/
    │   ├── header/
    │   │   ├── header.js
    │   │   └── header.css
    │   ├── body/
    │   │   ├── body.js
    │   │   └── body.css
    │   └── footer/
    │       ├── footer.js
    │       └── footer.css
    ├── public/
    │   └── index.html
    ├── webpack.config.js
    └── package.json

Installation and Setup
Prerequisites

Ensure you have Node.js and npm installed. This project was built and tested with:

    Node.js version 12.x
    npm version 6.x

Setup Instructions

    Clone this repository to your local machine:

    bash

    git clone https://github.com/YOUR_USERNAME/alx-react.git
    cd alx-react/0x00-Webpack

    Navigate into each task folder, install dependencies, and follow the instructions below.

Tasks
Task 0: Basic Setup

    Objective: Set up a basic Webpack project to bundle a single JavaScript file.
    Instructions:
        Install Webpack and jQuery.
        Create an index.js file in the src folder and use jQuery to add paragraphs to the document.
        Generate a bundled JavaScript file (main.js) in the dist folder.
    Commands:

    bash

    cd task_0
    npm install
    npx webpack --mode=production

Task 1: Using Webpack with a Config File

    Objective: Create a Webpack configuration file and bundle files into a public folder.
    Instructions:
        Install Webpack, jQuery, and Lodash.
        Create dashboard_main.js in the js folder to dynamically generate HTML content with a counter using Lodash.
        Add a webpack.config.js file to set the entry and output files.
    Commands:

    bash

    cd task_1
    npm install
    npm run build

Task 2: Adding CSS and Images

    Objective: Configure Webpack to bundle CSS and images.
    Instructions:
        Create a main.css file to style elements and add a logo in the assets folder.
        Update the Webpack config to use css-loader and style-loader for CSS, and file-loader for images.
    Commands:

    bash

    cd task_2
    npm install
    npm run build

Task 3: Dev Server, Modules, and Code Splitting

    Objective: Set up Webpack Dev Server, split code into modules, and optimize bundles.
    Instructions:
        Divide code into header, body, and footer modules, each with its own CSS and JavaScript.
        Configure Webpack to use the Dev Server on port 8564 and add plugins for auto-generating HTML and cleaning the public folder.
        Add source maps for easier debugging.
    Commands:

    bash

    cd task_3
    npm install
    npm run start-dev    # Runs Webpack Dev Server on http://localhost:8564
    npm run build        # Generates optimized bundles for production

Resources

    Webpack Documentation
    Webpack Beginner Guide
    npm package.json Documentation

Author

This project is part of the ALX Software Engineering program.
