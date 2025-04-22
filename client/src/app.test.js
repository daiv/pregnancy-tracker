import { describe, expect, test } from 'vitest';
import { getDueDate, getTotalDays } from './helperFun';

describe('should calculate the due date correctly', () => {
  test('getDueDate', () => {
    const lpd = '2024-11-06';
    const expectedDueDate = '13/8/2025';
    const result = getDueDate(lpd).toLocaleDateString('es-ES')
    expect(result).toBe(expectedDueDate);
  });
});

describe('should calculate the total days correctly', () => {
  test('getTotalDays', () => {
    const lpd = new Date('2024-11-06');
    const days = getTotalDays(lpd, new Date('2024-11-13'));
    expect(days).toBe(7);
  });
});

describe('should calculate the weeks correctly', () => {
  test('Should calculate weeks correctly', () => {
    const lpd = new Date('2024-11-06');
    const weeks = getTotalDays(lpd, new Date('2024-11-13')) % 7;
    expect(weeks).toBe(0);

  });
  
   test('Should calculate weeks correctly', () => {
    const lpd = new Date('2024-11-06');
    const weeks = getTotalDays(lpd, new Date('2024-11-14')) % 7;
    expect(weeks).toBe(1);

  });
});
