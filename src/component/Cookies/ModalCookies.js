import React from 'react';
import {
    Link
} from 'react-router-dom';
import { useCookies } from "react-cookie";
import Modal from 'react-modal';
import './ModalCookies.css';

const ModalCookies=() =>{

    const [cookies, setCookie] = useCookies(["allowcookies"]);

    const handleCookie =() =>{
        setCookie("allowcookies", true, { path: "/", expires: new Date(Date.now() + (100 * 24 * 60 * 60 * 1000)) });
    }

    const closeModal=()=> {
        handleCookie();
    }

    return (
        <Modal isOpen={cookies.allowcookies ? false : true} className="Modal" overlayClassName="Overlay">
            <h6>PRIVACY & COOKIES POLICY</h6>
            <p className="text-justify">
                I use cookies to personalize content, ads and to analyze the traffic.
                I also share information about your use of my website with my social media,
                advertising and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services.
                If you continue browsing, it means that you accept the use of cookies on this website.
            </p>
            <div className="text-right">
                <button
                    className="btn btn-secondary mr-2 mb-2"
                    onClick={closeModal}>
                    OK
                </button>
                <Link to="/privacy"
                    className="btn btn-outline-secondary mb-2"
                    onClick={closeModal}>
                    Learn More
                </Link>
            </div>
        </Modal>
    );
}

export default ModalCookies;
