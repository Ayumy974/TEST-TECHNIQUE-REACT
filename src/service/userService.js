// *** Requêtes vers le serveur REST ***
// Avec l'usage de la méthode static, nous n'avons pas à instancier notre service et nous pouvons utiliser la classe  directement

// Utilisation de la librairie axios pour effectuer les requêtes vers l'API rest
import axios from 'axios';

export default class UserService {

    static getUsers() {
        return axios({
            'method': 'GET',
            'url': `http://localhost:5000/users`,
        })
        .then(response => response.data)
        .catch(error => console.log(error))
    }
}