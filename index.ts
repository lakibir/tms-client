import { Student } from './models/student.model.js'; 
import { isStudent, parseStudent } from './utils.js';

console.log('=== MODULE 2 SESSION 1: FRONTEND TYPE SYSTEM AUDIT ===\n');

const unknownPayload1: unknown = { id: 'STU-001', name: 'Hana', age: 22, gpa: 3.8 };
const unknownPayload2: unknown = { id: 42, name: 'Malformed Test Data', age: 19, gpa: 2.1 };

console.log('Testing Type Guard Predicate Narrowing:');
if (isStudent(unknownPayload1)) {
  
  console.log(`  Success: Safely identified student payload. Name: ${unknownPayload1.name}`);
} else {
  console.log('  Failure: Unknown data format mismatch.');
}

console.log('\nTesting Structural Assertions Engine:');
try {
  const cleanStudent = parseStudent(unknownPayload1);
  console.log(`  Parsed output match successful for: ${cleanStudent.name}`);
} catch (error) {
  if (error instanceof Error) {
    console.error(`  Caught Unexpected Error: ${error.message}`);
  }
}

try {
  console.log('\nProcessing corrupt payload with invalid ID scalar type values:');
  parseStudent(unknownPayload2);
} catch (error) {
  if (error instanceof TypeError) {
    console.log('  Expected Error Successfully Intercepted:');
    console.log(`    Message: ${error.message}`); 
  }
}