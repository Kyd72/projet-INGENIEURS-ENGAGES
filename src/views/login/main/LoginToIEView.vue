<template>

  <div>

    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="handleLogin">Login</button>
  </div>

</template>

<script setup>
import { useApi } from '/api_for_etudiants.js';
import {onMounted} from "vue";

import { useCookies } from "vue3-cookies";
import Cookies from 'js-cookie'
import axios from "axios";

const gett=useCookies()

let token
let token2

const { login } = useApi();


const username = '';
const password = '';

async function
handleLogin() {

  /*let fetchOptions = {
    method :"GET",
    withCredentials:true,
    credentials: 'include'

  }


  const urlToRequest = "http://127.0.0.1:8000//ie/etudiants/csrf_token"*/
  /*fetch(urlToRequest,fetchOptions).catch((error)=>{
        console.log(error)
      }
  )*/
  /*
  await axios_instance.get('http://127.0.0.1:8000//ie/etudiants/csrf_token')
      .then(responsee => console.log(responsee))*/
  /*try {
    await login(username, password);
  } catch (error) {
    console.log(error);
  }
}
*/


  /*const csrf = ()=>{
  token=gett.cookies.get("csrftoken")
  token2=Cookies.get('csrftoken')
  console.log( "valeur :", gett.cookies.get('csrftoken'), " valeur 2", Cookies.get('csrftoken'), Cookies)

}

const axios_instance = axios.create({
  baseURL: 'http://127.0.0.1:8000//ie/etudiants/csrf_token',
});

axios_instance.interceptors.request.use((config) => {
  config.withCredentials = true;
  config.headers = {
    ...config.headers,
/!*
    SameSite: 'None',
*!/
  };
  return config;
});*/


  /*
onMounted(  )
*/
  const response = await fetch('http://127.0.0.1:8000/ie/etudiants/authentification', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  });

  if (response.ok) {
    // Stocker le token d'authentification dans le localStorage
    const data = await response.json();
    localStorage.setItem('access_token', data.access_token);
    // Rediriger vers la page d'accueil
  }
  else {
    // Gérer les erreurs de connexion
    console.error(response);
  }

}
</script>

<style scoped>

div{
  position: absolute;
  right: 0;
  top: 15vh;
  display: block;
  height: 50vh;
  width: 50vw;
}
</style>