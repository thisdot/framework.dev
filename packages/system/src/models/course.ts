/**
 * Represents an online course, e.g.
 * tutorials, video courses, etc.
 */
export type Course<T extends string> = {
	/** The title of the course, for display */
	title: string
	/** The author of the course, for display */
	author: string
	/** A small (40x40) image, usually a logo, to represent the course */
	image: string
	/** A short description of the course, for display */
	description: string
	/** What the target audience of the course is, in terms of experience */
	level: "beginner" | "intermediate" | "advanced"
	/** How the student pays for the course. We currently only make paid/free distinctions */
	paymentType: "free" | "paid"
	/** What format a course takes. So that users can search for courses based on their learning style */
	format: "text" | "interactive" | "video"
	/** Tags that describe the content of the course, for display and filtering */
	tags: T[]
	/** Hyperlink to the course, so students can find it */
	href: string
}
