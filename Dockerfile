# using node:20 as base image
FROM node:20

# create & set the working directory in the container
WORKDIR /usr/src/app

# copy package.json to the working directory
COPY package*.json ./

# install dependencies
RUN npm install

RUN npm install --only=development

# copy the rest of the code files to the working directory
COPY . .

# exposing port 4010 on the container
EXPOSE 4010

# command to run the application
CMD ["npm", "start"]
