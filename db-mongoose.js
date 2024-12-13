const { mongoose} = require('mongoose');

mongoose.connect('mongodb://localhost:27017/node-kurs');

    
const Company = mongoose.model('Company', {
    slug: {
        type: String
    },
    name: {
        type: String
    }
});

async function main(){
    const res = await Company.find({})
    console.log(res);

    const company = new Company({
        name: 'TS',
        slug: 'ts',
    });
     await company.save();
    

}

main()
