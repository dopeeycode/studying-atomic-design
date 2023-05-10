
import { GrFormPrevious } from 'react-icons/gr'

export default function BackStep ({currentStep, changeStep}) {
  return (
    <button 
      onClick={() => changeStep(currentStep - 1 )} 
      type="button"
    >
      <GrFormPrevious />
      <span>Voltar</span>
    </button>
  )
}
