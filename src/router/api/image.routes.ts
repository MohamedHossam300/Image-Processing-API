import { Request, Response, Router } from "express";
import imageProcessing from "../../utilities/imageProcessing";

const image = Router();

image.get("/", imageProcessing, (req: Request, res: Response): void => {
    const widthValue = <string>req.query.width;
    const heightValue = <string>req.query.height;
    const nameFileValue = <string>req.query.namefile;
    const outputDir: string = `${nameFileValue}${widthValue}_${heightValue}.jpg`;

    res.sendFile(outputDir, { root: './images/imageOutput/' });
    res.status(404).send('There Are A Problem in This Page');

});

export default image;