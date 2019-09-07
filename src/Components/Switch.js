import React from 'react';
import { connect } from 'react-redux';
import { powerSwitch } from '../actions/displayActions';
import './Styles/Switch.scss';
import PropTypes from 'prop-types';

const Switch = props => {
  let powerSlider = '';
  let bgChange = '';
  if (!props.power) {
    powerSlider = 'checked';
    bgChange = 'bgChange';
  } else {
    powerSlider = '';
    bgChange = '';
  }
  return (
    <div className="control">
      <p>{props.text}</p>
      <label className="switch">
        <input type="checkbox" onClick={props.powerSwitch} />
        <span className={`slider-before ${powerSlider}`} />
        <span className={`slider ${bgChange}`} />
      </label>
    </div>
  );
};

Switch.propTypes = {
  power: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  power: state.display.power
});

export default connect(
  mapStateToProps,
  { powerSwitch }
)(Switch);
