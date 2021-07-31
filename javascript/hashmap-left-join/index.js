function leftJoin(left, right) {
	const result = [[], []];

	for (const item of left.buckets) {
		if (item) {
			result[0].push(Object.values(item.head.value)[0]);

			const key = Object.keys(item.head.value)[0];
			if (right.contains(key)) {
				result[1].push(Object.values(item.head.value)[0]);
			}
		}
	}

	if (!result[1].length) {
		result[1] = 'NULL';
		return result;
	}

	return result;
}

module.exports = leftJoin;
