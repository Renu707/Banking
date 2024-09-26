
import RightSideBar from '@/components/components/RightSideBar';
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName:'Renu',lastName:'suresh',email:'renusuresh2607@gmail.com'};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                type="greeting"
                title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and trasactions efficiently."
                
                
                
                
                
                />
                <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
                
                
                
                
                />

            </header>
            RECENT TRANSACTIONS

        </div>
        <RightSideBar
        user={loggedIn} 
        transactions={[]}
        banks={[{currentBalance:123.50},{currentBalance:500.50}]}
        />

    </section>
  )
}

export default Home