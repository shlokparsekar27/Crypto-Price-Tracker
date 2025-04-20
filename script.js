//  const options = {
//      method: 'GET',
//      headers: {
//        accept: 'application/json',
//        'x-cg-demo-api-key': '	CG-8FD34MLiYZSznFkYEuvB82Mg'
//      }
//    };
  
//    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cdogecoin&names=Bitcoin%2CEthereum%2CDogecoin&symbols=btc%2Ceth%2Cdoge', options)
//      .then(res => res.json())
//      .then(res => console.log(res))
//     .catch(err => console.error(err));

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,dogecoin",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response) {
    btc.innerHTML = response[0].current_price;
    eth.innerHTML = response[1].current_price;
    doge.innerHTML = response[2].current_price;
});
