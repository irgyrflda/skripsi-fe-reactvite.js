import axios from 'axios';
import { BaseUrl } from '../../Api/BaseUrl';
import { EndpointBeranda } from '../../Api/Endpoint/Beranda';
import {
  GET_UNIT_UT_REQUEST,
  GET_UNIT_UT_SUCCESS,
  GET_UNIT_UT_FAILURE,
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
