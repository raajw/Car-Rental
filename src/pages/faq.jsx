

import { useState } from 'react';
import data from '../components/faqdata';

export default function FAQs() {
    const [select, setSelect] = useState([]);

    function handleFAQs(currID) {
        setSelect(prevSelect => {
            if (prevSelect.includes(currID)) {
                return prevSelect.filter(id => id !== currID);
            } else {
                return [...prevSelect, currID];
            }
        });
    }

    return (
        <div className="container mx-auto">
               <div className=" flex justify-center text-2xl font-semibold mb-10 mt-10">
                    FAQs
                </div>
            {data.map((dataItem, index) => (
                <div key={index} className="mb-4">
                    <button
                        onClick={() => handleFAQs(dataItem.id)}
                        className="flex justify-between w-full p-4 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                    >
                        <div>{dataItem.question}</div>
                        <div>{select.includes(dataItem.id) ? '-' : '+'}</div>
                    </button>
                    {select.includes(dataItem.id) && (
                        <div className="p-4 bg-white rounded-md shadow-md">
                            {dataItem.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
