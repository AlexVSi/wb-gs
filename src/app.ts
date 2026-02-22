import express from "express";

export function createApp() {
  const app = express();

  app.get("/health", (_, res) => {
    res.json({ status: "ok" });
  });

  return app;
}