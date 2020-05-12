export const OPEN = 'NEW/APP/MODAL/OPEN';
export const CLOSE = 'NEW/APP/MODAL/CLOSE';

const initialState = {
  open: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        name: action.name,
        settings: action.settings,
        open: true
      };
    case CLOSE:
      return {
        open: false
      };
    default:
      return state;
  }
}

export const open = (name, settings = {}) => (
  (dispatch) => {
    dispatch({
      type: OPEN,
      name,
      settings
    });
  }
);

export const close = () => (
  (dispatch) => {
    dispatch({
      type: CLOSE,
    });
  }
);

