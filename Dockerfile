FROM node:16 AS client
WORKDIR /app
COPY client/package*.json /app/
RUN npm install
COPY client .
RUN npm run build

FROM node:16
WORKDIR /app
COPY server/package*.json /app/
RUN npm install
COPY server .
COPY --from=client /app/build client/build
EXPOSE 3000
CMD ["node","server.js"]
