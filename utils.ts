
/**
 * Set difference
 */
export function difference<T>(a: Set<T>, b: Set<T>): Set<T> {
	return new Set([...a].filter(x => !b.has(x)));
}
/**
 * Set intersection
 */
export function intersection<T>(a: Set<T>, b: Set<T>): Set<T> {
	return new Set([...a].filter(x => b.has(x)));
}
/**
 * Set union
 */
export function union<T>(...args: Set<T>[]): Set<T> {
	const arrs = args.map(s => Array.from(s));
	/// Node v11: we now use native flat.
	return new Set(arrs.flat());
}

/**
	 * Create an object from a list of key-value pairs.
	 * Useful to create a new object from an obj, when modifying the keys.
	 */
 export function objectFrom<V>(kvs: [string, V][]): Record<string, V> {
	return Object.assign({}, ...kvs.map( ([k, v]) => ({[k]: v}) ));
}
