"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.describeEnrollment = describeEnrollment;
exports.describeCourse = describeCourse;
function describeEnrollment(status) {
    switch (status) {
        case 'Pending':
            return 'The application is awaiting administrative review.';
        case 'Approved':
            return 'The student is officially enrolled and assigned a seat.';
        case 'Rejected':
            return 'The application was declined based on system eligibility rules.';
        default: {
            const _exhaustiveCheck = status;
            return _exhaustiveCheck;
        }
    }
}
function describeCourse(state) {
    switch (state) {
        case 'Draft':
            return 'The curriculum is being designed and is hidden from students.';
        case 'Active':
            return 'The course is open for registration and actively running.';
        case 'Archived':
            return 'The course has concluded; historical records are locked.';
        default: {
            const _exhaustiveCheck = state;
            return _exhaustiveCheck;
        }
    }
}
