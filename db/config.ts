import { column, defineDb, defineTable } from "astro:db";

const PYQs = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    subject_short_name: column.text(),
    year_released: column.number(),
    semester: column.number(),
    course_name: column.text(),
    degree_name: column.text(),
    college_short_name: column.text(),
    google_drive_link: column.text(),
    exam_type_id: column.number({
      references: () => Exam_type.columns.id,
    }),
  },
  indexes: [
    {
      on: [
        "degree_name",
        "college_short_name",
        "course_name",
        "semester",
        "subject_short_name",
        "year_released",
        "google_drive_link",
        "exam_type_id",
      ],
      unique: true,
    },
  ],
});

const Exam_type = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { PYQs, Exam_type },
});
