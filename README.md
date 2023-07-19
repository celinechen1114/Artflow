[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/pqPqsyOQ)
Hello friend! 
This is Starter code for Project 4: Creativity Canvas for CS160 User Interface Design & Development Summer 2023 at UC Berkeley. It was lovingly prepared by Shm Garanganao Almeda for Summer 2022.
*You are not required to use ANY of this example code.* I just thought it might be helpful to have something to work off of.

<img src="https://i.imgur.com/xcnUizl.png" width="300" alt= "Preview of this Starter Code Drawing Application">

<img src="https://i.imgur.com/6L4OUS7.png" width="300" alt= "Shm's Drawing Application Image Preview">
I've also shared Shm's Cool Drawing Application (this starter code + around an hour of time spent adding more buttons, colors, and features!) as a GitHub repository available here: https://github.com/s-almeda/shms-cool-drawing-app

This repository should get you all set up with the scaffolding for a drawing application that runs on a local server using JavaScript(with Node.js and Express), HTML + CSS. 

Here are some instructions for running this starter code. 
We're going to be using a command-line interface.
(I'm writing this from the perspective of a Mac user using Terminal (zsh). If you're a Windows user, you might use Powershell. If you use Visual Studio Code, you might find [this page](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-beginners-tutorial)
 helpful.)
### 1. [Clone this repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your computer.
Once you've got it, [navigate to the directory](https://www.macworld.com/article/221277/command-line-navigating-files-folders-mac-terminal.html)
(ex: ``$ cd starter-code``)
### 2. [Make sure you have Node and npm installed.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 

Check to see if you can run  ``$ node -v`` and ``$ npm -v`` (My versions are v16.15.0 for node and 8.10.0 for npm.)
### 3. Install the Express module using npm. 
ex: ``$ npm install express``
### 4. Run the example app using Node:
ex: ``$ node App.js``

You should see the message ``Server is running on http://localhost:8000``

If you instead see an error message like ``Error: Cannot find module 'express'`` -- see step 3. 
### 5. View your website
Open a web browser (e.g. Google Chrome) to this URL: ``http://localhost:8000/``

You should see a delicious and fabulously designed drawing app! Nice!
### 6. Make it your own!
Here's the file directory of this repository. 

Edit the **HTML files** and the **CSS stylesheet** to make them your own! 

Edit **App.js** if you want to add new pages, change how pages route to one another, if you've renamed your HTML files, etc. 
```
starter-code
│   README.md
│   App.js    		// main JavaScript file
│
└───public 		        // this where all of our content is stored
   │     index.html       // The initial view for our webpage
   │     
   └───js               // A folder for storing our javascript/paperscript files 
   │     my-drawing-app.js    // paperscript code for our drawing application
   │     paper-full.js        // Paper.js (downloaded from the Paper.js website)
   │    
   └───css
   │     styles.css    // our CSS stylesheet!
   │   
   └───images	         //images used by our website can be stored here
   	│   
   	└───...
```

Alternatively: Delete everything and start over if you want to set it up on your own, or in your own way. Here are the pages I referenced, from which you can learn everything you need to set up this code on your own:

https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module"
https://expressjs.com/en/starter/hello-world.html
https://codeforgeek.com/render-html-file-expressjs/
https://stackoverflow.com/questions/32257736/app-use-express-serve-multiple-html
https://icodemag.com/how-to-create-a-super-simple-drawing-tool-with-paper-js/ 
