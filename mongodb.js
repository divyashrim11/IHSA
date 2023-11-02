const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user123:user123@cluster0.mongodb.net/announcementsDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = client;
module.exports = {
    addAnnouncement,
    // Add other functions as needed
  };