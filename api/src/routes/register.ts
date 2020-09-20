import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
  console.log(1234);
  res.json({ message: "OK" });
});

export { router as register };
