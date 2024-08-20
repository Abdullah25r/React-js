
import Header from './components/Expense Tracker App/Header';
import '../src/components/css/Expense.css'
import Balance from './components/Expense Tracker App/Balance';
import IncomeExpenses from './components/Expense Tracker App/IncomeExpenses';
import TransactionList from './components/Expense Tracker App/TransactionLIst';
import AddTransaction from './components/Expense Tracker App/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';
function App() {
   
  return (
      <GlobalProvider>
      {/* <Card /> */}
      {/* <Weather/> */}
     {/* <TodoApp/> */}
      {/* <Calculator/> */}
      {/* <Quiz/> */}
      {/* <Markdown/> */}
      {/* <Products/> */}
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
      </GlobalProvider>
    
  );
}

export default App;
