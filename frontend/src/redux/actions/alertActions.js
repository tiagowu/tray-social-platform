export const ALERT_TYPES = {
  ALERT: "ALERT",
};

export const clearAlert = () => (dispatch) => {
  dispatch({
    type: "ALERT",
  });
};
