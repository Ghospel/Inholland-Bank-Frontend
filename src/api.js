const axios = require('axios')

export async function getToken(uname, psw){
        let ClientOAuth2 = require("client-oauth2");
        const bankAuth = new ClientOAuth2({
            clientId: "my-trusted-client",
            clientSecret: "secret",
            accessTokenUri: "http://localhost:8080/oauth/token"
        });
        let login = await bankAuth.owner.getToken(uname, psw);
        if(login.accessToken){
            return login.accessToken;
        } else{
            console.log(' invalid credentials ')
        }
}

export async function getAccounts(token){
    return new Promise(function(resolve, reject){
        axios
        .get('http://localhost:8080/api/accounts', {
            params: {
    
            },
            headers: {
                'Authorization': "Bearer" + token
            }
        })
        .then(response => {
            console.log('returning: ', response.data)
            resolve(response.data)
        })
        .catch(function (error) {
            reject(error)
        })
    })
}

