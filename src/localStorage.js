export const loadData = () => {
    try {
        const sSerializedData = localStorage.getItem("todoData");
        if (sSerializedData === null) {
            return undefined;
        }
        return JSON.parse(sSerializedData);
    }
    catch(err) {
        return undefined;
    }
}


export const saveData = (oDataToSave) => {
    try {
        const sSerializedData = JSON.stringify(oDataToSave);
        localStorage.setItem("todoData", sSerializedData);
    }
    catch(err) {
        console.log("not able to save data to localstorage" + err);
    }
}