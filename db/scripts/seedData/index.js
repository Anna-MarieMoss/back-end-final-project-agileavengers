const initialUser = {
  id: 1,
  name: 'Alice',
  email: 'alice@alice.com',
  password: 'password',
  personality: 'INFP',
  start_date: '20/9/2019',
  points: 0,
};

const initialPost = {
  id: 1,
  user_id: 1,
  post: 'I love the course',
  multimedia: null,
  date: '20/9/2019',
  favorite: true,
};

const initialMood = {
  id: 1,
  user_id: 1,
  mood: 5,
  date: '20/9/2019',
};

const initialTrophy = {
  id: 1,
  user_id: 1,
  trophy_name: 'Welcome Trophy',
  date: '20/9/2019',
};

const initialQuote = {
  id: 1,
  user_id: 1,
  quote:
    "Try not to be so positional on your stance when working in teams, it's good to stay open minded to other's opinions and ideas.",
  date: '20/09/2020',
};

const initialNotification = {
  id: 1,
  user_id: 1,
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
