import { Request, Response } from "express";

export const isLoggedIn = (req: Request) => !!req.session!.userId;

export const logIn = (req: Request, userId: string) => {
  req.session!.userId = userId;
};

export const logOut = (req: Request, res: Response) => {
  new Promise((resolve, reject) => {
    req.session!.destroy((err: Error) => {
      if (err) reject(err);

      res.clearCookie("sid");

      resolve();
    });
  });
};
