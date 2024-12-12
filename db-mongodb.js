const { MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);
const dbName = 'node-kurs';

async function main() {
    await client.connect();
    console.log('połączenie udane!');

    const db = client.db(dbName);
    
    // companies
    // await db
    // .collection('companies')
    // .insertOne({ slug: 'tworcastron', name: 'Tworca Stron.pl' });

    // const res = await db
    //     .collection('companies')
    //     .find({ slug: 'tworcastron' }).toArray();

    // console.log(res);
    const collection = db.collection('companies');

    await collection.deleteOne({ slug: 'tworcastron' });
    
}




main()
    .catch(ex => console.log("Coś poszło nie tak"))
    .finally(() => client.close());
