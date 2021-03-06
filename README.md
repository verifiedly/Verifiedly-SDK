# Getting started

A full documentation and getting started guide can be found [Here](https://verifiedlydocs.com)


## Installation

`npm i verifiedly`

## Usage
``` js
const verifiedly = require('verifiedly')('API_KEY_HERE')

``` 

### Verification Sessions
A verification session is used to invoke a verifiedly UI element. Whether on a browser or in a mobile application.

A successful session request includes the following;

1. [status](#status)
2. [session](#session)
3. [link](#link)

### Status
A status basically informs you of the status of the request.

### Session
A session is what is used to invoke a verification session in whatever environment you choose. Without a session, any request to invoke the verifiedly UI will fail.

### Link
A link is also provided incase you want to pass that to your frontend, to allow your user confinently click on a verification button. 


## Requesting a KYC session
``` js
verifiedly.getKycSession().then(response => {
    console.log(response)
}) .catch(error => {
    console.log(error)
})

```

## Requesting a KYB session
``` js
verifiedly.getKybSession().then(response => {
    console.log(response)
}) .catch(error => {
    console.log(error)
})

```