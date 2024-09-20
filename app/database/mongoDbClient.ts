import {MongoClient, ServerApiVersion} from 'mongodb';
import invariant from 'invariant';
import {Nongoose} from './Nongoose'

invariant(process.env.MONGO_DB_URL, 'MONGODB_URI is not set in the environment variables.');

const uri: string = process.env.MONGO_DB_URL as string;
const client: MongoClient = new MongoClient(uri, {
    serverApi: ServerApiVersion.v1
});

/** startup the mongo database connection **/
async function run() {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ping: 1});
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

/** we possibly don't want to start it from here **/
run()

/** this is where we create the collection level
 *  Models as they in Mongoose land call them. **/
const collection = {
    metrics: new Nongoose('metrics'),
    sessions: new Nongoose('sessions')
}

export {
    client,
    collection
};

