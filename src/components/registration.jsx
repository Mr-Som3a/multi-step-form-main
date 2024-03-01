import Input from './_input';
import '../../scss/registration.scss'
import '../../scss/_input.scss'
import { useState } from 'react';
import { Joi, validate,schema, errors } from 'joi-browser';
// import { Joi, schema } from 'joi-browser';

const Registration = ({UserInfo,HandleChange}) => {
    
    // console.log(Boolean())
    return (
        <>
            <section className='registration'>
                <h2>Persoanl info</h2>
                <p>Please provide your name, email address, and phone number</p>
                <label className='form-label'htmlFor='name'>Name</label>
                <input id='id1' className='form-control' name='name' type='text' placeholder='e.g. Stephen King'
                    value={UserInfo.id1.name} onChange={(e) => HandleChange(e.target.id, 'name', e.target.value)} />
                {/* {console.log(Boolean(UserInfo.errors.name))} */}
                {UserInfo.errors.name&&<div className="alert alert-danger">{UserInfo.errors.name}</div>}
                
                <label className='form-label' htmlFor="email">Email</label>  
                <input id='id2' className='form-control' name='email' type='email' placeholder='e.g. stephenking@lorem.com' value={UserInfo.id2.email}
                    onChange={(e) => HandleChange(e.target.id, 'email', e.target.value)} />
                {UserInfo.errors.email && <div className="alert alert-danger">{UserInfo.errors.email}</div>}
                
                <label className='form-label' htmlFor="phone">Phone</label>
                <input id='id3' className='form-control' name='phone' type='number' placeholder='e.g. +1 234 567 890'
                    value={UserInfo.id3.phone} onChange={(e) => HandleChange(e.target.id, 'phone', e.target.value)} />
                {UserInfo.errors.phone&&<div className="alert alert-danger">{UserInfo.errors.phone}</div>}
                    {/* <span style={{display:(UserInfo.id3.focused)?'block':'none'}}>{UserInfo.id3.errorMsg}</span> */}
                
                {/* <Input value={props.formData} onChange={(e)=>props.HandleChange('step1',e.target.value)} label='Phone Number' name='phone' type='number' placeholder='e.g. +1 234 567 890'/> */}
            </section>
        </>
    );
}
 
export default Registration;

