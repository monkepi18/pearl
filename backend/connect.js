import mysql from "mysql"
//mysql = require('mysql2');
export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"jerry@987",
  database:"social"
})