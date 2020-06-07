import React from 'react';

const ContactSection = ({ title, description, email }) => {
  return (
    <section id="contact" className="pfblock pfblock-gray">
      <div className="container">
        <div className="row">

          <div className="col-sm-6 col-sm-offset-3">

            <div className="pfblock-header">
              <h2 className="pfblock-title">{title}</h2>
              <div className="pfblock-line"></div>
              <div className="about-text">
                {description}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form action={`//formspree.io/${email}`}
                  method="POST" target="_blank">
              <div className="ajax-hidden">
                <div className="form-group wow fadeInUp">
                  <label className="sr-only" htmlFor="c_name">Name</label>
                  <input type="text" id="c_name" className="form-control" name="Name" placeholder="Name"/>
                </div>

                <div className="form-group wow fadeInUp" data-wow-delay=".1s">
                  <label className="sr-only" htmlFor="c_email">Email</label>
                  <input type="email" id="c_email" className="form-control" name="_replyto" placeholder="E-mail"/>
                </div>
                <div className="form-group wow fadeInUp" data-wow-delay=".2s">
                  <textarea className="form-control" id="c_message" name="Message" rows="7"
                            placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn btn-lg btn-block wow fadeInUp" data-wow-delay=".3s">Send
                  Message
                </button>
              </div>
              <div className="ajax-response"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
