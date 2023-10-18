-- CreateTable
CREATE TABLE "Film" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "episode_id" INTEGER NOT NULL,
    "opening_crawl" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "producer" TEXT NOT NULL,
    "release_date" TIMESTAMP(3) NOT NULL,
    "characters" TEXT[],
    "planets" TEXT[],
    "starships" TEXT[],
    "vehicles" TEXT[],
    "species" TEXT[],
    "created" TIMESTAMP(3) NOT NULL,
    "edited" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Film_pkey" PRIMARY KEY ("id")
);
