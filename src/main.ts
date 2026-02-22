import { createApp } from "./app.js";
import { startScheduler } from "./scheduler/scheduler.js";
import { logger } from "./utils/logger.js";

async function bootstrap() {
  logger.info("Starting WB Tariffs Service...");

  const app = createApp();
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    logger.info(`Server started on port ${PORT}`);
  });

  startScheduler();
}

bootstrap();