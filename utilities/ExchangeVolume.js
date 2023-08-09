// Using CoinGecko's API
// https://www.coingecko.com/en/api#explore-api
import React, { useState, useEffect } from 'react';
async function getExchageVolume(exchange, coin) {
    try {
        const res = await fetch(
            `https://api.coingecko.com/api/v3/coins/${coin}/tickers?exchange_ids=${exchange}`
        );
        const data = await res.json();
        console.log(data);
        return data.tickers[0]['converted_volume']['usd'];
    } catch (e) {
        return 'N/A'
    }

}
export default function ExchangeVolume(props) {
  const [volume, setVolume] = useState(null);

  useEffect(() => {
      getExchageVolume(props.exchange, props.coin).then((result) => {
          if (result === 'N/A') {
                setVolume('N/A');
                return;
          }
      const numberFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      const formattedVolume = numberFormatter.format(result);
      setVolume(formattedVolume);
    });
  }, []);

  return (
        <span>{volume}</span>
  );
}
