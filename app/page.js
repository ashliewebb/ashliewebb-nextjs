import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image
            className={styles.logo}
            src="/logo.svg"
            alt="Ashlie Webb Designs"
            width={140}
            height={76}
            priority
        />
        <ul className={styles.navigation}>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#" className={styles.buttonPrimary}>Hire Me</a></li>
        </ul>
      </header>
      <main className={styles.main}>
          <h1>My Services</h1>
          <p>I specialise in helping businesses thrive online with expert web design, UX strategy, and content that
            converts. Whether you're launching an e-commerce store, refining your brand’s digital experience, or need
            expert guidance for your small business, I’ve got you covered.</p>

          <hr/>

          <h2>E-Commerce Web Design</h2>
          <p>Your online store should do more than just look good—it should drive sales. I create high-converting
            e-commerce websites that provide seamless shopping experiences, optimised performance, and mobile-friendly
            designs. I specialise in building on Shopify, Square Online, and Squarespace, tailoring solutions that fit
            your business goals.</p>
          <ul>
            <li>Custom e-commerce website design</li>
            <li>User-friendly navigation & conversion optimisation</li>
            <li>Secure payment integrations</li>
            <li>Mobile-responsive & fast-loading pages</li>
            <li>SEO-friendly structure & content</li>
          </ul>

          <hr/>

          <h2>Web & UX Design</h2>
          <p>Your website is the first impression of your brand—make it count. I design visually stunning, user-focused
            websites that engage visitors and drive results. Whether you need a new website or a UX overhaul, I create
            intuitive, accessible, and conversion-optimised experiences.</p>
          <ul>
            <li>Custom website design & development</li>
            <li>UX/UI strategy for seamless user journeys</li>
            <li>Wireframing & prototyping</li>
            <li>Accessibility & mobile-first design</li>
            <li>Performance optimisation & site speed enhancements</li>
          </ul>

          <hr/>

          <h2>Small Business Support (Online & E-Commerce)</h2>
          <p>Running an online business comes with challenges—I’m here to help. I offer expert guidance, strategy, and
            hands-on support to help small businesses grow, streamline operations, and boost online sales.</p>
          <ul>
            <li>E-commerce strategy & business consulting</li>
            <li>Website updates & maintenance</li>
            <li>Digital marketing guidance & SEO best practices</li>
            <li>Platform setup & optimisation (Shopify, Square Online, Squarespace)</li>
            <li>Ongoing support & troubleshooting</li>
          </ul>

          <hr/>

          <h2>Copywriting & Editing</h2>
          <p>Words matter. From compelling product descriptions to persuasive website content, I craft clear, engaging
            copy that speaks to your audience and drives action.</p>
          <ul>
            <li>Website copywriting (homepages, about pages, service pages)</li>
            <li>E-commerce product descriptions that sell</li>
            <li>Blog posts & content marketing</li>
            <li>SEO-friendly copy & content strategy</li>
            <li>Editing & proofreading for clarity and impact</li>
          </ul>

          <hr/>

          <h2>Let’s Build Something Great</h2>
          <p>Whether you need a stunning e-commerce site, an intuitive user experience, small business support, or
            high-converting copy, I’m here to make it happen. Let’s talk about how I can elevate your online presence.</p>
          <p><a href="#" className={styles.buttonPrimary}>Get in Touch</a></p>
      </main>
      <footer className={styles.footer}>
        <p>&copy; Ashlie Webb 2025</p>
      </footer>
    </div>
  );
}
