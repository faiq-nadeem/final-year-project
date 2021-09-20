import React from 'react'
import {Link} from 'react-router-dom'

const Pricing = () => {
    const user = JSON.parse(localStorage.getItem('profile'))

    return (
        <>
            <section className="breadcrumb-area profile-bc-area">
                <div className="container">
                    <div className="content">
                        <h2 className="title extra-padding">
                            Pricing
                        </h2>
                        <ul className="breadcrumb-list extra-padding">
                            <li>
                                <a href="index.html">
                                    Home
                                </a>
                            </li>

                            <li>
                                Pricing
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="membership-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="content">
                                <div class="section-header">
                                    <h6 class="sub-title extra-padding">
                                        Upgrade Your Profile
                                    </h6>
                                    <h2 class="title">
                                        Premium Memeber Plan
                                    </h2>
                                    <p class="text">
                                        Benefit from Peyamba at its maximum you!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row m-s-top">
                        <div class="col-lg-3 col-md-6">
                            <div class="plan-info">
                                <div class="icon">
                                    <img src="assets/images/membership/icon1.png" alt="" />
                                </div>
                                <h4 class="title">
                                    Unlimited Messages 
                                </h4>
                                <p class="text">
                                    Send and receive messages
                                    with no limits 
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="plan-info">
                                <div class="icon">
                                    <img src="assets/images/membership/icon2.png" alt="" />
                                </div>
                                <h4 class="title">
                                    VIP Badge
                                </h4>
                                <p class="text">
                                    Send and receive messages
                                    with no limits 
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="plan-info">
                                <div class="icon">
                                    <img src="assets/images/membership/icon3.png" alt="" />
                                </div>
                                <h4 class="title">
                                    Unlimited matches 
                                </h4>
                                <p class="text">
                                    Send and receive messages
                                    with no limits 
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="plan-info">
                                <div class="icon">
                                    <img src="assets/images/membership/icon4.png" alt="" />
                                </div>
                                <h4 class="title">
                                    Take more messages  
                                </h4>
                                <p class="text">
                                    Send and receive messages
                                    with no limits 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row" style={{paddingBottom: '100px'}}>
                        <div class="col-lg-12">
                            <div class="pricing-plan-wrapper">
                                <div class="row">
                                    <div class="col-lg-3 col-md-6">
                                    <div class="single-plan">
                                        <p class="duration">
                                            10 Credits
                                        </p>
                                        <h4 class="number">
                                            <sup>Rs</sup>500
                                        </h4>
                                        <p class="stamet">
                                            ---
                                        </p>
                                        <Link to={{pathname:'/Payment', state:{totalBill: '500', credits: '10', userId: user?.result?._id}}} class="custom-button">Buy Now!</Link>
                                        <img class="shape" src="assets/images/membership/plan-bg.png" alt="" />
                                    </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6">
                                    <div class="single-plan">
                                        <p class="duration">
                                            25 Credits
                                        </p>
                                        <h4 class="number">
                                            <sup>Rs</sup>900
                                        </h4>
                                        <p class="stamet">
                                            ---
                                        </p>
                                        <Link to={{pathname:'/Payment', state:{totalBill: '900', credits: '25', userId: user?.result?._id}}} class="custom-button">Buy Now!</Link>
                                        <img class="shape" src="assets/images/membership/plan-bg.png" alt="" />
                                    </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6">
                                    <div class="single-plan">
                                        <p class="duration">
                                            50 Credits
                                        </p>
                                        <h4 class="number">
                                            <sup>Rs</sup>1500
                                        </h4>
                                        <p class="stamet">
                                            ---
                                        </p>
                                        <Link to={{pathname:'/Payment', state:{totalBill: '1500', credits: '50', userId: user?.result?._id}}} class="custom-button">Buy Now!</Link>
                                        <img class="shape" src="assets/images/membership/plan-bg.png" alt="" />
                                    </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6">
                                    <div class="single-plan">
                                        <p class="duration">
                                            75 Credits
                                        </p>
                                        <h4 class="number">
                                            <sup>Rs</sup>2000
                                        </h4>
                                        <p class="stamet">
                                            ---
                                        </p>
                                        <Link to={{pathname:'/Payment', state:{totalBill: '2000', credits: '75', userId: user?.result?._id}}} class="custom-button">Buy Now!</Link>
                                        <img class="shape" src="assets/images/membership/plan-bg.png" alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Pricing
