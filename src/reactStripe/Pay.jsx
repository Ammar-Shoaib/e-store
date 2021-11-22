import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
// import { useHistory } from 'react-router'

const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null)
    // const history = useHistory()

    const KEY = 'pk_test_51JTMjGSGGbzAGpOHGWLYTpK2cbth0XMk3BROSM49s3IEEmZM8mtHspjrlkwtAXFasT8aljkQ3xpcgBfalxHCJrrX00GyWWR1lE'

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post('http://localhost:5000/api/checkout/payment', {
                    tokenId:stripeToken.id,
                    amount:2000
                })
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken])

    const onToken = (token) => {
        setStripeToken(token)
    }

    return (
        <div style={{
            display:"flex",
            height:"100vh",
            alignItems:"center",
            justifyContent:"center"
        }}>
            <StripeCheckout
                name='XYZ Shop'
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIK9sjX5un1L83nejQwH5EGNKrDsEAfWSJPg&usqp=CAU'
                billingAddress
                shippingAddress
                description='Your total is $20'
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >
                <button style={{
                    padding:"15px 25px",
                    fontSize:"18px",
                    fontWeight:"600",
                    background:"teal",
                    cursor:"pointer",
                    border:"none",
                    borderRadius:"10px"
                }}>
                    <Link style={{ textDecoration:"none", color:"white" }} to='/success'>Pay</Link>
                </button>
            </StripeCheckout>
        </div>
    )
}

export default Pay
