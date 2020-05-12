export const SET_SCREEN_SIZE = 'NEW/APP/SET_SCREEN_SIZE';

const initialState = {
  screen: {
    width: 0,
    height: 0,
    responsive: ''
  }
}

export default (state = initialState, action) => {

  let responsive = '';
  switch (action.type) {
    case SET_SCREEN_SIZE:
      responsive = 'lg';
      if (action.width <= 768) {
        responsive = 'md';
      }
      if (action.width <= 480) {
        responsive = 'sm';
      }
      if (action.width <= 320) {
        responsive = 'xs';
      }
      return {
        ...state,
        screen: {
          width: action.width,
          height: action.height,
          responsive
        }
      }
    default:
      return state
  }
}

export const setScreenSize = ({ width, height }) => (
  (dispatch) => {
    dispatch({
      type: SET_SCREEN_SIZE,
      width,
      height
    });
  }
);
