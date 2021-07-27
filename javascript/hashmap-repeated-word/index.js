const HashMap = require('./hash-map');

function repeatedWord(string) {
	const hashmap = new HashMap(1024);

	string = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');

	const words = string.split(' ');
	for (let word of words) {
		word = word.toLowerCase();

		if (hashmap.contains(word)) {
			return (word);
		}

		hashmap.add(word);
	}

	return ('no repeated words');
}

module.exports = repeatedWord;
