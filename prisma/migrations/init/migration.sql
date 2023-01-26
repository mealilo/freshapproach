-- CreateTable
CREATE TABLE `Test` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `FIRST_NAME` VARCHAR(255) NULL,
    `EMAIL` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `EMAIL`(`EMAIL`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `buyer` (
    `buyer_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `person_ID` INTEGER NOT NULL,

    UNIQUE INDEX `person_ID_UNIQUE`(`person_ID`),
    PRIMARY KEY (`buyer_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `favorite` (
    `favorite_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `buyer_ID` INTEGER NOT NULL,
    `listing_ID` INTEGER NOT NULL,

    INDEX `buyer_ID`(`buyer_ID`),
    INDEX `listing_ID`(`listing_ID`),
    PRIMARY KEY (`favorite_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `listing` (
    `listing_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `producer_ID` INTEGER NOT NULL,
    `product_sub_category_ID` INTEGER NOT NULL,
    `title` VARCHAR(45) NOT NULL,
    `description` VARCHAR(400) NULL,
    `quantity_available` VARCHAR(45) NOT NULL,
    `price` DOUBLE NULL,
    `is_available` INTEGER NOT NULL,

    INDEX `producer_ID`(`producer_ID`),
    INDEX `product_sub_category_ID`(`product_sub_category_ID`),
    PRIMARY KEY (`listing_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `listing_picture` (
    `listing_picture_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `listing_ID` INTEGER NOT NULL,
    `picture_link` VARCHAR(250) NOT NULL,

    INDEX `listing_ID`(`listing_ID`),
    PRIMARY KEY (`listing_picture_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `person` (
    `person_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(100) NOT NULL,
    `last_name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(45) NOT NULL,
    `profile_picture_link` VARCHAR(250) NULL,
    `created_on` DATETIME(0) NOT NULL,

    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`person_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producer` (
    `producer_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `person_ID` INTEGER NULL,
    `address` VARCHAR(45) NULL,
    `state` VARCHAR(45) NULL,
    `zip_code` VARCHAR(45) NULL,
    `phone_number` VARCHAR(45) NULL,
    `address_public` BOOLEAN NULL,
    `phone_number_public` BOOLEAN NULL,
    `email_public` BOOLEAN NULL,

    UNIQUE INDEX `person_ID_UNIQUE`(`person_ID`),
    PRIMARY KEY (`producer_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_category` (
    `product_category_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`product_category_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_sub_category` (
    `product_sub_category_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `sub_category_name` VARCHAR(45) NOT NULL,
    `product_category_ID` INTEGER NOT NULL,

    UNIQUE INDEX `sub_category_name_UNIQUE`(`sub_category_name`),
    INDEX `product_category_ID`(`product_category_ID`),
    PRIMARY KEY (`product_sub_category_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `buyer` ADD CONSTRAINT `buyer_ibfk_1` FOREIGN KEY (`person_ID`) REFERENCES `person`(`person_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `favorite` ADD CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`buyer_ID`) REFERENCES `buyer`(`buyer_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `favorite` ADD CONSTRAINT `favorite_ibfk_2` FOREIGN KEY (`listing_ID`) REFERENCES `listing`(`listing_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `listing` ADD CONSTRAINT `listing_ibfk_1` FOREIGN KEY (`producer_ID`) REFERENCES `producer`(`producer_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `listing` ADD CONSTRAINT `listing_ibfk_2` FOREIGN KEY (`product_sub_category_ID`) REFERENCES `product_sub_category`(`product_sub_category_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `listing_picture` ADD CONSTRAINT `listing_picture_ibfk_1` FOREIGN KEY (`listing_ID`) REFERENCES `listing`(`listing_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `producer` ADD CONSTRAINT `producer_ibfk_1` FOREIGN KEY (`person_ID`) REFERENCES `person`(`person_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product_sub_category` ADD CONSTRAINT `product_sub_category_ibfk_1` FOREIGN KEY (`product_category_ID`) REFERENCES `product_category`(`product_category_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

