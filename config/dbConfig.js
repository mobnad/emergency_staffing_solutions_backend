import mysql from "mysql";

export const db = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'emergency_staffing_solution'
})







