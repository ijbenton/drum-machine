import { UPDATE_DISPLAY } from './types';
import { POWER_SWITCH } from './types';
import { ADJUST_VOLUME } from './types';
import { CLEAR_DISPLAY } from './types';
import { UPDATE_KIT } from './types';

export const updateDisplay = clipId => dispatch => {
  dispatch({
    type: UPDATE_DISPLAY,
    payload: clipId
  });
};

export const updateKit = () => dispatch => {
  dispatch({
    type: UPDATE_KIT
  });
};

export const powerSwitch = () => dispatch => {
  dispatch({
    type: POWER_SWITCH
  });
};

export const adjustVolume = event => dispatch => {
  dispatch({
    type: ADJUST_VOLUME,
    payload: event.target.value
  });
  setTimeout(
    () =>
      dispatch({
        type: CLEAR_DISPLAY
      }),
    1000
  );
};
