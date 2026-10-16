(function(){
const nav=document.createElement('nav');
nav.className='navbar navbar-expand-lg sticky-top os-navbar';
nav.innerHTML='<div class="container-xl"><a class="navbar-brand d-flex align-items-center" href="#about"><span class="os-brand-mark"><i class="bi bi-cpu-fill"></i></span>Operating Systems Lab</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#osNav" aria-controls="osNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="osNav"><ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1"><li class="nav-item"><a class="nav-link" href="#about"><i class="bi bi-info-circle me-1"></i> About Project</a></li><li class="nav-item"><a class="nav-link os-nav-cta ms-lg-2 px-3" href="#contact"><i class="bi bi-envelope me-1"></i> Feedback</a></li></ul></div></div>';
document.body.insertBefore(nav,document.body.firstChild);
const main=document.querySelector('body > main');
if(main){
const info=document.createElement('section');
info.className='os-info-sections';
info.innerHTML='<article id="about" class="os-info-card reveal"><div class="os-info-icon"><i class="bi bi-lightbulb"></i></div><h2>About this project</h2><p>Explore this Operating Systems concept through an interactive visual simulation. Change inputs, observe the results, and use the Marathi guide to understand the logic.</p></article><article id="contact" class="os-info-card reveal"><div class="os-info-icon"><i class="bi bi-chat-square-text"></i></div><h2>Feedback & Contact</h2><p>Found an issue or have an idea to improve this project? Share your feedback through the project repository.</p><p class="mt-3"><a class="btn btn-sm btn-outline-primary rounded-pill px-3" href="https://github.com/tukaramstark/OS-Projects/issues" target="_blank" rel="noreferrer"><i class="bi bi-github me-1"></i> Send feedback</a></p></article>';
main.insertAdjacentElement('afterend',info);
}
const old=document.querySelector('body > footer');if(old)old.remove();
const footer=document.createElement('footer');
footer.innerHTML='<div class="os-footer-title"><i class="bi bi-cpu-fill me-2"></i>Operating Systems Lab</div><p class="mt-2 mb-1">Learn Operating Systems by exploring how they work.</p><div class="os-socials"><a href="https://github.com/tukaramstark/OS-Projects" aria-label="GitHub repository" title="GitHub repository"><i class="bi bi-github"></i></a><a href="https://github.com/tukaramstark/OS-Projects/issues" aria-label="Feedback" title="Feedback"><i class="bi bi-chat-dots"></i></a></div><div class="os-footer-bottom">Educational project · HTML, CSS & JavaScript</div>';
document.body.appendChild(footer);
const targets=document.querySelectorAll('main .panel,main .stat,main .two,main .philosopher,main .terminal,main .card,.os-info-card');
targets.forEach(el=>el.classList.add('reveal'));
if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.08});targets.forEach(el=>io.observe(el))}else targets.forEach(el=>el.classList.add('is-visible'));
})();