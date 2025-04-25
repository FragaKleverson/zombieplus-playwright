const { Pool } = require('pg');

const dBConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'zombieplus',
    password: 'pwd123',
    port: 5432,
}

export async function executeSQL(sqlscript) {

    try {
        const pool = new Pool(dBConfig)
        const client = await pool.connect()

        const result = await client.query(sqlscript)
        console.log(result.rows)
    } catch (error) {
        console.log('Error executing SQL script:' + error)
    }


}