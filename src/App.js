import React, { Component } from "react";
import "./App.css";
import fetchData from "./Services/fetchData";
import { GET_USER, PRIMARY_SERVER } from "./Constants/ServerUrls";
import GithubRepos from "./Components/Githubrepos";
import { FaGithubSquare } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import LoadingIndicator from "./Components/LoadingIndicator";
import UserProfile from "./Components/UserProfile";
import { Button, InputGroup, FormControl } from "react-bootstrap";
class App extends Component {
  state = {
    searchText: "",
    userDetails: {},
    followers: -1,
    repos: [],
    redirect: false,
    followersUrl: "",
    reposUrl: "",
    avatarUrl: "",
  };
  searchDetails = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };
  onSearchSubmit = () => {
    if (this.state.searchText != "") {
      this.getUserDetails();
    }
  };
  getUserDetails = async () => {
    const { searchText } = this.state;
    try {
      const userDetails = await fetchData(GET_USER + searchText, "GET");
      debugger;
      this.setState({ userDetails: userDetails });
      if (userDetails.total_count) {
        const followersUrl = userDetails.items[0].followers_url;
        const reposUrl = userDetails.items[0].repos_url;
        const avatarUrl = userDetails.items[0].avatar_url;
        this.setState({
          followersUrl: followersUrl,
          reposUrl: reposUrl,
          avatarUrl: avatarUrl,
        });
        this.getFollowersCount(followersUrl);
        this.getReposDetails(reposUrl);
      }
    } catch (e) {
      console.error(e);
    }
    this.setState({
      searchText: "",
    });
  };

  getFollowersCount = async (url) => {
    try {
      const followersUrl = url.replace(PRIMARY_SERVER, "");
      const followersDetails = await fetchData(followersUrl, "GET");
      this.setState({ followers: followersDetails.length });
    } catch (e) {
      console.error(e);
    }
  };
  getReposDetails = async (url) => {
    try {
      const reposUrl = url.replace(PRIMARY_SERVER, "");
      const reposDetails = await fetchData(reposUrl, "GET");
      this.setState({ repos: reposDetails });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const {
      searchText,
      followers,
      repos,
      followersUrl,
      avatarUrl,
      userDetails,
    } = this.state;
    return (
      <div className="container">
        <h1 className="App">
          <FaGithubSquare className="github-icon" size={50} />
          <span>Finder</span>
        </h1>
        <div className="App">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={this.searchDetails}
              value={searchText}
            />
          </InputGroup>
          <Button variant="info" onClick={this.onSearchSubmit}>
            {"Search"}
          </Button>
        </div>
        <div className="mt-5">
          {followers >= 0 ? (
            <UserProfile
              followers={followers}
              avatarUrl={avatarUrl}
              userDetails={userDetails}
            />
          ) : (
            ""
          )}
        </div>
        <div className="m-4">
          {repos.length > 0 ? (
            <GithubRepos repos={repos} />
          ) : followersUrl != "" ? (
            <h4 className="App">No Repositories Found!</h4>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(App);
