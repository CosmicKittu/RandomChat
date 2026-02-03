import type { Request, Response, NextFunction } from "express";

export function loginWithGoogle(req: Request, res: Response) {}

export function googleCallback(req: Request, res: Response) {
  console.log("google Called us back");
}

export function logout(req: Request, res: Response) {}

export function profileController(req: Request, res: Response) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  res.json(req.user);
}
