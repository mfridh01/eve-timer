import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Eve mining timer.</h1>
        {this.props.status}
      </div>
    );
  }
}

Header.propTypes = {
  status: React.PropTypes.string,
};

export default Header;
