import React from "react";
// Pass in basePage as a prop
// https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
const addExpense = ({basePage=''}) => {
    return(
    <div>
        Add {basePage} Expenses
    </div>
    );
}
export default addExpense;

