'use client'
import { useEffect, useState } from "react";
import FormItem from "./FormItem";

interface BillingDetailProps {
    handleChange: any
}

function BillingDetail(props: BillingDetailProps) {

    const {handleChange} = props

    return (
        <div className="billing-detail basis-3/5">
            <h2 className="text-3xl mb-5">Billing details</h2>
            <div className="flex gap-3 w-full">
                <FormItem labelForm="Full name" name="nameUserOrder" onChange={handleChange} />
                <FormItem labelForm="Phone" isNumber name="phoneNumberOrder" onChange={handleChange} />
            </div>
            <FormItem labelForm="Company name(optional)" notImportantItem onChange={handleChange} name="companyNameOrder" />
            <FormItem labelForm="Address" onChange={handleChange} name="addressOrder" />
            <div className="flex gap-3">
                <FormItem labelForm="Street" onChange={handleChange} name="street" />
                <FormItem labelForm="Ward" onChange={handleChange} name="ward" />
                <FormItem labelForm="District" onChange={handleChange} name="district" />
            </div>
            <FormItem labelForm="City" onChange={handleChange} name="city" />
            <FormItem labelForm="Email" onChange={handleChange} name="emailOrder" isEmail />
            <FormItem labelForm="Note" onChange={handleChange} name="noteOrder" notImportantItem />
        </div>
    )
}

export default BillingDetail