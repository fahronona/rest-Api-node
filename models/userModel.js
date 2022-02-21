import { Sequelize } from "sequelize";
import db from "../config/database.js";


const { DataTypes } = Sequelize;


const user = {
    findAllUser() {

        return new Promise((resolve, reject) => {
            db.query(`SELECT user.id,nama, alamat, jenis_kelamin FROM learnode.user INNER JOIN learnode.jenis_kelamin jk ON user.id_jenis_kelamin = jk.id;`, "",
                (err, response) => {
                    if (!err) resolve(response);
                    else reject(err);
                });
        });
    },
    findUser(id) {

        return new Promise((resolve, reject) => {
            db.query(`SELECT user.id,nama, alamat, jenis_kelamin FROM learnode.user INNER JOIN learnode.jenis_kelamin jk ON user.id_jenis_kelamin = jk.id WHERE user.id=${id};`, "",
                (err, response) => {
                    if (!err) resolve(response);
                    else reject(err);
                });
        });
    },

    findUserByname(name) {

        return new Promise((resolve, reject) => {
            db.query(`SELECT id, nama, alamat, id_jenis_kelamin FROM learnode.user WHERE nama LIKE '%${name}%';`, "",
                (err, response) => {
                    if (!err) resolve(response);
                    else reject(err);
                });
        });
    },

    addUser(data) {
        console.log(data);
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO learnode.user SET ?;`, data,
                (err, response) => {
                    if (!err) resolve(response);
                    else reject(err);
                });
        });
    }
};



// const User = db.define('user', {
//         nama: {
//             type: DataTypes.STRING
//         },
//         alamat: {
//             type: DataTypes.STRING
//         },
//         id_jenis_kelamin: {
//             type: DataTypes.INTEGER
//         }

//     }, {
//         freezeTableName: true,
//         createdAt: false,
//         updatedAt: false,

//     }

// );

// const JenisKelamin = db.define('jenis_kelamin', {
//         jenis_kealmin: {
//             type: DataTypes.STRING
//         },

//     }, {
//         freezeTableName: true,
//         createdAt: false,
//         updatedAt: false,

//     }

// );
export default user;