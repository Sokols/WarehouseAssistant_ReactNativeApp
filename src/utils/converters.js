export const createCodeFromId = (id) => {
    if (id < 10) {
        return "00" + id.toString();
    } else if (id < 100) {
        return "0" + id.toString();
    } else {
        return id.toString();
    }

}