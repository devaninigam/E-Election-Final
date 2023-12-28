import { call, put } from "redux-saga/effects" 
import { GET_PARTY_ERROR, GET_PARTY_SUCCESS, POST_PARTY_ERROR, POST_PARTY_SUCCESS } from "../../Admin/Partys/action/action"; 
import { GetPartyAxios, PostPartyAxios } from "../../Admin/Partys/api/api";

// GET PARTY MANAGE 
export function* GetPartyManage(action) {
  try { 
    const res = yield call(GetPartyAxios, action) 
    const data = res.data;
    const status = res.status; 
    if (status === 200) {
      yield put({ type: GET_PARTY_SUCCESS , data })
    } else {
      yield put({ type: GET_PARTY_ERROR, data })
    }
  } catch (error) {
    yield put({ type: GET_PARTY_ERROR, error })
  }
}

// POST PARTY MANAGE  
export function* PostPartyManage(action) {
  try {  
    const res = yield call(PostPartyAxios, action); 
  const data = res.data; 
    const status = res.status; 
    if (status === 200 || status === 201) { 
      yield put({ type: POST_PARTY_SUCCESS, data })
    } else {
      yield put({ type: POST_PARTY_ERROR, data })
      console.log(data);
    }
  } catch (error) {
    yield put({ type: POST_PARTY_ERROR, error }) 
  }
  
}