import '../../scss/finishingUp.scss';
const FinishingUp = ({ styleOfGoBack,handleGoBack,PlanPeriod,SelectedPlan,SelectedOption,NextPage,PP,TP }) => {
    
    
    return (
        <>
            <section className='finishingUp'>
                <h2>Finishing up</h2>
                <p>Double-check everything looks OK before confirming.</p>
                <div className='conclusion'>
                    <div className='arrange'>
                        <div>
                            <h6>{`${SelectedPlan && SelectedPlan.planName} (${PlanPeriod})`}</h6>
                            <a style={{ color: 'gray', fontSize: '1rem', textDecoration: 'underline' }} onClick={() => NextPage(2)}>change</a>
                        </div>
                        <span style={{ margin: 'auto 0' }}>{`+$ ${SelectedPlan.price}/${PP}`}</span>
                    </div>
                    <hr />
                    {SelectedOption && SelectedOption.map(serv => (
                        <div key={serv.name} className="arrange">
                            <p>{serv.name}</p>
                            <span>{`+${serv.price}/${PP}`}</span>
                        </div>
                    ))}
                    {/* ############################################### */}
                </div>
                <div className='arrange' style={{ margin: '1.5rem 1rem 0' }}>
                    <p>{`Total (per ${(PP === 'mo') ? 'month' : 'year'})`}</p>
                    <span style={{ color: 'blue' }}>+${TP}/{PP}</span>
                </div>
            </section>
            <div className='btn_section'>
                <a style={styleOfGoBack} onClick={handleGoBack}> Go Back</a>
                <button className="btn btn-primary" type='submit'>confirm</button>
            </div>
        </>
    );
}
export default FinishingUp;