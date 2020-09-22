import { Router, Request, Response, NextFunction } from "express";
import { validate, loginSchema } from "../validation";
import { catchAsync, guest, auth } from "../middleware";
import { User } from "../models";
import { Unauthorized } from "../errors";
import { logIn, logOut } from "../auth";

const router = Router();

router.post(
  "/login",
  guest,
  catchAsync(async (req, res) => {
    await validate(loginSchema, req.body);

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    console.log(user);

    if (!user || !(await user.matchesPassword(password))) {
      throw new Unauthorized("Incorrect email or password");
    }

    logIn(req, user.id);

    res.json({ message: "ok" });
  })
);

router.post(
  "/logout",
  auth,
  catchAsync(async (req: Request, res: Response) => {
    await logOut(req, res);

    res.json({ message: "ok" });
  })
);

export { router as login };
