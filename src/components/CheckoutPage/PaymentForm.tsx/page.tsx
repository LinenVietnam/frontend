'use client'
import BillingDetail from "./BillingDetail"
import YourOrder from "../YourOrder/page"
import { useState } from "react";

interface FormData {
    nameProductOrder: string;
    nameUserOrder: string;
    addressOrder: string;
    phoneNumberOrder: number;
    amountOrder: string;
    totalOrder: number;
    companyNameOrder: string;
    emailOrder: string;
    noteOrder: string;
    shippingMethodOrder: string;
    street: string;
    ward: string;
    district: string;
    city: string;
}

function PaymentForm() {

    const [formData, setFormData] = useState<FormData>({
        nameProductOrder: '',
        nameUserOrder: '',
        addressOrder: '',
        phoneNumberOrder: 0,
        amountOrder: '',
        totalOrder: 0,
        companyNameOrder: '',
        emailOrder: '',
        noteOrder: '',
        shippingMethodOrder: '',
        street: '',
        ward: '',
        district: '',
        city: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <section id="payment-form" className="w-[90%] mx-auto mt-20 mb-20">
            <div className="row">
                <div className="flex flex-col md:flex-row gap-10">
                    <BillingDetail handleChange={handleChange} />
                    <YourOrder formData={formData} />
                </div>
            </div>
        </section>
    )
}

export default PaymentForm