import React from 'react';
import { connect } from 'react-redux';
import { updateKit } from '../actions/displayActions';
import './Styles/Switch.scss';
import PropTypes from 'prop-types';

const KitSwitch = props => {
  let kitSlider = '';
  let bgChange = '';
  if (props.currentPadBankId === 'Smooth Piano Kit') {
    kitSlider = 'checked';
    bgChange = 'bgChange';
  } else {
    kitSlider = '';
    bgChange = '';
  }
  return (
    <div className="control">
      <p>{props.text}</p>
      <label className="switch">
        <input type="checkbox" onClick={props.updateKit} />
        <span className={`slider-before ${kitSlider}`} />
        <span className={`slider ${bgChange}`} />
      </label>
    </div>
  );
};
KitSwitch.propTypes = {
  currentPadBankId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  currentPadBankId: state.display.currentPadBankId
});

export default connect(
  mapStateToProps,
  { updateKit }
)(KitSwitch);
