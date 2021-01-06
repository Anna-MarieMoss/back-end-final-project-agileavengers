const initialUser = {
  name: 'Alice',
  email: 'alice@alice.com',
  password: 'none',
  personality: 'none',
  start_date: 'none',
  points: 0,
};

const initialPosts = [
  {
    userId: 1,
    text: 'I love the course',
    image: 'none',
    video: 'none',
    audio: 'none',
    date: '2020-09-20',
    favorite: true,
  },
  {
    userId: 1,
    text: 'I hate the course',
    image: 'none',
    video: 'none',
    audio: 'none',
    date: '2020-09-20',
    favorite: false,
  },
];

const initialMoods = [
  {
    userId: 1,
    mood: 5,
    date: '2020-09-20',
  },
  {
    userId: 1,
    mood: 3,
    date: '2020-09-21',
  },
  {
    userId: 1,
    mood: 2,
    date: '2020-09-22',
  },
  {
    userId: 1,
    mood: 4,
    date: '2020-09-23',
  },
  {
    userId: 1,
    mood: 2,
    date: '2020-09-24',
  },
  {
    userId: 1,
    mood: 1,
    date: '2020-09-25',
  },
  {
    userId: 1,
    mood: 4,
    date: '2020-09-26',
  },
  {
    userId: 1,
    mood: 5,
    date: '2020-09-27',
  },
  {
    userId: 1,
    mood: 3,
    date: '2020-09-28',
  },
  {
    userId: 1,
    mood: 2,
    date: '2020-09-29',
  },
];

const initialTrophy = [
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
  }
];

const initialQuote = {
  id: 1,
  userId: 1,
  quote:
    'Try not to be so positional on your stance when working in teams, it is good to stay open minded to other opinions and ideas.',
  date: '20/09/2020',
};

const initialNotification = {
  id: 1,
  userId: 1,
  notification: 'How have you found School of Code today?',
};

module.exports = {
  initialUser,
  initialPosts,
  initialMoods,
  initialTrophy,
  initialQuote,
  initialNotification,
};
