import { Temporal } from '@js-temporal/polyfill';

export interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  timestamp: Temporal.Instant; // Fully replacing legacy Date formats
}

/**
 * Reusable layout renderer targeting complex data projections
 */
export function renderResponse<T>(response: ApiResponse<T>, processData: (data: T) => void): void {
  console.log(`[API Response] Status: ${response.status.toUpperCase()}`);
  console.log(`[API Time] ISO Stamp: ${response.timestamp.toString()}`);
  
  if (response.status === 'success') {
    processData(response.data);
  } else {
    console.log('Error payload intercepted. Execution pipeline halted.');
  }
}