import axios from 'axios';

const BASIC_URL = "http://localhost:8080/user/allsales"

class UserService {
     
    getSalesDetails(){
        return axios.get(BASIC_URL);
    }
}

export default new UserService()