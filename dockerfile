FROM node:18.20.2
WORKDIR /realtime-chat
COPY . .
CMD [  "sleep", "infinity" ]
EXPOSE 3000