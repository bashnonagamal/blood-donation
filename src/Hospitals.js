import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


function Hospitals() {

    return (
        <div class="my-5 mx-5">
            <div class="input-group w-100 d-flex my-4 align-items-baseline justify-content-center">
                <div class="form-outline w-100 col-md-10 col-sm-12">
                    <input type="search" id="form1" class="form-control" />
                </div>
                <Link to="#" className="btn btn-red text-center rounded col-md-2">
                    <i class="fa fa-search" aria-hidden="true"></i> Search
                </Link>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <div class="d-flex flex-wrap justify-content-between align-items-center ">
                        <div>
                            <h5 className="mb-0">Ain Shams Specialized Hospital</h5>
                            <small>Abbasia, Cairo</small>
                        </div>
                        <div ><Link to="/hospitals/Ain Shams Specialized Hospital" className="btn btn-red text-center rounded">View</Link></div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="d-flex flex-wrap justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-0">Anglo American Hospital</h5>
                            <small>Zamalek, Cairo</small>
                        </div>
                        <div><Link to="/hospitals/Anglo American Hospital" className="btn btn-red text-center rounded">View</Link></div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="d-flex flex-wrap justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-0">Arab Contractor Hospital</h5>
                            <small>Al Gabal Al Akhdar, Cairo</small>
                        </div>
                        <div><Link to="/hospitals/Arab Contractor Hospital" className="btn btn-red text-center rounded">View</Link></div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="d-flex flex-wrap justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-0">Behman Hospital</h5>
                            <small>Maadi, Cairo</small>
                        </div>
                        <div><Link to="/hospitals/Behman Hospital" className="btn btn-red text-center rounded">View</Link></div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="d-flex flex-wrap justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-0">Cairo Medical Hospital</h5>
                            <small>Heliopolis, Cairo</small>
                        </div>
                        <div><Link to="/hospitals/Cairo Medical Hospital" className="btn btn-red text-center rounded">View</Link></div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="d-flex flex-wrap justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-0">Cardiac Center</h5>
                            <small>Heliopolis, Cairo</small>
                        </div>
                        <div><Link to="/hospitals/Cardiac Center" className="btn btn-red text-center rounded">View</Link></div>
                    </div>
                </li>

            </ul>
        </div>
    );
}

export default Hospitals;
