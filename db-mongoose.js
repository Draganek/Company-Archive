const { mongoose } = require('mongoose');
const { Schema } = require('schema')

mongoose.connect('mongodb://localhost:27017/node-kurs');

const checkForbidenString = (value, forbidenString) => {
    if (value === forbidenString) {
        throw new Error (`Nazwa "${forbidenString}" jest zakazana`);
    }
}


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

async function main() {
    const res = await Company.find({})
    console.log(res);

    const company = new Company({
        name: 'Probox',
        slug: 'probox',
    });
    try {
        await company.save();
    } catch (e) {
        console.log(e.message);
        
    }



}

main()
