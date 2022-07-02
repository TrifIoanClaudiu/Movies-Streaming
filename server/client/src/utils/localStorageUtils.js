const setItemValue = (name, val) => {
    localStorage.setItem(name, val);
};

const getItemValue = (name) => {
    return localStorage.getItem(name);
};

const stopScrolling = (value) => {
    value ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
}

const refreshPage = () =>{
    if (getItemValue('reloadCount') < 2) {
        setItemValue('reloadCount', getItemValue('reloadCount') + 1)
        window.location.reload();
    } else {
        setItemValue('reloadCount', 0);
    }
}
export {
    setItemValue,
    getItemValue,
    stopScrolling,
    refreshPage,
};
