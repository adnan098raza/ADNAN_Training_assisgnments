import React from 'react';
class Home extends React.Component {
    render() {
          return(
            <div>
                <header>
                <h2> PHOTO DROP </h2>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav> 
                </header>    
            {/* <main> */}
            {/* </main><br><br><br><br><br> */}
            <div class = "hy">
                    <center>
                        <h2>BEAUTIFUL TRESS</h2>
                        <p>We are a team of professional photographers who specialize in capturing the beauty of the world through our lenses.</p>
                        <a href="#gallery">View Our Work</a></center>
                        </div>        
                {/* </section> */}
                    <div class="gallery" id="gallery">
                        <h2>My Work</h2>
                        <br></br>
                        <div class="gallery-container">
                            <img src="sd.jpg" alt="Example Image"></img>
                            <img src="tom.jpg" alt="Example Image"></img>
                            <img src="giza.jpg" alt="Example Image"></img>
                            <img src="git.jpg" alt="Example Image"></img>
                            <img src="sp.jpg" alt="Example Image"></img>
                            <img src="messi (3).jpg" alt="Example Image"></img>
                         {/* </div> */}
                         {/* </div> */}
                         {/* </main> */}
                        <footer>
                         <div class="contact-info">
                         <h3>Contact Us</h3>
                         <p>MUMBAI<br></br>
                            LONAVLA, INDAI<br></br>
                            Phone: (123) 456-7890<br></br>
                            Email: @photodrop.com</p>
                        </div>
                        </footer>
                     </div>
                    </div>
               </div>
        )
    }
}
export default Home;
