import Web3 from "web3";
//import Account from "web3-eth-accounts";
import NonceNS from "./NonceNS.abi.json";

let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
} else {
  web3 = new Web3("https://ropsten-rpc.linkpool.io");
}

const address = "0xc723c2e0331c02b045023dfcefee5fa89877c0f1";
const contract = new web3.eth.Contract(NonceNS, address);

// contract.methods.newPost(...).send();
// contract.methods.getNumberPosts().call();

export { address, contract };
