export interface Quiz {
  kind: 'quiz';
  title: string;
  correctAnswers: number;
  totalQuestions: number;
}

export interface LabAssignment {
  kind: 'lab';
  title: string;
  functionalityScore: number;
  codeQualityScore: number;
}

export type AssessmentItem = Quiz | LabAssignment;


export function calculateGrade(item: AssessmentItem): number {
  switch (item.kind) {
    case 'quiz':
      if (item.totalQuestions === 0) return 0;
      return (item.correctAnswers / item.totalQuestions) * 100;

    case 'lab':
      return (item.functionalityScore * 0.7) + (item.codeQualityScore * 0.3);

    default: {
      const _exhaustiveCheck: never = item;
      return _exhaustiveCheck;
    }
  }
}