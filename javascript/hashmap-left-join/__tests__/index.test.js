const {describe, test, expect} = require('@jest/globals');
const HashMap = require('../hash-map');
const leftJoin = require('../index');

describe('testing left join function', () => {
	test('Should join left and right on matches', () => {
		const hashMapLeft = new HashMap(1024);
		const hashMapRight = new HashMap(1024);

		hashMapLeft.add('foo', 'bar');
		hashMapRight.add('foo', 'bar');
		const expected = [['bar'], ['bar']];

		console.log(leftJoin(hashMapLeft, hashMapRight));

		expect(leftJoin(hashMapLeft, hashMapRight)).toEqual(expected);
	});

	test('Should left table and null for no matches', () => {
		const hashMapLeft = new HashMap(1024);
		const hashMapRight = new HashMap(1024);

		hashMapLeft.add('foo', 'bar');
		hashMapLeft.add('fizz', 'buzz');

		console.log(leftJoin(hashMapLeft, hashMapRight));

		const expected = [['bar', 'buzz'], 'NULL'];
		expect(leftJoin(hashMapLeft, hashMapRight)).toEqual(expected);
	});
});
