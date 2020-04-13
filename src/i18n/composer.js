import { landing_transaltions_it, landing_transaltions_en } from './landing';
import { greetings_transaltions_it, greetings_transaltions_en } from './greetings';
import { resume_transaltions_it, resume_transaltions_en } from './resume';

export default {
  en: {
    translation: {
      ...landing_transaltions_en,
      ...greetings_transaltions_en,
      ...resume_transaltions_en,
    },
  },
  it: {
    translation: {
      ...landing_transaltions_it,
      ...greetings_transaltions_it,
      ...resume_transaltions_it,
    },
  },
};
