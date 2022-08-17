import 'reflect-metadata';
import express from 'express';

import { router } from './routes';

import { myDataSource } from './database/index';

const dataSource = myDataSource
                        .initialize()
                        .then(() => {
                            console.log("Data Source has been initialized!")
                        })
                        .catch((err) => {
                            console.error("Error during Data Source initialization:", err)
                        })

const server = express();

server.use(express.json());
server.use(router)

server.listen(5000, () => {
    console.log('Server is running on port 5000.')
});

