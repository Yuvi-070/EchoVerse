import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import ThreeDShowcase from "../components/ThreeDShowcase";

const posts = [
  {
    category: "World",
    title: "Global Conferences",
    date: "Nov 12",
    img: "/Componets/Image/blog_thumbnail/thumb1.jpg",
    text: "CodeCon was an annual conference for software hackers and technology enthusiasts, focused on software and developer-first talks.",
  },
  {
    category: "Design",
    title: "Learn Designing",
    date: "Nov 11",
    img: "/Componets/Image/blog_thumbnail/thumb2.jpeg",
    text: "Design-based learning integrates design thinking and process into practical classroom and project experiences.",
  },
  {
    category: "Frontend",
    title: "Bootstrap Templates",
    date: "Nov 12",
    img: "/Componets/Image/blog_thumbnail/thumb3.jpeg",
    text: "Bootstrap helps teams build responsive interfaces quickly with reusable layout, typography, and component conventions.",
  },
  {
    category: "Python",
    title: "Learn Python",
    date: "Nov 11",
    img: "/Componets/Image/blog_thumbnail/thumb4.jpg",
    text: "Python emphasizes readability and supports procedural, object-oriented, and functional styles with a rich standard library.",
  },
];

export default function MainPage() {
  return (
    <main id="top" className="site-shell">
      <SiteNav />
      <section className="container my-4 hero-card">
        <div className="hero-content">
          <p className="eyebrow">Developer-first tech publication</p>
          <h1>Welcome to ECHO-VERSE</h1>
          <p>Stay ahead with practical engineering stories, product trends, and community insights.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/main">
              Explore
            </Link>
            <Link className="btn btn-outline-light" href="/about">
              Learn more
            </Link>
          </div>
          <Image
            src="/Componets/Image/carousal/1.jpg"
            alt="EchoVerse hero"
            className="img-fluid rounded hero-image"
            width={1200}
            height={700}
            priority
          />
        </div>
      </section>

      <section className="container my-4">
        <div className="row mb-2 g-4">
          {posts.map((post) => (
            <article className="col-md-6" key={post.title}>
              <div className="post-card">
                <div className="p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-info">{post.category}</strong>
                  <h2 className="h4 mb-0">{post.title}</h2>
                  <div className="mb-2 text-muted">{post.date}</div>
                  <p className="card-text mb-auto">{post.text}</p>
                  <Link href="/about" className="stretched-link">
                    Continue reading
                  </Link>
                </div>
                <div className="col-auto d-none d-lg-block p-3 pt-0">
                  <Image
                    className="bd-placeholder-img"
                    width={200}
                    height={250}
                    src={post.img}
                    alt={post.title}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ThreeDShowcase />
      <section className="container my-4">
        <div className="feature-rail">
          <article className="mini-feature">
            <h3>Topic Collections</h3>
            <p>Browse grouped content by domain, stack, and experience level for faster discovery.</p>
          </article>
          <article className="mini-feature">
            <h3>Weekly Digest</h3>
            <p>Get selected engineering stories every week with short, practical takeaways.</p>
          </article>
          <article className="mini-feature">
            <h3>Community Picks</h3>
            <p>See what creators and readers are bookmarking the most right now.</p>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
