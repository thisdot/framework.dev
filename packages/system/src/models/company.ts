/**
 * Represents a company available to contract
 * to help with a given framework.
 */
export type Company = {
	/** Company name */
	name: string
	/** What the company can offer, in a short paragraph */
	description: string
	/** A small (40x40) image, usually a logo, to represent the company */
	image: string
	/** Size of the company, in number of employees */
	numberOfEmployees: number
	/** Link to the company's website */
	href: string
}
