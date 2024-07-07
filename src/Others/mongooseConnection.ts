import mongoose from 'mongoose';

class Handler {

    async Init() {
        mongoose.set('strictQuery', false);
        mongoose.connect("deletedPassword<Security>")
            .then(x => console.log(`DB OK!`))
                .catch((err) => console.log(`DB ERROR! \n[${err}]`))
    }
}

export default new Handler();
