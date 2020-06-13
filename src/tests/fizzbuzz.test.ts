import { fizzbuzz } from '../core/fizzbuzz';

test('fizzbuzz should', () => {
	const testCases = [
		{ value: 0, expect: 0 },
		{ value: 3, expect: 'fizz' },
		{ value: 5, expect: 'buzz' },
		{ value: 15, expect: 'fizzbuzz' },
	];

	testCases.forEach((testCase) => expect(fizzbuzz(testCase.value)).toBe(testCase.expect));
});
