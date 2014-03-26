greet  = require('../lib/index.js')
describe('greet', ()->
	it('should greet a person by name', ()->
		expect(greet('yi')).to.eql('hello, yi')
	)

	it('should greet a person flirtatiously if drunk', ()->
		expect(greet('yi', true)).to.eql('hello yi, you look sexy today')
	)
)