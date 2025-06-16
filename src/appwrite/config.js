import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
  projectId: process.env.REACT_APP_APPWRITE_PROJECT_ID,
  url: process.env.REACT_APP_APPWRITE_URL,
  databaseId: process.env.REACT_APP_APPWRITE_DATABASE_ID,
  collectionId: process.env.REACT_APP_APPWRITE_COLLECTION_ID,
  storageId: process.env.REACT_APP_APPWRITE_STORAGE_ID,
  secretPassword: process.env.REACT_APP_SECRET_PASSWORD,
};

const client = new Client();

if (appwriteConfig.projectId && appwriteConfig.url) {
  client.setProject(appwriteConfig.projectId);
  client.setEndpoint(appwriteConfig.url);
} else {
  console.error('Appwrite config error: Missing project ID or endpoint.');
}

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
