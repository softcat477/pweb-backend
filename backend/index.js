const http = require('http');
const config = require('./utils/config');
const app = require('./app');

const server = http.createServer(app);
(async () => {
  const PORT = await config.PORT
  server.listen(PORT, () => {
    console.info(`Server running on port ${PORT}`)
  })
})();
