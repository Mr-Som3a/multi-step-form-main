import { useState } from 'react';
import '../../scss/planSelection.scss';
// import Input from './_input';
import MonthlyPlan from './monthlyPlan';
import YearlyPlan from './yearlyPlan';



const PlanSelection = ({Style,HandleClick,PlanPeriod,HandlePlan}) => {
    
    if (PlanPeriod === 'monthly') {
        return (
            <section className='planSelection'>
                <h2>Select your plan</h2>
                <p>You have the option of monthly or yearly billing.</p>
                <MonthlyPlan HandlePlan={HandlePlan} />
                <div className='method'>
                    <div style={(Style.justifyContent === 'flex-start') ? { color: 'black' } : { color:'rgb(182,182,182)'}} >Monthly</div>
                    <div className='check' style={Style} onClick={() => HandleClick(Style)}><p className='circle'></p></div>
                    <div style={(Style.justifyContent === 'flex-end') ? { color: 'black' } : { color:'rgb(182,182,182)'}}>Yearly</div>
                </div>
            </section>
        );
    } else { 
        return ( 
            <>  
                <section className='planSelection'>
                    <h2>Select your plan</h2>
                    <p>You have the option of monthly or yearly billing.</p>
                    <YearlyPlan HandlePlan={HandlePlan}/>
                    <div className='method'>
                        <div style={(Style.justifyContent === 'flex-start') ? { color: 'black' } : { color:'rgb(182,182,182)'}} >Monthly</div>
                        <div className='check' style={Style} onClick={() => HandleClick(Style)}><p className='circle'></p></div>
                        <div style={(Style.justifyContent === 'flex-end') ? { color: 'black' } : { color:'rgb(182,182,182)'}}>Yearly</div>
                    </div>
                </section>
            </>
        );
    }
}

export default PlanSelection;