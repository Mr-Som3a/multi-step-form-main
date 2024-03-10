import Input from './_input';
import '../../scss/registration.scss'
import '../../scss/_input.scss'
const Registration = ({ register, errors,styleOfGoBack,touchedFields,forbedden,handleGoNext,handleGoBack }) => {
    return (
        <>
            <section className='registration'>
                <h2>Persoanl info</h2>
                <p>Please provide your name, email address, and phone number</p>
                <label className='form-label' htmlFor='name'>Name</label>
                <input className='form-control' type='text' {...register('name')} placeholder='e.g. Stephen King' />
                <span role="alert">{errors.name?.message}</span>
                
                <label className='form-label' htmlFor="email">Email</label>
                <input className='form-control' {...register('email')} type='email' placeholder='e.g. stephenking@lorem.com' />
                <span role="alert">{errors.email?.message}</span>
                
                <label className='form-label' htmlFor="phone">Phone</label>
                <input className='form-control' {...register('phone')} type='number' placeholder='e.g. +1 234 567 890' />
                <span role="alert">{errors.phone?.message}</span>
                
            </section>
            <div className='btn_section'>
                <a style={styleOfGoBack} onClick={handleGoBack}> Go Back</a>
                <button className="btn btn-primary"disabled={Object.keys(touchedFields).length===0?true:false} type='button' onClick={Object.keys(errors).length > 0 ? forbedden : handleGoNext}>Next Step</button>
            </div>
        </>
    );
}
 
export default Registration;

