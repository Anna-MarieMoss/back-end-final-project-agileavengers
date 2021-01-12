const initialUsers = [
  {
    name: 'Alice',
    email: 'aliceholden01@gmail.com',
    password: '',
    personality: '',
    startDate: '2020-09-20',
    points: 0,
  },
  {
    name: 'Emma',
    email: 'erandle2211@gmail.com',
    password: '',
    personality: '',
    startDate: '2020-09-20',
    points: 0,
  },
  {
    name: 'Jeremy',
    email: 'jeremylaw2308@gmail.com',
    password: '',
    personality: '',
    startDate: '2020-09-20',
    points: 0,
  },
  {
    name: 'Isabel',
    email: 'isabelholland90@gmail.com',
    password: '',
    personality: '',
    startDate: '2020-09-20',
    points: 0,
  },
  {
    name: 'Anna-Marie',
    email: 'ambrown1976@googlemail.com',
    password: '',
    personality: '',
    startDate: '2020-09-20',
    points: 0,
  },
  {
    name: 'Mahdi',
    email: 'mahdiharoun93@gmail.com',
    password: '',
    personality: '',
    startDate: '2020-09-20',
    points: 0,
  },
];

const initialPosts = [
  {
    mood: 5,
    text: 'Had a great first day, Everyone is so friendly!',
    image: '',
    video: '',
    audio: '',
    date: '2021-01-06',
    favorite: true,
  },
  {
    mood: 3,
    text: 'Bit of a slog today but got there in the end.',
    image: '',
    video: '',
    audio: '',
    date: '2021-01-07',
    favorite: false,
  },
  {
    mood: 4,
    text: 'The day started off badly but ended really well.',
    image: '',
    video: '',
    audio: '',
    date: '2021-01-08',
    favorite: true,
  },
  {
    mood: 2,
    text: 'I really struggled today, but tomorrow is another day!',
    image: '',
    video: '',
    audio: '',
    date: '2021-01-09',
    favorite: false,
  },
  {
    image: '',
    video: '',
    audio: '',
    date: '2021-01-11',
    favorite: false,
  },
  {
    mood: 3,
    text:
      'Today was tough but I managed to get some help with my problem and it is fixed!',
    image: '',
    video: '',
    audio: '',
    date: '2021-01-11',
    favorite: false,
  },
  {
    mood: 5,
    text: 'Had a great day, everything clicked!',
    image: '',
    video: '',
    audio: '',
    date: '2021-01-12',
    favorite: true,
  },
];

const initialTrophies = [
  {
    userId: 1,
    trophyName: 'Github',
    trophyImg: null,
    awarded: true,
  },
  {
    userId: 1,
    trophyName: 'HTML',
    trophyImg: null,
    awarded: true,
  },
  {
    userId: 1,
    trophyName: 'VSCode',
    trophyImg: null,
    awarded: true,
  },
  {
    userId: 1,
    trophyName: 'JavaScript',
    trophyImg: null,
    awarded: true,
  },
  {
    userId: 1,
    trophyName: 'CSS',
    trophyImg: null,
    awarded: false,
  },
  {
    userId: 1,
    trophyName: 'Trello',
    trophyImg: null,
    awarded: false,
  },
  {
    userId: 1,
    trophyName: 'SQL',
    trophyImg: null,
    awarded: true,
  },
  {
    userId: 1,
    trophyName: 'Postman',
    trophyImg: null,
    awarded: true,
  },
  {
    userId: 1,
    trophyName: 'Jest',
    trophyImg: null,
    awarded: false,
  },
  {
    userId: 1,
    trophyName: 'React',
    trophyImg: null,
    awarded: true,
  },
  {
    userId: 1,
    trophyName: 'Docker',
    trophyImg: null,
    awarded: false,
  },
  {
    userId: 1,
    trophyName: 'AWS',
    trophyImg: null,
    awarded: false,
  },
];

// const initialQuote = {
//   userId: 1,
//   quote:
//     'Try not to be so positional on your stance when working in teams, it is good to stay open minded to other opinions and ideas.',
//   date: '20/09/2020',
// };

// const initialNotification = {
//   userId: 1,
//   notification: 'How have you found School of Code today?',
// };

module.exports = {
  initialUsers,
  initialPosts,
  initialTrophies,
};
