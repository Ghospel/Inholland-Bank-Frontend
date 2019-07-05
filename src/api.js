import { async } from 'q';

const axios = require('axios')

export async function getToken(uname, psw){
    return new Promise(async function (resolve, reject) {
        let ClientOAuth2 = require("client-oauth2");
        const bankAuth = new ClientOAuth2({
            clientId: "my-trusted-client",
            clientSecret: "secret",
            accessTokenUri: "http://localhost:8080/oauth/token"
        });
        let login = await bankAuth.owner.getToken(uname, psw);
        if(login.accessToken){
            resolve(login.accessToken)
        } else{
            reject('invalid credentials')
        }
    })
}

async function get(token, endpoint){
    return new Promise(async function(resolve, reject){
        axios
        .get(`http://localhost:8080/api/${endpoint}`, {
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

export async function getAccounts(token){
    return new Promise(async function(resolve, reject){
        resolve(await get(token, 'accounts')).catch(err => { reject(err) });
    })
}

export async function getTransactions(token){
    return new Promise(async function(resolve, reject){
        resolve(await get(token, 'transaction')).catch(err => { reject(err) });
    })
}

export async function getCustomers(token){
    return new Promise(async function(resolve, reject){
        resolve(await get(token, 'customer')).catch(err => { reject(err) });
    })
}
