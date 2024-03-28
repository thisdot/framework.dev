import {
	type CategoryName,
	type FieldFilter,
} from '../../models/all-categories'

export type FilterSet = {
	category: CategoryName[]
	tag: string[]
	field: FieldFilter[]
}

export type QueryParams = {
	filters: FilterSet
	textSearch: string
}
