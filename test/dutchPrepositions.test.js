import dutchPrepositions from '../src/dutchPrepositions.js';

test('contains common Dutch prepositions', () => {
    expect(dutchPrepositions.includes('van ')).toBe(true);
    expect(dutchPrepositions.includes('van der ')).toBe(true);
});
