import express, { Request, Response } from "express";
const router = express.Router();
import db from "../utils/database";

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const sql = await db.execute("CALL Proc_get_one_category(?)", [id]);
    const [category] = sql;

    if (!Array.isArray(category)) {
      throw new Error("Không hợp lệ");
    }

    res.status(200).json({
      message: "Thành công",
      category: category[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "lỗi server",
      error: error,
    });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const sql = await db.execute("CALL Proc_get_all_category()");
    const [category] = sql;

    if (!Array.isArray(category)) {
      throw new Error("Không hợp lệ");
    }

    res.status(200).json({
      message: "Thành công",
      category: category[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "lỗi server",
      error: error,
    });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { userName } = req.body;
  try {
    const sql = await db.execute("CALL Proc_post_categories(?)", [
      userName
    ]);
    const [result] = sql;
    res.json({
      message: "Thêm thành công",
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi server",
      error: error,
    });
  }
});



export default router;
