import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const baseLoggerConfig = {
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.json(),
  ),
};

const prodLogger = winston.createLogger({
  ...baseLoggerConfig,
  transports: [
    new DailyRotateFile({
      filename: "logs/%DATE%-error.log",
      datePattern: "YYYY-MM-DD",
      level: "error",
      maxSize: "20m",
      maxFiles: "14d",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),
    new DailyRotateFile({
      filename: "logs/%DATE%-info.log",
      datePattern: "YYYY-MM-DD",
      level: "info",
      maxSize: "20m",
      maxFiles: "14d",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),
  ],
});

const devLogger = winston.createLogger({
  ...baseLoggerConfig,
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

const logger = process.env.NODE_ENV === "production" ? prodLogger : devLogger;

export default logger;
