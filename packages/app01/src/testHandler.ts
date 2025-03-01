import { Request, Response } from "express";
import { GetPerson } from "@trcore/domain";
import { GetUserById } from "@trcore/placeholderapi";

export const testHandler = async (req: Request, resp: Response) => {
  resp.setHeader("Content-Type", "application/json");
  resp.json({ message: GetPerson(), status: "OK" });
  resp.end();
};

export const getPersonHandler = async (req: Request, resp: Response) => {
  resp.setHeader("Content-Type", "application/json");
  resp.json(await GetUserById(Number(req.params.id)));
  resp.end();
};
