/*
    HeyDoc! Backend API, Written by Dhruv | Application Entrypoint
*/

import app from './app.js';
const fastify = app({ logger: false });

const start = async() => {

  try {
    await fastify.listen(process.env.PORT || 3000, process.env.HOST);
    console.log(`HeyDoc! API listening on ${fastify.server.address().port}`);

  } catch (err) {
    console.log(err);
  }
}

start();