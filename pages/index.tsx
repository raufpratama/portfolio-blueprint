import Head from "next/head";
import NavHeader from "../components/organisms/NavHeader";
import styles from "../styles/Home.module.css";

import NavHeaderData from "../components/organisms/NavHeader/content-data.json";
import Main from "../components/templates/Main";
import { About, Contact, Experience, Tools, Works } from "../components/templates";
import Typography from "../components/atoms/Typography";
import SocialAttribute from "../components/atoms/SocialAttribute";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Drawer from "../components/organisms/Drawer";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const windowSize = useWindowSize();

  return (
    <div>
      <Head>
        <title>Rauf Pratama.</title>
        <meta name="description" content="Generated with postive mind" />
        <meta property="og:title" content="Rauf Pratama. Portfolio" />
        <meta property="og:description" content="Your favourite Engineer" />
        <meta property="og:image" content="https://portfolio-blueprint.vercel.app/rauf.jpg" />
        {/*<meta property="og:url" content="http://euro-travel-example.com/index.htm" />*/}
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <nav>
        <NavHeader
          indicator={NavHeaderData}
          onClick={() => {
            setDrawerOpen(!drawerOpen);
          }}
        />
      </nav>

      {windowSize.mobile && <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />}

      <main className={styles.main}>
        <section id="main">
          <Main />
        </section>

        <div className="flex flex-col space-y-40">
          <section id="about">
            <About />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="tools">
            <Tools />
          </section>

          <section id="works">
            <Works />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>

      <footer className="bg-main p-4">
        <SocialAttribute />
        <Typography
          text="Created By Rauf, From Jakarta with ❤️"
          textAlign="text-center"
          textColor="text-description-dark"
          fontSize="text-sm"
          fontWeight="font-light"
        />
      </footer>
    </div>
  );
}
