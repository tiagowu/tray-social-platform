import { getData } from "../../utils/fetchData";

export const PROFILE_TYPES = {
  LOADING: "LOADING",
  GET_USER: "GET_USER",
};

export const getUserProfile =
  ({ users, id, auth }) =>
  async (dispatch) => {
    if (users.every((user) => user._id !== id)) {
      try {
        dispatch({
          type: PROFILE_TYPES.LOADING,
          payload: { loading: true },
        });
        const res = await getData(`user/${id}`, auth.token);
        console.log(res);
        dispatch({
          type: PROFILE_TYPES.GET_USER,
          payload: res.data,
        });
        dispatch({
          type: PROFILE_TYPES.LOADING,
          payload: { loading: false },
        });
      } catch (error) {
        dispatch({
          type: "ALERT",
          payload: {
            error: error.response.data.msg,
          },
        });
      }
    }
  };
