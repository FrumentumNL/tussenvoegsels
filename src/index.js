import DutchPrepositions from './dutchPrepositions.js';

export function findPreposition(lastName, {
    prepositions = DutchPrepositions,
    exclude = [],
    ignoreIfNoSuffix = true,
    stripTrailingSpace = false
} = {}) {
    for (let preposition of prepositions) {
        if (exclude.includes(preposition)) continue;
        if (!lastName.toLowerCase().startsWith(preposition)) continue;

        let strippedLastName = lastName.substr(preposition.length);
        if (strippedLastName.length === 0 && ignoreIfNoSuffix) return {
            preposition: null,
            lastName: lastName
        };

        return {
            preposition: stripTrailingSpace ? preposition.trim() : preposition,
            lastName: strippedLastName.length !== 0 ? strippedLastName : null
        };
    }

    return {
        preposition: null,
        lastName: lastName.length !== 0 ? lastName : null
    };
}

export { DutchPrepositions as DutchPrepositions };
