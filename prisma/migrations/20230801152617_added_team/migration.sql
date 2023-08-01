-- CreateTable
CREATE TABLE "TeamMember" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "intro" TEXT NOT NULL,
    "avatar" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Subunit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "leaderId" TEXT NOT NULL,
    CONSTRAINT "Subunit_leaderId_fkey" FOREIGN KEY ("leaderId") REFERENCES "TeamMember" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_teamMemberSubunits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_teamMemberSubunits_A_fkey" FOREIGN KEY ("A") REFERENCES "Subunit" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_teamMemberSubunits_B_fkey" FOREIGN KEY ("B") REFERENCES "TeamMember" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_teamMemberSubunits_AB_unique" ON "_teamMemberSubunits"("A", "B");

-- CreateIndex
CREATE INDEX "_teamMemberSubunits_B_index" ON "_teamMemberSubunits"("B");
