const express = require('express');

const dotenv = require('dotenv')
dotenv.config()


const { Pool } = require('pg')
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

const app = express();
app.use(express.json())
app.use(express.static('public'))



app
    .get('/fs_table', async (req, res) => {
        try {
            const result = await pool.query('SELECT * FROM fs_table');
            res.status(200).json(result.rows);

        }
        catch(err) {
            console.error(err.message);
            res.status(500).send(err.message)
        }
    })




app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT: ${process.env.PORT}`)
})