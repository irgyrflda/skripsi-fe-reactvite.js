import axios from 'axios';
import {
  BaseUrl,
  BaseUrlFmcdm
} from '../../Api/BaseUrl';
import {
  EndpointBeranda,
  EndpointFmcdm
} from '../../Api/Endpoint/Beranda';
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

export const getUnitUTRequest = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_UNIT_UT_REQUEST,
      payload: {
        isLoading: true,
        data: [],
        error: null,
      },
    });

    axios({
      method: 'GET',
      url: `${BaseUrl}${EndpointBeranda.getUnit}`,
    })
      .then((res) => {
        dispatch({
          type: GET_UNIT_UT_SUCCESS,
          payload: {
            isLoading: false,
            data: res.data.data,
            error: null,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_UNIT_UT_FAILURE,
          payload: {
            isLoading: false,
            data: [],
            error: err,
          },
        });
      });
  };
};

export const postBeras = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: POST_FMCDM_REQUEST,
      payload: {
        isLoading: true,
        data: [],
        error: null,
      },
    });

    try {
      const res = await axios({
        method: 'POST',
        url: `${BaseUrlFmcdm}${EndpointFmcdm.postFmcdm}`,
        data: payload
      })
      dispatch({
        type: POST_FMCDM_SUCCESS,
        payload: {
          isLoading: false,
          data: res.data.data,
          error: null,
        },
      });
      // console.log(`${BaseUrlFmcdm}${EndpointFmcdm.postFmcdm}`, 'url');
      // console.log("dataaaaa =>", res.data.data)
      return res

    } catch (error) {
      dispatch({
        type: POST_FMCDM_FAILURE,
        payload: {
          isLoading: false,
          data: [],
          error: err,
        },
      });
    }

    // axios({
    //   method: 'POST',
    //   url: `${BaseUrlFmcdm}${EndpointFmcdm.postFmcdm}`,
    //   data: payload
    // })
    //   .then((res) => {
    //     dispatch({
    //       type: POST_FMCDM_SUCCESS,
    //       payload: {
    //         isLoading: false,
    //         data: res.data.data,
    //         error: null,
    //       },
    //     });
    //     console.log("res", res)
    //     return res
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: POST_FMCDM_FAILURE,
    //       payload: {
    //         isLoading: false,
    //         data: [],
    //         error: err,
    //       },
    //     });
    //   });
  };
};

export const getBerasParamsKualitas = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: GET_BERAS_PARAMS_KUALITAS_REQUEST,
      payload: {
        isLoading: true,
        data: [],
        error: null,
      },
    });

    axios({
      method: 'GET',
      url: `${BaseUrlFmcdm}${EndpointFmcdm.postFmcdm}/${payload}`,
    })
      .then((res) => {
        dispatch({
          type: GET_BERAS_PARAMS_KUALITAS_SUCCESS,
          payload: {
            isLoading: false,
            data: res.data.data,
            error: null,
          },
        });
        return res.data.data
      })
      .catch((err) => {
        dispatch({
          type: GET_BERAS_PARAMS_KUALITAS_FAILURE,
          payload: {
            isLoading: false,
            data: [],
            error: err,
          },
        });
      });
  };
};