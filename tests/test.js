const { spawn } = require('child_process');
const request = require('request');
const test = require('tape');

// Start the app
const env = Object.assign({}, process.env, {PORT: 5000});
const url='http://127.0.0.1:5000';
const child = spawn('node', ['../dist/index.js'], {env});

test('role types crude', (t) => {
 // t.plan(4);

  // Wait until the server is ready
  child.stdout.on('data', _ => {
    // Make a request to our app
    request(url+"/role/type/insert", (error, response, body) => {
      // stop the server
      child.kill();

      // No error
      t.false(error);
      // Successful response
      t.equal(response.statusCode, 200);
      // Assert content checks
      //t.notEqual(body.indexOf("<title>Node.js Getting Started on Heroku</title>"), -1);
      //t.notEqual(body.indexOf("Getting Started with Node on Heroku"), -1);
        t.end();
    });
  });
});
