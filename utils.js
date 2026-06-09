"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStudent = isStudent;
exports.parseStudent = parseStudent;

function isStudent(data) {
    if (!data || typeof data !== 'object') {
        return false;
    }
   
    const candidate = data;
    return (typeof candidate.id === 'string' &&
        typeof candidate.name === 'string' &&
        typeof candidate.age === 'number' &&
        typeof candidate.gpa === 'number');
}

function parseStudent(data) {
    if (!data || typeof data !== 'object') {
        throw new TypeError('Invalid raw data payload: Expected an object structure.');
    }
    const candidate = data;
    if (typeof candidate.id !== 'string') {
        throw new TypeError(`Validation Failed: 'id' field mismatch. Expected string, received ${typeof candidate.id}.`);
    }
    if (typeof candidate.name !== 'string') {
        throw new TypeError(`Validation Failed: 'name' field mismatch. Expected string, received ${typeof candidate.name}.`);
    }
    if (typeof candidate.age !== 'number') {
        throw new TypeError(`Validation Failed: 'age' field mismatch. Expected number, received ${typeof candidate.age}.`);
    }
    if (typeof candidate.gpa !== 'number') {
        throw new TypeError(`Validation Failed: 'gpa' field mismatch. Expected number, received ${typeof candidate.gpa}.`);
    }
    return {
        id: candidate.id,
        name: candidate.name,
        enrollmentDate: candidate.enrollmentDate,
        gpa: candidate.gpa,
    };
}
