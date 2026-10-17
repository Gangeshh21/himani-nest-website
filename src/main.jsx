import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowRight, Check, ChevronDown, Clock3, Coffee,
  Heart, Camera, MapPin, Menu, MessageCircle, ShieldCheck, Sparkles,
  Star, Wifi, X, BedDouble, CarFront, Wind, Tv, Utensils, Bath, Phone
} from "lucide-react";
import "./styles.css";

const WHATSAPP_1 = "917250781534";
const WHATSAPP_2 = "918099173497";
const INSTAGRAM = "https://www.instagram.com/himani.nest?exln=bGphcml4NmdvNnNu";
const MAPS = "https://maps.google.com/?q=26.148790,91.743607";
const photos = [
  { src: "/images/hero-bedroom.jpeg", alt: "Warm green bedroom at Himani Nest" },
  { src: "/images/living-room.jpeg", alt: "Comfortable living room with television and lounge seating" },
  { src: "/images/room-white.jpeg", alt: "Bright and spacious guest bedroom" },
  { src: "/images/kitchenette.jpeg", alt: "Kitchenette with everyday essentials" },
  { src: "/images/bathroom.jpeg", alt: "Clean guest bathroom" },
  { src: "/images/room-curtains.jpeg", alt: "Guest bedroom with soft curtains" },
  { src: "/images/neighborhood.jpeg", alt: "Green hills and neighborhood around Guwahati" },
  { src: "/images/living-room-detail.jpeg", alt: "A closer look at the living room" },
  { src: "/images/room-dark-detail.jpeg", alt: "Bedroom interior details" },
  { src: "/images/room-white-wide.jpeg", alt: "Wide view of a bright bedroom" },
  { src: "/images/room-green-detail.jpeg", alt: "Bedroom details at Himani Nest" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", checkin: "", checkout: "", guests: "2 guests", room: "Not sure yet", message: "" });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const openWhatsApp = (number = WHATSAPP_1, message = "Hello Himani Nest! I'd like to enquire about a stay.") => {
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const submitBooking = (e) => {
    e.preventDefault();
    const message = [
      "Hello Himani Nest! I'd like to enquire about a booking.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Check-in: ${form.checkin || "Flexible"}`,
      `Check-out: ${form.checkout || "Flexible"}`,
      `Guests: ${form.guests}`,
      `Room preference: ${form.room}`,
      form.message ? `Message: ${form.message}` : ""
    ].filter(Boolean).join("\n");
    openWhatsApp(WHATSAPP_1, message);
  };

  const closeMenu = () => setMenuOpen(false);
  const navItems = [["Stay", "#stay"], ["Amenities", "#amenities"], ["Gallery", "#gallery"], ["Location", "#location"]];

  return (
    <div className="site-shell">
      <div className="topline"><span>YOUR HOME AWAY FROM HOME</span><span className="topline-right"><MapPin size={13}/> Kalapahar, Guwahati, Assam</span></div>
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Himani Nest home">
          <span className="brand-mark"><img src="/images/logo.jpeg" alt="" /></span><span className="brand-copy"><strong>HIMANI NEST</strong><small>STAY A LITTLE CLOSER TO HOME</small></span>
        </a>
        <button className="mobile-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-book" href="#book" onClick={closeMenu}>Book your stay <ArrowRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" style={{ backgroundImage: `url("${photos[0].src}")` }} />
          <div className="hero-shade" />
          <div className="hero-content">
            <div className="eyebrow light-eyebrow"><span/> A QUIET PLACE TO LAND <span/></div>
            <h1>Come in.<br/><em>Feel at home.</em></h1>
            <p>A thoughtfully welcoming stay in Guwahati, made for slow mornings, restful nights, and the little comforts that matter.</p>
            <div className="hero-actions">
              <a href="#book" className="btn btn-light">Plan your stay <ArrowRight size={17}/></a>
              <a href="#gallery" className="text-link light-link">Explore the space <ArrowDownRight size={17}/></a>
            </div>
          </div>
          <div className="hero-note"><Sparkles size={16}/><span>Comfort, with a personal touch.</span></div>
          <div className="hero-index"><span>01</span><i/> A PLACE TO BELONG</div>
        </section>

        <section className="intro section-pad" id="stay">
          <div className="intro-left reveal">
            <div className="eyebrow"><span/> WELCOME TO HIMANI NEST</div>
            <h2>Not just a stay.<br/><em>A feeling.</em></h2>
          </div>
          <div className="intro-right reveal">
            <p className="intro-lead">Some places give you a room. The right place gives you room to breathe.</p>
            <p>Himani Nest is a welcoming home base in Kalapahar, Guwahati — a place to settle in, recharge, and feel at ease whether you're here for a quick visit or a longer stay.</p>
            <a className="underlined-link" href="#amenities">Discover the comforts <ArrowRight size={16}/></a>
          </div>
          <div className="intro-stamp"><span>H</span><small>STAY<br/>WELL</small></div>
        </section>

        <section className="feature-band">
          <div className="feature-photo reveal"><img src={photos[1].src} alt={photos[1].alt}/><div className="photo-caption">A space to slow down</div></div>
          <div className="feature-copy reveal">
            <div className="eyebrow"><span/> YOUR SPACE, YOUR PACE</div>
            <h2>Thoughtful details.<br/><em>Easy living.</em></h2>
            <p>Unpack, settle in, and make yourself comfortable. Every stay should feel simple — from getting here to winding down at the end of the day.</p>
            <div className="mini-points"><div><span className="mini-icon"><Heart size={17}/></span><span><b>Warm hospitality</b><small>A welcoming, personal touch</small></span></div><div><span className="mini-icon"><ShieldCheck size={17}/></span><span><b>Peace of mind</b><small>Comfort you can count on</small></span></div></div>
            <a href="#book" className="btn btn-green">Make it your stay <ArrowRight size={16}/></a>
          </div>
        </section>

        <section className="amenities section-pad" id="amenities">
          <div className="section-heading reveal"><div><div className="eyebrow"><span/> THE LITTLE THINGS</div><h2>Comfort comes<br/><em>standard.</em></h2></div><p>All the essentials for a relaxed, easy stay — with room to make the experience your own.</p></div>
          <div className="amenity-grid">
            {[
              [Wifi, "Stay connected", "Wi-Fi for work, plans, and everything in between."],
              [BedDouble, "Rest easy", "Comfortable spaces to recharge after a long day."],
              [Wind, "Fresh and comfortable", "A welcoming atmosphere through your stay."],
              [Utensils, "Everyday convenience", "Practical touches that make settling in easy."],
              [Bath, "Freshen up", "A clean, refreshing space to get ready."],
              [CarFront, "Easy arrival", "Reach out to us for directions and arrival help."]
            ].map(([Icon, title, desc], i) => <article className="amenity-card reveal" key={title}><span className="amenity-number">0{i+1}</span><div className="amenity-icon"><Icon size={22} strokeWidth={1.5}/></div><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
          <p className="amenity-note">Have a specific requirement? <button onClick={() => openWhatsApp()}>Ask us before booking <ArrowRight size={14}/></button></p>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="gallery-head section-pad reveal"><div><div className="eyebrow"><span/> A CLOSER LOOK</div><h2>Little glimpses<br/><em>of your next stay.</em></h2></div><p>Take a look around and picture yourself settling in. Tap any photo to view it larger.</p></div>
          <div className="gallery-grid">
            {photos.slice(0, 8).map((photo, i) => <button className={`gallery-item gallery-item-${i+1}`} key={photo.src} onClick={() => setSelectedPhoto(photo)} aria-label={`View photo ${i+1}`}><img src={photo.src} alt={photo.alt} loading={i < 3 ? "eager" : "lazy"}/><span className="gallery-zoom">View <ArrowRight size={15}/></span></button>)}
          </div>
          <div className="gallery-foot"><span>HIMANI NEST · GUWAHATI</span><span>YOUR OWN LITTLE CORNER OF COMFORT</span></div>
        </section>

        <section className="price-section section-pad">
          <div className="price-card reveal"><div className="price-card-text"><div className="eyebrow light-eyebrow"><span/> A STAY THAT FEELS RIGHT</div><h2>Make room<br/>for <em>yourself.</em></h2><p>Whether you're here for a night or a little longer, let's find the right option for you.</p><a href="#book" className="btn btn-light">Check availability <ArrowRight size={16}/></a></div><div className="price-card-rate"><span>STARTING FROM</span><div className="price">₹1,399<small> / night</small></div><div className="price-divider"/><p>Rates vary by room and dates.</p><div className="rate-check"><Check size={15}/> Ask us for your dates</div><div className="rate-check"><Check size={15}/> Direct booking assistance</div></div><div className="price-decoration">HN</div></div>
        </section>

        <section className="location-section section-pad" id="location">
          <div className="location-copy reveal"><div className="eyebrow"><span/> FIND YOUR WAY HERE</div><h2>A little corner<br/>of <em>Guwahati.</em></h2><p>Find us in Kalapahar, Guwahati, Assam. Get in touch before you arrive and we'll help make your journey easy.</p><div className="location-address"><span className="location-pin"><MapPin size={19}/></span><span><b>Himani Nest</b><small>Kalapahar, Guwahati, Assam, India</small></span></div><a href={MAPS} target="_blank" rel="noreferrer" className="btn btn-green">Get directions <ArrowRight size={16}/></a></div>
          <a className="map-card reveal" href={MAPS} target="_blank" rel="noreferrer" aria-label="Open Himani Nest location in Google Maps"><div className="map-art"><div className="map-road road-one"/><div className="map-road road-two"/><div className="map-road road-three"/><div className="map-park park-one"/><div className="map-park park-two"/><div className="map-water"/><div className="map-marker"><span><MapPin size={21}/></span><b>HIMANI NEST</b></div><div className="map-compass">N <ArrowDownRight size={15}/></div></div><div className="map-bottom"><span><MapPin size={15}/> Kalapahar, Guwahati</span><span>OPEN IN MAPS <ArrowRight size={14}/></span></div></a>
        </section>

        <section className="booking-section section-pad" id="book">
          <div className="booking-copy reveal"><div className="eyebrow light-eyebrow"><span/> YOUR STAY STARTS HERE</div><h2>Let's make<br/>you <em>at home.</em></h2><p>Tell us a little about your trip. We'll connect on WhatsApp to help with availability, room options, and the details.</p><div className="booking-contact"><span className="contact-icon"><MessageCircle size={19}/></span><span><small>PREFER A QUICK CHAT?</small><b>Book directly on WhatsApp</b><button onClick={() => openWhatsApp(WHATSAPP_1)}>+91 72507 81534 <ArrowRight size={14}/></button></span></div><div className="booking-contact"><span className="contact-icon"><Phone size={18}/></span><span><small>ALTERNATE CONTACT</small><b>We're happy to help</b><button onClick={() => openWhatsApp(WHATSAPP_2)}>+91 80991 73497 <ArrowRight size={14}/></button></span></div></div>
          <form className="booking-form reveal" onSubmit={submitBooking}>
            <div className="form-top"><span>BOOKING ENQUIRY</span><span className="form-step">01 / 01</span></div>
            <h3>Tell us about your stay</h3><p className="form-sub">No payment needed here — this is just an enquiry.</p>
            <div className="form-row"><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name"/></label><label>Phone number<input required type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+91..." /></label></div>
            <div className="form-row"><label>Check-in<input type="date" min={new Date().toISOString().split("T")[0]} value={form.checkin} onChange={e=>setForm({...form,checkin:e.target.value})}/></label><label>Check-out<input type="date" min={form.checkin || new Date().toISOString().split("T")[0]} value={form.checkout} onChange={e=>setForm({...form,checkout:e.target.value})}/></label></div>
            <div className="form-row"><label>Number of guests<select value={form.guests} onChange={e=>setForm({...form,guests:e.target.value})}><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5+ guests</option></select></label><label>Room preference<select value={form.room} onChange={e=>setForm({...form,room:e.target.value})}><option>Not sure yet</option><option>Single room</option><option>Double room</option><option>Family stay</option><option>Longer stay</option></select></label></div>
            <label className="full-label">Anything else we should know? <span>(optional)</span><textarea rows="3" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Share any requests or questions..."/></label>
            <button type="submit" className="btn btn-green submit-btn">Send enquiry on WhatsApp <ArrowRight size={17}/></button><p className="form-privacy"><ShieldCheck size={14}/> Your details are sent directly to Himani Nest via WhatsApp.</p>
          </form>
        </section>

        <section className="social-strip"><div className="social-inner"><span className="social-icon"><Camera size={21}/></span><div><small>A LITTLE MORE HIMANI NEST</small><b>Follow along on Instagram</b></div><a href={INSTAGRAM} target="_blank" rel="noreferrer">@himani.nest <ArrowRight size={16}/></a></div></section>
      </main>

      <footer className="footer"><div className="footer-main"><a className="brand brand-footer" href="#home"><span className="brand-mark"><img src="/images/logo.jpeg" alt="" /></span><span className="brand-copy"><strong>HIMANI NEST</strong><small>STAY A LITTLE CLOSER TO HOME</small></span></a><p>Your home away from home.<br/>A welcoming stay in Guwahati, Assam.</p><a className="footer-whatsapp" href={`https://wa.me/${WHATSAPP_1}`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Say hello on WhatsApp</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Himani Nest. All rights reserved.</span><span>MADE WITH CARE, FOR YOUR COMFORT.</span><a href="#home">BACK TO TOP ↑</a></div></footer>

      <button className="floating-whatsapp" onClick={() => openWhatsApp()} aria-label="Chat with Himani Nest on WhatsApp"><MessageCircle size={22}/><span>Chat with us</span></button>
      {selectedPhoto && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setSelectedPhoto(null)}><button className="lightbox-close" onClick={() => setSelectedPhoto(null)} aria-label="Close photo"><X/></button><img src={selectedPhoto.src} alt={selectedPhoto.alt} onClick={e=>e.stopPropagation()}/><p>{selectedPhoto.alt}</p></div>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
