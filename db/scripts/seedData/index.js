const initialUser = {
  name: 'Alice',
  email: 'alice@alice.com',
  password: 'password',
  personality: 'INFP',
  start_date: '2020-09-20',
  points: 0,
};

const initialPost = [
  {
    userId: 1,
    post: 'I love the course',
    multimedia: null,
    date: '2020-09-20',
    favorite: true,
  },
  {
    userId: 1,
    post: 'I hate the course',
    multimedia: null,
    date: '2020-09-20',
    favorite: false,
  },
];

const initialMood = {
  userId: 1,
  mood: 5,
  date: '2020-09-20',
};

const initialTrophy = {
  id: 1,
  userId: 1,
  trophy_name: 'Welcome Trophy',
  date: '2020-09-20',
};

const initialQuote = {
  id: 1,
  userId: 1,
  quote:
    "Try not to be so positional on your stance when working in teams, it's good to stay open minded to other's opinions and ideas.",
  date: '20/09/2020',
};

const initialNotification = {
  id: 1,
  userId: 1,
  notification: 'How have you found School of Code today?',
};

module.exports = {
  initialUser,
  initialPost,
  initialMood,
  initialTrophy,
  initialQuote,
  initialNotification,
};
