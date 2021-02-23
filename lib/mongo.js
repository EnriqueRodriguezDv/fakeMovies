const { MongoClient, ObjectID } = require("mongodb");

const config = require("../config/index");

const USER = encodeURIComponent(config[0].dbUser);
const PASSWORD = encodeURIComponent(config[0].dbPassword);
const DB_NAME = config[0].dbName;
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config[0].dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

let connection;

async function connectDB() {
  if (connection) return connection;

  let client;
  try {
    client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection = await (await client.connect()).db(`${DB_NAME}`);
    console.log("connectDB");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  return connection;
}

async function getAll(collection) {
  const db = await connectDB();
  return await db.collection(collection).find().toArray();
}

async function getOne(collection, id) {
  const db = await connectDB();
  return await db.collection(collection).findOne({ _id: ObjectID(id) });
}

async function create(collection, newMovie) {
  const db = await connectDB();
  return await db.collection(collection).insert(newMovie);
}

async function update(collection, movieUpdated, id) {
  const db = await connectDB();
  return await db
    .collection(collection)
    .findOneAndUpdate({ _id: ObjectID(id) }, { $set: movieUpdated });
}

async function deleteOne(collection, id) {
  const db = await connectDB();
  await db.collection(collection).deleteOne({ _id: ObjectID(id) });
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};
