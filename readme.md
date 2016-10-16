# OneHourNoteApp
Just a quick proof of the concept that I'm familiar with react and the node backend

![A screenshot of the app](appScreen.png?raw=true "Does this look good to you? Asking for a friend")

## How do I set it up?
You _need_ to have an instance of mongod running on your system,
or otherwise use docker
After that, make sure you `npm install`

Then you can run `npm run build` followed by `npm start`

## What can I do here?
You can:

### `npm run dev`
Starts a watching webpack and nodemon service at the same time

### `npm run build`
Builds all the client-js into ./bin

### `npm run start`
Turns on the server with nodemon!

### `npm run test`
Runs all my unit tests, hopefully they'll still pass

### `npm run clearSession`
Empties all json files from ./sessions, and confuses the app.
It will clear all active sessions

## What about docker?
Run

`docker-compose build`

followed by

`docker-compose up`
