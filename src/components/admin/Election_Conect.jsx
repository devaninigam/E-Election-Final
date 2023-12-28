import React, { useEffect, useState } from 'react'
import SideNavbar from './SideNavbar'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PARTYCONNECT_PROGRESS, POST_PARTYCONNECT_PROGRESS } from '../../Redux-saga/Admin_Code/Admin/PartyConnect/action/action'
import { GET_ELECTION_PROGRESS } from '../../Redux-Saga/Admin_Code/Admin/Election/action/action'
import { GET_PARTY_PROGRESS } from '../../Redux-Saga/Admin_Code/Admin/Partys/action/action'
import Swal from 'sweetalert2';


function Election_Conect() {

  const [edata, setEdata] = useState({
    election: "",
    party: "",
  })
  const [validation, setValidation] = useState({
    Eelection: "",
    Eparty: "",
  })


  const dispatch = useDispatch()
  const api = useSelector(state => state.PartyConnectReducer.PartyConnectData);
  const electionData = useSelector(state => state.ElectionReducer.ElectionData)
  const party = useSelector(state => state.PartyReducer.PartyData)

  useEffect(() => {
    dispatch({ type: GET_PARTYCONNECT_PROGRESS });
    dispatch({ type: GET_ELECTION_PROGRESS });
    dispatch({ type: GET_PARTY_PROGRESS });
  }, [edata]);


  const inputHandel = (e) => {
    const { name, value } = e.target
    setEdata({ ...edata, [name]: value });
  };
  const handleConectParty = () => {
    if (edata.election == "") {
      setValidation((prev) => ({
        ...prev,
        Eelection: "Select New Election "
      }))
    } else {
      setValidation((prev) => ({
        ...prev,
        Eelection: ""
      }))
    }

    if (edata.party == "") {
      setValidation((prev) => ({
        ...prev,
        Eparty: "Select New Party "
      }))
    } else {
      setValidation((prev) => ({
        ...prev,
        Eparty: ""
      }))
    }

    if (edata.election && edata.party) {
      dispatch({ type: POST_PARTYCONNECT_PROGRESS, payload: edata });
      setEdata(prevData => ({
        ...prevData,
        party: "",
      }));
      dispatch({ type: GET_PARTYCONNECT_PROGRESS })
    } else {
      // Show SweetAlert error message
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fix the validation errors before proceeding.',
      });
    }
  };

  return (
    <>
      <div className=''>
        <div className='row'>
          <Navbar />
          <SideNavbar />
          <div className='col-6'>
            <div className="container-p">
              <center className='connnect'>
                <table style={{ transform: "scale(0.9)" }} className="table">
                  <tr>
                    <th className='thead border border-1 border-dark' scope="col">
                      No.
                    </th>
                    <th className='thead border border-1 border-dark' scope="col">
                      E-Election
                    </th>
                    <th className='thead border border-1 border-dark' scope="col">
                      E-Election Party
                    </th>
                  </tr>
                  <tbody>
                    {
                      api?.map((item, index) => {
                        return (
                          <tr className='p-2' key={index}>
                            <th className='tdata'> {index + 1} </th>
                            <td className='tdata'>{item.election?.election_name}</td>
                            <td className='tdata'>{item.party?.party_name}</td>
                          </tr>
                        )
                      })
                    }

                  </tbody>
                </table>
              </center>
            </div>
          </div>
          <div className="col-3">
            <div className='lshadow'>
              <div className="partyadd">
                <label className='form-label' >E-Election Party Short Code </label>

                <select onChange={(e) => inputHandel(e)} name='election' class="form-select form-select-lg mb-2" aria-label="Default select example">
                  <option value={""} selected>Open this select menu</option>
                  {
                    electionData?.map((item, index) => (
                      <option key={index} value={item._id}>{item.election_name}</option>
                    ))
                  }
                </select>
                {validation.Eelection && <p className="error-text mb-4">{validation.Eelection}</p>}
                <label className='form-label' >E-Election Party Short Code </label>
                <select onChange={(e) => inputHandel(e)} name='party' class="form-select form-select-lg mb-2" aria-label="Default select example">
                  <option value={""} selected>Open this select menu</option>
                  {
                    party?.map((item, index) => (
                      <option key={index} value={item._id}>{item.party_name}</option>
                    ))
                  }
                </select>
                {validation.Eparty && <p className="error-text mb-4">{validation.Eparty}</p>}
              </div>
              <div className="last-btn">
                <button type="button" onClick={handleConectParty} className="smoll-btn">Conect Party</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Election_Conect