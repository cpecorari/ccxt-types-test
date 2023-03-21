import ccxt, { Exchange } from 'ccxt';

const exchange = new ccxt.bybit();

exchange.loadMarkets().catch((error: any) => console.error(error));

// this is not ok, TS complains about has object
console.log("exchange.has['fetchDeposit'] : ", exchange.has['fetchDeposit']);

//this is ok
const cexFunc = async (cex: Exchange) => {
  const markets = await cex.loadMarkets();
  console.log(markets);
};

//this is not ok, TS complains about ccxt namespace
const cexFuncPrefix = async (cex: ccxt.Exchange) => {
  const markets = await cex.loadMarkets();
  console.log(markets);
};

console.log('Exchange func call : ', cexFunc(exchange));
console.log('Exchange func call Prefix : ', cexFuncPrefix(exchange));
