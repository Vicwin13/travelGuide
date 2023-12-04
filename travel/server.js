import express from 'express';
import fs from 'fs/promises';


const app = express();
const port = 3000;

async function readJSONFile('./src/db/list.json'){

    try{
        const jsonData = await fs.readFile('./src/db/list.json', 'utf-8');
        const resp = JSON.parse(jsonData);
        console.log(resp);
    } catch(error){
        console.error('Error reading Json file:', error);
        resp.status(500).send('Internal Server Error');
    }
};


