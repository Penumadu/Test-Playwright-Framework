// Import Node.js file system module for file operations
// Import path module for cross-platform path resolution
import fs from 'fs';
import path from 'path';

/**
 * Utility function to load and parse JSON files
 * @param relativePath - Relative path from project root to JSON file
 * @returns Parsed JSON object with type T
 * @template T - TypeScript generic type for type-safe JSON loading
 */
export function loadJSON<T = unknown>(relativePath: string): T {
  // Resolve relative path to absolute path using current working directory
  // Ensures correct path resolution regardless of where script is run from
  const absolute = path.resolve(process.cwd(), relativePath);
  // Read file content synchronously with UTF-8 encoding
  // Returns the file contents as a string
  const content = fs.readFileSync(absolute, 'utf-8');
  // Parse JSON string into JavaScript object
  // Type assertion ensures return type matches expected generic type T
  return JSON.parse(content) as T;
}



