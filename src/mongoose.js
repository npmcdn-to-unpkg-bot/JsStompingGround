import mongoose from 'mongoose'

import GalleryItem from './models/GalleryItem';

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(cb) {
    console.log('OPEN:', cb);
});


module.exports = {
    test: function() {

        var item = new GalleryItem({
            id: 1,
            title: 'Sunrise',
            description: 'Sunrise in the lower valley.',
            material: 'oil on canvas',
            filename: '../data/gallery/sunrise.jpg',
            size: { width: 36, height: 24, unit: 'inches'},
            gallery: ['contempory', 'still life'],
            isForSale: true,
            price: 2000,
            isSold: false,
            isAction: true,
        });
        item.save(function(err, result) {
            if(err) console.log('ERR:', err);
            console.log('GalleryItem saved.');
        });

    },
}
