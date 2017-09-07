## React-authentication

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)


# The setup

```
$ git clone https://github.com/Akitsuyoshi/react-authentication

// It builds the image, while adding specific name
$ docker build -t IMAGE_NAME .

// It confirms you that the image exist with the added name
$ docker images

// In background, docker run this image with binding local port 3000 to container's 3000
$ docker run -d -p 3000:3000 IMAGE_NAME

// It shows the container ID
$ docker container ls

// To stop the process with ID
$ docker stop CONTAINER_ID
```

You can see application running when hitting http://localhost:3000/ in the browser.
