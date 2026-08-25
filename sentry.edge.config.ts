import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f8289e687a19c00ad9a8830453bb1523@o4510546774327296.ingest.de.sentry.io/4511971818078288",
  tracesSampleRate: 1,
  enableLogs: true,
  sendDefaultPii: true,
});
