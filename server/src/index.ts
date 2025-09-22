import app from './app';
import { config } from '@/config';
import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

const startServer = async (): Promise<void> => {
  try {
    const server = app.listen(config.port, () => {
      logger.info(`🚀 Server running on port ${config.port}`);
      logger.info(`📱 Frontend URL: ${config.frontendUrl}`);
      logger.info(`🌍 Environment: ${config.nodeEnv}`);
    });

    // Graceful shutdown
    const gracefulShutdown = (signal: string): void => {
      logger.info(`${signal} received, shutting down gracefully...`);
      server.close(() => {
        logger.info('✅ Server closed successfully');
        process.exit(0);
      });

      // Force close after 10 seconds
      setTimeout(() => {
        logger.error('❌ Could not close connections in time, forcefully shutting down');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));
  } catch (error) {
    logger.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();