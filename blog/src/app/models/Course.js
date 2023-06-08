const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: {type: String},
    description: {type: String, maxLength: 1500},
    image: {type: String, maxLength: 255},
    videoId: {type: String, maxLength: 255},
    slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);
