const projects_title = {
  it: 'Alcuni dei miei progetti',
  en: 'Some stuff I enjoyed coding',
};

const project_description = {
  it: 'Descrizione',
  en: 'Description',
};

const project_libraries = {
  it: 'Librerie',
  en: 'Libraries',
};

const project_1_name = {
  it: 'Il mio sito web personale',
  en: 'My personal website',
};
const project_1_brief_description = {
  it:
    'Questo è il mio sito, una breve introduzione su di me, alcune conoscenze tecniche e alcuni progetti',
  en: 'This is my personal website, brief introduction about me, some skills and some projects',
};
const project_1_description = {
  it: `Questo è il mio sito web personale. 
    Ho inserito una breve introduzione su di me, alcune delle mie conoscenze 
    a livello tecnico e le attitudini interpersonali. Nel sito è presente una sezione 
    dedicata ad alcuni progetti che ho sviluppato in passato, per alcuni di essi 
    ho inserito il link al repository pubblico sulla piattaforma Github. 
    Questa seconda versione del mio portfolio è stata realizzata utilizzando il 
    framework javascript React. Nonostante il sito in questione sia un 
    semplice sito web statico che non necessita di interazione utente, ho 
    deciso comunque di utilizzare React per avere una esperienza di sviluppo 
    decisamente più moderna e per fare esperienza con una tecnologia 
    sempre più richiesta nel mercato del lavoro. La scelta di react ha reso 
    possibile rendere la struttura del codice più modulare, in quanto ogni 
    sezione del sito è composta da un "componente" separato. Questa 
    “modularità” si è rivelata particolarmente utile per sviluppare la timeline, le 
    barre delle skill, le card dei singoli progetti e quelle della sezione 
    strumenti. 
    Ho deciso inoltre di includere un toggle per modificare il tema del sito web, 
    in modo da avere un tema chiaro e un tema scuro. Per ottenere questa 
    funzionalità ho utilizzato la libreria Styled-Components, che mi ha 
    permesso di gestire i vari temi in maniera piuttosto elegante e pulita. 
    Questa seconda versione, a differenza della prima, incorpora un toggle che 
    consente di modificare la lingua in modo dinamico. Per ottenere ciò ho 
    utilizzato la libreria i18next. 
    La UI del sito è stata realizzata in parte scrivendo a mano il CSS all’interno 
    degli styled-components ed in misura maggiore utilizzando il framework Tailwindcss. Utilizzo questo framework per via del suo approccio 
    utility-first e mobile-first, l’alta customizzazione e soprattutto per la 
    semplicità con la quale è possibile definire stili diversi a seconda della 
    dimensione dello schermo, in modo da rendere immediata la realizzazione 
    di pagine responsive.`,
  en: `This is my personal website.
  I’ve added a short introduction about myself, some of my technical knowledge and interpersonal attitudes. On the website there’s a section dedicated to some projects I’ve developed in the past. For some of these I’ve included the link to the public repository on the Github platform.
  This second version of my portfolio was created using the React javascript framework. Although the site in question is a simple static website that doesn’t require user interaction, I decided to use React anyway to have a decisively more modern development experience and to have experience with a technology that is increasingly requested on the job market. Choosing React made it possible to make the code structure more modular, in that every section of the site is composed of a separate “component”. This “modularity” has revealed itself to be particularly useful in developing the timeline, the skill bars, and the cards for both singular projects and the tools section.
  I also decided to include a toggle for changing the website’s theme, so to have a light theme and dark theme. To obtain this functionality I used the Styled-Components library, which allowed me to manage the various themes in a rather elegant and clean way. This second version, compared to the first, incorporates a toggle that allows you to modify the language in a dynamic way. To achieve this I used the i18next library.
  The site’s UI was created in part by writing the CSS by hand within the style-components and to a greater extent using the Tailwindcss framework. I use this framework for its utility-first and mobile-first approach, high customisation and especially the simplicity with which it’s possible to define different styles depending on screen dimension, in order to immediately create responsive pages.
  `,
};

