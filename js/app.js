/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const numberOfSections = 6;
const navigation = document.getElementById('navbar__list');
const mainElem = document.querySelector('main');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let i = 1; i <= numberOfSections; i++){
  if (i > 4){
  mainElem.innerHTML += `<section id="section${i}" data-nav="Section ${i}">
  <div class="landing__container">
    <h2>Section ${i}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
  </div>
</section>`;
}
  navigation.innerHTML += `<li><a  href='#${i}' class='menu__link'>Section ${i}</a></i>`;
  }

const header = document.querySelector('.page__header')
const item = document.getElementsByTagName('li');
const sections = document.getElementsByTagName('section');
const navResponsive = document.getElementById('responsive')
const responsiveItems = document.querySelector('ul')

function makeActive(){
  for(let i = 0; i < sections.length; i++){
    const box = sections[i].getBoundingClientRect();
    if (box.top <= 150 && box.bottom >= 150){
      sections[i].classList.add('your-active-class');
      sections[i].querySelector('h2').style.color = '#cc1';
    }else{
      sections[i].classList.remove('your-active-class');
      sections[i].querySelector('h2').style.color = '#fff';
    }
    if (sections[i].classList.contains('your-active-class') == true){
      item[i].classList.add('activ_link');
      item[i].querySelector('a').style.color = '#fff';
    }else{
      item[i].classList.remove('activ_link');
      item[i].querySelector('a').style.color = '#333';
    }
  }
}

document.addEventListener('scroll', function(){
  makeActive();
});
// function to scroll when clicking navbar in small screens
navResponsive.addEventListener('click', function(e){
  e.preventDefault();
  responsiveItems.classList.toggle('hidden');
  responsiveItems.classList.toggle('show');
});


for ( let i = 0; i < item.length; i++){
  item[i].addEventListener('click', function(e){
    e.preventDefault();
    // Scroll to section on link click
    sections[i].scrollIntoView({behavior: 'smooth'});

    // function to hide the nav bar after scrolling
    if (window.innerWidth >= 672){
      window.addEventListener('scroll', function(){
        setTimeout(() => {
          header.classList.add('hide');
          header.classList.remove('appear');}, 300);


        });
        // function to show the nav bar when mouse is top
      window.addEventListener('mousemove', function(n){
        if (n.clientY < 50){
          setTimeout(() => {
            header.classList.add('appear');
            header.classList.remove('hide');}, 300);  
        }
        if (n.clientY > 50){
          setTimeout(() => {
            header.classList.add('hide');
            header.classList.remove('appear');}, 300);
        }
        });}
});
}

// adding a scroll top button
var scrollButton = document.createElement('div');
scrollButton.innerText = 'Up';
scrollButton.style.cssText = 'display: none;\
                              position: fixed;\
                              bottom: 15px;\
                              right: 15px;\
                              width: 50px;\
                              height: 50px;\
                              border-radius: 10%;\
                              background-color: rgba(0,13,60,1);\
                              color: #fff;\
                              justify-content: center;\
                              font-family: \'Fira Sans\';\
                              font-size: x-large;\
                              align-items: center;'

document.body.appendChild(scrollButton);
scrollButton.style.cursor = 'pointer';
window.onscroll = function(){
  if (window.scrollY > 300){
    scrollButton.style.display = 'flex';
  }else{
    scrollButton.style.display = 'none';
  }
  
}
scrollButton.onclick = function(){
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 