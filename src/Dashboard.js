import React from 'react';
import './App.css';
import Hospital from './assets/hospital.jpeg'

function Dashboard() {

    return (
        <div>
            <div className="my-4 mx-4">
                <div className="px-4 my-2 d-flex flex-wrap align-items-center justify-content-between">
                    <h3 className="col-md-9 col-lg-10 col-sm-12">Nearest Hospitals</h3>
                    <a type="submit" data-toggle="modal" data-target="#modalLoginForm" className="btn btn-red text-center rounded text-light btn-circle col-md-3 col-lg-2 col-sm-5">Request Donation</a>
                </div>

                <div className="row mx-4 justify-content-between">
                    <div class="card col-lg-4 col-md-5 col-sm-12 col-12 my-2 " style={{ width: '18rem' }}>
                        <img class="card-img-top" src={Hospital} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Ain Shams Specialized Hospital</h5>
                            <p class="card-text">A+ Donor is urgently needed</p>
                            <div className="d-flex justify-content-between">
                                <a type="submit" className="btn btn-red text-center rounded text-light btn-circle">Donate</a>
                                <button type="button" class="btn btn-primary btn-floating">
                                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card col-lg-4 col-md-5 col-sm-12 col-12 my-2" style={{ width: '18rem' }}>
                        <img class="card-img-top" src={Hospital} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Ain Shams Specialized Hospital</h5>
                            <p class="card-text">A+ Donor is urgently needed</p>
                            <div className="d-flex justify-content-between">
                                <a type="submit" className="btn btn-red text-center rounded text-light btn-circle">Donate</a>
                                <button type="button" class="btn btn-primary btn-floating">
                                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card col-lg-4 col-md-5 col-sm-12 col-12 my-2" style={{ width: '18rem' }}>
                        <img class="card-img-top" src={Hospital} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Ain Shams Specialized Hospital</h5>
                            <p class="card-text">A+ Donor is urgently needed</p>
                            <div className="d-flex justify-content-between">
                                <a type="submit" className="btn btn-red text-center rounded text-light btn-circle">Donate</a>
                                <button type="button" class="btn btn-primary btn-floating">
                                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Others */}
                <h3 class="mb-4 mt-3 ml-4">Others</h3>
                <div className="row mx-4 justify-content-between">
                    <div class="card col-lg-4 col-md-5 col-sm-12 col-12 my-2 " style={{ width: '18rem' }}>
                        <img class="card-img-top" src={Hospital} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Ain Shams Specialized Hospital</h5>
                            <p class="card-text">A+ Donor is urgently needed</p>
                            <div className="d-flex justify-content-between">
                                <a type="submit" className="btn btn-red text-center rounded text-light btn-circle">Donate</a>
                                <button type="button" class="btn btn-primary btn-floating">
                                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card col-lg-4 col-md-5 col-sm-12 col-12 my-2" style={{ width: '18rem' }}>
                        <img class="card-img-top" src={Hospital} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Ain Shams Specialized Hospital</h5>
                            <p class="card-text">A+ Donor is urgently needed</p>
                            <div className="d-flex justify-content-between">
                                <a type="submit" className="btn btn-red text-center rounded text-light btn-circle">Donate</a>
                                <button type="button" class="btn btn-primary btn-floating">
                                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card col-lg-4 col-md-5 col-sm-12 col-12 my-2" style={{ width: '18rem' }}>
                        <img class="card-img-top" src={Hospital} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Ain Shams Specialized Hospital</h5>
                            <p class="card-text">A+ Donor is urgently needed</p>
                            <div className="d-flex justify-content-between">
                                <a type="submit" className="btn btn-red text-center rounded text-light btn-circle">Donate</a>
                                <button type="button" class="btn btn-primary btn-floating">
                                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <h4 class="modal-title w-100 font-weight-bold">Request Donation</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body mx-3">
                            <div class="md-form mb-5">
                                <label data-error="wrong" data-success="right" for="defaultForm-email">Blood Type</label>
                                <select className="form-control">
                                    <option selected>Select Blood Type</option>
                                    <option value="1">O+</option>
                                    <option value="2">O-</option>
                                    <option value="3">A+</option>
                                    <option value="4">A-</option>
                                    <option value="5">B+</option>
                                    <option value="6">B-</option>
                                    <option value="7">AB+</option>
                                    <option value="8">AB-</option>
                                </select>
                            </div>

                            <div class="md-form mb-4">
                                <label data-error="wrong" data-success="right" for="defaultForm-pass">Description</label>
                                <input type="password" id="defaultForm-pass" class="form-control validate" />
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <a type="submit" className="btn btn-red text-center rounded text-light btn-circle">Request</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;
