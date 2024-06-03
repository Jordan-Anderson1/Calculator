import React, { useState, useEffect } from 'react'

const Input = ({ billAmount, setBillAmount, percentage, setPercentage, people, setPeople, selectedButton, setSelectedButton}) => {

    
    
    const buttons = [5, 10, 15, 25, 50, 'Custom'];

  return (
    <div className='flex flex-col mb-6 lg:w-[50%] lg:justify-center lg:p-16'>
        <h1 className='text-xl'>Bill</h1>
        <div className='flex w-[100%] flex-row bg-gray-200 p-2 px-4 rounded-lg mb-10'>
            <img src="/icon-dollar.svg"  />
            <input 
                type="text"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                className='bg-transparent ml-auto text-right w-[100%] focus:outline-none' />
        </div>

        <h1 className='text-xl'>Select tip %</h1>

        <div className='grid grid-cols-3 grid-rows-2 gap-4 mb-4'>
            {buttons.map((button, index) => {
                return (
                    <button 
                        className={`${selectedButton === index ? 'bg-[#5DBFAE] text-[#1B464A]' : 'bg-[#1B464A] text-white'} p-2 text-2xl font-semibold rounded-md`}
                        onClick={() => {
                            if (button === 'Custom'){
                                setPercentage('');
                                setSelectedButton(index);
                            }else{
                                setPercentage(button);
                                setSelectedButton(index);
                                
                            }
                            
                    }}
                        key={index}>
                            {`${button}%`}
                    </button>
                )
            })}

        </div>

        <div className={`flex flex-row items-center bg-gray-200 rounded-lg p-2 px-4 mt-4 mb-2 ${selectedButton === 5 ? 'block' : 'hidden'}`}>
            <p className='text-gray-500'>%</p>
            <input placeholder="Enter custom amount" 
                onChange={(e) => setPercentage(e.target.value)} 
                type="text" value={percentage} 
                className={`bg-transparent w-[100%] text-right ml-auto  focus:outline-none`}
            />

        </div>
        

        <h1 className='text-xl'>Number of People</h1>

        <div className='flex flex-row p-2 px-4 bg-gray-200 rounded-lg'>
            <img src="./icon-person.svg" className='w-6 h-6' />
            <input 
                className='bg-transparent text-right ml-auto w-[100%] focus:outline-none'
                type="text" 
                value={people} 
                onChange={(e) => {setPeople(e.target.value)}} />
        </div>


    </div>
  )
}

export default Input