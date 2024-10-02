import express, { Router } from "express";

const router: Router = express.Router();

const users = [
  {
    createdAt: "2024-09-29T15:03:46.831Z",
    name: "Nigel",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1192.jpg",
    id: "2",
  },
  {
    createdAt: "2024-09-29T19:31:43.704Z",
    name: "Nigel",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/352.jpg",
    id: "3",
  },
  {
    createdAt: "2024-09-29T15:10:15.826Z",
    name: "Cornelius Reynolds",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/558.jpg",
    id: "4",
  },
  {
    createdAt: "2024-09-29T13:34:00.208Z",
    name: "Wilbur Yost",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/568.jpg",
    id: "5",
  },
  {
    createdAt: "2024-09-29T20:21:37.492Z",
    name: "Miss Jeffrey Stroman",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/829.jpg",
    id: "6",
  },
];

router.get(
  "/",
  (req, res, next) => {
    //   console.log(req);
    res.send({ users });
    next();
  },
  (req, res, next) => {
    console.log("next");
  }
);

export default router;
