const budgetCalc = (rel,evn,inc,bare) => {
    const A = 90.41; // relationship connstant
    const budget = A*Math.pow(inc,1.0/3.0)*rel*rel*Math.pow(evn, 2.5) + bare;
    const budget_round = Math.round(budget*100)/100;
    let prac_budget = Math.min(budget_round, Math.round((0.25*inc)*100)/100)+"";
    const prac_Arr = prac_budget.split(".");
    if(prac_Arr[1].length === 1)
        prac_budget = prac_budget + "0";
    return prac_budget;
}
export default budgetCalc;