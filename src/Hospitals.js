import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


function Hospitals() {

    return (
        <div class="my-5 mx-5">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-0">Ain Shams Specialized Hospital</h5>
                            <small>Abbasia, Cairo</small>
                        </div>
                        <div><button type="submit" className="btn btn-red text-center rounded">View</button></div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-0">Anglo American Hospital</h5>
                            <small>Zamalek, Cairo</small>
                        </div>
                        <div><button type="submit" className="btn btn-red text-center rounded">View</button></div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-0">Arab Contractor Hospital</h5>
                            <small>Al Gabal Al Akhdar, Cairo</small>
                        </div>
                        <div><button type="submit" className="btn btn-red text-center rounded">View</button></div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-0">Behman Hospital</h5>
                            <small>Maadi, Cairo</small>
                        </div>
                        <div><button type="submit" className="btn btn-red text-center rounded">View</button></div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-0">Cairo Medical Hospital</h5>
                            <small>Heliopolis, Cairo</small>
                        </div>
                        <div><button type="submit" className="btn btn-red text-center rounded">View</button></div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-0">Cardiac Center</h5>
                            <small>Heliopolis, Cairo</small>
                        </div>
                        <div><button type="submit" className="btn btn-red text-center rounded">View</button></div>
                    </div>
                </li>
                
            </ul>
        </div>
    );
}

export default Hospitals;
