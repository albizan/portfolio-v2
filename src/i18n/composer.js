import { landing_transaltions_it, landing_transaltions_en } from './landing';
import { greetings_transaltions_it, greetings_transaltions_en } from './greetings';

export default {
  en: {
    translation: {
      ...landing_transaltions_en,
      ...greetings_transaltions_en,
    },
  },
  it: {
    translation: {
      ...landing_transaltions_it,
      ...greetings_transaltions_it,
    },
  },
};
