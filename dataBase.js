const fs = require('fs');
const messagesPath = './messages';
let data = [];

module.exports = {
    init() {
        try {
            fs.readdir(messagesPath, (err, files) => {
                if (files) {
                    files.forEach(file => {
                        const fileContents = JSON.parse((fs.readFileSync(messagesPath + '/' + file)).toString(('utf-8')));
                        data.unshift(fileContents);
                    });
                } else {
                    data = [];
                }
            });
        } catch (e) {
            data = [];
        }
    },
    getMessages() {
        return data.length <= 5 ? data : data.slice(0, 5);
    },
    addItem(message) {
        const fileName = `./messages/${message.datetime}.json`;
        fs.writeFileSync(fileName, JSON.stringify(message));
        data.push(message);
    },
}