/*
    Server configeration and Middleware in this file. Server.js is the application entrypoint.
*/

import fastify from 'fastify';
import routes from './routes.js';
import * as cors from 'fastify-cors';
import fastifyIO from "fastify-socket.io";

const build = (opts={}) => {

  const app = fastify(opts);

  app.register(cors, { 
 
  })

  app.register(fastifyIO);

  // Routes

  routes.forEach((route) => {
    app.route(route);
  });

  app.get("/", (req, reply) => {
    app.io.emit("hello");
  });

  app.ready().then(() => {
    app.io.on("connection", (socket) => {
      console.log('connected'); 
    });
  });
  

  return app;
}

export default build;