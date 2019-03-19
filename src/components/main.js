import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    users: [],
    currentUser: null,
    albums: null,
    photos: null
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  setUser = () => {
    this.setState({ currentUser: user.name });
  }

  getAlbums = () => {
    axios.get(`https://jsonplaceholder.typicode.com//albums`)
      .then(res => {
        const albums = res.data;
        this.setState({ albums });
      })
  }

  getPhotos = () => {
    axios.get(`https://jsonplaceholder.typicode.com//albums`)
      .then(res => {
        const photos = res.data;
        this.setState({ photos });
      })
  }

  render() {
      return (
        <h1>hello</h1>
      )
    }
  }
