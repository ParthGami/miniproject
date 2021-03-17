FROM node
RUN mkdir -p /home/app
COPY . /home/app
WORKDIR /home/app
RUN npm install
RUN npm test
EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["start"]