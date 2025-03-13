export const environment = {
  production: true,
  appwrite: {
    endpoint: (window as any)['APPWRITE_ENDPOINT'] || '',
    projectId: (window as any)['APPWRITE_PROJECT_ID'] || '',
    databaseId: (window as any)['APPWRITE_DATABASE_ID'] || '',
    collectionId: (window as any)['APPWRITE_COLLECTION_ID'] || '',
    buckedId: (window as any)['APPWRITE_BUCKET_ID'] || '',
  },
};
