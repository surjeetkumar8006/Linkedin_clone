import UserLayout from "@/layout/userLayout";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function LearningPage() {
  return (
    <UserLayout>
      <Head>
        <title>Learn Online | Explore Courses and Enhance Your Skills</title>
        <meta
          name="description"
          content="Discover a variety of online courses in fields like web development, data science, cybersecurity, and more. Learn at your own pace and get certified!"
        />
      </Head>

      <section className={styles.learningSection}>
        <h2>Why Learn Online?</h2>
        <p>
          Online learning offers the flexibility to learn at your own pace, anytime and anywhere. Whether you're
          looking to develop new skills, change careers, or expand your knowledge, there are countless online
          courses available to help you achieve your goals.
        </p>

        <h2>Popular Courses</h2>
        <ul>
          <li>Web Development (HTML, CSS, JavaScript, React, Node.js)</li>
          <li>Data Science (Python, SQL, Machine Learning)</li>
          <li>Cloud Computing (AWS, Azure, Google Cloud)</li>
          <li>Cybersecurity (Network Security, Ethical Hacking)</li>
          <li>Digital Marketing (SEO, Social Media, Google Ads)</li>
        </ul>

        <h2>How It Works</h2>
        <p>
          1. Browse the available courses.<br />
          2. Choose the course that best suits your goals and start learning.<br />
          3. Access video lectures, hands-on assignments, and quizzes.<br />
          4. Get certified upon completion and showcase your skills to potential employers.
        </p>

        <h2>Join Our Community</h2>
        <p>
          Be part of a vibrant learning community where you can interact with instructors, ask questions, and get
          feedback. Whether you're a beginner or an expert, you'll find opportunities to grow and improve your skills.
        </p>
      </section>
    </UserLayout>
  );
}
