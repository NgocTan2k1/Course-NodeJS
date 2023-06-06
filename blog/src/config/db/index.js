const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect Database => Success');
    } catch (error) {
        console.log('Connect Database => Fail');
        console.log('Error:', error);
    }
}

module.exports = {connect};
