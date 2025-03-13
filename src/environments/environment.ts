export const environment = {
  production: false,
  appwrite: {
    endpoint: process.env['APPWRITE_ENDPOINT'] || '',
    projectId: process.env['APPWRITE_PROJECT_ID'] || '',
    databaseId: process.env['APPWRITE_DATABASE_ID'] || '',
    collectionId: process.env['APPWRITE_COLLECTION_ID'] || '',
    buckedId: process.env['APPWRITE_BUCKET_ID'] || '',
  },
};
