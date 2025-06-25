import { db, PYQs } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db.insert(PYQs).values([
    {
      subject_short_name: "aml",
      year_released: 2025,
      semester: 6,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1mmLH7XxC1ZhocTSw3MZ88JQgSxOzQlZh/view",
    },
  ]);
}
