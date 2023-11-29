import React from "react";
import {useLocation} from "react-router-dom";
const addExpense = () => {
    const location = useLocation();
    let prevPage = location.state?.from;
    let addExpenseViews = {friend:'/friends', groups:'/groups'};
    let addExpenseView= Object.keys(addExpenseViews).find(key => prevPage.startsWith(addExpenseViews[key]));
    addExpenseView = addExpenseView===undefined? 'default':addExpenseView;
    return(
    <div>
        Add Expenses: {addExpenseView} first
    </div>
    );
}
export default addExpense;

