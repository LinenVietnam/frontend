'use client'
import { useState } from "react";
import Order from "./Order";
import Payment from "./Payment";

interface YourOrderProps{
    formData: any
}

function YourOrder(props: YourOrderProps) {

    const {formData} = props

    return (
        <div className="your-order basis-2/5">
            <Order /> 
            <Payment formDataSend={formData} />
        </div>
    )
}

export default YourOrder