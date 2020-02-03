import React, { Component } from 'react'
import './Navbar1.css';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { FaBlackTie } from 'react-icons/fa';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import Autocomplete from 'react-google-autocomplete';


export default class Navbar1 extends Component {

  state = {
    StartDate: '',
    EndDate: '',
    SelectedPlace:''
  }

  onStartChange = (date, dateString) =>{
    this.setState({ StartDate: dateString })
  }

  onEndChange = (date, dateString) =>{
  this.setState({ EndDate: dateString })
  }


    render() {
        return (
            <div>
                <div>
                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="author" content="colorlib.com" />
                    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500" rel="stylesheet" />
                    <link href="./Navbar1.css" rel="stylesheet" />
                    <div className="s002">
                        <form>
                            <fieldset>
                                <legend>SEARCH HOTEL</legend>
                            </fieldset>
                            <div className="inner-form">

                                <div className="input-field first-wrap">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                    </div>
                                    <Autocomplete
                                    style={{width: '100%'}}
                                    onPlaceSelected={(place) => {
                                      this.setState({ SelectedPlace: place })
                                    }}
                                    types={['(regions)']}
                                    componentRestrictions={{country: "in"}}
                                    />
                                </div>
                                <div className="input-field second-wrap">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                                        </svg>
                                    </div>
                                      <DatePicker onChange={this.onStartChange} />
                                </div>
                                <div className="input-field third-wrap">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                                        </svg>
                                    </div>
                                            <DatePicker onChange={this.onEndChange} />
                                </div>
                                <div className="input-field fouth-wrap">
                                    <div className="icon-wrap">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg> */}
                                    </div>
                                    <MDBDropdown>
                                        <MDBDropdownToggle caret color="primary">
                                            1 Adult
      </MDBDropdownToggle>
                                        <MDBDropdownMenu basic>
                                            <MDBDropdownItem>2 Adult</MDBDropdownItem>
                                            <MDBDropdownItem>3 Adult</MDBDropdownItem>
                                            <MDBDropdownItem>4 Adult</MDBDropdownItem>
                                            <MDBDropdownItem divider />
                                            <MDBDropdownItem>More than 4</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </div>
                                <div className="input-field fifth-wrap">
                                    <button className="btn-search" type="button">SEARCH</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}
