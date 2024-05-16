import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://6f4d14cb75e1a9b00a69a9c9ff2c3779@o4507261357588480.ingest.de.sentry.io/4507261406347344",
  debug: true,
  tracesSampleRate: 1,
  profilesSampleRate: 1, // Set profiling sampling rate.
  integrations: [nodeProfilingIntegration()],
});
