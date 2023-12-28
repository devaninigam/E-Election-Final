import axios from "axios";
import { BASE_URL, ELECTION_CREATE_API, ELECTION_LIST_API } from "../../../../constant";

// ELECTION GET API IS IN FUNCTION
export function GetElectionAxios() {
  return axios.get(BASE_URL + ELECTION_LIST_API).then((res) => {
    const data = res.data.data;
    const status = res.status;
    return {
      data,
      status
    }
  }).catch((error) => console.log(error))
}


// ELECTION POST API IS IN FUNCTION
export function PostElectionAxios(action) {
  console.log("API CALLING", action.payload);
  return axios.post(BASE_URL + ELECTION_CREATE_API, action.payload)
    .then((res) => {
      console.log("response is ok in api", res);
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
