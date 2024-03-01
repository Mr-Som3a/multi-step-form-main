const MonthlyPlan = ({HandlePlan}) => {
    return ( 
        <>
            <div className='sub_cards monthly'>
                <button onClick={()=>HandlePlan('Acrade',9)} className='card'>
                    <img src="/assets/images/icon-arcade.svg" />
                    <div >Arcade<p>$9/mo</p></div>
                </button>
                <button onClick={()=>HandlePlan('Advanced',12)} className='card'>
                    <img src="/assets/images/icon-advanced.svg" />
                    <span>Advanced<p>$12/mo</p></span>
                </button>
                <button onClick={()=>HandlePlan('Pro',15)} className='card'>
                    <img src="/assets/images/icon-pro.svg" />
                    <div>Pro<p>$15/mo</p></div>
                </button>
            </div>
        </>
    );
}
export default MonthlyPlan;

