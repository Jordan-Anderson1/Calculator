import React from 'react'

const Output = ({tipAmount, totalAmount, setPeople, setBillAmount, setPercentage, setSelectedButton}) => {
  return (
    <div className='flex flex-col bg-[#1B464A] p-10 rounded-3xl mb-8 lg:w-[50%] lg:p-16'>
        <div className='flex flex-row items-center'>
            <p className='text-white text-2xl'>Tip Amount <br/> <span className='text-[#749CA0]'>/ person</span></p>
            <p className='text-4xl ml-auto text-[#5CB5A9] '>{`$${tipAmount.toFixed(2)}`}</p>
        </div>

        <div className='flex flex-row items-center mt-6'>
            <p className='text-white text-2xl'>Total <br/> <span className='text-[#749CA0]'>/ person</span></p>
            <p className='text-4xl ml-auto text-[#5CB5A9] '>{`$${totalAmount.toFixed(2)}`}</p>
        </div>

        <button 
            onClick={() => {
                setPeople(1);
                setBillAmount(0);
                setPercentage(0);
                setSelectedButton(null);
 
            }}
            className='bg-[#5CB5A9] text-[#1B464A] text-lg font-bold mt-auto p-4 rounded-lg'>RESET</button>

        

    </div>
  )
}

export default Output