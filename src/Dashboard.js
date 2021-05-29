import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Dashboard() {

    return (
        <div className="my-4 mx-4">
            <h3 class="text-center mb-4">Nearest Hospitals</h3>
            <div className="row ">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Ain Shams Specialized Hospital</h5>
                            <p className="card-text">A+ Donor is urgently needed</p>
                            <button type="submit" className="btn btn-red text-center rounded">Donate</button>
                            <a type="submit" className="btn btn-red text-center rounded ml-3">Tell a Friend</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Anglo American Hospital </h5>
                            <p className="card-text">O Donor is needed</p>
                            <button type="submit" className="btn btn-red text-center rounded">Donate</button>
                            <a type="submit" className="btn btn-red text-center rounded ml-3">Tell a Friend</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Arab Contractor Hospital</h5>
                            <p className="card-text">AB+ Donor is needed</p>
                            <button type="submit" className="btn btn-red text-center rounded">Donate</button>
                            <a type="submit" className="btn btn-red text-center rounded ml-3">Tell a Friend</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Others */}
            <h3 class="text-center mb-4">Others</h3>
            <div className="row ">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Ain Shams Specialized Hospital</h5>
                            <p className="card-text">A+ Donor is urgently needed</p>
                            <button type="submit" className="btn btn-red text-center rounded">Donate</button>
                            <a type="submit" className="btn btn-red text-center rounded ml-3">Tell a Friend</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Anglo American Hospital </h5>
                            <p className="card-text">O Donor is needed</p>
                            <button type="submit" className="btn btn-red text-center rounded">Donate</button>
                            <a type="submit" className="btn btn-red text-center rounded ml-3">Tell a Friend</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Arab Contractor Hospital</h5>
                            <p className="card-text">AB+ Donor is needed</p>
                            <button type="submit" className="btn btn-red text-center rounded">Donate</button>
                            <a type="submit" className="btn btn-red text-center rounded ml-3">Tell a Friend</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
