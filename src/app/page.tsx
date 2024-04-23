import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <head>
        <title></title>
        <meta name="title" content={`hello`} />
        <meta name="description" content={`hello 1`} />
        <link rel="canonical" href={`https://vercel.app/`} />
        <meta itemProp="name" content={`hello1`} />
        <meta itemProp="description" content={`hello 1`} />

        <meta
          itemProp="image"
          content={`https://vercel.app/Core-AFC-Resources.jpg`}
        />

        <meta itemProp="datePublished" content="2024-02-28T06:33:12" />
        <meta itemProp="dateModified" content="2024-04-12T09:51:39" />
        <meta itemProp="headline" content={`hello`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico.png" />
        <meta property="og:url" content={`https://vercel.app/`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`hello`} />
        <meta property="og:description" content={`hello 1}`} />
        <meta property="og:image" content={`hello 2`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="qkvin.com" />
        <meta property="twitter:url" content={`https://vercel.app/`} />
      </head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/app/page.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore starter templates for Next.js.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
