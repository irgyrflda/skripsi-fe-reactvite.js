import {
  GET_UNIT_UT_REQUEST,
  GET_UNIT_UT_SUCCESS,
  GET_UNIT_UT_FAILURE,
} from './actionType';

const initialState = {
  reducerUnitUT: {
    isLoading: false,
    data: [],
    error: null,
  },
};

const BerandaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UNIT_UT_REQUEST:
      return {
        ...state,
        reducerUnitUT: action.payload,
      };
    case GET_UNIT_UT_SUCCESS:
      return {
        ...state,
        reducerUnitUT: action.payload,
      };
    case GET_UNIT_UT_FAILURE:
      return {
        ...state,
        reducerUnitUT: action.payload,
      };

    default:
      return state;
  }
};

export default BerandaReducer;
