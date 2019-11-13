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

let saveRoom = function(userid,roomid,cb) {
    session.writeTransaction((transaction) => {
        transaction.run( 
            `MATCH(u:User) WHERE u.id = ${userid} MATCH (r:Room) WHERE r.id = ${roomid} MERGE (u)-[s:HAS_SAVED]->(r) return s`
        )
        .then((result) => {
            console.log('saved room');
            cb(null,result);
        })
        .catch((err)=> {
            console.log('error saving room');
            cb(err);
        });
    });
}

let getSavedRooms = function(userid,cb) {
    session.writeTransaction((transaction) => {
        transaction.run(
            `MATCH(u:User) where u.id = ${userid} MATCH (u)-[r:HAS_SAVED]-(c) return c ORDER BY c.id LIMIT 15`
        )
        .then((result) => {
            // console.log(result);
            cb(null,result);
        })
        .catch((err) => {
            console.log('error getting saved list');
            cb(err);
        });
    });
}

module.exports.getRoom = getRoom;
module.exports.saveRoom = saveRoom;
module.exports.getSavedRooms = getSavedRooms;
