module.exports = (length = 10) => {
    if (length < 8 || length > 12) {
        throw 'Unique IDs shorter than 8 or longer than 12 characters are not supported';
    }

    let datePart = Date.now().toString(32);
    // Cuts maximal the first three characters, depending on the desired length
    datePart = datePart.substring(datePart.length - (length - 3));

    // Generates random characters to bring some randomness into the unique ID
    let mathPart = Math.floor(Math.random() * 1000000000).toString(32);

    let uniqId = datePart + mathPart;

    return uniqId.substring(0, length);
}
