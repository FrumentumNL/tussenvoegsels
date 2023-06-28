# tussenvoegsels

A library to help you with family name prepositions in Dutch last names.

> "A tussenvoegsel (lit. 'between-joiner') in a Dutch name is a family name affix positioned between a person's given name and the main part of their family name. There are similar concepts in many languages, such as Celtic family name prefixes, French particles, and the German von."
> \- [Wikipedia](https://en.wikipedia.org/wiki/Tussenvoegsel)

## Why this library?

A lot of Dutch websites have forms that only take a last name, including the preposition.
In some cases, it may be desirable to filter it out, for example when sorting a list of names,
otherwise you'd have a massive clump of names for every common preposition.
This library allows you to separate it from a last name, to allow you to process it however
you want.

## Usage

```js
import {findPreposition} from 'tussenvoegsels';

findPreposition('van Oranje'); // {preposition: 'van ', lastName: 'Oranje'}

// Note: By default we include the trailing space since some prepositions don't have one.
// If you don't want it, you can use the stripTrailingSpace option to disable it.
findPreposition('van Oranje', {stripTrailingSpace: true}); // {preposition: 'van', lastName: 'Oranje'}
```

### Options

An optional options object can be passed to the second argument.
The list below shows their purpose and default values

```js
{
    prepositions = DutchPrepositions, // The array of prepositions to use. Uses the default bundled list if not specified. 
                                      // When supplying your own list, make sure your prepositions end with a space when there
                                      // is a space between the preposition and the last name, otherwise the trailing space
                                      // would get included in the last name.

    exclude = [], // An array of prepositions to exclude from the list. Useful if you want to exclude a specific preposition
                  // from the default list. Keep in mind you'll need to end most prepositions with a trailing space.

    ignoreIfNoSuffix = true, // Ignores a preposition if no other characters remain after matching it.

    stripTrailingSpace = false // Strips the trailing space from the preposition.
}
```

## Reporting issues and feedback

If you encounter any issues or have feedback, please open an issue [on the GitHub issue tracker](https://github.com/FrumentumNL/tussenvoegsels/issues).
