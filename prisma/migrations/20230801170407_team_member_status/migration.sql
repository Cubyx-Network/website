/*
  Warnings:

  - Added the required column `statusId` to the `TeamMember` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "TeamMemberStatus" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TeamMember" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "intro" TEXT NOT NULL,
    "avatar" TEXT,
    "youtube" TEXT,
    "mastodon" TEXT,
    "discord" TEXT,
    "twitch" TEXT,
    "reddit" TEXT,
    "github" TEXT,
    "statusId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TeamMember_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "TeamMemberStatus" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TeamMember" ("avatar", "createdAt", "discord", "github", "id", "intro", "mastodon", "name", "reddit", "twitch", "youtube") SELECT "avatar", "createdAt", "discord", "github", "id", "intro", "mastodon", "name", "reddit", "twitch", "youtube" FROM "TeamMember";
DROP TABLE "TeamMember";
ALTER TABLE "new_TeamMember" RENAME TO "TeamMember";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
