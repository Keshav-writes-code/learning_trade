import { db, PYQs } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db.insert(PYQs).values([
    {
      subject_short_name: "AML",
      year_released: 2025,
      semester: 6,
      course_name: "CSE with AI&ML",
      degree_name: "B.Tech",
      college_short_name: "ACEAR",
    },
  ]);
}
