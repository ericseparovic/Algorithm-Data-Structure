const calcCentury = require('../problems/1-calcCentury');

describe('calcCentury function', () => {
	test('Year 0 should return century 1', () => {
		expect(calcCentury(0)).toBe(1);
	});

	test('Year 2000 should return century 20', () => {
		expect(calcCentury(2000)).toBe(20);
	});

	test('Year 2022 should return century 21', () => {
		expect(calcCentury(2022)).toBe(21);
	});

	test('Year 1905 should return century 20', () => {
		expect(calcCentury(1905)).toBe(20);
	});

	test('Year 1899 should return century 19', () => {
		expect(calcCentury(1899)).toBe(19);
	});
});
