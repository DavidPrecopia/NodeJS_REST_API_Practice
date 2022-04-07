# NodeJS_REST_API_Practice

Working through Academind's [Building a RESTful with Node.js lessons](https://youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q).

# Scratch Notes
My personal quick and dirty notes from each lesson.

## **Lesson #1 - What is RESTful?**
Traditional Web App
* Client makes a request to a server. 
* That server returns HTML, JS, etc.

RESTful API
* Send data back and forth - not HTML. 
* Needed for mobile apps, headless app, etc. 
* For single-page-app, only need HTML for the first request, then just data for all subsequent requests. Using JS/Angular to re-render the page. 

Official Constrains of a RESTful API
* Stateless
    * Just process requests. Functional logic. 
* Layered System
    * Like how I’m planning my Twitter app. The backend will accepts requests from the mobile app, then pull the tweets from Twitter themselves, then process and deliver them to the mobile app.
* Uniform State
    * Comparable to the `domain` layer I have in my apps. 
    * Data stored in an database, for an example, is given to the client is a uniform way - separate from how it is actually being stored. 


## **Lesson 2: Planning & First Steps**
* Run `npm init` in the newly created dir - so NPM can manage its packages
* Then `git init` for Git, duh.

Installing starting dependencies
* `npm install —save express`
* The `—save` creates an entry in the package.json file
* Express is a networking framework for NodeJS.

package-lock.json
* Describes the dependency tree - thus, should be committed. 

server.js
* This is the config file of the server. 
* It specifies what port will be listened to, the middleware, etc.

app.js
* This declares the middleware.
* Where request will be routed.

Modules and exporting them
* Appears to be similar to libraries, or extension functions in Kotlin.
* When I typed `const express = required(‘express’)` I’m creating a variable for the Express module/library.
* With `modules.exports = app`, I am enabling other files to access the `app.js` module/file.

## **Lesson 3: Adding More Routes to the API**
Node.js notes
* Equality operator (==) VS Strict Equality operator (===)
    * The former attempts to covert and compare each argument.
    * The latter compares as is.

Specifying routes in their own js files
* Each js file is "imported" (not sure what to call it yet) in `app.js` (the middleware) and then tied to the app itself.