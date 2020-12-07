import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPostsAndUsers = () =>  async (dispatch, getState) => {
  await dispatch(fetchPosts());
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
}

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};


export const fetchUser = userID => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${userID}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// const _fetchUser = _.memoize(async (userID, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${userID}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// })