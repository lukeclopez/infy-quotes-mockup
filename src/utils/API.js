import axios from "axios";

export default {
    getUsers: () => {
        return axios.get("http://localhost:3000/users")
    },
    getUserById: (id) => {
        return axios.get("http://localhost:3000/users/" + id)
    },
    getTransactions: () => {
        return axios.get("http://localhost:3000/transactions")
    },
    getTransactionsById: (id) => {
        return axios.get("http://localhost:3000/transactions/" + id)
    },
    postTransactions: (data) => {
        return axios.post("http://localhost:3000/transactions", data)
    },
    updateTransaction : (id, transactionData) => {
        return axios.put("http://localhost:3000/transactions" + id, transactionData)
    },
    deleteTransaction: (id) => {
        return axios.delete("http://localhost:3000/transactions/" + id)
    }
};
