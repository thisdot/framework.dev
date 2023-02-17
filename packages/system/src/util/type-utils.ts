export type UnionToIntersection<U> = (
	U extends any ? (k: U) => void : never
) extends (k: infer I) => void
	? I
	: never

export type ArrayElement<T> = T extends Record<number, infer E> ? E : never
export type RecordElement<T> = T extends Record<string, infer E> ? E : never

import { ComplexStyleRule } from '@vanilla-extract/css'

export type RecipeStyleRule = ComplexStyleRule | string
export type VariantDefinitions = Record<string, RecipeStyleRule>
export type BooleanMap<T> = T extends 'true' | 'false' ? boolean : T
export type VariantGroups = Record<string, VariantDefinitions>
export type VariantSelection<Variants extends VariantGroups> = {
	[VariantGroup in keyof Variants]?: BooleanMap<keyof Variants[VariantGroup]>
}
