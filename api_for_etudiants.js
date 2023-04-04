/** Fichier contenant toutes les requêtes API utilisées dans les pages étudiants */

/*Endpoints*/

import {ref} from "vue";







const serveur ="http://127.0.0.1:8000" // url du serveur du backend
const routeToAuthentication ="/ie/etudiants/authentification" // POST requête contenant le nom et le mot de passe

const routeToAllActivities="/ie/activites/etudiant" // les activités qui concernent l'étudiant actuellement connecté



/* Fin Endpoints*/


export function useApi() {
    const accessToken = ref(null);
    const refreshToken = ref(null);

    async function login(username, password) {








        const response = await fetch(`${serveur}${routeToAuthentication}`,
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
/*
                'X-CSRFToken': getCookiee("csrftoken")//token//csrf // // Obtenez la valeur du cookie CSRF en utilisant une fonction personnalisée (voir ci-dessous)
*/
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
/*
            credentials: 'include',
*/
        }).then(()=>{
            localStorage.setItem('access_token', response.data.access_token)});




        const data = await response.json();
        accessToken.value = data.access;
        refreshToken.value = data.refresh;
        return data;
    }

    /*function getCookiee(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Vérifiez si le nom du cookie correspond à celui que vous recherchez
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    console.log("cookie=============" , cookieValue)
                    break;
                }
            }
        }
        return cookieValue;
    }*/
    /*async function getUser() {
        if (!accessToken.value) {
            throw new Error('Access token is missing');
        }
        const response = await fetch(`${baseUrl}/user/`, {
            headers: {
                Authorization: `Bearer ${accessToken.value}`,
            },
            credentials: 'include',
        });
        const data = await response.json();
        return data;
    }*/

    return { accessToken, refreshToken, login};
}


/** 1- AUTHENTIFICATION --  Requêtes API Fetch pour s'authentifier avec Django*/