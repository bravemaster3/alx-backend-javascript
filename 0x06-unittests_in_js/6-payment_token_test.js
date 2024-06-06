const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with the correct data when success is true', async function() {
    // Return the promise directly
    const response = await getPaymentTokenFromAPI(true);
    expect(response).to.deep.equal({ data: 'Successful response from the API' });
    // No need for a catch here, as Mocha will fail the test if the promise is rejected
  });
});
