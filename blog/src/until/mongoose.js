module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        return mongooses ? mongooses.map((mongoose) => mongoose.toObject()) : mongooses;
    },

    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
