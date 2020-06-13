import { fizzbuzz } from '../core/fizzbuzz';

test('should get zero when recieves zero', () => {
	const result = fizzbuzz(0);
	const expected = 0;

	expect(result).toBe(expected);
});

test('should get fizz when recieves three', () => {
	const result = fizzbuzz(3);
	const expected = 'fizz';

	expect(result).toBe(expected);
});
