const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
users: [],
pageSize: 100,            //Количество пользователей на странице (count)
totalUsersCount: 0,       //Сколько всего пользователей 
currentPage: 1,           // текущая страница со старта это 1 (page)
isFetching: true,         //Отображения gif картинки загрузки
followingInProgress: [],
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
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching 
        ?[...state.followingInProgress.action.userId ]
        : state.followingInProgress.filter(id => id != action.userId)
      };
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
export let toggleFollowingProgressAC = (isFetching, userId) => {
  return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId};
};

export default usersReducer;
