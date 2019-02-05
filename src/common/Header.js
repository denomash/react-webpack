import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Header extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <Link to="/">
            Avengers
          </Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='course' active={activeItem === 'course'} onClick={this.handleItemClick}>
            <Link to="/courses">
              Courses
            </Link>
          </Menu.Item>
          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
            <Link to="/about">
              About
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
};

export default Header;
