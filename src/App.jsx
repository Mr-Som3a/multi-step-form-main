import { useState,useReducer } from 'react'
import { set, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Registration from './components/registration';
import PlanSelection from './components/planSelection';
import AddOns from './components/addOnes';
import FinishingUp from './components/finishigUp';
import Endmsg from './components/endMsg';
import { DevTool } from '@hookform/devtools';
import '../scss/app.scss';


const serviceReducer = (state, action) => {
  switch (action.type) {
    case 'toggleCheck':
      // Update the checked value of the specified service
      return {
        ...state,
        [action.serviceName]: {
          ...state[action.serviceName],
          checked: !state[action.serviceName].checked,
        },
      };
    default:
      return state;
  }
};
function App() {
  const [ userInfo,setUserInfo] = useState({})
  const schema = yup
  .object({
    name: yup.string().required('must enter a name'),
    email:yup.string().email('Please enter a valid email address').required('must enter an email address'),
    phone: yup.string().test('custom-pattern', 'Invalid phone format', (value) => {
      const customPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      return customPattern.test(value);
    }).required('must enter your phone number'),
  }).required()

  const { register, control, handleSubmit, formState: { errors ,isDirty} } = useForm({
    resolver: yupResolver(schema),
    defaultValues: userInfo,
    mode:'all',
  });

  const page = [1, 2, 3, 4]
  const [currentPage, nextPage] = useState(1);
  const [style, setStyle] = useState({ justifyContent: 'flex-start' })
  
  const [selectedPlan, setSelectedPlan] = useState([])
  const [selectedOption, setSelectedOption] = useState([])
  const [formData, setFormData] = useState({
    // step1: {...userInfo},
    step2: {...selectedPlan},
    step3: { ...selectedOption },
  })

  const [planPeriod, setPlanPeriod] = useState('monthly')
  const pp = (planPeriod === 'monthly') ? 'mo' : 'yr';
  const services = {
    service1: {
        name: 'Online Service',
        description: 'Access to multiplayer games',
        price: planPeriod === 'monthly'? 1:10,
        checked: false
      },
      service2: {
        name: 'Larger Storage',
        description: 'Extra 1TB of cloud save',
        price: planPeriod ==='monthly'? 2:20,
        checked:false
      },
      service3: {
        name: 'Customizable Profile',
        description: 'Custom theme on your profile',
        price: planPeriod==='monthly'? 2:20,
        checked:false
    },
  }   
  const [state, dispatch] = useReducer(serviceReducer, services)

  // #####################################################################
  const styleOfGoBack = currentPage === 1 ? { visibility: 'hidden' } : { visibility: 'visible' };
  const handleGoBack = () => { { (currentPage === 1) ? '' : nextPage(currentPage - 1) } };
  const handleGoNext = () => {isDirty&&nextPage(currentPage + 1) }
  const forbedden = () => console.log('forbeden')
  const disabling = (Object.keys(errors).length > 0) ? true : false
  // #####################################################################
  
  const handlc = (currentPage) => {
    const endmsgPageStyle = {
      height: '100dvh'
    }
    if(currentPage===5) {
      return endmsgPageStyle
    }
  }



  const handlePlan = (planName,price) => {  
    const plan = {
      planName: planName,
      price:price
    }
    setSelectedPlan(plan)
  }
  function handleClick(style) {
    if (style.justifyContent === 'flex-start') {
      setStyle(style = { justifyContent: 'flex-end' })
      setPlanPeriod('yearly')
    } else {
      setStyle(style = { justifyContent: 'flex-start' })
      setPlanPeriod('monthly')       
    }
  }

  const handleOnChange = (option,price,serviceName) => {
    const OptionName = (e) => e.name === option;
    const isOptionSelected = selectedOption.some(OptionName)
    const updateOption = isOptionSelected
    ? selectedOption.filter((selectedOp) => selectedOp.name !== option)
      : [...selectedOption, {name:option,price:price} ];
    setSelectedOption(updateOption);
    dispatch({ type: 'toggleCheck', serviceName });
  }
  const summation = () => {
    const totalPrice =selectedOption.map(item=> item.price).reduce((acc,price)=> acc + price,selectedPlan.price)
    return totalPrice
  }
  const onSubmit = (data) => {
    const submittedData ={...formData.step2,...formData.step3,data}
    console.log('submmition success')
    nextPage(currentPage + 1)
    console.log(submittedData)
  }


  return (
    <>
      <div style={handlc(currentPage)} className="page">
        {currentPage !== 5 &&
          <div className='steps'>
            {page.map(e => (
              <div key={e} className={currentPage===e?'step active':'step'}>{e}</div>
            ))}
          </div>}

        {/* start form   ########################################################################*/}
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentPage === 1 && <Registration forbedden={forbedden}  isDirty={isDirty} handleGoBack={handleGoBack} handleGoNext={handleGoNext} styleOfGoBack={styleOfGoBack} UserInfo={userInfo} register={register} errors={errors} />}
          {currentPage === 2 && <PlanSelection selectedPlan={selectedPlan} disabling={disabling} handleGoBack={handleGoBack} handleGoNext={handleGoNext} styleOfGoBack={styleOfGoBack} formData={formData.step2} Style={style} HandleClick={handleClick} PlanPeriod={planPeriod} HandlePlan={handlePlan} />}
          {currentPage === 3 && <AddOns forbedden={forbedden} disabling={disabling} handleGoBack={handleGoBack} handleGoNext={handleGoNext}  styleOfGoBack={styleOfGoBack} Services={services} PP={pp} State={state} SelectedOption={selectedOption} HChange={handleOnChange} formData={formData.step3} PlanPeriod={planPeriod} />}
          {currentPage === 4 && <FinishingUp forbedden={forbedden}  disabling={disabling} handleGoBack={handleGoBack} handleGoNext={handleGoNext} styleOfGoBack={styleOfGoBack} TP={summation()} PP={pp} formData={formData.step4} SelectedPlan={selectedPlan} PlanPeriod={planPeriod} SelectedOption={selectedOption} NextPage={nextPage} />}
        </form>
        {currentPage === 5 && <Endmsg />}
      </div>
      <DevTool control={control}/>
    </>
  )
}
export default App
