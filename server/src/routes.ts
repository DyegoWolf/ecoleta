import express from 'express';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// Métodos a utilizar: index, show, create, update e delete

routes.get('/items', itemsController.index);

// O método create da classe pointsController realiza a criação do ponto
routes.post('/points', pointsController.create);

// Buscar um ponto por ID
routes.get('/points/:id', pointsController.show);

routes.get('/points', pointsController.index);

export default routes;