-- CreateTable
CREATE TABLE `TeamMemberLabel` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `bordered` BOOLEAN NOT NULL DEFAULT false,
    `memberId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TeamMemberLabel` ADD CONSTRAINT `TeamMemberLabel_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `TeamMember`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
