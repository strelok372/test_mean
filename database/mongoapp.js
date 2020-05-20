const mongo = require('mongodb').MongoClient;

function f(name, login, password) {
    const client = new mongo('mongodb://localhost:27017/', { useUnifiedTopology: true });
    client.connect((error, result) => {
        if (error) return console.log(error);
        let users = client.db('mean_example').collection('users');
        let user = {login: login, password: password, username: name};
        users.insertOne(user, (error1, result1) => {
            if (error1) console.log(error1);
            if (result1) client.close(error1 => console.log(error1));
        });
    });
}

f('vladimir', 'healme', '1234');