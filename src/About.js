import React, { useState } from 'react';
import './App.css';


function About() {

    return (
        <div>
            <div class="about-image">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1>About Us</h1>
                            <p class="image-aboutus-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h1 class="strong">Who we are and<br />what we do</h1>
                            <p class="lead">This is the world's leading portal for<br />easy and quick </p>
                        </div>
                        <div class="col-md-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet. Nulla convallis egestas rhoncus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;