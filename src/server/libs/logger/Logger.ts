import winston from 'winston';

const options = {
	file: {
		handleExceptions: true,
		maxsize: 5242880, // 5MB
		maxFiles: 5,
		colorize: false,
	},
	console: {
		level: 'debug',
		handleExceptions: true,
		colorize: true,
		prettyPrint: true,
	},
};

const Logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.printf((msg) => {
			return `${msg.timestamp} - ${msg.level}: ${msg.message}`;
		})
	),
	transports: [
		new winston.transports.File({
			...options.file,
			level: 'error',
			filename: `./logs/error.log`,
		}),
		new winston.transports.File({
			...options.file,
			filename: `./logs/combined.log`,
		}),
		new winston.transports.Console(options.console),
	],
	exitOnError: false,
});

export default Logger;
