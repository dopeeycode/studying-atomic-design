import BackStep from "../../atoms/BackStep/BackStep";
import NextStep from "../../atoms/NextStep/NextStep";

export default function Actions ({changeStep, currentStep}) {
  return (
    <div>
      <NextStep />
      <BackStep 
        changeStep={changeStep}
        currentStep={currentStep}
      />
    </div>
  )
}
