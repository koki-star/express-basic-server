# Basic Express Server

This project is a simple Node.js server built using Express.
It was created for an AD311 assignment to practice basic server setup and routing.

## Features

* Basic routes (`/` and `/about`)
* Conditional routing using `next()`
* Regex route matching
* Dynamic routes with URL parameters
* Query string handling
* 404 error handling

## How to Run

1. Install dependencies:
   npm install

2. Start the server:
   npm start

3. Open your browser and test routes such as:
   [http://localhost:3000](http://localhost:3000)
   [http://localhost:3000/about](http://localhost:3000/about)
   [http://localhost:3000/foo](http://localhost:3000/foo)
   [http://localhost:3000/user](http://localhost:3000/user)
   [http://localhost:3000/username](http://localhost:3000/username)
   [http://localhost:3000/user/yourname](http://localhost:3000/user/yourname)
   [http://localhost:3000/get?x=1&y=2](http://localhost:3000/get?x=1&y=2)

## Routes

* `GET /` – Returns "Hello World"
* `GET /about` – Returns "About page"
* `GET /foo` – Randomly returns different responses using `next()`
* `GET /user` and `GET /username` – Regex route match
* `GET /user/:username` – Dynamic route that greets the user
* `GET /get` – Logs query string parameters to the console
* `404` – Catch-all route for undefined paths