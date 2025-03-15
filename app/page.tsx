import Image from 'next/image';
import Link from 'next/link';
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/zmelek" : "";

export default function Home() {
  return (
    <main className="portfolio">
      {/* Hero Section with Background Image */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Hi, I'm Zeliha Melek.</h1>
          <h2>Computer Engineering Student at ITU</h2>
          <div className="hero-main">
            <div className="profile-image">
            <Image
              src={`${basePath}/images/profile.jpg`} // Works in both dev & prod
              alt="Profile"
              width={300}
              height={300}
              className="rounded-full object-cover"
              priority
              quality={100}
            />
            </div>
            <div className="cta-buttons">
              <Link href="/about" className="btn secondary">About Me</Link>
              <a href="#contact" className="btn secondary">Contact Me</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}