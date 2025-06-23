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
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { PYQs },
});
