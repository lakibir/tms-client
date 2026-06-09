import { Temporal } from "@js-temporal/polyfill";
export interface Student {
 id: string;
 name: string;
 age: number;
 enrollmentDate?: Temporal.Instant;
 gpa?: number; 
}