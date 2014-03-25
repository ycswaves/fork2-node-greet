var expect = require('chai').expect
	, greet  = require('../index');
describe('greet', function(){
  it('should greet a person by name', function(){
    expect(greet('yi')).to.eql('hello, yi');
  });
  it('should greet a person flirtatiously if drunk', function(){
  	expect(greet('yi', true)).to.eql('hello yi, you look sexy today');
  });
});