import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";

class UsersContainer extends React.Component {          //Контейнерная компонента, обращаемся к ней из connect

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

 onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    };
    
  render() {
    return  <Users
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged.bind(this)}
      users={this.props.users}
      unfollow={this.props.unfollow}
      follow={this.props.follow}
    />
    
  }
};

let mapStateToProps = (state) => {  //Данные котороые мы прокидываем (через props) 
  return {                          //из state в компоненту
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
};

let mapDispatchToProps = (dispatch) => {  //При попытке изменить что-либо в компоненте
  return {                                //отправляется запрос через dispatch
    follow: (userId) => {                 //и в reduser меняется state
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
