import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export default function ContactPage() {
  return (
    <main id="top" className="site-shell">
      <SiteNav />
      <div className="container my-4 contact-card">
        <h2>Contact Us</h2>
        <p className="text-muted">Have an idea, a collaboration request, or feedback? We would love to hear from you.</p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="query">Select your Query</label>
            <select className="form-control" id="query">
              <option>Web</option>
              <option>Tech Stack</option>
              <option>Technology</option>
              <option>Others</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="about">Tell us about yourself</label>
            <textarea className="form-control" id="about" rows={3} />
          </div>
          <div className="form-group">
            <label htmlFor="concern">Elaborate Your Concern</label>
            <textarea className="form-control" id="concern" rows={3} />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
      <SiteFooter />
    </main>
  );
}
