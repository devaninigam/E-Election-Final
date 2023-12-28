import { call, put } from "redux-saga/effects"
import { GetPartyCnnectAxios, PostPartyConnectAxios } from "../../Admin/PartyConnect/api/api";
import {
  GET_PARTYCONNECT_ERROR,
  GET_PARTYCONNECT_SUCCESS,
  POST_PARTYCONNECT_ERROR,
  POST_PARTYCONNECT_SUCCESS
} from "../../Admin/PartyConnect/action/action";

// GET P MANAGE 
export function* GetPartyConnectManage(action) {
  try {
    const res = yield call(GetPartyCnnectAxios, action)
    const data = res.data;
    const status = res.status;
    if (status === 200) {
      yield put({ type: GET_PARTYCONNECT_SUCCESS, data })
    } else {
      yield put({ type: GET_PARTYCONNECT_ERROR, data })
    }
  } catch (error) {
    yield put({ type: GET_PARTYCONNECT_ERROR, error })
  }
}

// POST ELECTION MANAGE  
export function* PostPartyConnectManage(action) {
  try {
    const res = yield call(PostPartyConnectAxios, action);
    const data = res.data;
    const status = res.status;
    if (status === 200 || status === 201) {
      yield put({ type: POST_PARTYCONNECT_SUCCESS, data })
    } else {
      yield put({ type: POST_PARTYCONNECT_ERROR, data })
    }
  } catch (error) {
    yield put({ type: POST_PARTYCONNECT_ERROR, error })
  }

}