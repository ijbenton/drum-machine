import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Styles/Display.scss';

const Display = props => {
  return (
    <div id="display">
      <p>{props.power ? props.currentDisplay : ''}</p>
    </div>
  );
};

Display.propTypes = {
  currentDisplay: PropTypes.string,
  power: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  currentDisplay: state.display.display,
  power: state.display.power
});

export default connect(mapStateToProps)(Display);
