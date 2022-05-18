const setItemValue = (name, val) => {
    localStorage.setItem(name, val);
};

const getItemValue = (name) => {
    return localStorage.getItem(name);
};

const stopScrolling = () =>{
    document.body.style.overflow = "hidden";
}

export {
    setItemValue,
    getItemValue,
    stopScrolling,
};
