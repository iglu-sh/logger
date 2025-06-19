import {Logger} from "./index.ts";
Logger.setLogLevel('DEBUG')
Logger.setJsonLogging(false)
Logger.debug("This is a debug message");
Logger.info("This is an info message");
Logger.warn("This is a warning message");
Logger.error("This is an error message");

Logger.logRequest('/test-endpoint', 'GET');
Logger.logResponse('/test-endpoint', 'GET', 200);
Logger.logRequest('/test-endpoint', 'POST');
Logger.logResponse('/test-endpoint', 'POST', 201);
Logger.logRequest('/test-endpoint', 'PUT');
Logger.logResponse('/test-endpoint', 'PUT', 204);
Logger.logRequest('/test-endpoint', 'DELETE');
Logger.logResponse('/test-endpoint', 'DELETE', 404);
