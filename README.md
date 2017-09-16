## React with authentication

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), using auth0.


### The setup

1 Install this repo

`$ git clone https://github.com/Akitsuyoshi/react-authentication`


2 Build this image from Dockerfile

`$ docker build -t IMAGE_NAME .`

3 In background, docker run this image with binding local port 3000 to container's 3000

`$ docker run -d -p 3000:3000 IMAGE_NAME`


And if you visit http://localhost:3000/, you see this todolist run.


When you'd like to stop stop application, this is the commands
```
$ docker container ls

// To stop the process with ID
$ docker stop CONTAINER_ID
```
