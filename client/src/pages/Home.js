import React, { Component } from "react";
import List from "../components/List/List";
import axios from "axios";
import { Link } from "react-router-dom";

const url = "http://localhost:8080";

export default class Home extends Component {
  state = {
    websiteVid: [],
  };

  componentDidMount() {
    axios
      .get(`${url}/websites`)
      .then((res) => {
        this.setState({ websiteVid: res.data });
        return axios.get(`${url}/websites/${res.data[0].id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      this.state.websiteVid && (
        <div>
          <List websiteVid={this.state.websiteVid} />
        </div>
      )
    );
  }
}
