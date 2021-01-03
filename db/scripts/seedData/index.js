const initialUser = {
  name: "Alice",
  email: "alice@alice.com",
  password: "none",
  personality: "none",
  start_date: "none",
  points: 0,
};

const initialPost = [
  {
    userId: 1,
    text: "I love the course",
    image: "none",
    video: "none",
    audio: "none",
    date: "2020-09-20",
    favorite: true,
  },
  {
    userId: 1,
    text: "I hate the course",
    image: "none",
    video: "none",
    audio: "none",
    date: "2020-09-20",
    favorite: false,
  },
];

const initialMood = {
  userId: 1,
  mood: 5,
  date: "2020-09-20",
};

const initialTrophy = {
  id: 1,
  userId: 1,
  trophy_name: "Welcome Trophy",
};

const initialQuote = {
  id: 1,
  userId: 1,
  quote:
    "Try not to be so positional on your stance when working in teams, it's good to stay open minded to other's opinions and ideas.",
  date: "20/09/2020",
};

const initialNotification = {
  id: 1,
  userId: 1,
  notification: "How have you found School of Code today?",
};

module.exports = {
  initialUser,
  initialPost,
  initialMood,
  initialTrophy,
  initialQuote,
  initialNotification,
};
