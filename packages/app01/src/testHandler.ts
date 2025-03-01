import { Request, Response } from "express";
import { GetPerson } from "@trcore/domain";

export const testHandler = async (req: Request, resp: Response) => {
  resp.setHeader("Content-Type", "application/json");
  resp.json({ message: GetPerson(), status: "OK" });
  resp.end();
};