const project_2_name = {
  it: 'Git Finder',
  en: 'Git Finder',
};
const project_2_brief_description = {
  it:
    'Web App dinamica che utilizza le API di Github per ottenere informazioni degli utenti della piattaforma',
  en: "Dynamic Web App that uses Github Rest APis to get information about platform's users",
};
const project_2_description = {
  it: `Git Finder è una applicazione web che permette di ottenere informazioni base e la lista dei repository di un determinato utente tramite chiamate alle API di Github. 
    Ho sviluppato Git Finder per prendere confidenza con React, React 
    Router e Axios. 
    Durante lo sviluppo di questa web app ho scoperto Tailwindcss, che ho deciso di utilizzare per la UI.`,
  en: `Git Finder is a web application that allows you to get base information and the list of repositories for a specific user through calls to Github’s API.
  I developed Git Finder to familiarise myself with React, React Router and Axios.
  During the development of this web app, I discovered Tailwindcss, which I decided to use for the UI.
  `,
};

const project_3_name = {
  it: 'Gestione Sito Web',
  en: 'Website management',
};
const project_3_brief_description = {
  it:
    'Ho gestito, mantenuto e parzialmente sviluppato un sito web moderno per uno studio di architettura',
  en: 'Managed, mantained and partially developed a modern website for an architectural firm',
};
const project_3_description = {
  it: `Per uno studio di architettura, ho provveduto al completo restyling di un vecchio sito web precedentemente creato con joomla. Ho aiutato i titolari dell’attività nella selezione di un template HTML moderno che ho  poi provveduto a modificare, in modo da renderlo più adatto ai nuovi contenuti da mostrare. Mi sono inoltre fatto carico di gestire il deploy del nuovo sito.`,
  en: `For an architecture firm, I took charge of completely restyling an old website previously created with joomla. I helped the business owners  select a modern HTML template which I then proceeded to modify, so as to make it more suitable for displaying new content. I also took charge of managing the website’s deployment.`,
};

const project_4_name = {
  it: 'Shortify',
  en: 'Shortify',
};
const project_4_brief_description = {
  it:
    'Shortify è un link shortener, una web app per accorciare e gestire i link. La parte frontend è stata realizzata con React e il backend con Node',
  en:
    'Shortify is a link shortener, a web app that makes it easy to shorten and manage links. Frontend is made with React, backend with Node',
};
const project_4_description = {
  it: `Shortify è un link shortener che prevede sia una parte di front-end, creata con 
  React, sia una parte di back-end realizzata con Node. Il sistema è utilizzabile 
  solo previa registrazione utente per mezzo di email e password. Per 
  utilizzare l'applicazione è necessario confermare l’indirizzo email cliccando 
  sul link che viene inviato automaticamente all’indirizzo inserito
  durante la registrazione. 
  L’autenticazione degli utenti avviene tramite JWT, le password vengono 
  salvate su un database che vive all’interno di un container linux. Prima di 
  essere salvate sul DB, le password inserite dagli utenti vengono hashate 
  con bcrypt. 
  Una volta verificato il profilo, gli utenti possono cominciare ad accorciare e 
  gestire i loro link da condividere, i quali possono essere 
  momentaneamente disattivati. 
  Il server è stato scritto in Typescript con l’ausilio del framework Nestjs 
  Il frontend è hostato su Netlify mentre il backend è containerizzato grazie a 
  Docker in un VPS privato.`,
  en: `Shortify is a link shortener that provides both a front-end part, created with React, and a back-end created with Node. The system can only be used after user registration with email and password. To use the application, it is necessary to confirm the email address by clicking on the link that is automatically sent to the address inserted during registration.
  User authentication happens through JWT, the passwords are saved on a database that lives within a linux container. Before being saved on the DB, the user added passwords are hashed with bcrypt.
  Once the profile has been verified, users can begin to shorten and manage the links they want to share, which can be temporarily disabled.
  The server was written in Typescript with the help of the Nestjs framework. The frontend is hosted on Netlify while the backend is containerised thanks to Docker in a private VPS.
  `,
};

