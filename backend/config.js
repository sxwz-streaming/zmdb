// 引入 path 模块  
import path from 'node:path';

const port = process.env.BACKEND_PORT || 10888;
const tmpDir = process.env.BACKEND_TMP_DIR || './tmp';
const dbFolderPath = process.env.BACKEND_DB_PATH || './data';
const dbPath = path.join(dbFolderPath, 'db.sqlite');
const bodyLimit = process.env.BACKEND_BODY_LIMIT || '10mb';

export default {
  web: {
    port,
    tmpDir,
    bodyLimit
  },
  db: {
    path: dbPath
  }
}