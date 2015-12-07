import mongoose, {Schema} from 'mongoose';

const GalleryItem = mongoose.model('GalleryItem', Schema({
    id: Number,
    title: String,
    description: String,
    material: String,
    filename: String,
    size: [{
        width: Number,
        height: Number,
        unit: String,
    }],
    layout: [String],
    gallery: [String],
    isForSale: Boolean,
    price: Number,
    isSold: Boolean,
    isActive: Boolean,
    created: { type: Date, default: Date.now },
}));


export default GalleryItem;
