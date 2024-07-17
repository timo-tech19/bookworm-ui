import { db } from "@/lib/db";
import { ReadingList } from "@prisma/client";

export async function getUserReadingListByUserId(
  userId: string
): Promise<ReadingList | null> {
  try {
    const readingList = await db.readingList.findUnique({ where: { userId } });
    return readingList;
  } catch (err) {
    console.error("Error fetching user reading list by id: ", err);
    return null;
  }
}
