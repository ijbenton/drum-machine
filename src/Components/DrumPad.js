import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Styles/DrumPad.scss';
import { connect } from 'react-redux';
import { updateDisplay } from '../actions/displayActions';

import { activeStyle, inactiveStyle } from '../Sounds/sounds';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: inactiveStyle
    };
    this.audio = React.createRef();
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.activatePad = this.activatePad.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  activatePad() {
    if (this.props.power) {
      this.state.padStyle.backgroundColor === 'red'
        ? this.setState({
            padStyle: inactiveStyle
          })
        : this.setState({
            padStyle: activeStyle
          });
    }
  }
  playAudio() {
    const node = this.audio.current;
    node.currentTime = 0;
    node.play();
    this.activatePad();
    setTimeout(() => this.activatePad(), 100);
    this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playAudio();
    }
  }
  render() {
    return (
      <button
        className="drum-pad"
        id={this.props.clipId}
        onClick={this.playAudio}
        style={this.state.padStyle}
      >
        <audio
          id={this.props.keyTrigger}
          src={this.props.clip}
          className="clip"
          ref={this.audio}
        />
        {this.props.keyTrigger}
      </button>
    );
  }
}

DrumPad.propTypes = {
  updateDisplay: PropTypes.func.isRequired,
  currentDisplay: PropTypes.string,
  power: PropTypes.bool
};

const mapStateToProps = state => ({
  currentDisplay: state.display.clipId,
  power: state.display.power
});

export default connect(
  mapStateToProps,
  { updateDisplay }
)(DrumPad);
