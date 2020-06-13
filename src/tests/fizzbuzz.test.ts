import { fizzbuzz } from '../core/fizzbuzz';

test('should sum two numbers', () => {
	const result = fizzbuzz(0);
	const expected = 0;

	expect(result).toBe(expected);
});
