const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});



const app = express();
app.use(express.json())
app.use(express.static('public'))
app.use(cors({
    origin: '*'
}))

app
    .get('/hello', async(req, res) => {
        try{
            let result = await pool.query('SELECT * FROM fstb')
            res.status(200).json(result.rows)
        }
        catch(err) {
            console.error(err.message)
            res.status(500).send(err.message)
        }
    })

    .get('/hello/:id', async(req, res) => {
        try{
            let {id} = req.params;
            let result = await pool.query('SELECT * FROM fstb WHERE id = $1', [id])
            res.status(200).json(result.rows[0])
        }
        catch(err) {
            console.error(err.message)
            res.status(500).send(err.message)
        }
    })

    .post('/hello', async(req, res) => {
        try{
            let {name} = req.body;
            let result = await pool.query('INSERT INTO fstb (name) VALUES ($1) RETURNING *', [name])
            res.status(201).json(result.rows[0])
        }
        catch(err) {
            console.error(err.message)
            res.status(500).send(err.message)
        }
    })

    .put('/hello/:id', async(req, res) => {
        try{
            let {id} = req.params;
            let {name} = req.body;
            let result = await pool.query('SELECT * FROM fstb WHERE id = $1', [id])
            let updatedObj = name || result.rows[0].name
            let newResult = await pool.query('UPDATE fstb SET name = $1 WHERE id = $2 RETURNING *', [updatedObj, id])
            res.status(201).json(newResult.rows[0])
        }
        catch(err) {
            console.error(err.message)
            res.status(500).send(err.message)
        }
    })

    .delete('/hello/:id', async(req, res) => {
        try {
            let {id} = req.params;
            let result = await pool.query('DELETE FROM fstb WHERE id = $1 RETURNING *', [id])
            res.status(200).json(result.rows[0])
        }
        catch(err) {
            console.error(err.message)
            res.status(500).send(err.message)
        }
    })


app.listen(process.env.PORT, () => {
    console.log(`Listening on: ${process.env.PORT}`)
})