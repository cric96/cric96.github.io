/** Words per minute used to estimate reading time. */
const WPM = 200;

export function readingTime(body: string | undefined): number {
	const prose = (body ?? "")
		.replace(/<[^>]+>/g, " ") // raw HTML wrappers used for pull quotes, callouts…
		.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // keep link text, drop the URL
		.replace(/[#*_`>~-]/g, " ");

	const words = prose.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / WPM));
}

/** "01 Aug 2026" — UTC-pinned so the day never shifts by timezone. */
export function shortDate(date: Date): string {
	return date.toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric",
		timeZone: "UTC",
	});
}

/** "1 August 2026" — used on the post itself. */
export function longDate(date: Date): string {
	return date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	});
}

/** YYYY-MM-DD, for the <time datetime> attribute. */
export function isoDate(date: Date): string {
	return date.toISOString().slice(0, 10);
}
