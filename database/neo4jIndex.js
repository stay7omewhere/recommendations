const neo4j = require('neo4j-driver').v1;
const driver = new neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'iopkjh123'));
const session = driver.session();

let getRoom = function (id,size,cb) {
    session.writeTransaction((transaction) => {
        transaction.run(
            `match(r:Room) where r.id = ${id} match (r)-[b:LOCATED_IN]-(c:Location) match (c)-[d]-(f) with f LIMIT ${size} return f` 

        )
        .then((result) => {
            console.log('got room from database');
            cb(null,result);
        })
        .catch((err) => {
            console.log('error getting room from database');
            cb(err);
        });
    });
}

module.exports.getRoom = getRoom;