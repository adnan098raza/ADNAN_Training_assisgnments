import React from 'react';
class Poto extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <section id="home">
          <center>
            <h1>Welcome to my portfolio website</h1>
            <p>
              Here, you can find information about my skills, projects, and
              experience.
            </p>
            <button>
              <a href="#about">Learn more</a>
            </button>
          </center>
        </section>
        <section id="about">
          <form>
            <center>
              <h2>About Me</h2>
              <p>
                To work in a professional work driven environment that motivates me to
                utilize my potential efficaciously with ample opportunities
                for the up-gradation and growth of the company and myself.
              </p>
              <img src="pp.jpg" alt="Profile Picture" width={150} height={200} />
            </center>
          </form>
        </section>
        <section id="projects">
          <center>
            <h2>Projects</h2>
            <div className="project">
              <img src="sd.jpg" alt="Project Title" />
              <h3>Project Title</h3>
              <p>Project Description</p>
            </div>
          </center>
        </section>
        <section id="skills">
          <form>
            <center>
              <h2>Skills</h2>
              <p> </p>
            </center>
          </form>
        </section>
        <center>
          <form>
            <section id="resume">
              <h2>Resume</h2>
              <a href="Adnan Raza .pdf" target="_blank">
                Download my Resume
              </a>
            </section>
          </form>
          <section id="contact">
            <h2>Contact</h2>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required="" />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required="" />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required="" defaultValue={""} />
              <button type="submit">Send Message</button>
            </form>
          </section>
        </center>
        {"{"}/* */{"}"}
        <footer>
          <p>© 2023 Your Name. All Rights Reserved.</p>
        </footer>
      </div>

    )
  }
}
export default Poto;
