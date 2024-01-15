import express from 'express';

const router = express.Router();

router.get("/", async (req, res) => {
  const reqParam = req.query.key;
  if (reqParam) {
    res.json({ message: `Hello, world ${reqParam}!` });
  } else {
    res.json({ message: `Hello, world!` });
  }
});

router.get("/sub-api", async (req, res) => {
  res.json({ message: `Second API!` });
});

export default router;