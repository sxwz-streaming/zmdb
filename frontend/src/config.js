const port = process.env.BACKEND_PORT || 10888;
const endPoint = process.env.API_ENDPOINT || 'localhost';

export default {
  url: {
      api: `//${endPoint}:${port}`,
      author: '//space.bilibili.com',
      clip: '//www.bilibili.com/video'
  }
};