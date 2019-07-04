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
            this.$store.state.accessToken = login.accessToken
            this.$emit("authenticated", true);
            this.$router.replace({ name: "secure" });
        } else{
            console.log(' invalid credentials ')
        }
}

export function getAccounts(){
    axios
    .get('http://localhost:8080/api/accounts', {
        params: {

        },
        headers: {
            'Authorization': "Bearer" + this.$store.state.accessToken
        }
    })
    .then(response => (this.info = response.data))
    .catch(function (error) {
        info = 'An error has occured.'
    })
}
