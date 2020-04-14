import { landing_translation_it, landing_translation_en } from './landing';
import { greetings_translation_it, greetings_translation_en } from './greetings';
import { resume_translation_it, resume_translation_en } from './resume';
import { projects_translation_it, projects_translation_en } from './projects';
import { tools_translation_it, tools_translation_en } from './tools';
import { footer_translation_it, footer_translation_en } from './footer';

export default {
  en: {
    translation: {
      ...landing_translation_en,
      ...greetings_translation_en,
      ...resume_translation_en,
      ...projects_translation_en,
      ...tools_translation_en,
      ...footer_translation_en,
    },
  },
  it: {
    translation: {
      ...landing_translation_it,
      ...greetings_translation_it,
      ...resume_translation_it,
      ...projects_translation_it,
      ...tools_translation_it,
      ...footer_translation_it,
    },
  },
};
