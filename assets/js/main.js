// Loader
window.addEventListener('load',()=>{setTimeout(()=>{const l=document.getElementById('loader');if(l){l.classList.add('hidden');}},800);});

// Navbar scroll
window.addEventListener('scroll',()=>{const nav=document.getElementById('navbar');if(nav){nav.classList.toggle('scrolled',window.scrollY>50);}});

// Hamburger menu
const ham=document.getElementById('hamburger');const menu=document.getElementById('navMenu');
if(ham&&menu){ham.addEventListener('click',()=>{menu.classList.toggle('open');});}

// Counter animation
function animateCounters(){document.querySelectorAll('.count').forEach(el=>{const target=+el.dataset.target;const step=target/80;let current=0;const timer=setInterval(()=>{current+=step;if(current>=target){el.textContent=target.toLocaleString();clearInterval(timer);}else{el.textContent=Math.floor(current).toLocaleString();}},20);});}
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){animateCounters();observer.disconnect();}});},{threshold:0.5});
const statsBar=document.querySelector('.stats-bar');if(statsBar)observer.observe(statsBar);

// Quick appointment form
const qf=document.getElementById('quickForm');
if(qf){qf.addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('patientName');const p=document.getElementById('patientPhone');const d=document.getElementById('apptDate');if(!n.value.trim()||!p.value.trim()||!d.value){showToast('Please fill all fields!','error');return;}showToast('Appointment confirmed! We will call you shortly.','success');qf.reset();});}

// Toast notification
function showToast(msg,type='success'){let t=document.querySelector('.success-toast');if(!t){t=document.createElement('div');t.className='success-toast';document.body.appendChild(t);}t.textContent=msg;t.style.background=type==='error'?'#f5576c':'#06D6A0';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3500);}

// Chatbot
function toggleChatbot(){const w=document.getElementById('chatbotWidget');if(w)w.classList.toggle('open');}

const botReplies={appointment:["To book an appointment, please fill the Quick Appointment form or visit our Appointment page.","You can book online 24/7 or call us at +91 6206573293."],services:["We offer Cardiology, Neurology, Orthopedics, Pediatrics, Ophthalmology and Dentistry.","Check our Services page for a complete list of treatments."],doctor:["We have 50+ specialist doctors. Visit our Doctors page to find the right specialist.","All our doctors are board-certified with years of experience."],timing:["We are open Monday to Saturday, 8AM to 8PM.","Emergency services are available 24/7."],location:["We are located at 123 Medical Street, Mumbai, India.","You can find us on the map in our Contact section."],default:["I can help you with appointments, services, doctor info, timings and location.","Please ask me anything about MediCare Plus clinic!","Feel free to call us at +91 6206573293 for immediate assistance."]};

function sendChat(){const inp=document.getElementById('chatInput');const msgs=document.getElementById('chatMessages');if(!inp||!msgs)return;const text=inp.value.trim();if(!text)return;const um=document.createElement('div');um.className='user-msg';um.textContent=text;msgs.appendChild(um);inp.value='';const lower=text.toLowerCase();let reply;if(lower.includes('appoint')||lower.includes('book'))reply=botReplies.appointment;else if(lower.includes('service')||lower.includes('treat')||lower.includes('special'))reply=botReplies.services;else if(lower.includes('doctor')||lower.includes('physician')||lower.includes('surgeon'))reply=botReplies.doctor;else if(lower.includes('time')||lower.includes('hour')||lower.includes('open')||lower.includes('close'))reply=botReplies.timing;else if(lower.includes('location')||lower.includes('address')||lower.includes('where'))reply=botReplies.location;else reply=botReplies.default;setTimeout(()=>{const bm=document.createElement('div');bm.className='bot-msg';bm.textContent=reply[Math.floor(Math.random()*reply.length)];msgs.appendChild(bm);msgs.scrollTop=msgs.scrollHeight;},600);}

const ci=document.getElementById('chatInput');if(ci){ci.addEventListener('keypress',e=>{if(e.key==='Enter')sendChat();});}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth'});});});

// Scroll reveal animation
const reveals=document.querySelectorAll('.service-card,.doctor-card,.testimonial-card');const revObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';}});},{threshold:0.1});
reveals.forEach(el=>{el.style.opacity='0';el.style.transform='translateY(30px)';el.style.transition='opacity .6s ease, transform .6s ease';revObs.observe(el);});
