import express, { Request, Response } from 'express';
import profileList from '../Others/profiles.json';
import profiles from '../Modules/profiles';

const router = express.Router()

interface profile {
    id: string,
    nickname: string,
    surname: string,
    age: number,
    icon: string
}

// let profiles: profile[] = profileList.allProfiles as profile[];

router.get("/", async ( req: Request, res: Response ) => {
    const list = await profiles.find({})

    res.status(200).json(list)
})

router.post("/renew", async ( req: Request, res: Response ) => {
    try {
        await profiles.deleteMany({});
        profileList.allProfiles.map( async (x) => {
            return await profiles.insertMany({id: x.id, nickname: x.nickname, surname: x.surname, age: x.age, icon: x.icon})
        })

        // console.log(...profileList.allProfiles)
    } catch (err) {
        res.status(400).json({ errorMessage: err });
    } finally {
        res.status(200).json({ message: "Success" });
    }

})

router.get('/:id', async ( req: Request, res: Response ) => {
    const { id } = req.params;

    if ( isNaN( parseInt(id) ) ) {
        res.status(400).json({ message: "Can't found profile with Id!" }); 
        return 
    }

    const currentProfile = await profiles.findOne({ id: parseInt(id) });
    if ( !currentProfile ) return res.status(400).json({ message: "Can't found profile with Id!" });

    res.status(200).json(currentProfile)
})

router.delete('/:id', async ( req: Request, res: Response ) => {
    const { id } = req.params;

    if ( isNaN( parseInt(id) ) ) {
        return res.status(400).json({ message: "Can't found profile with Id!" }); 
    }

    const currentProfile = await profiles.findOne({ id: parseInt(id) });
    if ( !currentProfile ) return res.status(400).json({ message: "Can't found profile with Id!" });

    try {
        await profiles.deleteOne({ id: parseInt(id) });
    } catch (err) {
        res.status(400).json({errorMessage: err});
    } finally {
        res.status(200).json({message: "Success"});
    }

})

export default router;