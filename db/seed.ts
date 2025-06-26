import { db, Exam_type, PYQs } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db
    .insert(Exam_type)
    .values([
      { name: "finals" },
      { name: "sessional 1" },
      { name: "sessional 2" },
      { name: "sessional 3" },
    ]);
  await db.insert(PYQs).values([
    // 4th Sem
    {
      subject_short_name: "dbms",
      year_released: 2023,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1sRFF89X0_lxlViOZPwc8S8BWZ08mxN1J/view?usp=sharing",
      exam_type_id: 1,
    },
    {
      subject_short_name: "dbms",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1H2aFXDkFl07xg1kft3oIJUY5iRGcLYMR/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "dbms",
      year_released: 2022,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1nmhGkiTp5euMPKQ8GqFBym2EYdTuMbZF/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "env",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/16jx0NPjaXfka022g9MclP-Z0NAtXPzUN/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "is",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1TtU9H1hS80_VO77PXF0GQxXeJmSHvb9t/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "is",
      year_released: 2022,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1TVtVVZFfyLHXYAOMy_KmBExEzwvHr5Ks/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "is",
      year_released: 2023,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1_Nz5AmxfO2BX6ov2WLaFg67fM05zMsmi/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "iwt",
      year_released: 2022,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1gDxVapMDkqUiXCgX8O7ZsVjfzLV3qaN7/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "iwt",
      year_released: 2023,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1hhUxDm-KVP9vT9Z5RzTn7REW0Ql_P7U-/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "iwt",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1AUFBoQfI8F4pNUAxEsd5JJYTF5378ka4/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "maths",
      year_released: 2022,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1bf91uTuaJSdSUd4taHlXXYtf66v8GZSW/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "maths",
      year_released: 2023,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1wS5JOmWJaf46mPSpOAv5uW5i06kV24Xz/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "maths",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/108SRepZk_Rs9qWP8YsOyz4JErOK8q47F/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "os",
      year_released: 2022,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1RVpbz99USmiWQMahEr5lTJnoOk8bOVx0/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "os",
      year_released: 2023,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1EEJ9pu8EwmEiFMisWLRfA7UicfsM81MP/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "os",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1D6ME-B0xpGCuTcbQb5ZUF02K8mS7K0H8/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "se",
      year_released: 2022,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1jDnwiQl7ACLhk_O2uycKrbZc57bqLKyB/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "se",
      year_released: 2023,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1zyZUaVxI5ZgiV5YEBES7A2m9YBKTxbIl/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "se",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1MVxGSWL5gVZaidwWR5PKMFTpBdWQNYkt/view?usp=drive_link",
      exam_type_id: 1,
    },
    {
      subject_short_name: "dbms",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1pAsB7fps-G-bZjr9juDGeHbwqXR-At2r/view?usp=drive_link",
      exam_type_id: 2,
    },
    {
      subject_short_name: "is",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/14f6H9yhSNfjlQKxKDfwBxaw49sv-Pbbu/view?usp=drive_link",
      exam_type_id: 2,
    },
    {
      subject_short_name: "iwt",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1vux-ZOv6AsoPxHZb2lj2o9uQlOs_hG_Q/view?usp=drive_link",
      exam_type_id: 2,
    },
    {
      subject_short_name: "maths",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1kCl4Vha7_mB9Ype5Eh67GNCKPxMGtnqM/view?usp=drive_link",
      exam_type_id: 2,
    },
    {
      subject_short_name: "os",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1gboCyLyrX375fKV17Bbsg32aYjO0Pvg5/view?usp=drive_link",
      exam_type_id: 2,
    },
    {
      subject_short_name: "se",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1bnO1f8hh9m4dk47MjXMz0dgyh_ATFyA6/view?usp=drive_link",
      exam_type_id: 2,
    },
    {
      subject_short_name: "dbms",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/15AEUAZAVDQr-EJmMi0l8nxILSdD9tpAE/view?usp=drive_link",
      exam_type_id: 3,
    },
    {
      subject_short_name: "is",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1bBWKVBzADRXIV9Pe1XkgdBKrHB_oEA6p/view?usp=drive_link",
      exam_type_id: 3,
    },
    {
      subject_short_name: "iwt",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1oa5UjKX-PO5UWgauWgU7qRNZ4d5iKGLp/view?usp=drive_link",
      exam_type_id: 3,
    },
    {
      subject_short_name: "maths",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1lJ2gEERpMnnuXEFpqAoCw15h2KoQjRca/view?usp=drive_link",
      exam_type_id: 3,
    },
    {
      subject_short_name: "os",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1_NSzHLAqOlusiNg8rCjQIymvacUcw8-e/view?usp=drive_link",
      exam_type_id: 3,
    },
    {
      subject_short_name: "se",
      year_released: 2024,
      semester: 4,
      course_name: "cse with aiml",
      degree_name: "b.tech",
      college_short_name: "acear",
      google_drive_link:
        "https://drive.google.com/file/d/1e_RWbqT--qXNpm-lJ1KLsy_yKCQ9cKYg/view?usp=drive_link",
      exam_type_id: 3,
    },
  ]);
}
