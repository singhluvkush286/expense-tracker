import React, { useState, useContext } from 'react'; // Don't forget to import useContext
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
          .catch((err) => {
            setError(err.response.data.message);
        });
        // Handle the response or other logic here
    };

    const getIncome = async () => {
        const response = await axios.get(`${BASE_URL}get-income`)
        setIncomes(response.data)
            
    }

    return (
        <GlobalContext.Provider
            value={{
                addIncome,
                getIncome,
                incomes
            }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
