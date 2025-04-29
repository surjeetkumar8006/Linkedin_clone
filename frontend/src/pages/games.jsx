import UserLayout from "@/layout/userLayout";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function GamesPage() {
  return (
    <UserLayout>
      <Head>
        <title>Career-Boosting Games | Develop Your Skills</title>
        <meta
          name="description"
          content="Explore our career-boosting mini-games designed to improve your problem-solving, memory, and coding skills in a fun and engaging way."
        />
      </Head>

      <section className={styles.gamesSection}>
        <h2>What Are Career-Boosting Games?</h2>
        <p>
          Our career-boosting mini-games are designed to help you develop essential skills in a fun and engaging way.
          From problem-solving to coding challenges, our games are crafted to enhance your abilities in areas like logic,
          memory, and critical thinking.
        </p>
        <h2>Upcoming Games</h2>
        <ul>
          <li>Codebreaker Challenge - Solve coding puzzles to sharpen your programming skills.</li>
          <li>Memory Master - Enhance your memory retention with timed exercises.</li>
          <li>Logic Land - Navigate through logical problems to boost decision-making skills.</li>
          <li>Quiz Quest - Test your knowledge in various subjects to keep learning fun.</li>
        </ul>
        <h2>How It Works</h2>
        <p>
          1. Choose a game from the available list.<br />
          2. Play through fun and challenging levels.<br />
          3. Track your progress and improve your skills.<br />
          4. Unlock rewards and achievements as you level up.
        </p>
        <h2>Get Ready to Play</h2>
        <p>
          Our games are launching soon! Stay tuned for updates and be among the first to experience these career-boosting
          challenges.
        </p>
      </section>
    </UserLayout>
  );
}
