import axios from 'axios';

const RECEIVE_TACOS = 'RECEIVE_TACOS';
const UPSERT_TACO = 'UPSERT_TACO';

// an action creator RETURNS an action
export const receiveTacos = data => ({
  type: RECEIVE_TACOS,
  tacosFromServer: data
});

export const fetchTacos = () => {
  return dispatch => {
    return axios
      .get('/api/tacos')
      .then(res => res.data)
      .then(tacos => {
        const action = receiveTacos(tacos);
        dispatch(action);
      });
  };
};

export const upsertTaco = data => ({
  type: UPSERT_TACO,
  oneTacoFromServer: data
});

export const fetchOneTaco = id => {
  return dispatch => {
    return axios.get(`/api/tacos/${id}`)
    .then(res => res.data)
    .then(taco => {
      const action = upsertTaco(taco);
      dispatch(action);
    });
  };
};

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TACOS:
      return action.tacosFromServer;
    case UPSERT_TACO:
      return state.filter(
        taco => taco.id !== action.oneTacoFromServer.id
      )
      .concat(action.oneTacoFromServer);
    default:
      return state;
  }
};

export default reducer;
