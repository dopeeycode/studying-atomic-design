import Header from "./components/molecules/Header/Header";
import Form from "./components/organisms/Form/Form";
import UserForm from "./components/pages/UserForm/UserForm";
import PreviewForm from "./components/pages/PreviewForm/PreviewForm";
import ThankYou from "./components/pages/ThankYou/ThankYou";
import { useForm } from "./hooks/useForms";

export default function App(){

  const formComponents = [
    <UserForm />,
    <PreviewForm />,
    <ThankYou />
  ]

  const { currentStep, currentComponent, changeStep } = useForm(formComponents)

  return(
    <div className="">
      <Header />
      <Form
        changeStep={changeStep} 
        currentStep={currentStep}
        currentComponent={currentComponent}
      />
    </div>
  )
}