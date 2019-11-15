const { getConnection } = require("./connection");

async function query(...inputs) {
    // ensure every time we query we have a connection
    const connection = await getConnection();
    return (new Promise((resolve, reject) => {
      console.log(inputs)
      connection.query(...inputs, 
        function(err, results) {
          console.log(err);
          if (err) { 
            console.error(err);
            return reject(err);
          }
          resolve(results);
        }
      )
    })).catch(err => console.error(err));
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