import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "683f000698255432f4ef9cea", 
  requiresAuth: true // Ensure authentication is required for all operations
});
