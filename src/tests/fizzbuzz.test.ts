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

test('should get buzz when recieves five', () => {
	const result = fizzbuzz(5);
	const expected = 'buzz';

	expect(result).toBe(expected);
});

test('should get fizzbuzz when recieves fifteen', () => {
	const result = fizzbuzz(15);
	const expected = 'fizzbuzz';

	expect(result).toBe(expected);
});
