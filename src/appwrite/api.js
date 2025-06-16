import { storage, databases, appwriteConfig } from './config';
import { ID, Permission, Role } from 'appwrite';

export async function uploadMomentImage(file) {
  try {
    const uploaded = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      file,
      [Permission.read(Role.any())], 
      [Permission.write(Role.any())] 
    );
    return uploaded;
  } catch (error) {
    console.error('File upload failed:', error);
    return null;
  }
}


export function getMomentImagePreview(fileId) {
  return storage.getFileView(appwriteConfig.storageId, fileId).href;
}

export async function saveMomentToDatabase({ title, description, imageUrl, paws, date }) {
  try {
    const doc = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.collectionId,
      ID.unique(),
      {
        title,
        description,
        imageUrl,
        paws,
        date,
      }
    );
    return doc;
  } catch (error) {
    console.error('Failed to save moment:', error);
    return null;
  }
}

export async function fetchAllMoments() {
  try {
    const res = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.collectionId
    );
    return res.documents;
  } catch (error) {
    console.error('Error fetching moments:', error);
    return [];
  }
}
