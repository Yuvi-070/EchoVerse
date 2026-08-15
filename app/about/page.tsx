import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export default function AboutPage() {
  return (
    <main id="top">
      <SiteNav />
      <div className="responsive-container-block big-container">
        <div className="responsive-container-block container">
          <div className="responsive-container-block">
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-12 img-one">
              <img
                alt="golden-lines.png"
                className="image-block bg-image"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/golden%20lines.png"
              />
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-12 content-one">
              <p className="text-blk section-head">It all started with TECHNICAL-BLOG&apos;s Idea.</p>
              <p className="text-blk section-text">
                ECHO-VERSE was born to make technical knowledge more accessible and practical for everyone.
              </p>
              <p className="text-blk section-text">
                Our contributors include developers and tech enthusiasts sharing relevant ideas, tutorials, and trends.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              <span className="text-muted">Ideal Thought</span>
            </h2>
            <p className="lead">
              Blogs opened publishing to broader audiences and helped turn tech learning into an interactive community.
            </p>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src="/Componets/Image/About/about-1.jpg" alt="About 1" />
          </div>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
