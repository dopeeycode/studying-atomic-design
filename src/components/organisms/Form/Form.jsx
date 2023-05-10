import Actions from "../../molecules/Actions/Actions";

export default function Form ({currentComponent, changeStep, currentStep}){
  return (
    <div>
      <p>Etapas</p>
      <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
      <div>
        {currentComponent}
      </div>
        <div>
          <Actions
            currentStep={currentStep} 
            changeStep={changeStep}
          />
        </div>
      </form>
    </div>
  )
}
