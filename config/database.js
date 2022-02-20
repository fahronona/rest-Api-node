import { Sequelize } from "sequelize";
import mysql from "mysql2";

const db = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "learnode",
    connectionLimit: 10,
    queueLimit: 20,
    waitForConnections: true,
})



export default db;