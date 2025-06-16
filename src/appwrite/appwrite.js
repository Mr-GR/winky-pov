import { Client, Databases, Storage, ID } from 'appwrite';

const client = new Client()
  .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
  .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);

export const databases = new Databases(client);
export const storage = new Storage(client);
export const IDHelper = ID;
