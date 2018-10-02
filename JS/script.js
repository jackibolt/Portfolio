
console.log('it works');

const nav = document.querySelector('nav');
const bigContainer = document.getElementById('big-container');
const footer = document.querySelector('footer');
const navLink = document.querySelectorAll('.nav-link');



// Show nav item titles for large and xl screens
nav.addEventListener('mouseover', (e) => {
  if (screen.width > 767) {

    if (e.target.textContent === '1') {
      e.target.textContent = 'Home';
      e.target.addEventListener('mouseout', () => {
        e.target.textContent = '1';
      });
    }
    else if (e.target.textContent === '2') {
      e.target.textContent = 'About';
      e.target.addEventListener('mouseout', () => {
        e.target.textContent = '2';
      });
    }
    else if (e.target.textContent === '3') {
      e.target.textContent = 'Projects';
      e.target.addEventListener('mouseout', () => {
        e.target.textContent = '3';
      });
    }
    else if (e.target.textContent === '4') {
      e.target.textContent = 'Contact';
      e.target.addEventListener('mouseout', () => {
        e.target.textContent = '4';
      });
    }
  }
});


// HTML content variables for content box
const homeHTML = `
  <div class="container-fluid home">
    <div class="meeting-img">
      <img src="IMGS/greeting.svg" id='meeting' alt="people meeting">
    </div>

    <div class="connect-img">
      <img src="IMGS/CCC.svg" id='connect' alt="connect create connect">
      <img src="IMGS/CCC-stack.svg" id='connect-stack' alt="connect create connect">
    </div>

    <div class="world-img">
      <img src="IMGS/world.svg" id='world' alt="">
    </div>
  </div>
`;

const aboutHTML = `
  <div class="container-fluid about">
    <h1 class='mb-3 mt-4 text-left title'>About Me</h1>
    <div class="py-4 text-left about-text">
      <h4 class='mb-5 ml-3 ml-md-4'>I love helping good ideas get off the ground.<img src='IMGS/biplane.svg' alt='biplane' id='biplane' class='text-icon'></h4>
      <p>Behind every great idea, there's someone dreaming. Whether you're solving problems, telling stories or selling products, you need a web presence that connects your dreams to the world.</p>
      <p>My goal is build creative user experiences that connect <span class='humans'>humans to humans</span>, and make the world a little <span id='bright'>brighter</span>.</p>
    </div>
    <img src='IMGS/light-bulb.svg' alt='light bulb' class='text-icon' id='lightbulb'>
  </div>
  `;

