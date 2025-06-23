# iglu-logger
## Description
This is the logger library for all parts of the [Iglu Project](https://github.com/iglu-sh).

It does **NOT** create log files, it only prints beautiful messages on the CLI.

You can find this lib on [npmjs.com](https://www.npmjs.com/package/@iglu-sh/logger).

## How to use?
### Installation
```bash
# bun
bun add @iglu-sh/logger

# npm
npm install @iglu-sh/logger
```
### Settings

```javascript
import Logger from "@iglu-sh/logger";

// Default value
Logger.useEnvVars = true; // Enable configuration via env variables
Logger.logLevel = 1; // Could be set via LOG_LEVEL env (only if Logger.useEnvVars is set to true, must be one of: INFO, DEBUG, ERROR or WARN)
Logger.jsonLogging = true; // Could be set via the LOGGER_JSON env (only if Logger.useEnvVars is set to true, must be one of: true or false)
```
### Functions
```javascript
import Logger from "@iglu-sh/logger";

// Generic logging
Logger.error("This is a error message!");
Logger.debug("This is a debug message!");
Logger.info("This is a info message!");
Logger.warn("This is a warn message!");

// REST-API logging
Logger.logRequest("/api/v1/example", "GET");
Logger.logResponse("/api/v1/example", "GET", 200);
```

## Development
To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.13. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
# logger
