export const environment = {
  production: false,
  appwrite: {
    endpoint: (window as any)['APPWRITE_ENDPOINT'] || 'http://localhost:3000',
    projectId: (window as any)['APPWRITE_PROJECT_ID'] || '',
    databaseId: (window as any)['APPWRITE_DATABASE_ID'] || '',
    collectionId: (window as any)['APPWRITE_COLLECTION_ID'] || '',
    buckedId: (window as any)['APPWRITE_BUCKET_ID'] || '',
  },
};
