import React from "react";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import {
  FaFileAlt,
  FaUserFriends,
  FaChalkboardTeacher,
  FaBriefcase,
  FaGamepad,
  FaMobileAlt,
  FaSignInAlt,
  FaUserPlus
} from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo} onClick={() => navigateTo("/")}>
        <img src="/images/logo.jfif" alt="Logo" />
      </div>

      {/* Menu Items */}
      <div className={styles.menu}>
        <div className={styles.item} onClick={() => navigateTo("/articles")}>
          <FaFileAlt /><span>Articles</span>
        </div>
        <div className={styles.item} onClick={() => navigateTo("/people")}>
          <FaUserFriends /><span>People</span>
        </div>
        <div className={styles.item} onClick={() => navigateTo("/learning")}>
          <FaChalkboardTeacher /><span>Learning</span>
        </div>
        <div className={styles.item} onClick={() => navigateTo("/jobs")}>
          <FaBriefcase /><span>Jobs</span>
        </div>
        <div className={styles.item} onClick={() => navigateTo("/games")}>
          <FaGamepad /><span>Games</span>
        </div>
        <div className={styles.item} onClick={() => navigateTo("/get-the-app")}>
          <FaMobileAlt /><span>Get the app</span>
        </div>
      </div>

      {/* Auth Buttons */}
      <div className={styles.authButtons}>
        <button className={styles.joinNow} onClick={() => navigateTo("/login")}>
          <FaUserPlus /> Join now
        </button>
        <button className={styles.signIn} onClick={() => navigateTo("/login")}>
          <FaSignInAlt /> Sign in
        </button>
      </div>
    </nav>
  );
}
