var mongoose = require ('mongoose');

class MongooseDB {
    constructor(){}
    async connect()
    {
        const url='mongodb://srv1:27017/212376842&212375166';
        await mongoose.connect(url);
        console.log(`moggooseDB connected`)
    }

}

module.exports= new MongooseDB();
