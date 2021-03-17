FROM node
RUN mkdir -p /home/app
COPY . /home/app
WORKDIR /home/app
EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["start"]