const { mongoose } = require('mongoose');
const { Schema } = require('schema');
const {checkForbidenString} = require('../validators');

const companySchema = new Schema({
    slug: {
        type: String,
        required: true,
        minLength: 3,
        validate: value => checkForbidenString(value, 'slug'),
        trim: true,
        lowercase: true
    },
    name: {
        type: String,
        required: true,
        minLength: 3,
    },
    employeesCount: {
        type: number,
        min: 1
    }
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;