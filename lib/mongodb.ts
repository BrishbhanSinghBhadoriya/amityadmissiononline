import { MongoClient, Db, Collection, Document as MongoDocument } from "mongodb";

const uri = process.env.MONGO_URI as string;

if (!uri) {
  throw new Error("Missing MONGO_URI environment variable");
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function getDb(): Promise<Db> {
  if (cachedDb && cachedClient) {
    return cachedDb;
  }

  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db();

  cachedClient = client;
  cachedDb = db;

  return db;
}

export async function getCollection<T extends MongoDocument = MongoDocument>(
  name: string
): Promise<Collection<T>> {
  const db = await getDb();
  return db.collection<T>(name);
}