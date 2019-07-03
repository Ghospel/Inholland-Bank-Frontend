<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <form id="login">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" v-model="uname" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" v-model="psw" required>

        <button type="submit" v-on:click="login(uname, psw)">Login</button>

        {{uname}}
        {{psw}}
      </form>
    </div>
  </div>
</template>

<script>
// Set the configuration settings
/* const axios = require('axios');
axios({
    method: 'get',
    url: 'http://localhost:8080/api/customer',
    responseType: 'application/json'
  })
  .then(function (response) {
    console.log(response)
  }); */

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      uname: 'username',
      psw: 'password'
    }
  },
  methods: {
    login: async function (uname, psw) {
        const credentials = {
          client: {
            id: process.env.CLIENT_ID,
            secret: process.env.CLIENT_SECRET
          },
          auth: {
            tokenHost: 'http://localhost:8080/oauth/token'
          }
        };
        
        // Initialize the OAuth2 Library
        const oauth2 = require('simple-oauth2').create(credentials);

        // Get the access token object.
        const tokenConfig = {
          username: uname,
          password: psw
        };
        
      console.log(uname, psw);
        // Save the access token
        try {
          const result = await oauth2.ownerPassword.getToken(tokenConfig);
          const accessToken = oauth2.accessToken.create(result);
          console.log('2', accessToken);
        } catch (error) {
          console.log('Access Token Error', error.message);
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #EC008C;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.container {
  width: 30%;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
}

form {
  border:none;
}


</style>
