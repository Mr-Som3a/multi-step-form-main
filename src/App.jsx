import { useState,useReducer } from 'react'
import Registration from './components/registration';
import PlanSelection from './components/planSelection';
import AddOns from './components/addOnes';
import '../scss/app.scss'
import FinishingUp from './components/finishigUp';
import Endmsg from './components/endMsg';
import { Joi, schema, validate } from 'joi';


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
  const page = [1, 2, 3, 4]
  const [currentPage, nextPage] = useState(1);
  const [style, setStyle] = useState({ justifyContent: 'flex-start' })
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone:''
  })
  const [selectedPlan, setSelectedPlan] = useState([])
  const [selectedOption, setSelectedOption] = useState([])
  const [formData, setFormData] = useState({
    step1: {},
    step2: [...selectedPlan],
    step3: [...selectedOption],
    step4: {}
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
  // #####################################################################
  const validationResult = userSchema.validate(formData, { abortEarly: false });
  
  const handlc = (currentPage) => {
    const endmsgPageStyle = {
      height: '100dvh'
    }
    if(currentPage===5) {
      return endmsgPageStyle
    }
  }
  const validateProperty = (data,value) => {
    console.log(data, value)
    switch (data) {
      case 'name':
        if (value.trim() === '') {
          return 'write a name.'
        }
        break;
      case 'email':
        if (value.trim() === '') {
          return 'write an email.'
        }
        break;
      case 'phone':
        if (value.trim() === '') {
          return 'write a phone no.'
        }
        break;
      default: return console.log('there nothing ')


    }
  }
  const handleInputChange = (id, data, value) => {
    const errors = { ...userInfo.errors }
    const errormsg = validateProperty(data, value)
    console.log(errormsg)
    if (errormsg)
      errors[data] = errormsg
    else delete errors[data]
    setUserInfo({
      ...userInfo,
      [id]: {
        ...userInfo[id],
        [data]:value
      }
    })
    // console.log(userInfo)
  }
  const userSchema = Joi.object({
    name: Joi.string().required().min(3).max(30).trim(),
    email: Joi.string().email().required().trim(),
    phone: Joi.number().min(10).max(14).trim()
  });
  const handleSubmit = () => {
    
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

  

  // #############################################################
  // #############################################################

  return (
    <>
      <div style={handlc(currentPage)} className="page">
        {currentPage !== 5 &&
          <div className='steps'>
            {page.map(e => (
              <div key={e} className={currentPage===e?'step active':'step'}>{e}</div>
            ))}
          </div>}
          
        <form >
          {<Registration UserInfo={userInfo} errors={userInfo.errors} HandleChange={handleInputChange}/>}
        {/* {currentPage === 2 && <PlanSelection formData={formData.step2} Style={style} HandleClick={handleClick} PlanPeriod={planPeriod} HandlePlan={handlePlan} />}
        {currentPage === 3 && <AddOns Services={services} PP={pp} State={state} SelectedOption={selectedOption} HChange={handleOnChange} formData={formData.step3} PlanPeriod={planPeriod} />}
        {currentPage === 4 && <FinishingUp TP={summation()} PP={pp} formData={formData.step4} SelectedPlan={selectedPlan} PlanPeriod={planPeriod} SelectedOption={selectedOption} NextPage={nextPage} />} */}
        </form>
        {/* {currentPage === 5 && <Endmsg />} */}
        {/* {handleSubmit()===true && <Endmsg/>} */}
      </div>
        {currentPage !== 5 && 
          <div className='btn_section'>
          <a style={currentPage === 1 ? { visibility: 'hidden' } : { visibility: 'visible' }} onClick={() => { { (currentPage === 1) ? '' : nextPage(currentPage - 1) } }}>Go Back</a>
          <button onClick={ handleSubmit}type='submit'>submit</button>
          {/* <button className="btn btn-primary" type={currentPage === 4 ? 'submit' : 'button'} onClick={() => nextPage(currentPage + 1) }>{currentPage === 4 ?'Confirm' : 'Next Step' }</button> */}
          </div>
        }
    </>
  )
}
export default App
