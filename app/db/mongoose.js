const { mongoose } = require('mongoose');
const url = 'mongodb://localhost:27017/node-kurs';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});