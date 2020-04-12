import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      'Greetings-1': 'Hello!',
      'Greetings-2': "My name's Alberto",
      'Greetings-3': 'I am studying to be a web developer',
      'Greetings-4': 'I am passionate about nodejs and reactjs',
      'Enter Button': 'Enter',
      'Title Greetings': 'Nice to meet you',
      'Text Greetings':
        "Welcome to my website, I am glad you visited my personal space, here is where I am proud to show my skills, projects, past experiences and future hopes in the web development field. I am a 23-year-old geek located in beautiful Turin, Italy. I got my bachelor degree in Computer Engineering at the Politecnico di Torino. I love new web technologies, both on the front-end and on the back-end. I am currently studying to become a full stack developer with React and Node. As a web developer, officialy I make websites and design restful APIs. But really? Well, I try to build software users appreciate: secure, fast, easy to use and understand with a clean and elegant user interface. I'm persistent, curious and continuously working on improving my capabilities",
      'Resume Title': 'Resume',
      'Resume Event High School': 'High School Diploma',
      'Resume High School Issuer': 'Scuola Internazionale Europea Statale Altiero Spinelli',
      'Resume Event First': 'First Certificate',
      'Resume First Issuer': 'University of Cambridge',
      'Resume Bachelor Event': 'Bachelor Degree',
      'Resume Bachelor Issuer': 'Politecnico di Torino',
      'Resume Education': 'Education',
      'Soft SKill Curiosity': 'Curiosity',
      'Soft SKill Organization': 'Organization',
      'Soft SKill Persistance': 'Persistance',
      'Soft SKill Teamwork': 'Teamwork',
      'Soft SKill Learn': 'Willigness To Learn',
      'Show More': 'Show More',
      'Project 1 Title': 'My Personal Website',
      'Project 1 Brief Description':
        'This is my personal website, brief introduction about me, some skills and some projects',
      'Project 1 Description':
        "This is my personal website, here I tried exploring and experimenting with some exciting new tools such us TailwindCSS and styled-components. I wanted my portfolio website to be as fast as possible and beautiful in aesthetics, with a clean and sleek user interface. Here, Adam Wathan's TailwindCSS is used to style each component with the utility-first approach and styled-components are used primarily with styled-theming to style each part of this portfolio with a light and a dark theme.",
      'Project 2 Title': 'Git Finder',
      'Project 2 Brief Description':
        'Web App dinamica che utilizza le API di github per ottenere informazioni degli utenti della piattaforma',
      'Project 2 Description':
        "This is my personal website, here I tried exploring and experimenting with some exciting new tools such us TailwindCSS and styled-components. I wanted my portfolio website to be as fast as possible and beautiful in aesthetics, with a clean and sleek user interface. Here, Adam Wathan's TailwindCSS is used to style each component with the utility-first approach and styled-components are used primarily with styled-theming to style each part of this portfolio with a light and a dark theme.",
      'Project 3 Title': 'Gestione Sito Web',
      'Project 3 Brief Description':
        'Gestione e parziale sviluppo di un sito web per uno studio di architettura',
      'Project 3 Description':
        "This is my personal website, here I tried exploring and experimenting with some exciting new tools such us TailwindCSS and styled-components. I wanted my portfolio website to be as fast as possible and beautiful in aesthetics, with a clean and sleek user interface. Here, Adam Wathan's TailwindCSS is used to style each component with the utility-first approach and styled-components are used primarily with styled-theming to style each part of this portfolio with a light and a dark theme.",
      'Project 4 Title': 'Shortify',
      'Project 4 Brief Description':
        'Web App per accorciare e gestire i link. La parte frontend è stata realizzata con React e il backend in Node',
      'Project 4 Description':
        "This is my personal website, here I tried exploring and experimenting with some exciting new tools such us TailwindCSS and styled-components. I wanted my portfolio website to be as fast as possible and beautiful in aesthetics, with a clean and sleek user interface. Here, Adam Wathan's TailwindCSS is used to style each component with the utility-first approach and styled-components are used primarily with styled-theming to style each part of this portfolio with a light and a dark theme.",
      'Project 5 Title': 'Friendly URL',
      'Project 5 Brief Description':
        'BOT Telegram che utilizzo per accorciare i link che vengono inviati in chat, è inoltre possibile aggiungere un tag referral ai link amazon',
      'Project 5 Description':
        "This is my personal website, here I tried exploring and experimenting with some exciting new tools such us TailwindCSS and styled-components. I wanted my portfolio website to be as fast as possible and beautiful in aesthetics, with a clean and sleek user interface. Here, Adam Wathan's TailwindCSS is used to style each component with the utility-first approach and styled-components are used primarily with styled-theming to style each part of this portfolio with a light and a dark theme.",
      'Project 6 Title': 'MIT - Mercatino Informatica e Tecnologia',
      'Project 6 Brief Description':
        "BOT che consente di creare annunci di vendita/ricerca per un mercatino dell'usato di prodotti tecnologici che gestisco su telegram",
      'Project 6 Description':
        "This is my personal website, here I tried exploring and experimenting with some exciting new tools such us TailwindCSS and styled-components. I wanted my portfolio website to be as fast as possible and beautiful in aesthetics, with a clean and sleek user interface. Here, Adam Wathan's TailwindCSS is used to style each component with the utility-first approach and styled-components are used primarily with styled-theming to style each part of this portfolio with a light and a dark theme.",
      'Tools Section Title': 'Tools I like to use',
    },
  },
  it: {
    translation: {
      'Greetings-1': 'Ciao!',
      'Greetings-2': 'Mi chiamo Alberto',
      'Greetings-3': 'Studio per diventare web developer',
      'Greetings-4': 'Mi piace utilizzare node e react',
      'Enter Button': 'Entra',
      'Title Greetings': 'Piacere di conoscerti!',
      'Text Greetings':
        "Benvenuto nel mio sito web, sono contento che tu abbia visitato il mio spazio personale su internet. Qui è dove sono orgoglioso di mostrare le mie capacità, i miei progetti, le mie esperienze e le mie speranze future nel campo dello sviluppo web. Sono un geek di 24 anni che si trova nella bellissima Torino. Ho conseguito la laurea in Ingegneria Informatica presso il Politecnico di Torino. Amo le nuove tecnologie web, sia sul front-end che sul back-end. Attualmente sto studiando per diventare uno sviluppatore full stack con React e Node. Come web developer cerco di costruire applicazioni software che gli utenti apprezzino: sicure, veloci, facile da usare e da capire con un'interfaccia utente pulita ed elegante. Sono tenace, curioso, disciplinato e lavoro duramente e continuamente per migliorare le mie capacità e per imparare le nuove tecnologie di mio interesse.",
      'Resume Title': 'Resume',
      'Resume Event High School': 'Diploma di Scuola Superiore',
      'Resume High School Issuer': 'Scuola Internazionale Europea Statale Altiero Spinelli',
      'Resume Event First': 'First Certificate',
      'Resume First Issuer': 'University of Cambridge',
      'Resume Bachelor Event': 'Laurea Triennale',
      'Resume Bachelor Issuer': 'Politecnico di Torino',
      'Resume Education': 'Istruzione',
      'Soft SKill Curiosity': 'Curiosità',
      'Soft SKill Organization': 'Organizzazione',
      'Soft SKill Persistance': 'Perseveranza',
      'Soft SKill Teamwork': 'Lavoro di Squadra',
      'Soft SKill Learn': 'Voglia Di Imparare',
      'Show More': 'Mostra Altro',
      'Project 1 Title': 'Il mio sito web personale',
      'Project 1 Brief Description':
        'Questo è il mio sito, una breve introduzione su di me, alcune conoscenze tecniche e alcuni progetti',
      'Project 1 Description':
        "This is my personal website, here I tried exploring and experimenting with some exciting new tools such us TailwindCSS and styled-components. I wanted my portfolio website to be as fast as possible and beautiful in aesthetics, with a clean and sleek user interface. Here, Adam Wathan's TailwindCSS is used to style each component with the utility-first approach and styled-components are used primarily with styled-theming to style each part of this portfolio with a light and a dark theme.",
      'Project 2 Title': 'Git Finder',
      'Project 2 Brief Description':
        'Web App dinamica che utilizza le API di github per ottenere informazioni degli utenti della piattaforma',
      'Project 2 Description':
        "This is my personal website, here I tried exploring and experimenting with some exciting new tools such us TailwindCSS and styled-components. I wanted my portfolio website to be as fast as possible and beautiful in aesthetics, with a clean and sleek user interface. Here, Adam Wathan's TailwindCSS is used to style each component with the utility-first approach and styled-components are used primarily with styled-theming to style each part of this portfolio with a light and a dark theme.",
      'Project 3 Title': 'Gestione Sito Web',
      'Project 3 Brief Description':
        'Gestione e parziale sviluppo a partire da un template di un sito web per uno studio di architettura',
      'Project 3 Description':
        "This is my personal website, here I tried exploring and experimenting with some exciting new tools such us TailwindCSS and styled-components. I wanted my portfolio website to be as fast as possible and beautiful in aesthetics, with a clean and sleek user interface. Here, Adam Wathan's TailwindCSS is used to style each component with the utility-first approach and styled-components are used primarily with styled-theming to style each part of this portfolio with a light and a dark theme.",
      'Project 4 Title': 'Shortify',
      'Project 4 Brief Description':
        'Web App per accorciare e gestire i link. La parte frontend è stata realizzata con React e con backend in Node',
      'Project 4 Description':
        "This is my personal website, here I tried exploring and experimenting with some exciting new tools such us TailwindCSS and styled-components. I wanted my portfolio website to be as fast as possible and beautiful in aesthetics, with a clean and sleek user interface. Here, Adam Wathan's TailwindCSS is used to style each component with the utility-first approach and styled-components are used primarily with styled-theming to style each part of this portfolio with a light and a dark theme.",
      'Project 5 Title': 'Friendly URL',
      'Project 5 Brief Description':
        'BOT Telegram che utilizzo per accorciare i link che vengono inviati in chat, è inoltre possibile aggiungere un tag referral ai link amazon',
      'Project 5 Description':
        "This is my personal website, here I tried exploring and experimenting with some exciting new tools such us TailwindCSS and styled-components. I wanted my portfolio website to be as fast as possible and beautiful in aesthetics, with a clean and sleek user interface. Here, Adam Wathan's TailwindCSS is used to style each component with the utility-first approach and styled-components are used primarily with styled-theming to style each part of this portfolio with a light and a dark theme.",
      'Project 6 Title': 'MIT - Mercatino Informatica e Tecnologia',
      'Project 6 Brief Description':
        "BOT che consente di creare annunci di vendita/ricerca per un mercatino dell'usato di prodotti tecnologici che gestisco su telegram",
      'Project 6 Description':
        "This is my personal website, here I tried exploring and experimenting with some exciting new tools such us TailwindCSS and styled-components. I wanted my portfolio website to be as fast as possible and beautiful in aesthetics, with a clean and sleek user interface. Here, Adam Wathan's TailwindCSS is used to style each component with the utility-first approach and styled-components are used primarily with styled-theming to style each part of this portfolio with a light and a dark theme.",
      'Tools Section Title': 'Gli strumenti che uso',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'it',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
