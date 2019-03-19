import React from 'react';
import axios from 'axios';
import ListUsers from './listUsers'
import DropDownMenu from './dropDownMenu'

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
        const data = res.data;
        let users = data.map(({ name, id }) => ({
          name,
          id
        }));
        this.setState({ users });
      })
  }

  setUser = (user) => {
    this.setState({ currentUser: user.name });
    this.getAlbums(user.id);
  }

  getAlbums = (user) => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${user}`)
      .then(res => {
        const albumsData = res.data;
        let albums = albumsData.map(({ userId, title, id }) => ({
          userId,
          title,
          id
        }));
        this.setState({ albums });
      })
  }

  getPhotos = (album) => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${album}`)
      .then(res => {
        const photosData = res.data;
        let photos = photosData.map(({ url, title, id }) => ({
          url,
          title,
          id
        }));
        this.setState({ photos });
      })
  }

  render() {
      return (
        <section>
          <div>
             <ListUsers setUser={this.setUser} usersInfo={this.state.users} />
          </div>
          <div>
            {this.state.albums && (
              <DropDownMenu
                photos={this.state.photos}
                getPhotos={this.getPhotos}
                userName={this.state.userSelected}
                albums={this.state.albums}
              />
            )}
          </div>
        </section>

      )
    }
  }
