import { Temporal } from '@js-temporal/polyfill';
import { Student } from './models/student.model.js';
import { Course } from './models/course.model.js';
import { AssessmentItem, calculateGrade } from './models/assessment.model.js';
import { describeEnrollment, describeCourse } from './models/lifecycle.model.js';
import { ApiResponse, renderResponse } from './models/api.model.js';

console.log('=== MODULE 2 SESSION 2: UNIONS, GENERICS, & TEMPORAL VERIFIER ===\n');
console.log('--- 1. Discriminated Union Verification ---');
const mathQuiz: AssessmentItem = {
  kind: 'quiz',
  title: 'TypeScript Structural Basics',
  correctAnswers: 8,
  totalQuestions: 10
};

const labProject: AssessmentItem = {
  kind: 'lab',
  title: 'Secure Registration Pipeline Gateway',
  functionalityScore: 85,
  codeQualityScore: 90
};

console.log(`  ${mathQuiz.title} Grade: ${calculateGrade(mathQuiz)}%`);
console.log(`  ${labProject.title} Grade: ${calculateGrade(labProject)}%`);
console.log('\n--- 2. Lifecycle Exhaustiveness Checks ---');
console.log(`  Enrollment Status [Approved]: ${describeEnrollment('Approved')}`);
console.log(`  Course State [Active]:       ${describeCourse('Active')}`);
console.log('\n--- 3. Generics & Temporal API Demonstration ---');

const mockStudent: Student = { id: 'STU-902', name: 'Yonas', age: 23, gpa: 3.6 };
const mockCoursesList: Course[] = [
  { code: 'CS-101', title: 'Intro to TS', capacity: 30, enrolledCount: 22 },
  { code: 'CS-202', title: 'Advanced C#', capacity: 15, enrolledCount: 15 }
];

const studentApiResponse: ApiResponse<Student> = {
  data: mockStudent,
  status: 'success',
  timestamp: Temporal.Now.instant()  
};

const coursesApiResponse: ApiResponse<Course[]> = {
  data: mockCoursesList,
  status: 'success',
  timestamp: Temporal.Now.instant()
};
console.log('Processing Student API Record:');
renderResponse(studentApiResponse, (student) => {
  console.log(`  Data Output -> Student Registered: ${student.name} (GPA: ${student.gpa})`);
});

console.log('\nProcessing Courses List API Record:');
renderResponse(coursesApiResponse, (courses) => {
  console.log(`  Data Output -> Tracked Systems Count: ${courses.length}`);
  courses.forEach(c => console.log(`    * [${c.code}] ${c.title} (${c.enrolledCount}/${c.capacity} slots filled)`));
});