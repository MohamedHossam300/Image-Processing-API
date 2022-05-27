import sharp from "sharp";

const resizingTheImage = async (imageWidth: string, imageHeight: string, fileName: string): Promise<void> => {
    const imageDir: string = `./images/${fileName}.jpg`;
    const outputDir: string = `./images/imageOutput/${fileName}${imageWidth}_${imageHeight}.jpg`;

    if (isNaN(parseInt(imageWidth) && parseInt(imageHeight)) && fileName) {
        console.log("the inputs is Invalid")
    } else {
        await sharp(imageDir)
            .resize(parseInt(imageWidth), parseInt(imageHeight))
            .toFile(outputDir);
    }
}

export default resizingTheImage;