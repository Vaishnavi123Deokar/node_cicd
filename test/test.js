var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
  it('responds with 404 "Page Not Found"', function(done) {
    request(app)
      .get('/nonexistentpage')
      .expect(404)
      .end(function(err, res) {
        if (err) {
          // If there's an error during the request, log it and fail the test
          console.error(err);
          return done(err);
        }

        // Check if the response body contains a specific error message for 404
        if (!res.text.includes('Page Not Found')) {
          return done(new Error('Expected "Page Not Found" in response body'));
        }

        // If everything is fine, invoke the done callback
        done();
      });
  });
});
