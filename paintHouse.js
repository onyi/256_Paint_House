const paintHouse = (prices) => {
    for (let i = 1; i < prices.length; i++){
        prices[i][0] += Math.min(prices[i-1][1], prices[i-1][2]);
        prices[i][1] += Math.min(prices[i-1][0], prices[i-1][2]);
        prices[i][2] += Math.min(prices[i-1][0], prices[i-1][1]);
    }
    let n = prices.length - 1;

    return Math.min(prices[n][2], Math.min(prices[n][0], prices[n][1]));

}

let prices = [[17,2,17], [16,16,5], [14,3,19]];

let res = paintHouse(prices) //Expected outcome: 10

console.log(`Min Price: ${res}`);