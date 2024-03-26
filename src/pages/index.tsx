import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className='homepage-bg flex-warp'>
        <div>
          show text
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            testlikn ⏱️
          </Link>

          <a href="docs/intro" >linkto </a>
        </div>
      </div>
      {/* <HomepageHeader />
       <main>
         <HomepageFeatures />
       </main>
       <div>
         hello fires
         <Link
           className="button button--secondary button--lg"
           to="/docs/intro">
           testlikn ⏱️
         </Link>

        <a href="docs/intro" >linkto </a>
       </div> */}
    </Layout>
  );
}
