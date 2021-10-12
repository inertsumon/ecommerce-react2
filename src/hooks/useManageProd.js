import { useState, useEffect } from 'react';
import { getStoredProd } from '../components/manageProduct/manageprodDB';

const useManageProd = () => {
    const [prod, setProd] = useState([]);

    useEffect(() => {

            const savedProd = getStoredProd();         
            setProd(savedProd);

    }, []);

    return [prod, setProd];
}

export default useManageProd;