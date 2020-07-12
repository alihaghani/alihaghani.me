import React from 'react';

const ContactSection = ({ email }) => {
  return (
    <section id="contact" className="pfblock pfblock-gray">
      <div>
        <div>
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
