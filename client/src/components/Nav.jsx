import React, {Componet} from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'


export default class Nav extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to='/login'name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to='/new-post'name='new post' active={activeItem === 'new post'} onClick={this.handleItemClick} />
        </Menu>
      </Segment>
    )
  }
}

// const Nav = () => (
//         <div>
//   <Segment inverted>
//         <Menu inverted pointing secondary>
//           <Menu.Item name='home' />
//           <Menu.Item name='messages' />
//           <Menu.Item name='friends' />
//         </Menu>
//       </Segment>
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/login">Login</Link>
//       </li>
//       <li>
//         <Link to="/new-post">New Post</Link>
//       </li>
//     </ul>
//   </div>
// );

// export default Nav;
