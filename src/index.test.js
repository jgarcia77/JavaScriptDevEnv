import {expect} from 'chai';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

describe('Out first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});


describe('index.html', () => {
  it('should have h1 that says Home', (done) => {
    JSDOM.fromFile("./src/index.html", null).then(dom => {
      const h1 = dom.window.document.getElementsByTagName('h1')[0];

      expect(h1.innerHTML).to.equal("Home");

      done();

      dom.window.close();
    });
  })
})
