import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// PUT /api/publish/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id;
  if (typeof postId !== "string") {
    return res.status(400).json({ message: "`id` must be a string" });
  }
  const post = await prisma.post.update({
    where: { id: postId },
    data: { published: true },
  });
  res.json(post);
}
