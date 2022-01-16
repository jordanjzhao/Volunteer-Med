/*
  API Routes; Mapping to controllers
*/

import statusController from './controllers/statusController.js';
import authController from './controllers/authController.js';

const routes = [

  {
    method: 'GET',
    url: '/v1',
    handler: statusController.test
  },
  {
    method: 'POST',
    url: '/v1/auth',
    handler: authController.auth
  }

]

export default routes;