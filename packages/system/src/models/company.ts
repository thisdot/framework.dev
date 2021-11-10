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
	numberOfEmployees:
		| "1 to 10"
		| "10 to 50"
		| "50 to 250"
		| "250 to 1,000"
		| "More than 1,000"
	/** Link to the company's website */
	href: string
}
