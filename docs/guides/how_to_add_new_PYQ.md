## Step 1

Upload a `.pdf` file of the PYQ to the google drive account linked with Learning Trade. below are the specification for the PDF File

- File Name : `<Subject Short Name> <Year>.pdf`
- Directory Pattern

```plain
/ Learning Trade Assets / QPaper Archive / <College Name> / <Course Name> / <Semester Name> / <PYQ Type> / <Subject Short Name> /<Subject Short Name> <Year>.pdf
```

Below is the naming conventions for the Dynamic Variables

- `<College Name>`
  - college full name in title case with spaces. example : `Ambala College of Engineering`
- `<Course Name>`
  - course full name in lower case with spaces. Example : `cse with aiml`
- `<Semester Name>`
  - semester name in title case with this pattern `nth Sem`. example : `1st Sem`, `2nd Sem`
- `<PYQ Type>`
  - type of the pyq. can be either of these values: `Finals`, `Sessional 1`, `Sessonial 2`, `Sessional 3`, etc
- `<Subject Short Name>`
  - the subject name but abbreviated. should be uppercase and no more than 5 characters. example `ANN` which resolves to `Artifical Neural Network`
- `<Year>`
  - the year number in 4 digits. example `2025`

## Step 2

Grab the public link to that file

- go to File > Right Click > Share > Share > Under `General access` > Select `Anyone with the link` > Click `Copy Link`

## Step 3

Open the Turso DB Edit Database Panel. Navigate to the `PYQs` Table. Manually fill the cells

## Step 4

The site is refreshed automatically four times per day. now just wait until it rebuilds
