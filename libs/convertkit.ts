import axios from 'axios';

const API_SECRET = process.env.CONVERTKIT_API_SECRET;
const API_KEY = process.env.CONVERTKIT_API_KEY;

if (!API_SECRET || !API_KEY) {
  throw new Error('Missing ConvertKit API credentials');
}

const API_URL = 'https://api.convertkit.com/v3';

export const convertkit = {
  addSubscriberToForm: async (formId: string, email: string) => {
    try {
      const response = await axios.post(`${API_URL}/forms/${formId}/subscribe`, {
        api_key: API_KEY,
        email: email
      });
      return response.data;
    } catch (error) {
      console.error('Error adding subscriber to ConvertKit:', error);
      throw error;
    }
  }
};
