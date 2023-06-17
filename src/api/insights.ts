import axios from 'axios';

export const fetchAIInsights = async (data: any) => {
  const response = await axios.post('/api/ai/analyze', { data });
  return response.data.insights;
};

export const generateStory = (insights: string[]) => {
  return `Based on our AI analysis: ${insights.join(', ')}`;
};
