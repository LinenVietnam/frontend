'use client'
import { useEffect, useState } from "react";

function ChooseShipping() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (index: any) => {
        setSelectedOption(index === selectedOption ? null : index);
    };

    const radioButtons = [
        // { label: 'GHTK', selected: selectedOption === 0 },
        { label: 'Viettel Post', selected: selectedOption === 0 }
    ];

    return (
        <div>
            {radioButtons.map((button, index) => (
                <div key={index} className="flex items-center align-middle" onClick={() => handleRadioChange(index)}>
                    <input type="radio" className="mr-3" checked={button.selected} readOnly  />
                    <span>{button.label}</span>
                </div>
            ))}
        </div>
    );
}

export default ChooseShipping