import { useState } from 'react'
import React from 'react'
import './Hero.css'

export default function Hero() {

  const[join, setJoin] = useState(false);

    const handlejoin = () =>{
        setJoin(!join);
    }

  return (
    <>
    <div className='Main'>
    <div className="d-flex d-lg-none mt-3 sm-nav">
      <div className="back">
        <button className='btn btn-ouline-light'><img src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%207H3.83L9.42%201.41L8%200L0%208L8%2016L9.41%2014.59L3.83%209H16V7Z'%20fill='white'/%3e%3c/svg%3e" alt="" /></button>
      </div>
      <div className="grp">
        {!join?<button className='btn btn-outline-light' onClick={handlejoin}><img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_1_859)'%3e%3cpath%20d='M7.33333%209.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5%2010.0834C18.0217%2010.0834%2019.2408%208.85504%2019.2408%207.33337C19.2408%205.81171%2018.0217%204.58337%2016.5%204.58337C16.2067%204.58337%2015.9225%204.62921%2015.6658%204.71171C16.1883%205.45421%2016.4908%206.35254%2016.4908%207.33337C16.4908%208.31421%2016.1792%209.20337%2015.6658%209.95504C15.9225%2010.0375%2016.2067%2010.0834%2016.5%2010.0834ZM11.9167%2010.0834C13.4383%2010.0834%2014.6575%208.85504%2014.6575%207.33337C14.6575%205.81171%2013.4383%204.58337%2011.9167%204.58337C10.395%204.58337%209.16667%205.81171%209.16667%207.33337C9.16667%208.85504%2010.395%2010.0834%2011.9167%2010.0834ZM17.985%2012.0634C18.7458%2012.7325%2019.25%2013.585%2019.25%2014.6667V16.5H22V14.6667C22%2013.255%2019.8275%2012.3842%2017.985%2012.0634ZM11.9167%2011.9167C10.0833%2011.9167%206.41667%2012.8334%206.41667%2014.6667V16.5H17.4167V14.6667C17.4167%2012.8334%2013.75%2011.9167%2011.9167%2011.9167Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_859'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" />  Join Group</button>:
                <button className='btn btn-outline-secondary' onClick={handlejoin}><i class="fa-solid fa-arrow-right-from-bracket"></i>  Leave Group</button>}
        </div>
      </div>
      <div className="container content">
        <h1 className='text-white'>Computer Engineering</h1>
        <p className='text-white'>142,765 Computer Engineers follow this</p>
      </div>
    </div>
    </>
  )
}
