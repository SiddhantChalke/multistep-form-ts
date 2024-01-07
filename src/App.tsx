// import { useState } from 'react'
import { FormEvent, useState } from 'react';
import './App.css'
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { useMultiStepForm } from './useMultiStepForm'

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INIT_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}

function App() {

  const [data, setData] = useState(INIT_DATA);

  function updateFields(fields: Partial<FormData>){
    setData(prev => {
      return { ...prev, ...fields}
    })
  }

  const {
    steps, step, currentStepI, 
    isFirstI, isLastI, 
    back, next
  } = useMultiStepForm([ 
  <Step1 {...data} updateFields={updateFields}/>,
   <Step2 {...data} updateFields={updateFields}/>,
    <Step3 {...data} updateFields={updateFields} />]
  );

  function onSubmit(e: FormEvent){
    e.preventDefault();
    if(!isLastI) return next()
    alert('Successfully created an account !!')
  }

  return (
    <>
    <div className="" style={
      {
        position:'relative',
        padding: '2rem',
        minWidth: '20rem',
        minHeight: '30rem',
        border:'1px solid green',
        borderRadius: '20px'
        }}>

      <form onSubmit={onSubmit}>

        <div style={{position: 'absolute', right:'2rem'}}>
          {currentStepI + 1} / {steps.length}
        </div>

        {step}

        <div style={{marginTop: '1rem',position:'absolute', bottom:'0', left:'8rem'}}>
          {/* { currentStepI !== 0 && <button>Back</button> } */}
          { !isFirstI && <button type='button' onClick={back}>Back</button> }

          {<button type='button' onClick={next}>{isLastI ? 'Finish': 'Next'}</button>}
        </div>
      </form>
    </div>
    </>
  )
}

export default App