const projectsHTML = `
<div class="container-fluid projects">
  <h3 class='mb-3 mt-1 text-left title'>Stuff I Built</h3>
  <div class='col container-fluid text-center project-pics'>
    <div class="row justify-content-center no-gutters">
      <div class="col-lg m-1 m-md-2 m-lg-3 p-0 a">
        <img src="IMGS/jordan_pic.png" alt="jordanbolt.com">
        <a href="http://www.jordanbolt.com" target='_blank'>
          <div class="project-overlay a1">
            <h5>Cinamatography Portfolio</h5>
            <p class='desc'>Online portfolio for a sports cinematographer.</p>
            <p><span class='skill'>HTML</span>   <span class='skill'>CSS</span></p>
          </div>
        </a>
      </div>
      <div class="col-lg m-1 m-md-2 m-lg-3 p-0 b">
        <img src="IMGS/api_directory.png" alt="API Directory">
        <a href="https://jackibolt.github.io/Project-8-API-Directory/" target="_blank">
          <div class="project-overlay b1">
            <h5>Employee Directory</h5>
            <p class='desc'>Searchable directory of employee information.</p>
            <p><span class='skill'>Javascript</span>   <span class='skill'>API</span>   <span class='skill'>HTML</span>   <span class='skill'>CSS/SASS</span></p>
          </div>
        </a>
      </div>
      <div class="col-lg m-1 m-md-2 m-lg-3 p-0 c">
        <img src="IMGS/rhino.png" alt="Newsletter Sign Up Form">
        <a href="https://jackibolt.github.io/Project-3-Registration-Form/" target="_blank">
          <div class="project-overlay c1">
            <h5>Sign Up Form</h5>
            <p class='desc'>Sign up form for a newsletter.</p>
            <p> <span class='skill'>HTML</span>   <span class='skill'>CSS</span></p>
          </div>
        </a>
      </div>
    </div>
    <div class="row justify-content-center no-gutters">
      <div class="col-lg m-1 m-md-2 m-lg-3 p-0 a">
        <img src="IMGS/photo_gallery.png" alt="Searchable Photo Gallery">
        <a href='https://jackibolt.github.io/Project-5-Photo-Gallery/' target="_blank">
          <div class="project-overlay a1">
            <h5>Photo Gallery</h5>
            <p class='desc'>Searchable photo gallery.</p>
            <p><span class='skill'>HTML</span> <span class='skill'>CSS/SASS</span> <span class='skill'>Javascript</span> <span class='skill'>JQuery</span></p>
          </div>
        </a>
      </div>
      <div class="col-lg m-1 m-md-2 m-lg-3 p-0 b">
        <img src="IMGS/webapp.png" alt="WebApp">
        <a href='https://jackibolt.github.io/Project-7-WebApp-Dashboard/' target="_blank">
          <div class="project-overlay b1">
            <h5>WebApp User Dashboard</h5>
            <p class='desc'>Dashboard for a generic webapp.</p>
            <p><span class='skill'>HTML</span> <span class='skill'>CSS/SASS</span> <span class='skill'>Javascript</span> <span class='skill'>JQuery</span></p>
          </div>
        </a>
      </div>
      <div class="col-lg m-1 m-md-2 m-lg-3 p-0 c">
        <img src="IMGS/style-guide.png" alt="Style Guide">
        <a href="https://jackibolt.github.io/Project-4-Style-Guide/" target="_blank">
          <div class="project-overlay c1">
            <h5>CSS Style Guide</h5>
            <p class='desc'>CSS style guide built to match a mockup.</p>
            <p><span class='skill'>HTML</span>   <span class='skill'>CSS/SASS</span></p>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
  `;

const contactHTML = `
  <div class="container-fluid contact text-left">
    <h3 class='mb-3 mt-4 text-left title'>Connect with me</h3>
    <div class="py-4 ml-2 ml-md-4 text-left contact-text">
      <p>I'm currently looking for opportunities to grow my portfolio <br>and try new things.</p>
      <p class='mb-3 mb-md-5'>Want to build something great with me?</p>
    </div>
    <a href="mailto:bolt.jacqueline@gmail.com?" target="_top" class='text-left'>bolt.jacqueline@gmail.com</a>
  </div>
  `;


// displays content for each menu section
nav.addEventListener('click', (e) => {
  if (e.target.id === '1' || e.target.textContent === '1' || e.target.textContent === 'Home') {
    bigContainer.innerHTML = homeHTML;
    footer.style.display = 'none';
  }
  else if (e.target.id === '2' || e.target.textContent === '2' || e.target.textContent === 'About') {
    bigContainer.innerHTML = aboutHTML;
    footer.style.display = 'block';

    //shows light bulb svg
    const bright = document.querySelector('#bright');
    const lightbulb = document.querySelector('#lightbulb');

    bright.addEventListener('mouseover', () => {
      if (screen.width > 768) {
        lightbulb.style.display = 'inline';
        bright.addEventListener ('mouseout', () => {
          lightbulb.style.display = 'none';
        });
      }
    });

  }
  else if (e.target.id === '3' || e.target.textContent === '3' || e.target.textContent === 'Projects') {
    bigContainer.innerHTML = projectsHTML;
    footer.style.display = 'block';
  }
  else if (e.target.id === '4' || e.target.textContent === '4' || e.target.textContent === 'Contact') {
    bigContainer.innerHTML = contactHTML;
    footer.style.display = 'block';
  }
});
