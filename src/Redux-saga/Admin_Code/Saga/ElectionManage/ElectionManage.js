import { call, put } from "redux-saga/effects"
import { GET_ELECTION_ERROR, GET_ELECTION_SUCCESS, POST_ELECTION_ERROR, POST_ELECTION_SUCCESS } from "../../Admin/Election/action/action";
import { GetElectionAxios, PostElectionAxios , } from "../../Admin/Election/api/api";

// GET ELECTION MANAGE 
export function* GetElectionManage(action) {
  try { 
    const res = yield call(GetElectionAxios, action) 
    const data = res.data;
    const status = res.status; 
    if (status === 200) {
      yield put({ type: GET_ELECTION_SUCCESS, data })
    } else {
      yield put({ type: GET_ELECTION_ERROR, data })
    }
  } catch (error) {
    yield put({ type: GET_ELECTION_ERROR, error })
  }
}

// POST ELECTION MANAGE  
export function* PostElectionManage(action) {
  try {  
    const res = yield call(PostElectionAxios, action); 
  const data = res.data; 
    const status = res.status; 
    if (status === 200 || status === 201) { 
      yield put({ type: POST_ELECTION_SUCCESS, data })
    } else {
      yield put({ type: POST_ELECTION_ERROR, data })
      console.log(data);
    }
  } catch (error) {
    yield put({ type: POST_ELECTION_ERROR, error }) 
  }
  
}