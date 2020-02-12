import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DrumPad from './DrumPad';

import '../styles/_pad_kit.scss';

const PadKit = props => {
  let padKit;
  props.power
    ? (padKit = props.currentPadBank.map((drumObj, i, soundsArr) => {
        return (
          <DrumPad
            clipId={soundsArr[i].id}
            key={soundsArr[i].id}
            clip={soundsArr[i].url}
            keyTrigger={soundsArr[i].keyTrigger}
            keyCode={soundsArr[i].keyCode}
          />
        );
      }))
    : (padKit = props.currentPadBank.map((drumObj, i, soundsArr) => {
        return (
          <DrumPad
            clipId={soundsArr[i].id}
            key={soundsArr[i].id}
            clip="#"
            keyTrigger={soundsArr[i].keyTrigger}
            keyCode={soundsArr[i].keyCode}
          />
        );
      }));
  return <div className="pad-kit">{padKit}</div>;
};
PadKit.propTypes = {
  power: PropTypes.bool.isRequired,
  currentPadBank: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  power: state.display.power,
  currentPadBank: state.display.currentPadBank
});

export default connect(mapStateToProps)(PadKit);
