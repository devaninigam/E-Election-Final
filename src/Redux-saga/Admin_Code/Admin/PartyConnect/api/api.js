import axios from "axios";
import { BASE_URL, PARTYCONNECT_CREATE_API, PARTYCONNECT_LIST_API } from "../../../../constant";

// PARTYCONNECTE GET API IS IN FUNCTION
export function GetPartyCnnectAxios() {
  return axios.get(BASE_URL + PARTYCONNECT_LIST_API).then((res) => {
    const data = res.data.data;
    const status = res.status;
    return {
      data,
      status
    }
  }).catch((error) => console.log(error))
}


// PARTYCONNECTE POST API IS IN FUNCTION
export function PostPartyConnectAxios(action) {
  return axios.post(BASE_URL + PARTYCONNECT_CREATE_API, action.payload)
    .then((res) => {
      const data = res.data.data;
      const status = res.status;
      return {
        data,
        status
      };
    })
    .catch((error) => {
      console.log("Error in API call", error);
      throw error; // Rethrow the error to be caught by the calling code
    });
}