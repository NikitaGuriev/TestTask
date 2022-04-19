const {Schema, model} = require('mongoose');

const SCHEMA = new Schema({
  title: {type: String, required: true},
  text: {type: String, requried: true},
  date: {type: String, requried: true},
  is_girl: {type: Boolean, requried: true},
  is_adult: {type: Boolean, requried: true},
  is_sterility: {type: Boolean, requried: true},
  is_castrated: {type: Boolean, requried: true},
  is_dog: {type: Boolean, requried: true},
  is_del: {type: Boolean, requried: true},
  is_hidden: {type: Boolean, requried: true},
  phone_number: {type: String, requried: true},
  name: {type: String, requried: true},
  first_img: {type: String, requried: true},
});

module.exports = model('Messages', SCHEMA);