const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
users: [],
pageSize: 100,            //Количество пользователей на странице (count)
totalUsersCount: 0,     //Сколько всего пользователей 
currentPage: 1,         // текущая страница со старта это 1 (page)
isFetching: false,      //Отображения gif картинки загрузки
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
      return {...state, users: action.users};
};
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage};
};
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.totalCount};
};
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching};
};
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
export let setCurrentPageAC = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage};
};
export let setTotalUsersCountAC = (totalCount) => {
  return { type: SET_TOTAL_USERS_COUNT, totalCount};
};
export let toggleIsFetchingAC = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching};
};

export default usersReducer;
