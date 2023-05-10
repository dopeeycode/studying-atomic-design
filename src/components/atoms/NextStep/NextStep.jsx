import { GrFormNext } from 'react-icons/gr'


export default function NextStep ({changeStep}){
  return (
    <button
      type="submit"
    >
      <span>Avançar</span>
      <GrFormNext />
    </button>
  )
}
