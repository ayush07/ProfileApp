import jsonPlaceholder from '../apis/jsonPlaceholder';
import axios from 'axios';
export const fetchData = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get();

    dispatch({
      type: 'FETCH_DATA',
      payload: response.data,
    });
  };
};
export const updateData = (input) => {
  return async (dispatch) => {
    console.log(input);
    const res = await axios.put(
      'https://5ede0f2ae36dd000166c7e8b.mockapi.io/user/1',
      input
    );

    dispatch({
      type: 'UPDATE_DATA',
      payload: res.data,
    });
  };
};
