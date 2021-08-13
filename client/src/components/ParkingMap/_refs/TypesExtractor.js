const trashData = require('./raw.json');
const fs = require('fs');

let props = {};
trashData.elements.map(e => {
    if(e.type === "node") return;
    Object.keys(e.tags).forEach(key => {
        const val = e.tags[key];
        if(!props[key]) props[key] = {};
        if(!props[key][val]) props[key][val] = 0;
        props[key][val]++;
    });
});
fs.writeFileSync('./CommonTypes.json', JSON.stringify(props));