import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]){
// takes an array of elements....steps of forms
    const [currentStepI, setCurrentStepI] = useState(0)

    function next(){
        setCurrentStepI(i => {
            if(i>= steps.length -1) return i;
            return i+1;
        })
    }
    function back(){
        setCurrentStepI(i => {
            if(i <= 0 ) return i;
            return i-1;
        })
    }
    function goto(ind: number){
        setCurrentStepI(ind);
    }

    return {
        currentStepI, 
        step: steps[currentStepI],
        steps,
        goto,
        next,
        back,
        isFirstI: currentStepI === 0,
        isLastI: currentStepI === steps.length-1,
    }
}