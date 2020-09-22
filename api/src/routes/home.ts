import { Router, Request, Response } from "express";
import { catchAsync, auth } from "../middleware";
import { User } from "../models";

const router = Router();

router.get(
  "/home",
  auth,
  catchAsync(async (req: Request, res: Response) =>
    res.json(await User.findById(req.session!.userId))
  )
);

export { router as home };
