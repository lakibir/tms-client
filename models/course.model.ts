import { Temporal } from "@js-temporal/polyfill";
export interface Course {
	code: string;
	title: string;
	capacity: number;
	enrolledCount?: number;
	startDate?: Temporal.PlainDate;
}