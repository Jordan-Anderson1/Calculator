import { useState, useEffect } from 'react'
import Output from './Output'

import './App.css'
import Input from './Input'

function App() {
    
    const [tipAmount, setTipAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [people, setPeople] = useState(1);
    const [billAmount, setBillAmount] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [selectedButton, setSelectedButton] = useState(null);


  useEffect(() => {
    const tipPerPerson = (billAmount * percentage) / 100 / people;
    setTipAmount(tipPerPerson);

    const totalPerPerson = (billAmount / people) + tipPerPerson;
    setTotalAmount(totalPerPerson);

  }, [billAmount, percentage, people])

  return (
    <>
      <div className='flex h-screen items-center w-screen flex-col bg-[#CAE3E7] overflow-hidden lg:justify-center'>
        <div className='flex justify-center items-center mb-8'>
          <h1 className='text-3xl'>S P L I <br/>T T E R</h1>
        </div>
        
        
        
        <div className='h-[80%] w-screen mt-auto bg-white rounded-3xl p-6 overflow-scroll lg:h-3/4 lg:w-2/3 lg:mt-0 lg:flex-row lg:flex gap-14'>
          <Input
            people={people}
            setPeople={setPeople}
            billAmount={billAmount}
            setBillAmount={setBillAmount} 
            percentage={percentage}
            setPercentage={setPercentage}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
            />
          <Output 
            tipAmount={tipAmount}
            totalAmount={totalAmount}
            setPercentage={setPercentage}
            setPeople={setPeople}
            setBillAmount={setBillAmount}
            setSelectedButton={setSelectedButton}
          />

        </div>
      </div>
    </>
  )
}

export default App
