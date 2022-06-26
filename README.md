React app for managing orders. Hosted at [HTTPS Version](https://hermo.me) and  [HTTP Version](http://orders.hermo.me). Initial purpose was for managing manufacture orders for a cnc router using gcode files generated from svg. 

Frontend using React and backend using Node and Express. File storage on firebase storage.

Frontend redesign made by [xiao-villamor](https://github.com/xiao-villamor)

# Running
First, setup a .env file

then, from root folder, run:

```console
docker build . -t orders/server
docker run -p 3000:3000 -d orders.server
```