const project_5_name = {
  it: 'Friendly URL',
  en: 'Friendly URL',
};
const project_5_brief_description = {
  it:
    'Friendly URL è un BOT per telegram che analizza gli url che vengono inviati in chat e li accorcia per rendere i messaggi più leggibili. Inoltre può aggiungere un tag referral ai link di amazon',
  en:
    'Friendly URL is a telegram BOT that analyses urls sent in a chat and shortens them in order to make messages cleaner and easy to read. Furthermore it can add a referral tag to amazon links',
};
const project_5_description = {
  it: `Friendly URL è un BOT per telegram che analizza gli url che vengono 
  inviati in chat e li accorcia per rendere i messaggi più leggibili. Il messaggio 
  originale viene eliminato mentre il BOT ne invia uno nuovo che comprende 
  il medesimo testo, sostituendo però i vari url con la loro versione 
  accorciata, mascherata da una ancora HTML rappresentata dal dominio 
  del sito web linkato. Il BOT consente inoltre di configurare un tag referral di amazon.it, il quale viene aggiunto automaticamente a tutti i link al sito web 
  del noto sito di e-commerce.
  `,
  en: `Friendly URL is a telegram BOT that analyses the urls sent within chats and shortens them to make messages more legible. The original message is deleted while the BOT sends another which contains the same text, however substituting the various urls with their shortened versions, disguised as a HTML anchor represented by the domain of the linked website. The BOT also allows you to configure a amazon.it referral tag, which is automatically added to all links for the notable e-commerce website.
  `,
};

const project_6_name = {
  it: 'MIT - Mercatino Informatica e Tecnologia',
  en: 'MIT - Hardware Market',
};
const project_6_brief_description = {
  it:
    'MIT è un BOT per telegram che consente di generare annunci di vendita da inserire automaticamente in un canale telegram',
  en:
    'MIT is a telegram BOT that allows you to create sale announcements to be automatically inserted in a telegram channel',
};
const project_6_description = {
  it: `MIT è un BOT per telegram che consente di generare annunci di vendita di 
  attrezzatura informatica da inserire automaticamente in un canale 
  telegram. All’interno del BOT è possibile: entrare nel wizard guidato per 
  creare un nuovo annuncio di vendita o ricerca, visualizzare i prodotti già messi 
  in vendita e i propri annunci pubblicati e cercare feedback per un dato utente. Il 
  BOT comprende inoltre una serie di comandi di amministrazione per 
  gestire i vari annunci.`,
  en: `MIT is a telegram BOT which allows you to generate sales ads for IT equipment that are to be automatically added to a telegram channel. Within the BOT you can: enter the guided wizard to create a new sales or search ad, view the products already for sale, your own published ads, and seek feedback for a given user. The BOT also includes a series of administration commands to manage the various ads.
  `,
};

const show_more_button = {
  it: 'Mostra Altro',
  en: 'Show More',
};

export const projects_translation_en = {
  project_description: project_description.en,
  project_libraries: project_libraries.en,
  projects_title: projects_title.en,
  project_1_name: project_1_name.en,
  project_1_brief_description: project_1_brief_description.en,
  project_1_description: project_1_description.en,
  project_2_name: project_2_name.en,
  project_2_brief_description: project_2_brief_description.en,
  project_2_description: project_2_description.en,
  project_3_name: project_3_name.en,
  project_3_brief_description: project_3_brief_description.en,
  project_3_description: project_3_description.en,
  project_4_name: project_4_name.en,
  project_4_brief_description: project_4_brief_description.en,
  project_4_description: project_4_description.en,
  project_5_name: project_5_name.en,
  project_5_brief_description: project_5_brief_description.en,
  project_5_description: project_5_description.en,
  project_6_name: project_6_name.en,
  project_6_brief_description: project_6_brief_description.en,
  project_6_description: project_6_description.en,

  show_more_button: show_more_button.en,
};

export const projects_translation_it = {
  project_description: project_description.it,
  project_libraries: project_libraries.it,
  projects_title: projects_title.it,
  project_1_name: project_1_name.it,
  project_1_brief_description: project_1_brief_description.it,
  project_1_description: project_1_description.it,
  project_2_name: project_2_name.it,
  project_2_brief_description: project_2_brief_description.it,
  project_2_description: project_2_description.it,
  project_3_name: project_3_name.it,
  project_3_brief_description: project_3_brief_description.it,
  project_3_description: project_3_description.it,
  project_4_name: project_4_name.it,
  project_4_brief_description: project_4_brief_description.it,
  project_4_description: project_4_description.it,
  project_5_name: project_5_name.it,
  project_5_brief_description: project_5_brief_description.it,
  project_5_description: project_5_description.it,
  project_6_name: project_6_name.it,
  project_6_brief_description: project_6_brief_description.it,
  project_6_description: project_6_description.it,

  show_more_button: show_more_button.it,
};
