export type EnrollmentStatus = 'Pending' | 'Approved' | 'Rejected';
export type CourseState = 'Draft' | 'Active' | 'Archived';

export function describeEnrollment(status: EnrollmentStatus): string {
  switch (status) {
    case 'Pending':
      return 'The application is awaiting administrative review.';
    case 'Approved':
      return 'The student is officially enrolled and assigned a seat.';
    case 'Rejected':
      return 'The application was declined based on system eligibility rules.';
    default: {
      const _exhaustiveCheck: never = status;
      return _exhaustiveCheck;
    }
  }
}

export function describeCourse(state: CourseState): string {
  switch (state) {
    case 'Draft':
      return 'The curriculum is being designed and is hidden from students.';
    case 'Active':
      return 'The course is open for registration and actively running.';
    case 'Archived':
      return 'The course has concluded; historical records are locked.';
    default: {
      const _exhaustiveCheck: never = state;
      return _exhaustiveCheck;
    }
  }
}