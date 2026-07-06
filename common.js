// Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
function animateCursor(){
  if(cursor){cursor.style.left=mx+'px';cursor.style.top=my+'px';}
  if(ring){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';}
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Scroll top
const scrollBtn=document.getElementById('scrollTop');
if(scrollBtn){window.addEventListener('scroll',()=>{scrollBtn.classList.toggle('visible',window.scrollY>400);});}

// Fade up
const faders=document.querySelectorAll('.fade-up');
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:.12});
faders.forEach(f=>obs.observe(f));

// Active nav
const path=window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(a=>{
  if(a.getAttribute('href')===path||a.getAttribute('href')===('./'+path))a.classList.add('active');
});






document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");
    var closeBtn = document.getElementById("closeModal");

    // Check karein ki kya modal page par sach me hai?
    // Agar modal aur closeBtn dono honge, tabhi ye code chalega.
    if (modal && closeBtn) {
        
        // "Our Work" aur "Our Collection" ki sabhi images par click listener lagana
        var allImages = document.querySelectorAll(".ph-item img, .pphoto img");
        
        allImages.forEach(function(img) {
            img.addEventListener("click", function() {
                modal.style.display = "flex";    // Pop-up ko dikhana
                if (modalImg) modalImg.src = this.src; // Click ki gayi image ka path modal me daalna
            });
        });

        // Close button (X) par click karne par pop-up band hona
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });

        // Pop-up ke bahaar kaali jagah par click karne par bhi band hona
        modal.addEventListener("click", function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});
/*/* ============================================================
   HAMBURGER MENU — common.js ke END mein yeh REPLACE karo
   Dono pages ke liye kaam karega:
   - index.html  → .hamburger button + #mobileNav
   - baaki pages → .nav-hamburger button + .nav-links
   ============================================================ */

(function () {

  /* ── INDEX.HTML wala system ── */
  var btn1 = document.querySelector('.hamburger');
  var mob  = document.getElementById('mobileNav');

  if (btn1 && mob) {
    btn1.addEventListener('click', function (e) {
      e.stopPropagation(); // क्लिक को ऊपर जाने से रोकें ताकि तुरंत बंद न हो
      var open = mob.classList.toggle('open');
      btn1.classList.toggle('open', open);
    });

    mob.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mob.classList.remove('open');
        btn1.classList.remove('open');
      });
    });
  }

  /* ── BAAKI PAGES wala system ── */
  var nav   = document.querySelector('nav');
  var btn2  = document.querySelector('.nav-hamburger');
  var links = nav ? nav.querySelector('.nav-links') : null;

  if (btn2 && links) {
    btn2.addEventListener('click', function (e) {
      e.stopPropagation(); // क्लिक को रोकें
      var open = links.classList.toggle('open');
      btn2.classList.toggle('open', open);
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        btn2.classList.remove('open');
      });
    });
  }

  /* ── Bahar click karne par dono band ho (FIXED) ── */
  document.addEventListener('click', function (e) {
    var nav = document.querySelector('nav');
    
    // यहाँ सुधार किया है: अगर क्लिक nav के बाहर हो AND मोबाइल मेन्यू के भी बाहर हो, तभी बंद हो
    var clickOutsideNav = nav && !nav.contains(e.target);
    var clickOutsideMob = mob && !mob.contains(e.target);
    var clickOutsideLinks = links && !links.contains(e.target);

    if (clickOutsideNav && clickOutsideMob && clickOutsideLinks) {
      if (mob)   mob.classList.remove('open');
      if (btn1)  btn1.classList.remove('open');
      if (links) links.classList.remove('open');
      if (btn2)  btn2.classList.remove('open');
    }
  });

})();