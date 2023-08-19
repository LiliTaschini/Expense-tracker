import { useState } from "react";
import { UseGlobalState } from "../../context/GlobalState"


function TransactionForm() {

    const { AddTransaction } = UseGlobalState();

    const [description, setDescription] = useState();
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) =>{
        e.preventDefault();
        AddTransaction({ id: new Date().getTime(), description, amount: +amount });
        console.log(description, amount);
    }

  return (
   <>
   <form onSubmit={onSubmit}>
       <input type="text" placeholder="Enter a Description" onChange={(e) => setDescription(e.target.value)} className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full" />
       <input type="number" step={0.01} placeholder="00.00"  onChange={(e) => setAmount(e.target.value)} className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full" />
       <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full"> Add Transaction </button>
   </form>
   </>
  )
}

export default TransactionForm