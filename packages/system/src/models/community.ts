/**
 * Represents a blog or community that
 * hosts content related to the framework
 */
export type Community<T extends string> = {
	/** The name of the community or site */
	name: string
	/** A short description of what they do */
	description: string
	/** A small (40x40) image that represents them */
	image: string
	/** Tags for searching and filtering */
	tags: T[]
	/** A link to the community's website */
	href: string
}
