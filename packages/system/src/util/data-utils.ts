export const hasFieldEqualToValue = <
	// This should be "unknown" instead of "any" but that doesn't play well with
	// unions and interfaces for some reason, despite the fact that any object
	// in JS should fulfill Record<string | number | symbol, unknown>
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	T extends Record<string | number | symbol, any>
>(
	subject: T,
	fieldName: string | number | symbol,
	fieldValue: unknown
): boolean => subject[fieldName] === fieldValue
