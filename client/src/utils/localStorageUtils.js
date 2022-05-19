const setItemValue = (name, val) => {
    localStorage.setItem(name, val);
};

const getItemValue = (name) => {
    return localStorage.getItem(name);
};

const stopScrolling = (value) => {
    value ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
}

export {
    setItemValue,
    getItemValue,
    stopScrolling,
};
