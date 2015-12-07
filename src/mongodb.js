import fs from 'fs';

function toBool(val) {
    return isNaN(parseInt(val)) ? !!val : !!parseInt(val);
}
function toInt(val) {
    return isNaN(parseInt(val)) ? undefined : parseInt(val);
}
function toFloat(val) {
    return isNaN(parseFloat(val)) ? undefined : parseFloat(val)
}
function toDate(year, month) {
    var created = new Date();
    try {
        created = new Date(year, month);
    } catch(e) {
        console.log('Error parsing date from: ', year, month);
    }
    return created;
}

module.exports = {
    test: function() {
        fs.readFile('./data/alfa_art.txt', 'utf8', function(err, data) {
            var lines = data.split('\r\n');
            var items = lines.slice(1).reduce(function(accum, line, i) {
                var fields = line.split('\t');
                if(fields.length < 14) return accum;
                fields = fields.map(item => item === 'NULL' ? undefined : item);


                accum.push({
                    id: fields[0],
                    title: fields[1],
                    filename: fields[2],
                    media: fields[3],
                    description: fields[4],
                    created: toDate(toInt(fields[6]), toInt(fields[5]) - 1),
                    width: toInt(fields[7]),
                    height: toInt(fields[8]),
                    isForSale: toBool(fields[9]),
                    price: toFloat(fields[10]),
                    isSold: toBool(fields[11]),
                    isActive: toBool(fields[12]),
                    galleryId: fields[13],
                });
                return accum;
            }, []);
            console.log('total items:', items.length);
            console.log('item 0:', items[0]);
        });
    },
}
