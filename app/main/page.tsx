import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

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
    <main id="top">
      <SiteNav />
      <section className="container my-4">
        <div className="jumbotron text-white" style={{ background: "#202425" }}>
          <h1>Welcome to ECHO-VERSE</h1>
          <p>Technology News, Development and Trends</p>
          <Image
            src="/Componets/Image/carousal/1.jpg"
            alt="Hero"
            className="img-fluid rounded"
            width={1200}
            height={700}
          />
        </div>
      </section>

      <section className="container my-4">
        <div className="row mb-2">
          {posts.map((post) => (
            <div className="col-md-6" key={post.title}>
              <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary">{post.category}</strong>
                  <h3 className="mb-0">{post.title}</h3>
                  <div className="mb-1 text-muted">{post.date}</div>
                  <p className="card-text mb-auto">{post.text}</p>
                  <a href="#" className="stretched-link">
                    Continue reading
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <Image
                    className="bd-placeholder-img"
                    width={200}
                    height={250}
                    src={post.img}
                    alt={post.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
