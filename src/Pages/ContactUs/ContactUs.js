import React from 'react';
import "./ContactUs.css"

const ContactUs = () => {
    return (
        <div className="contact-container row m-0 py-5 mx-auto align-items-center">
            {/* <div className="col-3 col-md-1 col-sm-1"></div> */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-white mt-5 p-2">
                <h4>Follow Us On</h4>
                <p>
                    <a className="px-3" href="/home"><i className="fab fa-twitter"> </i></a>
                    <a className="px-3" href="/home"><i className="fab fa-facebook"> </i></a>
                    <a className="px-3" href="/home"><i className="fab fa-instagram"> </i></a>
                </p>
                <p> <i className="fas fa-phone-volume"></i> +88-01893600000</p>
                <p> <i className="fas fa-envelope"></i> elerning.bd@gmail.com</p>
                <address>
                    <p>20 Rangamati, Chittagong, Bangladesh</p>
                </address>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 py-2 px-5">
                <h3 className="fw-bold text-success p-5 text-danger">Contact Us</h3>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label text-white fw-bold">Name</label>
                    <div className="col-sm-10">
                        <input placeholder="Name" type="text" className="form-control" id="name" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label text-white fw-bold">Email</label>
                    <div className="col-sm-10">
                        <input placeholder="Email" type="email" className="form-control" id="" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label text-white fw-bold">Phone</label>
                    <div className="col-sm-10">
                        <input placeholder="number" type="number" className="form-control" id="" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label text-white fw-bold">Message</label>
                    <div className="col-sm-10">
                        <textarea cols="30" rows="2" placeholder="Message" type="text" className="form-control" id="" />
                    </div>
                </div>
                <button className="btn btn-danger py-2 px-4" type="submit">Send</button>
            </div>
            {/* <div className="col-3 col-md-1"></div> */}
        </div >
    );
};

export default ContactUs;