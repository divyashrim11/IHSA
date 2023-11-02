const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const announcementSchema = new mongoose.Schema({
  text: String,
});

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = mongoose.model('Announcement', announcementSchema);

