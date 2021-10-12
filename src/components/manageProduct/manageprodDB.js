
const addDbProd = (prodObj) => {
  
  let prod = [prodObj]; 

    updateDbProd(prod);
  }
  
const getDbProd = () => localStorage.getItem('prod');
  
  const updateDbProd = prod => {
    localStorage.setItem('prod', JSON.stringify(prod));
  }
  
  // const removeFromDb = email => {
  //   const exists = getDb();
  //   if (!exists) {
  
  //   }
  //   else {
  //     const user = JSON.parse(exists);
  //     delete user[email];
  //     updateDb(user);
  //   }
  // }
  
  const getStoredProd = () => {
    const exists = getDbProd();
    return exists ? JSON.parse(exists) : {};
  }
  
  const clearTheUser = () => {
    localStorage.removeItem('prod');
  }
  
  export { addDbProd, getDbProd, clearTheUser,getStoredProd }