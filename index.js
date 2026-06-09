"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polyfill_1 = require("@js-temporal/polyfill");
const assessment_model_js_1 = require("./models/assessment.model.js");
const lifecycle_model_js_1 = require("./models/lifecycle.model.js");
const api_model_js_1 = require("./models/api.model.js");
console.log('=== MODULE 2 SESSION 2: UNIONS, GENERICS, & TEMPORAL VERIFIER ===\n');
// 1. Verifying Discriminated Union & Grade Calculations
console.log('--- 1. Discriminated Union Verification ---');
const mathQuiz = {
    kind: 'quiz',
    title: 'TypeScript Structural Basics',
    correctAnswers: 8,
    totalQuestions: 10
};
const labProject = {
    kind: 'lab',
    title: 'Secure Registration Pipeline Gateway',
    functionalityScore: 85,
    codeQualityScore: 90
};
console.log(`  ${mathQuiz.title} Grade: ${(0, assessment_model_js_1.calculateGrade)(mathQuiz)}%`);
console.log(`  ${labProject.title} Grade: ${(0, assessment_model_js_1.calculateGrade)(labProject)}%`);
// 2. Verifying Exhaustive Lifecycle Descriptions
console.log('\n--- 2. Lifecycle Exhaustiveness Checks ---');
console.log(`  Enrollment Status [Approved]: ${(0, lifecycle_model_js_1.describeEnrollment)('Approved')}`);
console.log(`  Course State [Active]:       ${(0, lifecycle_model_js_1.describeCourse)('Active')}`);
// 3. Verifying Generic API and Temporal Timestamps
console.log('\n--- 3. Generics & Temporal API Demonstration ---');
const mockStudent = { id: 'STU-902', name: 'Yonas', age: 23, gpa: 3.6 };
const mockCoursesList = [
    { code: 'CS-101', title: 'Intro to TS', capacity: 30, enrolledCount: 22 },
    { code: 'CS-202', title: 'Advanced C#', capacity: 15, enrolledCount: 15 }
];
// Instantiating response envelopes with explicit typing signatures
const studentApiResponse = {
    data: mockStudent,
    status: 'success',
    timestamp: polyfill_1.Temporal.Now.instant() // Real-time capture conforming to current time spec
};
const coursesApiResponse = {
    data: mockCoursesList,
    status: 'success',
    timestamp: polyfill_1.Temporal.Now.instant()
};
// Execute shared functional utility over distinct structural shapes
console.log('Processing Student API Record:');
(0, api_model_js_1.renderResponse)(studentApiResponse, (student) => {
    console.log(`  Data Output -> Student Registered: ${student.name} (GPA: ${student.gpa})`);
});
console.log('\nProcessing Courses List API Record:');
(0, api_model_js_1.renderResponse)(coursesApiResponse, (courses) => {
    console.log(`  Data Output -> Tracked Systems Count: ${courses.length}`);
    courses.forEach(c => console.log(`    * [${c.code}] ${c.title} (${c.enrolledCount}/${c.capacity} slots filled)`));
});
