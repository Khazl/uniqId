module.exports = (length = 10) => {
    let date = new Date();
    let uniqId = date.getTime().toString(32).substring(2) + 
        Math.floor(Math.random() * 1000000000).toString(32);

    return uniqId.substring(0, length);
}