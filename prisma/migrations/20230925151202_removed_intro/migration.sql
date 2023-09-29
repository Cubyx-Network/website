/*
  Warnings:

  - You are about to drop the column `intro` on the `TeamMember` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TeamMember" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "avatar" BLOB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSync" DATETIME NOT NULL
);
INSERT INTO "new_TeamMember" ("avatar", "createdAt", "id", "lastSync", "name") SELECT "avatar", "createdAt", "id", "lastSync", "name" FROM "TeamMember";
DROP TABLE "TeamMember";
ALTER TABLE "new_TeamMember" RENAME TO "TeamMember";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
