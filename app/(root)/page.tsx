import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

function Home() {
  const loggedIn = {firstName: 'Tom', lastName: 'Kim', email: 'flyordig@gmail.com'}
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and
            transactions efficiently."
          />
          <TotalBalanceBox 
            accounts={1}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{},{}]}
      />
    </section>
  )
}

export default Home