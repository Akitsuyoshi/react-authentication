FROM node:6.9.4

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install -g yarn
RUN yarn
RUN yarn global add nodemon

RUN mkdir -p /usr/src/app/server
COPY /server/package.json /usr/src/app/server
Run cd /usr/src/app/server
RUN yarn


# Bundle app source
COPY . /usr/src/app

# Build and optimize react app
RUN npm run build

EXPOSE 3000

# defined in package.json
CMD [ "yarn", "start" ]
