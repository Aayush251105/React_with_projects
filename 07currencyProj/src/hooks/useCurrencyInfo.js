import { useEffect, useState } from "react";

// currency is the string code like "usd"
function useCurrencyInfo(currency){
    const [data,setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])

    return data; // all the converted currencies equivalent to 1 of the given currency
}

export default useCurrencyInfo; 