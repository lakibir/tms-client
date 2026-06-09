"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderResponse = renderResponse;
/**
 * Reusable layout renderer targeting complex data projections
 */
function renderResponse(response, processData) {
    console.log(`[API Response] Status: ${response.status.toUpperCase()}`);
    console.log(`[API Time] ISO Stamp: ${response.timestamp.toString()}`);
    if (response.status === 'success') {
        processData(response.data);
    }
    else {
        console.log('Error payload intercepted. Execution pipeline halted.');
    }
}
