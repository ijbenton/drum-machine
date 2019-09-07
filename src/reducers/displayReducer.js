import { UPDATE_DISPLAY } from '../actions/types';
import { POWER_SWITCH } from '../actions/types';
import { ADJUST_VOLUME } from '../actions/types';
import { CLEAR_DISPLAY } from '../actions/types';
import { UPDATE_KIT } from '../actions/types';
import { kitOne, kitTwo } from '../Sounds/sounds';
import { stat } from 'fs';

const initialState = {
  display: '',
  power: true,
  volume: 0.3,
  currentPadBank: kitOne,
  currentPadBankId: 'Heater Kit'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DISPLAY:
      return {
        ...state,
        display: action.payload
      };
    case UPDATE_KIT:
      if (state.power) {
        if (state.currentPadBank === kitOne) {
          return {
            ...state,
            currentPadBank: kitTwo,
            display: 'Smooth Piano Kit',
            currentPadBankId: 'Smooth Piano Kit'
          };
        } else {
          return {
            ...state,
            currentPadBank: kitOne,
            display: 'Heater Kit',
            currentPadBankId: 'Heater Kit'
          };
        }
      } else {
        return state;
      }

    case POWER_SWITCH:
      return {
        ...state,
        power: !state.power,
        display: ''
      };
    case ADJUST_VOLUME:
      return {
        ...state,
        display: `Volume: ${Math.round(action.payload * 100)}`,
        volume: action.payload
      };
    case CLEAR_DISPLAY:
      return {
        ...state,
        display: ''
      };
    default:
      return state;
  }
}
