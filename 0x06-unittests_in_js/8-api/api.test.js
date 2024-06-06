const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('./api');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Index page', () => {
  it('should return status code 200', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct result', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});

// describe('Server', () => {
//   let consoleSpy;
//   let testServer;

//   beforeEach(() => {
//     consoleSpy = sinon.spy(console, 'log');
//   });

//   afterEach(() => {
//     consoleSpy.restore();
//     if (testServer) {
//       testServer.close();
//     }
//   });
//   it('should log the correct message when starting', (done) => {
//     const testPort = 7875;
//     testServer = app.listen(testPort, () => {
//       try {
//         expect(consoleSpy.calledOnceWithExactly(`API available on localhost port ${testPort}`)).to.be.true;
//         done();
//       } catch (error) {
//         done(error);
//       }
//     });
//   });
// });

// after((done) => {
//   app.server.close(done);
// });
