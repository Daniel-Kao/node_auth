import { Router } from "express";
import { validate, registerSchema } from "../validation";
import { catchAsync, guest } from "../middleware";
import { User } from "../models";
import { logIn } from "../auth";

const router = Router();

router.post(
  "/register",
  guest,
  catchAsync(async (req, res) => {
    await validate(registerSchema, req.body);

    const { email, name, password } = req.body;

    const found = await User.exists({ email });

    if (found) {
      throw new Error("invalid email");
    }

    const user = await User.create({
      email,
      name,
      password,
    });

    console.log(user);

    logIn(req, user.id);

    res.json({ message: "ok" });
  })
);

export { router as register };
