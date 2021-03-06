const mysql = require('mysql');
require('dotenv').config();

const validator_pool = mysql.createPool({
    connectionLimit: 100, //important
    host: process.env.HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.PASSWORD,
    database: process.env.VALIDATOR_DB_NAME,
    debug: false,
});


async function CreateValidatorTable() {
    return new Promise((resolve, reject) => {

        var sql = `CREATE TABLE IF NOT EXISTS validator (public_key VARCHAR(68) NOT NULL PRIMARY KEY, name VARCHAR(50), email VARCHAR(50), icon VARCHAR(50), website VARCHAR(200), links VARCHAR(500), details VARCHAR(1000))`;
        validator_pool.query(sql, function (err, result) {
            if (err) reject(err);
            resolve(result);
        });
    })
}

async function InsertValidator(public_key, name, email, icon, website, links, details) {
    return new Promise((resolve, reject) => {
        var sql = `INSERT INTO validator (public_key, name, email, icon, website, links, details) VALUES ('${public_key}', '${name}', '${email}', '${icon}', '${website}', '${links}', '${details}')`;
        validator_pool.query(sql, function (err, result) {
            console.log("err: ", err);
            console.log("result: ", result);
            if (err) {
                reject(err);
            };
            resolve(result);
        });
    })
}

async function DeleteValidator(public_key) {
    return new Promise((resolve, reject) => {
        var sql = `DELETE FROM validator WHERE public_key = '${public_key}'`;
        validator_pool.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
}

async function GetValidator(public_key) {
    return new Promise((resolve, reject) => {
        var sql = `SELECT * FROM validator WHERE public_key = '${public_key}'`;
        validator_pool.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
}

async function GetValidatorByName(name) {
    return new Promise((resolve, reject) => {
        var sql = `SELECT * FROM validator WHERE name = '${name}'`;
        validator_pool.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
}

async function DropValidator() {
    return new Promise((resolve, reject) => {
        var sql = "DROP TABLE validator";
        validator_pool.query(sql, function (err, result) {
            if (err) resolve(false);
            resolve(result);
        });

    })
}

async function GetValidatorsWithNameAndPublicKey() {
    return new Promise((resolve, reject) => {
        var sql = `SELECT name, public_key FROM validator`;
        validator_pool.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
}

async function UpdateName(public_key, name) {
    return new Promise((resolve, reject) => {
        var sql = `UPDATE validator SET name = '${name}' WHERE public_key = '${public_key}'`;
        validator_pool.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
}

async function UpdateEmail(public_key, email) {
    return new Promise((resolve, reject) => {
        var sql = `UPDATE validator SET email = '${email}' WHERE public_key = '${public_key}'`;
        validator_pool.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
}

async function UpdateLinks(public_key, links) {
    return new Promise((resolve, reject) => {
        var sql = `UPDATE validator SET links = '${links}' WHERE public_key = '${public_key}'`;
        validator_pool.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
}

module.exports = {
    CreateValidatorTable, InsertValidator, GetValidator,
    DropValidator, DeleteValidator, GetValidatorByName,
    GetValidatorsWithNameAndPublicKey, UpdateEmail,
    UpdateName, UpdateLinks
}
