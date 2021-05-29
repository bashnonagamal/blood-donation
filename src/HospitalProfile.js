import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './App.css';
import hospital from './assets/hospital.jpeg'


function HospitalProfile() {
    let { id } = useParams();


    return (
        <div class="row gutters-sm my-5 mx-5">
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex flex-column align-items-center text-center">
                            <img src={hospital} class="rounded-circle" width="150" height="150" style={{ objectFit: 'cover' }} />
                            <div class="mt-3">
                                <h4>{id}</h4>
                                <p class="text-secondary mb-1">Zamalik, Cairo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Hospital Name</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                {id}
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Email</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                {'support@' + id + ".com"}
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Phone</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                (239) 816-9029
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Mobile</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                (320) 380-4539
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Address</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                Bay Area, San Francisco, CA
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="mb-0">A+ is needed</h5>
                                </div>
                                <div><button type="submit" className="btn btn-red text-center rounded">Donate</button></div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="mb-0">AB- is needed</h5>
                                </div>
                                <div><button type="submit" className="btn btn-red text-center rounded">Donate</button></div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="mb-0">O+ is needed</h5>
                                </div>
                                <div><button type="submit" className="btn btn-red text-center rounded">Donate</button></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default HospitalProfile;
