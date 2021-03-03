import http from 'http';
import Logger from './libs/logger/Logger';
import app from './app';

const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
	Logger.info(`Server running on port ${port}`);
});
