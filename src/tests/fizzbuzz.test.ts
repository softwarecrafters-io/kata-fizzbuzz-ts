import { fizzbuzz } from '../core/fizzbuzz';

test('fizzbuzz should', () => {
	const testCases = [
		{ value: 1, expect: 1 },
		{ value: 2, expect: 2 },
		{ value: 3, expect: 'fizz' },
		{ value: 4, expect: 4 },
		{ value: 5, expect: 'buzz' },
		{ value: 6, expect: 'fizz' },
		{ value: 10, expect: 'buzz' },
		{ value: 15, expect: 'fizzbuzz' },
		{ value: 30, expect: 'fizzbuzz' },
	];

	testCases.forEach((testCase) => expect(fizzbuzz(testCase.value)).toBe(testCase.expect));
});
