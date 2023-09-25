/*
  Warnings:

  - You are about to drop the `Subunit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TeamMemberStatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_teamMemberSubunits` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `discord` on the `TeamMember` table. All the data in the column will be lost.
  - You are about to drop the column `github` on the `TeamMember` table. All the data in the column will be lost.
  - You are about to drop the column `mastodon` on the `TeamMember` table. All the data in the column will be lost.
  - You are about to drop the column `reddit` on the `TeamMember` table. All the data in the column will be lost.
  - You are about to drop the column `statusId` on the `TeamMember` table. All the data in the column will be lost.
  - You are about to drop the column `twitch` on the `TeamMember` table. All the data in the column will be lost.
  - You are about to drop the column `youtube` on the `TeamMember` table. All the data in the column will be lost.
  - You are about to alter the column `avatar` on the `TeamMember` table. The data in that column could be lost. The data in that column will be cast from `String` to `Binary`.
  - Added the required column `lastSync` to the `TeamMember` table without a default value. This is not possible if the table is not empty.
  - Made the column `avatar` on table `TeamMember` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "_teamMemberSubunits_B_index";

-- DropIndex
DROP INDEX "_teamMemberSubunits_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Subunit";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TeamMemberStatus";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_teamMemberSubunits";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "TeamMemberSocials" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    CONSTRAINT "TeamMemberSocials_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "TeamMember" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TeamMember" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "intro" TEXT NOT NULL,
    "avatar" BLOB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSync" DATETIME NOT NULL
);
INSERT INTO "new_TeamMember" ("avatar", "createdAt", "id", "intro", "name") SELECT "avatar", "createdAt", "id", "intro", "name" FROM "TeamMember";
DROP TABLE "TeamMember";
ALTER TABLE "new_TeamMember" RENAME TO "TeamMember";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
