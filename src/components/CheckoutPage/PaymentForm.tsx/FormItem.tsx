'use client'

import { useEffect, useState } from "react"

interface FormItemProps{
    labelForm: string
    name: string
    notImportantItem?: boolean
    isEmail?: boolean
    isNumber?: boolean
    onChange: any
}

function FormItem(props: FormItemProps) {

    const {labelForm, notImportantItem, isEmail, isNumber, name, onChange} = props

    const [typeInput, setTypeInput] = useState('text')

    const [importantLabel, setImportantLabel] = useState(`*`) 

    useEffect(() => {
        if(isEmail) {setTypeInput('email')}
        if(isNumber) {setTypeInput('number')}
        if(notImportantItem) {setImportantLabel(' ')}

    }, [])

    return (
        <div className="flex flex-col basis-1/2 mb-10">
            <label className="text-xl mb-3">{labelForm}:<span className="text-red-600">{importantLabel}</span></label>
            <input type={typeInput} name={name} className="w-full bg-transparent focus:outline-none out border-b-2 focus:border-slate-900 text-lg" onChange={onChange} />
        </div>
    )
}

export default FormItem