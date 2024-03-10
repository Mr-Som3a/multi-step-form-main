import '../../scss/planSelection.scss';



const PlanSelection = ({ styleOfGoBack, handleGoNext, handleGoBack, Style, HandleClick,Plan, PP, HandlePlan , selectedPlan}) => {
    return (
        <>
            <section className='planSelection'>
                <h2>Select your plan</h2>
                <p>You have the option of monthly or yearly billing.</p>
                <div className='sub_cards'>
                    {Object.entries(Plan).map(([planNo,plan]) => (
                        <div key={planNo} style={selectedPlan.planName === plan.planName ? { backgroundColor:'rgba(68, 107, 117, 0.29)'}:null} className='card'>
                            <label htmlFor={plan.planName} className="form-check-label">
                            <input id={plan.planName} name="plan" className="form-check-input" type="radio" onClick={() => HandlePlan(plan.planName,plan.price,planNo)}/>
                            <img src={plan.img} alt="plan image" />
                            <span>{plan.planName}<p>${plan.price}/{PP}</p></span>
                        </label>
                        </div>
                    ))}
                </div>
                <div className='method'>
                    
                        <label className="form-check-label" htmlFor="planMethod">Monthly</label>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="planMethod" />
                    </div> 
                        <label className="form-check-label" htmlFor="planMethod">yearly</label>
                
                    
                    {/* <div className='check' style={Style} onClick={(e) => HandleClick(Style)}><p className='circle'></p></div>
                    <div style={(Style.justifyContent === 'flex-end') ? { color: 'black' } : { color: 'rgb(182,182,182)' }}>Yearly</div> */}
                </div>
            </section>
            <div className='btn_section'>
                <a style={styleOfGoBack} onClick={handleGoBack}> Go Back</a>
                <button className="btn btn-primary" type='button'
                    onClick={handleGoNext}>Next Step</button>
            </div>
        </>
    );
}

export default PlanSelection;