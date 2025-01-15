import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.CYPRESS_RESOLUTION = process.env.CYPRESS_RESOLUTION
      config.env.CYPRESS_HOST = process.env.CYPRESS_HOST
      config.env.CYPRESS_PASSWORD = process.env.CYPRESS_PASSWORD
      config.env.CYPRESS_LANGUAGE = process.env.CYPRESS_LANGUAGE
      return config
    },
    baseUrl: 'https://www.iprima.cz/',
    supportFile: 'e2e/support/e2e.ts',
    specPattern: 'e2e/spec/*.spec.ts',
    fixturesFolder: 'e2e/data/*.json',
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'e2e/report/screenshots',
    video: true,
    videosFolder: 'e2e/report/videos',
    downloadsFolder: 'e2e/report/downloads',
    defaultCommandTimeout: 4000,
    retries: 1
  },
});
