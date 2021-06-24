const create = ({ username, password, email, name }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'insert into usuarios (email, username, password) values (?, ?, ?)',
            [email, username, password],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        )
    });
}


const getByEmail = (pEmail) => {
    return new Promise((resolve, reject) => {
        db.query(
            'select * from usuarios where email = ?',
            [pEmail],
            (err, rows) => {
                console.log(rows);
                if (err) reject(err);
                if (rows.length !== 1) resolve(null);
                resolve(rows[0]);
            }
        )
    });
}

const getByUsername = (pUsername) => {
    console.log(pUsername);
    return new Promise((resolve, reject) => {
        db.query(
            'select * from usuarios where username = ?',
            [pUsername],
            (err, rows) => {
                if (err) reject(err);
                if (rows.length !== 1) resolve(null);
                resolve(rows[0]);
            }
        )
    });
}

const getById = (pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query(
            'select * from usuarios where id = ?',
            [pUsuarioId],
            (err, rows) => {
                if (err) reject(err);
                if (rows.length !== 1) resolve(null);
                resolve(rows[0]);
            })
    });
}

module.exports = { create, getByEmail, getById, getByUsername };