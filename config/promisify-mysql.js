const { getConnection } = require("./connection");

async function query(...inputs) {
    // ensure every time we query we have a connection
    const connection = await getConnection();
    return new Promise((resolve, reject) => {
    const query = connection.query(...inputs, 
        function(err, results) {
          console.log(query.sql);
          if (err) { 
            console.error(err);
            return reject(err);
          }
          resolve(results);
        }
      );
    })
}

async function end() {
    // ensure before we end a connection, it has been established
    const connection = await getConnection();
    return connection.end();
}

module.exports = {
    query,
    end
}