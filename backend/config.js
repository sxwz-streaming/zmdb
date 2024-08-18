const port = process.env.BACKEND_PORT || 10888;
const tmpDir = process.env.BACKEND_TMP_DIR || './tmp';
const dbPath = process.env.BACKEND_DB_PATH || './data.db';
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