import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
export default function NotFoundPage() {
  return (
    <Layout title="Not Found">
      <div className={styles.error}>
        <h1>
          {" "}
          <FaExclamationTriangle /> 404 | Not Found
        </h1>
        <h4>Sorry there is Nothing here</h4>
        <Link className={styles.link} href="/">
          Go Home
        </Link>
      </div>
    </Layout>
  );
}
