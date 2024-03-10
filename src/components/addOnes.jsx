import '../../scss/addOns.scss'
import { useState } from 'react'

const AddOns = ({styleOfGoBack,handleGoNext,handleGoBack,State,Services,HChange,PP}) => {
    
    const whenCheck = (checkbox) => {
        const style = {
            borderColor: 'blue',
            backgroundColor: 'rgb(206, 251, 236)',
            transition: 'all .2s ease-in'
        }
        if (checkbox == true)
            return style;
    }
    return (
        <>
            <section className='addOns'>
                <h2>Pick add-ons</h2>
                <p>Add-ons help enhance your gaming experience.</p>
                <div className="card_options">
                    {Object.entries(State).map(([serviceName, service]) => (
                        <label style={whenCheck(service.checked)} htmlFor={serviceName} key={serviceName} className="card">
                            <input id={serviceName} type="checkbox" checked={service.checked} onChange={() => HChange(service.name, service.price, serviceName)} />
                            <div>{service.name}<p>{service.description}</p></div>
                            <span>+${Services[serviceName].price}/{PP}</span>
                        </label>
                    ))}
                </div>
            </section>
            <div className='btn_section'>
                <a style={styleOfGoBack} onClick={handleGoBack}> Go Back</a>
                <button className="btn btn-primary" 
                    onClick={handleGoNext}>Next Step</button>
            </div>
        </>
        );
}
export default AddOns;