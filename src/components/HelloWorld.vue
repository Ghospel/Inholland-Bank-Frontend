<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <form id="login">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" v-model="uname" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" v-model="psw" required>

        <button type="button" v-on:click="login(uname, psw)">Login</button>

        {{uname}}
        {{psw}}
      </form>
    </div>
  </div>
</template>

<script>
// Set the configuration settings
// const axios = require('axios');
// axios({
//     method: 'post',
//     url: 'http://localhost:8080/oauth/token',
//     responseType: 'application/json'
//   })
//   .then(function (response) {
//     console.log(response)
//   }); 

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      uname: 'user',
      psw: 'user'
    }
  },
  methods: {
    login: async function (uname, psw) {
    
      let ClientOAuth2 = require('client-oauth2')

      const bankAuth = new ClientOAuth2({
        clientId: 'my-trusted-client',
        clientSecret: 'secret',
        accessTokenUri: 'http://localhost:8080/oauth/token',
      })

      bankAuth.owner.getToken(uname, psw)
        .then(function (user) {
        console.log(user) //=> { accessToken: '...', tokenType: 'bearer', ... }
      })
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
