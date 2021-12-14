import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
 const [show,setShow] = useState(false)

    const saveExpenseHandler = (enteredExpenseData) => {
     const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toString()
     }
     props.onAddExpense(expenseData)
    }

    const clickHandle = () =>{
        setShow(true)
    }

    const stopShow = () => {
        setShow(false)
    }
   return (
       <div className="new-expense">
            {!show && <button onClick={clickHandle}>Add Expenses</button>}
           {show && <ExpenseForm onSaveExpenseData= {saveExpenseHandler} onCancel={stopShow}/>}
       </div>
   )
}

export default NewExpense;