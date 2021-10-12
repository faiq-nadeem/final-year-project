import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useLocation } from "react-router"
import { useDispatch } from "react-redux"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { addUserCredits } from '../../actions/users'

const axios = require("axios")

const CARD_OPTIONS = {
    iconStyle: "solid",
    style    : {
        base: {
            fontWeight         : 500,
            fontFamily         : "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize           : "18px",
            color              : "#424770",
            fontSmoothing      : "antialiased",
            ":-webkit-autofill": {
                color: '#cccccc',
            },
            "::placeholder": {
                color: '#888',
            },
        },
        invalid: {
            iconColor: "red",
            color    : "red",
        },
    },
}

const CardField = ({ onChange }) => (
    <div className="my-input-box mt-2">
        <label>Enter Card Number</label>
        <CardElement options= {CARD_OPTIONS} onChange = {onChange} />
    </div>
)


const SubmitButton = ({ processing, error, children, disabled }) => (
    <button
        className = {`SubmitButton ${error ? "SubmitButton--error" : ""} mt-4`}
        type      = "submit"
        disabled  = {processing || disabled}
    >
        {processing ? "Processing..." : children}
    </button>
)


export default function PaymentForm(props) {

    const dispatch             = useDispatch()
    const location             = useLocation()
    const {totalBill, credits} = location.state
    const user                 = JSON.parse(localStorage.getItem('profile'))

    let history = useHistory()

    const stripe                              = useStripe()
    const elements                            = useElements()
    const [error, setError]                   = useState(null)
    const [success, setSuccess]               = useState(false)
    const [cardComplete, setCardComplete]     = useState(false)
    const [processing, setProcessing]         = useState(false)
    const billingDetails = {
        email  : user?.result?.email,
        name   : user?.result?.name
    }

    //resets state on completion
    const reset = () => {
        setError(null)
        setProcessing(false)
        setSuccess(false)
        setCardComplete(false)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        ///if stripe api is loaded
        if (!stripe || !elements) {
            return
        }

        //handle errors
        if (error) {
            console.log(error)
            elements.getElement("card").focus()
            return
        }

        if (totalBill === 0) {
            return
        }

        //start processing animation on submit button
        if (cardComplete) {
            setProcessing(true)
        } else {
            return
        }

        //STEP 1:
        //create new payment method based on card and form information
        const payload = await stripe.createPaymentMethod({
            type           : "card",
            card           : elements.getElement(CardElement),
            billing_details: billingDetails
        })

        //handle errors, otherwise set the new payment method in state
        if (payload.error) {
            setError(payload.error)
            return
        }

        //STEP 2:
        //create a new payment request and get irs client secret + id from the server
        const intentData = await axios
            .post("https://skill-me.herokuapp.com/stripe", {
                //include the bet amount
                price: totalBill,
            })
            .then(
                (response) => {
                    //SUCCESS: put client secret and id into an object and return it
                    return {
                        secret: response.data.client_secret,
                        id    : response.data.intent_id,
                    }
                },
                (error) => {
                    //ERROR: log the error and return
                    setError(error)
                    return error
                }
            )

        //STEP 3:
        //confirm the payment and use the new payment method
        const result = await stripe.confirmCardPayment(intentData.secret, {
            payment_method: payload.paymentMethod.id,
        })

        //handle errors again
        if (result.error) {
            setError(result.error)
            return
        }

        //STEP 4:
        // The payment has been processed! send a confirmation to the server
        if (result.paymentIntent.status === "succeeded") {
            const confirmedPayment = await axios
                .post("https://skill-me.herokuapp.com/confirm-payment", {
                    payment_id  : intentData.id,
                    payment_type: "stripe",
                })
                .then(
                    (response) => {
                        return response.data.success
                    },
                    (error) => {
                        console.log(error)
                        setError(error)
                        return error
                    }
                )

            if (confirmedPayment) {
                reset()

                dispatch(addUserCredits( user?.result?._id, credits))

                setSuccess(true)
            }
        }
    }
    
    return (
        // the credit card form
        <form className="p-5" onSubmit = {handleSubmit}>

            {error && (
                <>
                    <h5>Error</h5>
                    <button type = "button" onClick = {(event) => { setError(null) }}>Clear Error</button>
                </>
            )}

            {success && (
                <>
                    <h5>Payment Succeeded</h5>
                    <p>Your card payment has been confirmed</p>
                    <button type = "button" onClick = {() => { history.push("/") }}>Close</button>
                </>
            )}
            
            <div className="my-input-box">
                <label>Total Bill</label>
                <input id="bet" type="number" value={totalBill} disabled />
            </div>
            <div className="my-input-box mt-2">
                <label>Name</label>
                <input id="name" type="text" value={billingDetails.name} disabled />
            </div>
            <div className="my-input-box mt-2">
                <label>Email</label>
                <input id="email" type="email" value={billingDetails.email} disabled />
            </div>

            <CardField
                onChange={(event) => {
                    setError(event.error)
                    setCardComplete(event.complete)
                }}
            />
            
            <SubmitButton processing = {processing} error = {error} disabled = {!stripe}>
                Make Payment
            </SubmitButton>
        </form>
    )
}