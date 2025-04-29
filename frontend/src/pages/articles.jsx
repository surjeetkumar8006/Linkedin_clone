import styles from '@/styles/Home.module.css';
import UserLayout from '@/layout/userLayout';
import Head from 'next/head';

export default function ArticlesPage() {
  return (
    <UserLayout>
      <Head>
        <title>Collaborative Articles | Learn and Share Knowledge</title>
        <meta name="description" content="Discover community-driven collaborative articles on various professional topics." />
      </Head>

      <div className={styles.mainContent}>
        <h1 className={styles.heading}>Learn more about Collaborative Articles</h1>
        <p className={styles.subheading}>
          We’re unlocking community knowledge in an all new way. It starts with an article on a professional topic
          or skill, written with the help of AI — but it’s not complete without insights and advice from people
          with real-life experiences.
        </p>

        <div className={styles.articleCard}>
          <h2 className={styles.articleTitle}>
            Your executive's top hotel choice is fully booked. How will you secure alternative accommodations seamlessly?
          </h2>
          <div className={styles.meta}>5 contributions · 4 hours ago</div>
          <div className={styles.summary}>
            Learn how administrative assistants can swiftly secure top-notch hotel accommodations when the preferred choice is fully booked.
          </div>
          <div className={styles.category}>Administrative Assistance</div>
        </div>

        <div className={styles.articleCard}>
          <h2 className={styles.articleTitle}>
            You're racing against tight deadlines in underground mining. How do you prioritize risks effectively?
          </h2>
          <div className={styles.meta}>1 contribution · 4 hours ago</div>
          <div className={styles.summary}>
            Explore techniques for prioritizing risks in underground mining. Learn how to handle tight deadlines and ensure safety and efficiency.
          </div>
          <div className={styles.category}>Mining Engineering • Engineering</div>
        </div>

        <div className={styles.articleCard}>
          <h2 className={styles.articleTitle}>
            You're racing against tight deadlines in underground mining. How do you prioritize risks effectively?
          </h2>
          <div className={styles.meta}>1 contribution · 4 hours ago</div>
          <div className={styles.summary}>
            Explore techniques for prioritizing risks in underground mining. Learn how to handle tight deadlines and ensure safety and efficiency.
          </div>
          <div className={styles.category}>Mining Engineering • Engineering</div>
        </div>

        <div className={styles.articleCard}>
          <h2 className={styles.articleTitle}>
            You're racing against tight deadlines in underground mining. How do you prioritize risks effectively?
          </h2>
          <div className={styles.meta}>1 contribution · 4 hours ago</div>
          <div className={styles.summary}>
            Explore techniques for prioritizing risks in underground mining. Learn how to handle tight deadlines and ensure safety and efficiency.
          </div>
          <div className={styles.category}>Mining Engineering • Engineering</div>
        </div>
      </div>
    </UserLayout>
  );
}
