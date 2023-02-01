
//import required libraries. CryptoJs to create MD5 hash. https to allow API call
import pkg from 'crypto-js';
const { MD5 } = pkg;
import https from 'https'

// Add your own API key between the ""

var publickey = "338d59a9f77ef2746989f94e70daa011";
var privatekey = '0dda5ea1e716633833383b423d30b73441ba9138';
var ts = new Date().getTime();
var stringToHash = ts + privatekey + publickey;
var hash = MD5(stringToHash);
var baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
var limit = 1;
var url = baseUrl + '?limit=' + limit + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash

console.log("hash is"+hash);

// Here we are building the URL we need to query the database
var queryURL = `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&ts=${ts}&apikey=${publickey}&hash=${hash}`;


// get request to return data and console log
https.get(queryURL, (res) => {
    let data = '';
  
    res.on('data', (chunk) => {
      data += chunk;
    });
  
    res.on('end', () => {
      console.log("data is:" + JSON.parse(data));
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });


//fetch(queryURL)
//.then(response => response.json())
//.then(data => console.log("data is:" +data));