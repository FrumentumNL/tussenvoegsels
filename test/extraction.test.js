import { findPreposition } from '../src/index.js';

test('extracts no preposition if there is no preposition', () => {
    expect(findPreposition('Janssens').preposition).toBe(null);
});
test('extracts last name if there is no preposition', () => {
    expect(findPreposition('Janssens').lastName).toBe('Janssens');
});

test('extracts no preposition if there is only the preposition (ignoreIfNoSuffix=true)', () => {
    expect(findPreposition('onder den ').preposition).toBe(null);
});
test('extracts last name if there is only the preposition (ignoreIfNoSuffix=true)', () => {
    expect(findPreposition('onder den ').lastName).toBe('onder den ');
});

test('extracts preposition if there is only the preposition (ignoreIfNoSuffix=false)', () => {
    expect(findPreposition('onder den ', {ignoreIfNoSuffix: false}).preposition).toBe('onder den ');
});
test('extracts no last name if there is only the preposition (ignoreIfNoSuffix=false)', () => {
    expect(findPreposition('onder den ', {ignoreIfNoSuffix: false}).lastName).toBe(null);
});

test('extracts preposition', () => {
    expect(findPreposition('van der Aa').preposition).toBe('van der ');
    expect(findPreposition('van Oranje').preposition).toBe('van ');
    expect(findPreposition('\'t Beekje').preposition).toBe('\'t ');
});
test('extracts last name', () => {
    expect(findPreposition('van der Aa').lastName).toBe('Aa');
    expect(findPreposition('van Oranje').lastName).toBe('Oranje');
    expect(findPreposition('\'t Beekje').lastName).toBe('Beekje');
});
