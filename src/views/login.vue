<template>
  <div class="hello">
    <h1>Welcome to the InHolland Bank App</h1>
    <div class="container">
      <form id="login">
        <label for="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" v-model="uname" required />
        <label for="psw">
          <b>Password</b>
        </label>
        <input type="password" placeholder="Enter Password" v-model="psw" required />
        <button type="button" v-on:click="login(uname, psw)">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { getToken } from './../api'
export default {
  name: "Login",
  props: {},
  data: function() {
    return {
      uname: "user",
      psw: "user"
    };
  },
  methods: {
    login: async function(uname, psw) {
      const token = await getToken(uname,psw);
      if(token){
        this.$store.state.accessToken = token
        this.$emit("authenticated", true);
        this.$router.replace({ name: "secure" });
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

body {
  font-family: Arial, Helvetica, sans-serif;
}
form {
  border: 3px solid #f1f1f1;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #ec008c;
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
  border: none;
}
</style>
