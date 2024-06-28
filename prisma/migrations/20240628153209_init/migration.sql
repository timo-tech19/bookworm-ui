-- CreateTable
CREATE TABLE "ReadingList" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "readingListId" INTEGER NOT NULL,
    CONSTRAINT "Book_readingListId_fkey" FOREIGN KEY ("readingListId") REFERENCES "ReadingList" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
