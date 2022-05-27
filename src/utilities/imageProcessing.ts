import { Request, Response } from "express";
import fs, { promises as fsPromises } from 'fs';
import resizingTheImage from "./resizingTheImage";

const imageProcessing = async(req: Request, res: Response, next: Function): Promise<void | string> => {
    const widthValue = <string>req.query.width;
    const heightValue = <string>req.query.height;
    const nameFileValue = <string>req.query.namefile;

    const outputDir = `./images/imageOutput/${nameFileValue}${widthValue}_${heightValue}.jpg`;

    const makeDir = async (): Promise<void> => {
        await fsPromises.mkdir('./images/imageOutput');
    };

    const imageProcessing = async (): Promise<void> => {
        try {
            await resizingTheImage(widthValue, heightValue, nameFileValue);
        } catch {
            res.send('There is a problem with the image processing');
        }
    };

    if (fs.existsSync(outputDir)) {
        return outputDir;
    } else {
        makeDir();
        await imageProcessing();
    }

    next();
}

export default imageProcessing;