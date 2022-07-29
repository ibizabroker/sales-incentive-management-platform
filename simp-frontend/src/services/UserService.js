import axios from 'axios';

const BASIC_URL = "http://localhost:8080"

class UserService {
     
    getSalesDetails(){
        return axios.get(`${BASIC_URL}/user/allsales`);
    }

    getMySales(userId, transactionMonth){
        return axios.get(`${BASIC_URL}/user/mysales?userId=${userId}&transactionMonth="${transactionMonth}"`);
       
    }

    getSalesMenDetails(){
        return axios.get(`${BASIC_URL}/admin/users`);
    }
    createSalesmen(user){
        return axios.post(`${BASIC_URL}/admin/users`, user);
    }
}

export default new UserService()