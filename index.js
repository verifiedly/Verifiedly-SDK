"use strict"
const fetch = require('node-fetch');

function Verifiedly(key) {
    if (!(this instanceof Verifiedly)) {
        return new Verifiedly(key); 
    } 

    if(key) {
        apikey = key
    } 
}

//let BASE = 'https://api.verified.ly/v1'
let BASE = 'http://localhost:3000'
let apikey


Verifiedly.prototype = {

getKycSession() {
    return new Promise((resolve, reject) => {
 if(apikey) {
    var myHeaders = new fetch.Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("apiKEY", apikey);
    urlencoded.append("service", "KYC");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    let status
    fetch(BASE+"/verification/requestSession", requestOptions)
      .then(response => {
          status = response.status;
        // console.log(response)
         return response.json()
        })
      .then(res => {
      //  console.log(res)
          if (status == 200) {
          //  console.log('success')
            resolve(res)
          } else {
         //  console.log('error')
           reject(res.message)
         }
          
        })
      .catch(error => console.log('error', error));
 } else {
     console.log('Verifiedly Error: API key not set')
 }
})
},

getKybSession() {
    return new Promise((resolve, reject) => {
 if(apikey) {
    var myHeaders = new fetch.Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("apiKEY", apikey);
    urlencoded.append("service", "KYB");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    let status
    fetch(BASE+"/verification/requestSession", requestOptions)
      .then(response => {
          status = response.status;
        // console.log(response)
         return response.json()
        })
      .then(res => {
      //  console.log(res)
          if (status == 200) {
           // console.log('success')
            resolve(res)
          } else {
           //console.log('error')
           reject(res.message)
         }
          
        })
      .catch(error => console.log('error', error));
 } else {
     console.log('Verifiedly Error: API key not set')
 }
})
}
}

module.exports = Verifiedly;

module.exports.default = Verifiedly;