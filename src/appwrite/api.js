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

export function getMomentImageUrl(imageId) {
  if (!imageId) return '';
  return `https://fra.cloud.appwrite.io/v1/storage/buckets/${appwriteConfig.storageId}/files/${imageId}/view?project=${appwriteConfig.projectId}`;
}

export async function saveMomentToDatabase({ title, description, imageId, paws, date }) {
  try {
    const doc = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.collectionId,
      ID.unique(),
      {
        title,
        description,
        imageId,
        paws,
        date,
      },
      [
        Permission.read(Role.any()),
        Permission.write(Role.any()), 
        Permission.delete(Role.any()),
      ]
    );
    return doc;
  } catch (error) {
    console.error('Failed to save moment:', error);
    return null;
  }
}

export async function deleteMoment(documentId) {
  try {
    await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.collectionId,
      documentId
    );
    return true;
  } catch (error) {
    console.error('Failed to delete moment:', error);
    return false;
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
