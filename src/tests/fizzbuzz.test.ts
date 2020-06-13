import { fizzbuzz } from '../core/fizzbuzz';

test('should get one when recieves one', () => {
	const result = fizzbuzz(1);
	const expected = 1;

	expect(result).toBe(expected);
});
