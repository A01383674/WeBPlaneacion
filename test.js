// node-test.js
const fs = require('fs');
const http = require('http');

try {
    // Test basic Node.js functionality
    console.log("Node.js is working!");

    // Test the fs module (file system)
    fs.writeFileSync('test.txt', 'File system is working!');
    const fileContent = fs.readFileSync('test.txt', 'utf8');
    console.log(fileContent);

    // Test the http module (create a simple server)
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('HTTP server is working!\n');
    });

    server.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });

    // Test ES6+ features (optional)
    const arrowFunction = () => "Arrow functions are working!";
    console.log(arrowFunction());

    // Test async/await (optional)
    const asyncTest = async () => {
        return "Async/Await is working!";
    };
    asyncTest().then(console.log);

    // Test Promises (optional)
    const promiseTest = new Promise((resolve) => {
        resolve("Promises are working!");
    });
    promiseTest.then(console.log);

    // If everything runs without errors, log success
    console.log("Your environment can run Node.js projects!");
} catch (error) {
    // If an error occurs, log the issue
    console.error("Node.js is not working properly:", error);
}