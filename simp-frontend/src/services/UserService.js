import axios from 'axios';

const BASIC_URL = "http://localhost:8080"

class UserService {
    
    authenticate(loginDetails){
        return axios.post(`${BASIC_URL}/authenticate`, loginDetails);
    }

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
    getAllCommissionStructure(){
        return axios.get(BASIC_URL+'/admin/change-commission-structure/');
       
    }
    changeCommissionStructure(commission,commissionId){
        return axios.put(BASIC_URL+'/admin/change-commission-structure/'+commissionId,commission);
    }   

    updateCommission(userId, transactionMonth, commission){
        return axios.put(`${BASIC_URL}/admin/update-commission?userId=${userId}&transactionMonth="${transactionMonth}"`, commission)
    }
    getUserCommissionDetail(userId){
        return axios.get(`${BASIC_URL}/user/mycommission?userId=${userId}`);
    }

    addProduct(product) {
        return axios.post(`${BASIC_URL}/admin/products`, product);
    }

    getAllProducts() {
        return axios.get(`${BASIC_URL}/admin/products`);
    }
}

export default new UserService()