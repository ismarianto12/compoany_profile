import { Footer, Navbar } from '@/components/templates/template'
import Head from 'next/head'
import Image from 'next/image'
export default function Page() {
  return (
    <>
      <Navbar />
      <br /><br /><br /><br />
      <main id="main">
        <section id="clients" className="clients clients">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <br />
                <h2>Hubungi Kami </h2>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container">

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="contact-about">
                  <h3>Location : </h3>
                  <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                  <div className="social-links">
                    <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos-delay={200}>
                <div className="info">
                  <div>
                    <i className="ri-map-pin-line" />
                    <p>A108 Adam Street<br />New York, NY 535022</p>
                  </div>
                  <div>
                    <i className="ri-mail-send-line" />
                    <p>info@example.com</p>
                  </div>
                  <div>
                    <i className="ri-phone-line" />
                    <p>+1 5589 55488 55s</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12" data-aos-delay={300}>
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
