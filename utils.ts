
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
