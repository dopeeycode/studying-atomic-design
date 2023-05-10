import { useState } from "react";

export function useForm(steps) {
  const [currentStep, setCurrentStep] = useState(0)

  function changeStep(i, event){
    if(event) event.preventDefault() 

    if(i < 0 | i >= steps.lenght ) {
      return
    }
    setCurrentStep(i)
  }
  
  return{
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
  };
}