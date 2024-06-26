import { Selector } from "testcafe";

fixture`Associated-content assignments (loaded w/ manifest)`
  .page`http://localhost:5000/?manifest=https://s3.amazonaws.com/public-imscc/UNZIPPED+STUFF/caleblorcruxcourse-export-big/imsmanifest.xml#/`;

test("Associated-content assignment items display correctly", async t => {
  const aboutMe = Selector("a").withText("Starter: About Me");
  await aboutMe;
  await t
    .expect(aboutMe.exists)
    .ok({ timeout: 20000 })
    .expect(
      Selector("a").withText("Robot System Components Lab 1: Overview").exists
    )
    .ok()
    .expect(Selector("a").withText("Robot Basic Lesson 1").exists)
    .ok()
    .expect(Selector("a").withText("Robotics Project: Final Submission").exists)
    .ok();
});

test("Associated-content assignment items can be clicked", async t => {
  const aboutMeAssignment = Selector("a").withText("Starter: About Me");
  await aboutMeAssignment;
  await t
    .expect(aboutMeAssignment.exists)
    .ok({ timeout: 20000 })
    .click(aboutMeAssignment);

  await t
    .expect(Selector("h1").withText("Starter: About Me").exists)
    .ok({ timeout: 20000 })
    .expect(Selector("div").withText("Submitting: a text entry box").exists)
    .ok()
    .expect(Selector("div").withText("Points: 10").exists)
    .ok()
    .expect(
      Selector("p").withText(
        "Write a up to one page biography about yourself. Where your from, activities, ect. Also if there is any accommodation I need to know please write them in your biography so I can best help you this year."
      ).exists
    )
    .ok();
});

test("Associated-content assignment list displays correctly", async t => {
  const assignmentsNav = Selector("a").withText("Assignments (77)");
  await t
    .expect(assignmentsNav.exists)
    .ok({ timeout: 20000 })
    .click(assignmentsNav);

  await t
    .expect(Selector("a").withText("Alice: Lab 1").exists)
    .ok({ timeout: 20000 })
    .expect(
      Selector("a").withText("Assignment submission: Lab Resources").exists
    )
    .ok()
    .expect(
      Selector("a").withText("Assignment Submission: Robot Electronic Devices")
        .exists
    )
    .ok()
    .expect(
      Selector("a").withText("Career Technical Student Organizations (CTSO)")
        .exists
    )
    .ok();
});

test("Associated-content assignment items can be clicked from assignment list view", async t => {
  const assignmentsNav = Selector("a").withText("Assignments (77)");
  await t
    .expect(assignmentsNav.exists)
    .ok({ timeout: 20000 })
    .click(assignmentsNav);

  const aliceLab1Assignment = Selector("a").withText("Alice: Lab 1");
  await t
    .expect(aliceLab1Assignment.exists)
    .ok({ timeout: 20000 })
    .click(aliceLab1Assignment);

  await t
    .expect(Selector("h1").withText("Alice: Lab 1").exists)
    .ok({ timeout: 20000 })
    .expect(Selector("div").withText("Submitting: a file upload").exists)
    .ok()
    .expect(Selector("div").withText("Points: 25").exists)
    .ok()
    .expect(Selector("p").withText("To complete this assignment:").exists)
    .ok();
});

fixture`Associated-content assignments (loaded w/ src)`
  .page`http://localhost:5000/?manifest=${encodeURIComponent(
  "/test-cartridges/course-with-associated-content-assignments/imsmanifest.xml"
)}#/`;

test("Associated-content quiz with assessment_qti.xml display correctly", async t => {
  await t
    .click(Selector("a").withText("Quizzes"))
    .expect(Selector("a").withText("New Quiz").exists)
    .ok()
    .click(Selector("a").withText("New Quiz"))
    .expect(Selector("h3").withText("Questions").exists)
    .ok();
});

test("Associated-content quiz missing assessment_qti.xml display correctly", async t => {
  await t
    .click(Selector("a").withText("Quizzes"))
    .expect(Selector("a").withText("Other Quiz").exists)
    .ok()
    .click(Selector("a").withText("Other Quiz"))
    .expect(Selector("h3").withText("Questions").exists)
    .ok();
});

