import axios from 'axios';

const BASIC_URL = "http://localhost:8080"

class UserService {
     
    getSalesDetails(){
        return axios.get(`${BASIC_URL}/user/allsales`);
    }

    getMySales(userId, transactionMonth){
        return axios.get(`${BASIC_URL}/user/mysales?userId=${userId}&transactionMonth="${transactionMonth}"`);
       
    }
}

export default new UserService()