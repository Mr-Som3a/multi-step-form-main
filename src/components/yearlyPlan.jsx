const YearlyPlan = ({HandlePlan}) => {
    return ( 
        <>
            <div className='sub_cards yearly'>
                <button type="button" onClick={()=>HandlePlan('Acrade',90)} className='card'>
                    <img src="/assets/images/icon-arcade.svg" alt="" />
                    <div>Arcade<p>$90/yr</p>2 months free</div>
                </button>
                <button type="button" onClick={()=>HandlePlan('Advanced',120)} className='card'>
                    <img src="/assets/images/icon-advanced.svg" alt="" />
                    <div>Advanced<p>$120/yr</p>2 months free</div>
                </button>
                <button type="button" onClick={()=>HandlePlan('Pro',150)} className='card'>
                    <img src="/assets/images/icon-pro.svg" alt="" />
                    <div>Pro<p>$150/yr</p>2 months free</div>
                </button>
            </div>
        </>
    );
}
export default YearlyPlan;