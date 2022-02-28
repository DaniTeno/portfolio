export function about(){
     const d = document,
          about = d.createElement('div')

     about.classList.add('about');
     about.classList.add('scroll');

     about.innerHTML = `
          <div id="contact-pic"><img src="../assets/contact-img.jpg" alt="my-photo" id="contact-img"></div>
          <div>
               <nav id="nav-contact">
                    <div id="basic-info">
                         <p>My name is Daniel Tenorio</p>
                         <p>From Venezuela</p>
                         <p>Student of Software Development, currently focus in Front-End JavaScript</p>
                    </div>
                    <form id="contact-form" class="no-display">
                         <input type="text" name="name" placeholder="Your name*" autocomplete="off">
                         <textarea name="msg-content" placeholder="Send me a message*"></textarea>
                         <input type="submit" value="Send" id="send-btn">
                         <span class="loading-modal hidden"></span>
                    </form>
               </nav>
               <div>
                    <div id="slides-p"><div id="p1" class="current-slide"></div><div id="p2"></div></div>
                    <div id="contact-icons">
                              <a href="https://github.com/Wukongsito/" rel="noopener" target="_blank"><img src="../assets/icons8-github-100.png"></a>
                              <a href="https://www.linkedin.com/in/daniel-tenorio-sotillet-79b484216/" rel="noopener" target="_blank"><img src="../assets/icons8-linkedin-100.png"></a>
                              <a href="https://www.facebook.com/dterror0011/" rel="noopener" target="_blank"><img src="../assets/icons8-facebook-90.png"></a>
                              <a id="send-msg"><img src="../assets/icons8-gmail-login-96.png"></a>
                    </div>
               </div>
          </div>
     `;
     
     return about;
}