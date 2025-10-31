// Import dotenv library to load environment variables from .env file
import dotenv from 'dotenv';

// Load environment variables from .env file into process.env
// This must be called before accessing process.env variables
dotenv.config();

/**
 * Utility function to safely retrieve environment variables
 * @param key - The environment variable key to retrieve
 * @param fallback - Optional fallback value if environment variable is not set
 * @returns The environment variable value, fallback value, or undefined
 */
export function getEnvVar(key: string, fallback?: string): string | undefined {
  // Retrieve the environment variable value from process.env
  const value = process.env[key];
  // If value exists (not undefined), return it immediately
  if (value !== undefined) return value;
  // Otherwise, return the provided fallback value (may be undefined)
  return fallback;
}



