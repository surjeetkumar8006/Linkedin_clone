import UserLayout from "@/layout/userLayout";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function PeoplePage() {
  return (
    <UserLayout>
      <Head>
        <title>People You May Know | Grow Your Professional Network</title>
        <meta
          name="description"
          content="Discover professionals from various industries and expand your network. Connect with recruiters, colleagues, and alumni to unlock new opportunities."
        />
      </Head>

      <div className={styles.mainContent}>
        <h1 className={styles.heading}>People You May Know</h1>
        <p className={styles.subheading}>
          Discover professionals from various industries and grow your network.
          Connecting with people helps you stay updated, explore job opportunities, and build meaningful relationships.
        </p>

        <ul style={{ marginTop: "24px", fontSize: "16px", color: "#444", lineHeight: "1.8" }}>
          <li>✔️ Connect with recruiters, colleagues, and alumni</li>
          <li>✔️ Stay informed about their achievements and updates</li>
          <li>✔️ Get noticed by professionals in your field</li>
        </ul>

        <button
          style={{
            marginTop: "30px",
            backgroundColor: "#0a66c2",
            color: "#fff",
            padding: "12px 28px",
            fontSize: "16px",
            fontWeight: "600",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            transition: "background-color 0.3s ease"
          }}
          onClick={() => alert("Coming soon: People suggestions!")}
        >
          Explore Connections
        </button>
      </div>
    </UserLayout>
  );
}
