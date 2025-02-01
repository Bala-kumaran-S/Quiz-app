import axios from 'axios'; 
import mockdata from './mockData';

export const fetchQuizData = async () => {
  try {
    
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; 
    const apiUrl = 'https://api.jsonserve.com/Uw5CrX';
    const response = await axios.get(proxyUrl + apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    console.log('Using mock data instead.');
    return mockdata;
    
  }
};