const fs = require('fs');
const fileName = './dataBase.json';

let data = [];

module.exports = {
    init() {
        try {
            const fileContents = fs.readFileSync(fileName);
            data = JSON.parse(fileContents);
        } catch (e) {
            data = [];
        }
    },
    getMessages() {
        return data;
    },
    addItem(message) {
        data.push(message);
        this.save();
    },
    save() {
        fs.writeFileSync(fileName, JSON.stringify(data));
    }
}