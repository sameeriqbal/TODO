# i. Project Structure
I have structured my solution by self-contained components rather than grouping my files by technical role , this will result in simple app, avoid dependency hell and pave the way to full-blown microservices in the future once the app grows.

# ii. Layers
Separated component code into layers: web, services, and DAL, it will result in keeping the express within boundaries and make app testable.

# iii. Seperated Express app.js and server.js
The API declaration is separated from the network related configuration (port, protocol, etc). This allows testing the API in-process, without performing network calls.

# iv. Error Handling
Used Async-Await or promises for async error handling which allows freeing the main code path from dealing with errors in every function

# v. Document API
For reusability and for collabrative development i documented all of my apis using POSTMAN.

#vi. Security Best Practices
1- Rate limiting is implemented in application so it avoid from being overwhelmed by too many requests at the same time (DOS attack). 
2- App is using secure headers to prevent attackers from using common attacks like cross-site scripting (XSS), clickjacking and other malicious attacks. These is configured using helmet module.
3-Validated incoming JSON schemas of request body and header.
4- Extracted secrets from config files which is in gitignore
