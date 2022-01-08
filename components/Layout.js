import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Header from "./Header";
import Showcase from "./Showcase";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Layout = ({ title, description, keywords, children }) => {
  //We want to display the image only when we are in the home location
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "DJ Events | Latest Musical Instruments in town",
  description: "Find the latest DJ for your events",
  keywords: "music, dj, events",
};

export default Layout;
