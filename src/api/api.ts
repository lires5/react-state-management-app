import axios from 'axios';
import { User } from '../types';

// Replace with your actual API endpoint
const API_URL = 'http://localhost:8185/users/all';

/**
 * Fetches the list of users from the external API.
 * @returns A promise that resolves to an array of User objects.
 */
export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(API_URL);
  return response.data;
};

// You can add more API functions here as your application grows.
// For example:
// export const getUserById = async (id: number): Promise<User> => {
//   const response = await axios.get<User>(`${API_URL}/${id}`);
//   return response.data;
// };