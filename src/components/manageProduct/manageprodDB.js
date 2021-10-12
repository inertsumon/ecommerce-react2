
const addDbProd = (prodObj) => {
  
  let prod = prodObj; 

    updateDbProd(prod);
  }
  
const getDbProd = () => localStorage.getItem('prod');
  
  const updateDbProd = prod => {
    localStorage.setItem('prod', JSON.stringify(prod));
  }
  
  const removeFromDb = name => {
    const exists = getDbProd();
    if (!exists) {
  
    }
    else {
        const product = JSON.parse(exists);
        // console.log(product);
        let index = product.findIndex(x => x.name ==={name});
        product.splice(name, 1);
      updateDbProd(product);
    }
  }
  
  const getStoredProd = () => {
    const exists = getDbProd();
    return exists ? JSON.parse(exists) : {};
  }
  
  const clearTheUser = () => {
    localStorage.removeItem('prod');
  }
  
  export { addDbProd, getDbProd, clearTheUser,getStoredProd,removeFromDb }