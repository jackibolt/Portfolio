
console.log('it works');

const nav = document.querySelector('nav');
const bigContainer = document.getElementById('big-container');

// Show nav item titles for medium to large screens
nav.addEventListener('mouseover', (e) => {
  if (screen.width > 767) {

    if (e.target.textContent === '1') {
      e.target.textContent = 'TBD';
      e.target.addEventListener('mouseout', () => {
        e.target.textContent = '1';
      })
    }
    else if (e.target.textContent === '2') {
      e.target.textContent = 'About';
      e.target.addEventListener('mouseout', () => {
        e.target.textContent = '2';
      })
    }
    else if (e.target.textContent === '3') {
      e.target.textContent = 'Projects';
      e.target.addEventListener('mouseout', () => {
        e.target.textContent = '3';
      })
    }
    else if (e.target.textContent === '4') {
      e.target.textContent = 'Contact';
      e.target.addEventListener('mouseout', () => {
        e.target.textContent = '4';
      })
    }
  }
});

const projectsHTML = `
  <div class="container-fluid projects">
    <h3 class='mb-3 text-left title'>Stuff I Built</h3>
    <div class='col container container-fluid text-center'>
      <div class="row justify-content-center">
        <div class="col-lg m-1 m-md-2 m-lg-3 p-0 a">
          <a href="http://www.jordanbolt.com" target='_blank'><img src="IMGS/jordan_pic.png" alt="jordanbolt.com"></a>
        </div>
        <div class="col-lg m-1 m-md-2 m-lg-3 p-0 b">
          <img src="IMGS/api_directory.png" alt="API Directory">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg m-1 m-md-2 m-lg-3 p-0 a">
          <img src="IMGS/photo_gallery.png" alt="Searchable Photo Gallery">
        </div>
        <div class="col-lg m-1 m-md-2 m-lg-3 p-0 b">
          <img src="IMGS/webapp.png" alt="WebApp">
        </div>
      </div>
    </div>
  </div>
  `;

const contactHTML = `
  <div class="container-fluid contact">
    <h3 class='mb-3 text-left title'>Connect with me</h3>
    <div class="py-4 text-left contact-text">
      <p>I'm currently looking for opportunities to grow my portfolio and try new things.</p>
      <p class='mb-5'>Want to build something great with me?</p>
      <a href="mailto:bolt.jacqueline@gmail.com?" target="_top">bolt.jacqueline@gmail.com</a>
    </div>
  </div>
  `;



nav.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target.id === '3' || e.target.textContent === '3' || e.target.textContent === 'Projects') {
    bigContainer.innerHTML = projectsHTML;
  }
  else if (e.target.id === '4' || e.target.textContent === '4' || e.target.textContent === 'Contact') {
    bigContainer.innerHTML = contactHTML;
  }

})
