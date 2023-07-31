// import { Profile } from "./components/Profile/Profile";
// import user from "./user.json"
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import transactionHistory from "./transactions.json"

// const {avatar, username, tag, location, stats} = user

function App() {
  return (
      <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
        </thead>
        
      {transactionHistory.map(({ id, type, amount, currency }) => {
            return (
          <TransactionHistory
      key={id}
      type={type}
      amount={amount}
      currency={currency}
              />
              
    )


      })}
      </table>

  )

  






        // <Profile 
        //   avatar={avatar}
        //   username={username}
        //   tag={tag}
        //   location={location}
        //   stats={stats}
        // />


}

export default App;
