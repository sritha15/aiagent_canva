import * as express from "express";
import * as cors from "cors";
import { createBaseServer } from "../utils/backend/base_backend/create";
import { createImageRouter } from "./routers/image";
import { createDataToInfographicRouter } from "./routers/data_to_infographic";

async function main() {
  const router = express.Router();

  /**
   * TODO: Configure your CORS Policy
   *
   * Cross-Origin Resource Sharing
   * ([CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS)) is an
   * [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP)-header based
   * mechanism that allows a server to indicate any
   * [origins](https://developer.mozilla.org/en-US/docs/Glossary/Origin)
   * (domain, scheme, or port) other than its own from which a browser should
   * permit loading resources.
   *
   * A basic CORS configuration would include the origin of your app in the
   * following example:
   * const corsOptions = {
   *   origin: 'https://app-abcdefg.canva-apps.com',
   *   optionsSuccessStatus: 200
   * }
   *
   * The origin of your app is https://app-${APP_ID}.canva-apps.com, and note
   * that the APP_ID should to be converted to lowercase.
   *
   * https://www.npmjs.com/package/cors#configuring-cors
   *
   * You may need to include multiple permissible origins, or dynamic origins
   * based on the environment in which the server is running. Further
   * information can be found
   * [here](https://www.npmjs.com/package/cors#configuring-cors-w-dynamic-origin).
   */
  router.use(cors());

  /**
   * Add routes for image generation.
   */
  const imageRouter = createImageRouter();
  router.use(imageRouter);
  
  // Register Enhanced Data-to-Infographic Agent router with Live Sync, Natural Language, and Formula Builder
  router.use("/api/data-to-infographic", createDataToInfographicRouter());

  const server = createBaseServer(router);
  server.start(process.env.CANVA_BACKEND_PORT);
}

main();
