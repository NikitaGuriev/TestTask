const {Schema, model} = require('mongoose');

const SCHEMA = new Schema({
  login: {type: String, required: true, unique: true},
  password: {type: String, requried: true}
});

module.exports = model('User', SCHEMA);