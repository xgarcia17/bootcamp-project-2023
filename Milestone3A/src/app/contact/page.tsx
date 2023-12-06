import '../globals.css'

export default function Contact() {
    return (<div>
              <h1 className="page-title">Contact</h1>
            <form id="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name"/>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email"/>
                <label type-type="message">Message:</label>
                <textarea type-type="message" id="message"></textarea>
                <input type="submit" id="submit"/>

            </form>
            <footer className="footer">
                © 2023 Xavier's Personal Website | All Rights Reserved
            </footer>
          </div>
          ) 
  }