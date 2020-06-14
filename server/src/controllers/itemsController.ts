import {Request, Response} from 'express';
import knex from '../database/connection';

class itemsController{
    async index(request: Request, response: Response){
    
        // Sempre que utilizar uma query que vai retornar items
        // de um bd, utilizar também o await
        const items = await knex('items').select('*');
    
        // Transformação das informações retornadas para melhor uso
        // no front-end = serialização
        const serializedItems = items.map(item => {
            return{
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`
            };
        });
    
        return response.json(serializedItems);
    }
}

export default itemsController;