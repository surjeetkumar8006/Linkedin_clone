import UserLayout from "@/layout/userLayout";
import styles from "@/styles/Home.module.css"; // Assuming same styling file is used
import Head from "next/head";

export default function GetTheAppPage() {
  return (
    <UserLayout>
      <Head>
        <title>Get the LinkedIn App | Stay Connected & Discover Opportunities</title>
        <meta
          name="description"
          content="Download the LinkedIn app to stay connected with professionals, discover job opportunities, and get instant updates on industry trends."
        />
      </Head>

      <div className={styles.mainContent}>
        <h1 className={styles.heading}>Get the LinkedIn App</h1>
        <p className={styles.subheading}>
          Take your professional network wherever you go. The LinkedIn app helps you stay connected, discover opportunities, and stay updated — anytime, anywhere.
        </p>

        <ul style={{ marginBottom: "30px", lineHeight: "1.8", fontSize: "16px", color: "#444" }}>
          <li>✔️ Connect with professionals in real-time</li>
          <li>✔️ Get instant job alerts and recommendations</li>
          <li>✔️ Message recruiters and colleagues easily</li>
          <li>✔️ Share updates and stay in the loop on industry trends</li>
        </ul>

        <button
          style={{
            backgroundColor: "#0a66c2",
            color: "#fff",
            padding: "12px 28px",
            fontSize: "16px",
            fontWeight: "600",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            textAlign: "center",
          }}
          onClick={() => window.open("https://www.linkedin.com/mobile", "_blank")}
        >
          Download Now
        </button>
      </div>
    </UserLayout>
  );
}
