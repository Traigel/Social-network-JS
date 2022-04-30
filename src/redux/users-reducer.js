const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [ 
    {
    id: 1,
    photoUrl: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    followed: false,
    fullname: "Dimych",
    status: "I am a boss",
    location: { city: "Minsk", country: "Belarus" },
    },
    {
    id: 2,
    photoUrl: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    followed: true,
    fullname: "Sasha",
    status: "I am a boss too",
    location: { city: "Warshava", country: "Poland" },
    },
    {
    id: 3,
    photoUrl: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    followed: false,
    fullname: "Vladimir",
    status: "I am a boss too",
    location: { city: "Berlin", country: "Geargi" },
    },
] 
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...state.users] };
}
    default:
      return state;
  }
};

export let followAC = (userId) => {
  return { type: FOLLOW, userId };
};

export let unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId };
};

export let setUsersAC = (users) => {
  return { type: SET_USERS, users };
};

export default usersReducer;
