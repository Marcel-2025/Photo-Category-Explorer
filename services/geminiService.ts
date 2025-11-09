
import { Classification } from '../types';
import { APP_CATEGORIES, TOPIC_CATEGORIES } from '../constants';

const randomElement = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const mockClassifyImage = (photoId: string): Promise<Classification> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const app = Math.random() > 0.1 ? randomElement(APP_CATEGORIES) : null;
      const topics: string[] = [];
      if(Math.random() > 0.4) {
          topics.push(randomElement(TOPIC_CATEGORIES));
      }
      if(Math.random() > 0.8) {
          topics.push(randomElement(TOPIC_CATEGORIES.filter(t => !topics.includes(t))));
      }

      const classification: Classification = {
        app,
        topics,
        confidence: {
          app: app ? Math.random() * 0.4 + 0.6 : 0, // 0.6 to 1.0
          topics: topics.reduce((acc, topic) => {
            acc[topic] = Math.random() * 0.3 + 0.65; // 0.65 to 0.95
            return acc;
          }, {} as { [key: string]: number }),
        },
      };
      resolve(classification);
    }, Math.random() * 300 + 50); // Simulate network latency
  });
};
