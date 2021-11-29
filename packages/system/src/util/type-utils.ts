export type UnionToIntersection<U> = (
	U extends any ? (k: U) => void : never
) extends (k: infer I) => void
	? I
	: never

export type ArrayElement<T> = T extends Record<number, infer E> ? E : never
export type RecordElement<T> = T extends Record<string, infer E> ? E : never
