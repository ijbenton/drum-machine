import React from 'react';
import './Styles/PadKit.scss';
import { kitOne } from '../Sounds/sounds';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DrumPad from './DrumPad';

const PadKit = props => {
  let padKit;
  props.power
    ? (padKit = props.currentPadBank.map((drumObj, i, soundsArr) => {
        return (
          <DrumPad
            clipId={soundsArr[i].id}
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
