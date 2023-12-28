import { all } from "redux-saga/effects";
import {
  GetElectionRootSaga,
  GetPartyConnectRootSaga,
  GetPartyRootSaga,
  GetTotalCountRootSaga,
  PostElectionRootSaga,
  PostPartyConnectRootSaga,
  PostPartyRootSaga
} from "./Root/RootSaga";

export function* SagaIndex() {
  // all RootSaga Function Call in one Line ,
  yield all([
    //ELECTION ROOTSAGA IN SAGAINDEX
    GetElectionRootSaga(),
    PostElectionRootSaga(),
    // PARTY ROOTSAGA IN SAGAINDEX
    GetPartyRootSaga(),
    PostPartyRootSaga(),
    // PARTYCONNECT ROOTSAGA IN SAGAINDEX 
    GetPartyConnectRootSaga(),
    PostPartyConnectRootSaga(),
    //TOTAL COUNT ROOTSAGA IN SAGAINDEX
    GetTotalCountRootSaga(),
  ])
}