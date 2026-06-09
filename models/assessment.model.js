"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateGrade = calculateGrade;
/**
 * Functional Polymorphism Engine
 * Compiler natively narrows types safely based on evaluating the item.kind literal string property.
 */
function calculateGrade(item) {
    switch (item.kind) {
        case 'quiz':
            if (item.totalQuestions === 0)
                return 0;
            return (item.correctAnswers / item.totalQuestions) * 100;
        case 'lab':
            // 70% functionality representation, 30% code quality representation
            return (item.functionalityScore * 0.7) + (item.codeQualityScore * 0.3);
        default: {
            // Exhaustiveness Safeguard: If a third type is added later, this line breaks compilation.
            const _exhaustiveCheck = item;
            return _exhaustiveCheck;
        }
    }
}
