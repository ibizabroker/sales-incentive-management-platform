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

    uploadSalesData(salesDetails){
        return axios.post(`${BASIC_URL}/admin/addsalesdetails`, salesDetails)
        .catch(err => {
            console.log("Database connection error");
            console.log(err);
            return err;
        })
    }
    getCommissionStructure(commissionId){
        return axios.get(BASIC_URL+'/admin/change-commission-structure/'+commissionId);
       
    }
    getAllCommissionStructure(commissionId){
        return axios.get(BASIC_URL+'/admin/change-commission-structure/');
       
    }
    changeCommissionStructure(commission,commissionId){
        return axios.put(BASIC_URL+'/admin/change-commission-structure/'+commissionId,commission);
       
    }
}

export default new UserService()