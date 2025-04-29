import UserLayout from "@/layout/userLayout";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function JobsPage() {
  return (
    <UserLayout>
      <Head>
        <title>Find Your Dream Job | Explore Top Job Listings</title>
        <meta
          name="description"
          content="Discover and apply to top job listings in various industries. Start your career today by exploring job opportunities tailored to your skills."
        />
      </Head>

      <section className={styles.jobsSection}>
        <h2>Why Find a Job with Us?</h2>
        <p>
          We connect talented professionals with the best companies in the industry. Whether you're looking for your
          first job or a new challenge, our platform provides a variety of job listings tailored to your skills and
          interests.
        </p>

        <h2>Popular Job Categories</h2>
        <ul>
          <li>Software Development</li>
          <li>Data Science & Analytics</li>
          <li>UI/UX Design</li>
          <li>Marketing & Sales</li>
          <li>Product Management</li>
        </ul>

        <h2>How It Works</h2>
        <p>
          1. Browse through thousands of job listings.<br />
          2. Filter by location, salary, experience level, and more.<br />
          3. Apply to jobs directly through the platform.<br />
          4. Get notified about new opportunities and job openings.
        </p>

        <h2>Start Your Career Today</h2>
        <p>
          Take the first step toward your dream job. Create an account, upload your resume, and apply to the best
          opportunities available.
        </p>
      </section>
    </UserLayout>
  );
}
