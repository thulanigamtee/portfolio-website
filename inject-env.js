const fs = require("fs");
const path = require("path");

const envConfig = `
window.APPWRITE_ENDPOINT="${process.env.APPWRITE_ENDPOINT}";
window.APPWRITE_PROJECT_ID="${process.env.APPWRITE_PROJECT_ID}";
window.APPWRITE_DATABASE_ID="${process.env.APPWRITE_DATABASE_ID}";
window.APPWRITE_COLLECTION_ID="${process.env.APPWRITE_COLLECTION_ID}";
window.APPWRITE_BUCKET_ID="${process.env.APPWRITE_BUCKET_ID}";
`;

const distPath = path.join(__dirname, "dist", "portfolio-website", "assets");
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}
fs.writeFileSync(path.join(distPath, "env.js"), envConfig);
