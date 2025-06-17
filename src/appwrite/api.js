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
  try {
    const url = storage.getFileView(appwriteConfig.storageId, fileId).href;
    console.log("Generated file view URL:", url);
    return url;
  } catch (error) {
    console.error('Error generating image preview URL:', error);
    return '';
  }
}

export function getMomentImageUrl(imageId) {
  if (!imageId) return null;
  try {
    return storage.getFilePreview(appwriteConfig.storageId, imageId).href;
  } catch (err) {
    console.error('Failed to generate preview URL:', err);
    return '';
  }
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
