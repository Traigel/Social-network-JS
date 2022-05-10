import React from "react";
import { connect } from "react-redux";
import { followTC, getUsersTC, setCurrentPageAC, toggleFollowingProgressAC, unfollowTC } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import * as axios from "axios";

class UsersContainer extends React.Component {
  //Контейнерная компонента, обращаемся к ней из connectd

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersTC(pageNumber, this.props.pageSize);
  };
  //Если isFetching = true, то отображается гифка, если false то нечего не отображается
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged.bind(this)}
          users={this.props.users}
          unfollowTC={this.props.unfollowTC}
          followTC={this.props.followTC}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
};

let mapStateToProps = (state) => {  //Данные котороые мы прокидываем (через props) 
  return {                          //из state в компоненту
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
};

export default connect(mapStateToProps, {followTC, setCurrentPageAC, unfollowTC, toggleFollowingProgressAC, getUsersTC} )(UsersContainer);

/*let mapDispatchToProps = (dispatch) => {      для удобства сократил запись и пишу сразу в connect
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  ...*/
