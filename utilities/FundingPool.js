import BigNumber from 'bignumber.js';
import React from "react";
async function getBalance(address) {
    return await fetch(`https://api.kaspa.org/addresses/${address}/balance`)
        .then(res => res.json())
        .then(data => data.balance)
        .then(balance => new BigNumber(balance).shiftedBy(-8).toString());
}

export function getRemainingTime(unixTimestamp) {
    if (unixTimestamp === 0) {
        return 'No deadline';
    }
    // Get the current time in milliseconds
    const currentTime = Date.now();

    // Calculate the remaining time in milliseconds
    const remainingTime = unixTimestamp * 1000 - currentTime;

    // Calculate days, hours, and minutes
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

    // Build the formatted string
    let result = '';
    if (days > 0) {
        result += `${days} day${days > 1 ? 's' : ''} `;
    }
    if (hours > 0) {
        result += `${hours} hour${hours > 1 ? 's' : ''} `;
    }
    if (minutes > 0) {
        result += `${minutes} minute${minutes > 1 ? 's' : ''}`;
    }
    alert(result);
    return result;
}
export const numberFormatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'KAS',
    // KAS after amount
});
export function Balance(props) {
    const [balance, setBalance] = React.useState(null);

    React.useEffect(() => {
        getBalance(props.address).then((result) => {
            const formattedBalance = numberFormatter.format(result);
            setBalance(formattedBalance);
        });
    }, []);

    return (
        <span><b>{balance}</b></span>
    );
}

export function Label(props) {
    return (
        <span><b>{props.value}</b></span>
    );
}

export function Link(props) {
    return (
        <a href={props.link}>{props.label}</a>
    )
}
