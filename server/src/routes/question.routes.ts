import express, { Request, Response } from "express";
const router = express.Router();
import db from "../utils/database";

router.get("/", async (req: Request, res: Response) => {
  try {
    const sql = await db.execute("CALL Proc_get_all_question()");
    const [question] = sql;
    if (!Array.isArray(question)) {
      throw new Error("Không hợp lệ");
    }
    res.status(200).json({
      message: "Thành công",
      question: question[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi server",
      error: error,
    });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const sql = await db.execute("CALL Proc_get_one_question(?)", [id]);
    const [question] = sql;
    if (!Array.isArray(question)) {
      throw new Error("Không hợp lệ");
    }
    res.status(200).json({
      message: "Thành công",
      question: question[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi server",
      error: error,
    });
  }
});

router.get("/:id/answers", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const sql = await db.execute("CALL Proc_question_answers(?)", [id]);
    const [result]: any = sql;

    if (result.length < 2) {
      return res.status(404).json({
        message: "Không tìm thấy câu hỏi hoặc câu trả lời",
      });
    }
    const question = result[0][0]; 
    const answers = result[1]; 

    res.status(200).json({
      question: question,
      answers: answers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi server",
      error: error,
    });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { content, level, category_id } = req.body;
  try {
    const sql = await db.execute("CALL Proc_post_category(?, ?, ?)", [
      content,
      level,
      category_id,
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
