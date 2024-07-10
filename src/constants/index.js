import { 
  people01, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  send, 
  shield, 
  star
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "דף הבית",
  },
  {
    id: "features",
    title: "תכונות",
  },
  {
    id: "product",
    title: "מוצרים",
  },
  {
    id: "clients",
    title: "לקוחות",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "עיצוב חדשני",
    content: "אנו מציעים עיצובים מודרניים ואינטואיטיביים המותאמים לצרכי העסק שלך.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "אבטחה מקסימלית",
    content: "אנחנו נוקטים בצעדים פרואקטיביים כדי להבטיח שהמידע שלך והעסקאות שלך יהיו מאובטחים.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "התאמה אישית",
    content: "אנחנו מציעים שירותים מותאמים אישית על מנת לעמוד בדרישות העסק שלך.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content: "הצוות של EZ נתן לנו מענה מושלם לכל הצרכים שלנו והביא לתוצאות מדהימות.",
    name: "חיים לוי",
    title: "מנכ\"ל",
    img: people01,
  },
  {
    id: "feedback-2",
    content: "העבודה עם EZ הייתה חלקה ומקצועית, והתוצאות מדברות בעד עצמן.",
    name: "דנה כהן",
    title: "מנהלת פרויקטים",
    img: people02,
  },
  {
    id: "feedback-3",
    content: "השירות שקיבלנו מ-EZ היה מקצועי ואדיב, עם תוצאות נהדרות.",
    name: "יוסי ישראלי",
    title: "בעל עסק",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "משתמשים פעילים",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "חברות שמאמינות בנו",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "עסקאות",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "קישורים שימושיים",
    links: [
      {
        name: "תוכן",
        link: "https://www.ez.com/content/",
      },
      {
        name: "כיצד זה עובד",
        link: "https://www.ez.com/how-it-works/",
      },
      {
        name: "צור",
        link: "https://www.ez.com/create/",
      },
      {
        name: "חקור",
        link: "https://www.ez.com/explore/",
      },
      {
        name: "תנאים ושירותים",
        link: "https://www.ez.com/terms-and-services/",
      },
    ],
  },
  {
    title: "קהילה",
    links: [
      {
        name: "מרכז העזרה",
        link: "https://www.ez.com/help-center/",
      },
      {
        name: "שותפים",
        link: "https://www.ez.com/partners/",
      },
      {
        name: "הצעות",
        link: "https://www.ez.com/suggestions/",
      },
      {
        name: "בלוג",
        link: "https://www.ez.com/blog/",
      },
      {
        name: "ניוזלטר",
        link: "https://www.ez.com/newsletters/",
      },
    ],
  },
  {
    title: "שותפים",
    links: [
      {
        name: "השותפים שלנו",
        link: "https://www.ez.com/our-partner/",
      },
      {
        name: "הפוך לשותף",
        link: "https://www.ez.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
