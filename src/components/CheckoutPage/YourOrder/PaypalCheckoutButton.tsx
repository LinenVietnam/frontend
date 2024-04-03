'use client'
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { useState, createContext  } from "react"

const PaypalCheckoutButton = (props: any) => {
    const { product } = props
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState<string | null>(null);

    const handleApprove = (orderId: any) => {
       setPaidFor(true) 
    }

    if(paidFor){
        alert("thank you for your purchase")
    }
    if(error){
        alert(error)
    }

    return (
        <PayPalScriptProvider options={{ "clientId": "AWhi1fjekgOpsvYUyMH5Pf2GaYmgRXxxjJACNgPjazqGpBqa7CBpkfXmdqSaMcrwaE55pL0F6iQLy-o_" }}>
            <PayPalButtons
                createOrder={( data, actions ) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: product.description,
                                amount:{
                                    value: product.price
                                }
                            }
                        ]
                    })
                }}
                onClick={(data, actions) => {
                    const hasAlreadyBoughtCourse = false

                    if(hasAlreadyBoughtCourse){
                        setError("You already bought this course. go to your account")
                        return actions.reject()
                    }else{
                        return actions.resolve()
                    }
                }}
                onApprove={async( data, actions ) => {
                    const order = await actions.order?.capture()
                    console.log(order)

                    handleApprove(data.orderID)
                }}
                onCancel={() => {

                }}
                onError={(err: any) => {
                    setError(err)
                    console.log(error)
                }}
            />
        </PayPalScriptProvider>
    )
}

export default PaypalCheckoutButton