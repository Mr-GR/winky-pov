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

export async function saveMoodToDatabase({ mood, emoji, note, date }) {
  try {
    const data = {
      mood: mood || '',
      emoji: emoji || '😊',
      note: note || '',
      date: date || ''
    };
    
    try {
      // Try to update existing document first
      const doc = await databases.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.moodCollectionId,
        'daily-mood',
        data
      );
      return doc;
    } catch (updateError) {
      // If document doesn't exist, create it
      if (updateError.code === 404) {
        const doc = await databases.createDocument(
          appwriteConfig.databaseId,
          appwriteConfig.moodCollectionId,
          'daily-mood',
          data,
          [
            Permission.read(Role.any()),
            Permission.write(Role.any()), 
            Permission.delete(Role.any()),
          ]
        );
        return doc;
      }
      throw updateError;
    }
  } catch (error) {
    console.error('Failed to save mood:', error);
    return null;
  }
}

export async function fetchCurrentMood() {
  try {
    const res = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.moodCollectionId,
      'daily-mood'
    );
    
    return {
      mood: res.mood || null,
      emoji: res.emoji,
      note: res.note,
      date: res.date
    };
  } catch (error) {
    if (error.code === 404) {
      return null;
    }
    console.error('Error fetching mood:', error);
    return null;
  }
}