test("Associated-content assignment items display correctly", async t => {
  await t
    .expect(Selector("a").withText("Published Assignment").exists)
    .ok({ timeout: 20000 })
    .expect(Selector("a").withText("Unpublished Assignment").exists)
    .ok();
});

test("Associated-content assignment items can be clicked", async t => {
  const publishedAssignment = Selector("a").withText("Published Assignment");
  await t
    .expect(publishedAssignment.exists)
    .ok({ timeout: 20000 })
    .click(publishedAssignment);

  await t
    .expect(Selector("h1").withText("Published Assignment").exists)
    .ok({ timeout: 20000 })
    .expect(Selector("div").withText("Submitting: Nothing").exists)
    .ok()
    .expect(Selector("div").withText("Points: 0").exists)
    .ok()
    .expect(Selector("p").withText("This assignment is published").exists)
    .ok();
});

test("Associated-content assignment list displays correctly", async t => {
  const assignmentsNav = Selector("a").withText("Assignments (2)");
  await t
    .expect(assignmentsNav.exists)
    .ok({ timeout: 20000 })
    .click(assignmentsNav);

  await t
    .expect(Selector("a").withText("Published Assignment").exists)
    .ok({ timeout: 20000 })
    .expect(Selector("a").withText("Unpublished Assignment").exists)
    .ok();
});

test("Associated-content assignment items can be clicked from assignment list view", async t => {
  const assignmentsNav = Selector("a").withText("Assignments (2)");
  await t
    .expect(assignmentsNav.exists)
    .ok({ timeout: 20000 })
    .click(assignmentsNav);

  const unpublishedAssignment = Selector("a").withText(
    "Unpublished Assignment"
  );
  await t
    .expect(unpublishedAssignment.exists)
    .ok({ timeout: 20000 })
    .click(unpublishedAssignment);

  await t
    .expect(Selector("h1").withText("Unpublished Assignment").exists)
    .ok({ timeout: 20000 })
    .expect(Selector("div").withText("Submitting: on paper").exists)
    .ok()
    .expect(Selector("div").withText("Points: 1").exists)
    .ok();
});

fixture`Associated-content external tools`
  .page`http://localhost:5000/?manifest=/test-cartridges/course-with-associated-content-assignments/imsmanifest.xml#/resources/i691472bc7e9d470687402f5d7745875e`;

test("iframe is not disallowed from rich content", async t => {
  const iframe = Selector(".RichContent iframe");
  await t.expect(iframe.exists).ok({ timeout: 20000 });
});

fixture`Associated-content external tools`
  .page`http://localhost:5000/?src=https://s3-us-west-2.amazonaws.com/cartridges-for-commons-preview/course_with_lti_quiz_and_google_cloud_assignment.imscc#/`;

test("Displays 'Preview not available' for external tool content", async t => {
  const assignmentsNav = Selector("a").withText("Assignments (2)");
  await assignmentsNav;
  await t
    .expect(Selector("header").exists)
    .ok({ timeout: 20000 })
    .click(assignmentsNav);

  const externalGoogleDriveLTI = Selector("a").withText(
    "Google Drive LTI Assignment"
  );
  await t
    .expect(externalGoogleDriveLTI.exists)
    .ok({ timeout: 20000 })
    .click(externalGoogleDriveLTI);

  await t
    .expect(
      Selector("span").withText("External Tool Content Can't be Previewed")
    )
    .ok({ timeout: 20000 });
});

fixture`Web content with a external tool`
  .page`http://localhost:5000/?src=https://s3.amazonaws.com/public-imscc/COURSE+WITH+A+GOOGLE+DRIVE+LTI+CLOUD+ASSIGNMENT+AND+A+QUIZZES2+ASSIGNMENT.zip#/`;

test("Displays 'Preview not available' when web content is an external tool", async t => {
  const assignmentsNav = Selector("a").withText("Assignments (2)");
  const header = Selector("header");
  await header;
  await t
    .expect(header.exists)
    .ok({ timeout: 20000 })
    .click(assignmentsNav);

  const externalGoogleDriveLTI = Selector("a").withText(
    "Google Drive LTI Assignment"
  );
  await t
    .expect(externalGoogleDriveLTI.exists)
    .ok({ timeout: 20000 })
    .click(externalGoogleDriveLTI);

  await t
    .expect(
      Selector("span").withText("External Tool Content Can't be Previewed")
    )
    .ok({ timeout: 20000 });
});
