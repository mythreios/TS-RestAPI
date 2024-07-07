import mongoose from 'mongoose';

class Handler {

    async Init() {
        mongoose.set('strictQuery', false);
        mongoose.connect("mongodb+srv://royalise:1381@cluster0.nefprti.mongodb.net/")
            .then(x => console.log(`DB OK!`))
                .catch((err) => console.log(`DB ERROR! \n[${err}]`))
    }
}

export default new Handler();