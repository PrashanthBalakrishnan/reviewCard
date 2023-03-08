import { randomUUID } from "crypto";
import fs from "fs";

const createReview = (star) => ({
  id: randomUUID(),
  rating: star,
  createdAt: new Date(),
  body: "This was great!",
});

const reviews = [];

for (let i = 0; i < 106; i++) {
  reviews.push(createReview(5));
}

for (let i = 0; i < 32; i++) {
  reviews.push(createReview(4));
}

fs.writeFileSync("src/data/reviews.json", JSON.stringify(reviews));
