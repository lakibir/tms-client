"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = require("./utils.js");
console.log('=== MODULE 2 SESSION 1: FRONTEND TYPE SYSTEM AUDIT ===\n');
const unknownPayload1 = { id: 'STU-001', name: 'Hana', age: 22, gpa: 3.8 };
const unknownPayload2 = { id: 42, name: 'Malformed Test Data', age: 19, gpa: 2.1 };

console.log('Testing Type Guard Predicate Narrowing:');
if ((0, utils_js_1.isStudent)(unknownPayload1)) {
    
    console.log(`  Success: Safely identified student payload. Name: ${unknownPayload1.name}`);
}
else {
    console.log('  Failure: Unknown data format mismatch.');
}

console.log('\nTesting Structural Assertions Engine:');
try {
    const cleanStudent = (0, utils_js_1.parseStudent)(unknownPayload1);
    console.log(`  Parsed output match successful for: ${cleanStudent.name}`);
}
catch (error) {
    if (error instanceof Error) {
        console.error(`  Caught Unexpected Error: ${error.message}`);
    }
}
try {
    console.log('\nProcessing corrupt payload with invalid ID scalar type values:');
    (0, utils_js_1.parseStudent)(unknownPayload2);
}
catch (error) {
    if (error instanceof TypeError) {
        console.log('  Expected Error Successfully Intercepted:');
        console.log(`    Message: ${error.message}`); 
    }
}
