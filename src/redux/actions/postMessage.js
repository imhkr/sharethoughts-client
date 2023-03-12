import api from "./api.js";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
  SET_CURRENTID: "SET_CURRENTID",
};
export const setId = (id) => {
  return {
    type: ACTION_TYPES.SET_CURRENTID,
    payload: id,
  };
};
export const fetchAll = () => {
  return (dispatch) => {
    api
      .postMessage()
      .fetchAll()
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.FETCH_ALL,
          payload: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const create = (data, onSuccess) => {
  console.log("data ", data);
  return (dispatch) => {
    api
      .postMessage()
      .create(data)
      .then((res) => {
        dispatch({
          type: ACTION_TYPES.CREATE,
          payload: res.data,
        });
        onSuccess();
      })
      .catch((err) => console.log(err));
  };
};

export const update = (id, data, onSuccess) => {
  return (dispatch) => {
    api
      .postMessage()
      .update(id, data)
      .then((res) => {
        dispatch({
          type: ACTION_TYPES.UPDATE,
          payload: res.data,
        });
        onSuccess();
      })
      .catch((err) => console.log(err));
  };
};

export const Delete = (id, onSuccess) => {
  return (dispatch) => {
    api
      .postMessage()
      .delete(id)
      .then((res) => {
        dispatch({
          type: ACTION_TYPES.UPDATE,
          payload: id,
        });
        onSuccess();
      })
      .catch((err) => console.log(err));
  };
};
