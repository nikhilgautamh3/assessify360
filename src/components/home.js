import React from "react";
import { BrowserRouter as Routes,Route, Link } from "react-router-dom"; // Import necessary components
import Styles from './contact.module.css';
import TestPortal from '../components/test_portal'; // Import your TestPortal component
import Test_portal from "../components/test_portal";

const Home = () => {
    return (
       
       
            <>
                <div className={Styles.first_div}>
                    <img src="images/hat.png" alt="logo" />
                </div>
                <div className={Styles.second_div}>
                    <img src="images/remote.png" alt="logo" />
                </div>
                <div className={Styles.test}>
                    <div className={Styles.imageContainer}>
                        <img src="images/test.png" alt="logo" />
                    </div>
                    <div className={Styles.imageassessify}>
                        <img src="images/logo88.png" alt="logo" />
                    </div>
                    <div className={Styles.start}>Start Your Test NOW!!</div>
                    <div className={Styles.textt}>
                        <p className={Styles.go}>
                            Go to Test Portal and start your Assessment.
                        </p>
                       
                         <Link to="/Test_portal">
            <button className={Styles.goButton}>Go to Test Portal</button>
          </Link>
                    </div>
                </div>

                 
            </>
       
    )
}

export default Home;
