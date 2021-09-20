import React from "react"
import { useLocation } from "react-router"
import { Elements } from "@stripe/react-stripe-js"
import PaymentForm from "./paymentForm"
import { loadStripe } from "@stripe/stripe-js"

export default function PaymentComponent(props) {

    const location    = useLocation()
    const {credits} = location.state

    return (
        <>
            <section className="breadcrumb-area profile-bc-area">
                <div className="container">
                    <div className="content">
                        <h2 className="title extra-padding">
                            Pay Now
                        </h2>
                        <ul className="breadcrumb-list extra-padding">
                            <li>
                                <a href="index.html">
                                    Home
                                </a>
                            </li>

                            <li>
                                Payment
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section className="banner-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-6">
                            <div className=" wow fadeInLeft">
                                <h1 className="main-title">Ready To Enjoy</h1>
                                <h1 className="main-title" style={{color: 'yellow'}}>{credits}</h1>
                                <h1 className="main-title">Credits</h1>
                            </div>
                            <div className="p-0 mt-30 mb-30 single-story-box wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
                                <Elements stripe={loadStripe(props.keys.stripe)}>
                                    <PaymentForm />
                                </Elements>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}