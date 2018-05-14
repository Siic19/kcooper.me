import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import { Popover, Icon } from 'antd'

class ResponsiveNav extends Component {
  state = {
    viewportWidth: 0,
    menuVisible: false,
  };

  componentDidMount() {
    this.saveViewportDimensions();
    window.addEventListener('resize', this.saveViewportDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.saveViewportDimensions);
  }

  handleMenuVisibility = (menuVisible) => {
    this.setState({ menuVisible });
  };

  saveViewportDimensions = throttle(() => {
    this.setState({
      viewportWidth: window.innerWidth,
    })
  }, this.props.applyViewportChange);

  render() {
    const MenuMarkup = this.props.menuMarkup;

    if (this.state.viewportWidth > this.props.mobileBreakPoint) {
      return <MenuMarkup activeLinkKey={this.props.activeLinkKey} />;
    }

    return (
      <Popover
        content={<MenuMarkup
          onLinkClick={() => this.handleMenuVisibility(false)}
          activeLinkKey={this.props.activeLinkKey}
          mobileVersion
          // className='to-override-mobile-menu-class'
          />
        }
        trigger='click'
        placement={this.props.placement}
        visible={this.state.menuVisible}
        onVisibleChange={this.handleMenuVisibility}
      >
        <Icon
          className='iconHamburger'
          type='menu'
        />
      </Popover>
    );
  }
}

ResponsiveNav.defaultProps = {
  mobileBreakPoint: 575,
  applyViewportChange: 250,
  placement: 'bottom',
};

export default ResponsiveNav
