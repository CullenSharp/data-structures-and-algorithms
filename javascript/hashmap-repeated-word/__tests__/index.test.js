const {describe, test, expect} = require('@jest/globals');
const repeatedWord = require('../index');

describe('testing repeated words function', () => {
	test('Should find repeated word in single sentence', () => {
		const inputString = 'Once upon a time, there was a brave princess who...';
		const expectedString = 'a';
		expect(repeatedWord(inputString)).toEqual(expectedString);
	});

	test('Should find repeated word in paragraph', () => {
		const inputString = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
		const expectedString = 'it';
		expect(repeatedWord(inputString)).toEqual(expectedString);
	});

	test('Should return "no repeated word" when they\'re aren\'t any', () => {
		const inputString = 'It';
		const expectedString = 'no repeated words';
		expect(repeatedWord(inputString)).toEqual(expectedString);
	});
});
