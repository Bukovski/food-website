import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Main extends Component {
  constructor() {
    super();
    this.state = {
    
    }
  }
  
  render() {
    // const { notes } = this.props;
    // const { title } = this.state;
    
    return(
      <div>
        content
      </div>
    );
  }
}

Main.defaultProps = {
  //notes: []
};

Main.propTypes = {
  //notes: PropTypes.array.isRequired,
};

export default Main;
