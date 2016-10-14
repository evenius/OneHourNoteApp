FROM node:wheezy

RUN mkdir /OneHourNoteApp
WORKDIR /OneHourNoteApp

COPY package.json /OneHourNoteApp

RUN npm install
COPY . /OneHourNoteApp

EXPOSE 2233

CMD ["npm", "build"]
CMD ["npm", "start"]
