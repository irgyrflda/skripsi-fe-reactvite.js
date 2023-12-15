import {
  GET_UNIT_UT_REQUEST,
  GET_UNIT_UT_SUCCESS,
  GET_UNIT_UT_FAILURE,
  POST_FMCDM_REQUEST,
  POST_FMCDM_SUCCESS,
  POST_FMCDM_FAILURE,
  GET_BERAS_PARAMS_KUALITAS_REQUEST,
  GET_BERAS_PARAMS_KUALITAS_SUCCESS,
  GET_BERAS_PARAMS_KUALITAS_FAILURE,
} from './actionType';

const initialState = {
  reducerUnitUT: {
    isLoading: false,
    data: [],
    error: null,
  },
  reducerFmcdm: {
    isLoading: false,
    data: [],
    error: null,
  },
  reducerBeras: {
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
    case POST_FMCDM_REQUEST:
      return {
        ...state,
        reducerFmcdm: action.payload,
      };
    case POST_FMCDM_SUCCESS:
      return {
        ...state,
        reducerFmcdm: action.payload,
      };
    case POST_FMCDM_FAILURE:
      return {
        ...state,
        reducerFmcdm: action.payload,
      };
    case GET_BERAS_PARAMS_KUALITAS_REQUEST:
      return {
        ...state,
        reducerBeras: action.payload,
      };
    case GET_BERAS_PARAMS_KUALITAS_SUCCESS:
      return {
        ...state,
        reducerBeras: action.payload,
      };
    case GET_BERAS_PARAMS_KUALITAS_FAILURE:
      return {
        ...state,
        reducerBeras: action.payload,
      };

    default:
      return state;
  }
};

export default BerandaReducer;
