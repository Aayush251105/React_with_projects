import React from 'react'

function InputBox({
    label,          // to and from label
    amount,
    onAmountChange,             // methods that change the output when the amount is changed (takes help of useState in App.jsx)
    onCurrencyChange,           // methods that change the output when the currency is changed (takes help of useState in App.jsx)
    currencyOptions = [],       // fetch all the currency options from the api here
    selectedCurrency = "usd",   // selected currency ; default : usd
    amountDisabled = false,     // feature which disables user to enter amount (like the final converted amount cannot be changed)
    currencyDisabled = false,   // feature which disables user to set currency 
    className = "", // allowing user to give custom class
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        
        <div className='w-1-2'>
            <label htmlFor="currency"
            className='text-black/40 mb-2 inline-block'> {label} </label>
            <input 
            id="currency"
            type="number"
            className='outline-none w-full bg-transparent py-1.5'
            placeholder='Amount'
            disabled={amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>Currency Type</p>
            <select name="" id=""
            className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
            value={selectedCurrency}
            onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)}}
            disabled={currencyDisabled}
            >
                {currencyOptions.map((currency) => (<option key={currency} value={currency}>{currency}</option>) )}
            </select>
        </div>

    </div>
  )
}

export default InputBox