import { Request, Response, Router } from "express";
import image from "./api/image.routes";

const router = Router();

router.get("/", (_req: Request, res: Response): void => {
    res.send("This API Page \n Please Type In The Link <strong>/image?width=width&height=height&filename=filename</strong>");
});

router.use("/image", image);

export default router;