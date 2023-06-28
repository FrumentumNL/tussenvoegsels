/**
 * Searches the specified last name for a preposition.
 * Optionally applies search options, if provided.
 *
 * @param lastName The last name to extract a preposition from.
 * @param options (Optional) The options to apply to the search.
 * @returns A FindPrepositionResult
 */
export function findPreposition(lastName: String, options?: FindPrepositionOptions): FindPrepositionResult;

export interface FindPrepositionOptions {
    /**
     * The array of prepositions to use. Uses the default bundled list if not specified.
     * When supplying your own list, make sure your prepositions end with a space when there
     * is a space between the preposition and the last name, otherwise the trailing space
     * would get included in the last name.
     *
     * Defaults to {@link DutchPrepositions}.
     */
    prepositions?: String[];

    /**
     * An array of prepositions to exclude from the list. Useful if you want to exclude a specific preposition
     * from the default list. Keep in mind you'll need to end most prepositions with a trailing space.
     *
     * Defaults to an empty array.
     */
    exclude?: String[];

    /**
     * Ignores a preposition if no other characters remain after matching it.
     *
     * Defaults to true.
     */
    ignoreIfNoSuffix?: Boolean;

    /**
     * Strips the trailing space from the preposition.
     *
     * Defaults to false.
     */
    stripTrailingSpace?: Boolean;
}

export interface FindPrepositionResult {
    /**
     * The found preposition, or null if nothing was found.
     */
    preposition: String | null;

    /**
     * The last name without the preposition, or null if the name would be an empty string.
     */
    lastName: String | null;
}

/**
 * A list of the most common Dutch prepositions, based on the Wikipedia article: https://nl.wikipedia.org/wiki/Tussenvoegsel
 */
export const DutchPrepositions: String[];
