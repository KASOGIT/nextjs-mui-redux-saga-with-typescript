export const actionTypes = {
  LOAD_DATA: "LOAD_DATA",
  LOAD_DATA_SUCCESS: "LOAD_DATA_SUCCESS",
  LOAD_DATA_FAILURE: "LOAD_DATA_FAILURE"
};

export function loadData() {
  return {
    type: actionTypes.LOAD_DATA
  };
}

export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    payload: {
      data: data
    }
  };
}

export function loadDataFailure(error) {
  return {
    type: actionTypes.LOAD_DATA_FAILURE,
    payload: {
      error: error
    }
  };
}
