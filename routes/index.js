var express = require('express');
var router = express.Router();
var xpubLib = require("@swan-bitcoin/xpub-lib");

/* GET home page. */
// https://mybitprices.info/hdreport.html?report=a30c30dee88b8181900509248376ff7a

//  --- Wallet Discovery Report --- 

// Found 6 Receive addresses and 3 Change addresses.
//   Receive --  Used: 6 Unused: 0
//   Change  --  Used: 3 Unused: 0

// +------------------------------------+---------+----------------+------------+------------+---------+
// | addr                               | type    | total_received | total_sent | balance    | relpath |
// +------------------------------------+---------+----------------+------------+------------+---------+
// | 1Ge6rDuyCdYVGhXZjcK4251q67GXMKx6xK | Receive |     0.00120000 | 0.00100000 | 0.00020000 | 0/0     |
// | 1NVsB73WmDGXSxv77sh9PZENH2x3RRnkDY | Receive |     0.00130000 | 0.00100000 | 0.00030000 | 0/1     |
// | 1BkgqiHcvfnQ2wrPN5D2ycrvZas3nibMjC | Receive |     0.00040000 | 0.00000000 | 0.00040000 | 0/2     |
// | 15qkqdGFvBBvd8MHnRM3hhXkfTtEeP4mGP | Receive |     0.00169285 | 0.00000000 | 0.00169285 | 0/3     |
// | 15Y1We6UH6GTrD4RTGbbFSqsZCRtkWgAak | Receive |     0.00025489 | 0.00000000 | 0.00025489 | 0/9     |
// | 1J2ecyxa9bZ948AeCaADZiDZe41Hvf8xsV | Receive |     0.00001000 | 0.00000000 | 0.00001000 | 0/28    |
// | 12SisoiXLUEbkytL5Pzia1jBY8gJP5XN8D | Change  |     0.00184874 | 0.00084874 | 0.00100000 | 1/0     |
// | 1CkvACVpFwkPnMG13w9kXXE9YcsiyL4pcY | Change  |     0.00194876 | 0.00000000 | 0.00194876 | 1/1     |
// | 18EmV6cYjVmK3SQshZc92CdD9ByHDdf39v | Change  |     0.00068640 | 0.00000000 | 0.00068640 | 1/2     |
// +------------------------------------+---------+----------------+------------+------------+---------+

router.get('/', function(req, res, next) {
  const key = 'xpub6BfKpqjTwvH21wJGWEfxLppb8sU7C6FJge2kWb9315oP4ZVqCXG29cdUtkyu7YQhHyfA5nt63nzcNZHYmqXYHDxYo8mm1Xq1dAC7YtodwUR';
  // var node = bitcoin.bip32.fromBase58(
  //   xpub,
  //   bitcoin.networks.bitcoin
  // );
  // let chain = new bip32utils.Chain(node);

  // for (var i = 0; i <= 100; i++) {
  //   var address = bitcoin.payments.p2pkh({ pubkey: node.derive(i).publicKey, network: bitcoin.networks.bitcoin}).address;
  //   console.log(address);
  // }

  let addrs = xpubLib.addressesFromExtPubKey({
    extPubKey: key,
    network: 'mainnet',
    purpose: xpubLib.Purpose.P2PKH,
    addressCount: 100
  });
  console.log(addrs);

  res.render('index', { title: 'xpub reader', xpub: key });
});

module.exports = router;
