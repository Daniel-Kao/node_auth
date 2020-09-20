import { SessionOptions } from "express-session";

const ONE_HOUR = 1000 * 60 * 60;

const THIRTY_MINUTES = ONE_HOUR / 2;

const {
  SESSION_SECRET = "please keep this secret",
  SESSION_NAME = "sid",
  SESSION_IDLE_TIMEOUT = THIRTY_MINUTES,
} = process.env;

export const SESSION_OPTIONS: SessionOptions = {
  secret: SESSION_SECRET,
  name: SESSION_NAME,
  cookie: {
    maxAge: +SESSION_IDLE_TIMEOUT,
    secure: true,
    sameSite: true,
  },
  rolling: true,
  resave: false,
  saveUninitialized: false,
};
