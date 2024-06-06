const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with the correct data when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to signal that the async test is complete
      })
      .catch(error => {
        done(error); // If the promise rejects, pass the error to done
      });
  });

  // Add more test cases as needed
});
