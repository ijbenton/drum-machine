import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { adjustVolume } from '../actions/displayActions';

import '../styles/_mixer.scss';

const Mixer = props => {
  const clips = [].slice.call(document.getElementsByClassName('clip'));
  clips.forEach(sound => {
    sound.volume = props.volume;
  });

  return (
    <div className="volume-slider">
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={props.volume}
        onChange={props.adjustVolume}
      />
    </div>
  );
};

Mixer.propTypes = {
  adjustVolume: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  volume: state.display.volume
});

export default connect(mapStateToProps, { adjustVolume })(Mixer);
