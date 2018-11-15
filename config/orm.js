const connection = require("/connection.js");

// Helper function for updateOne()
function objToSql(ob) {
    let arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Double Cheese Burger => 'Double Cheese Burger')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Double Cheese Burger'} => ["name='Double Cheese Burger'"]
            // e.g. {served: true} => ["served=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// ORM
const orm = {
    selectAll(table, cb) {
        let querySting = `SELECT * FROM ?`;
        console.log(querySting);
        connection.query(
            querySting,
            [table],
            (err, result) => {
                if (err) throw err;
                cb(result);
            }
        );
    },
    insertOne(table, col1, col2, val1, val2, cb) {
        let querySting = `INSERT INTO ? ( ? , ? ) VALUES ?, ?`;
        console.log(querySting);
        connection.query(
            querySting,
            [table, col1, col2, val1, val2],
            (err, result) => {
                if (err) throw err;
                cb(result);
            }
        );
    },
    updateOne(table, objColVals, condition, cb) {
        let querySting = `UPDATE ? SET ?? WHERE ??`;
        console.log(querySting);
        connection.query(
            querySting,
            [table, objToSql(objColVals), condition],
            (err, result) => {
                if (err) throw err;
                cb(result);
            }
        );
    }
}


module.exports = orm;