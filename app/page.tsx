"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Stat { value: string; label: string; bg: string; text: string; }
interface Highlight { Images: string; title: string; desc: string; }
type Program = { tag: string; title: string; badge?: string; image: string; duration: string; };
interface WhyAmityItem { icon: string; title: string; desc: string; }
interface Testimonial { image: string; name: string; role: string; text: string; }
interface FormField { placeholder: string; key: keyof FormState; type: string; }
interface FormState { name: string; email: string; phone: string; course: string; state: string; qualification: string; }

const stats: Stat[] = [
  { value: "30+", label: "Years of Excellence", bg: "bg-yellow-500", text: "text-white" },
  { value: "60+", label: "Programs & Certifications", bg: "bg-green-500", text: "text-white" },
  { value: "1.60 Lac+", label: "Online Learners", bg: "bg-blue-500", text: "text-white" },
  { value: "3.5L+", label: "Global Alumni Network", bg: "bg-red-300", text: "text-white" },
];
const highlights: Highlight[] = [
  { Images: "/emagingspecilization.png", title: "Emerging Specializations", desc: "Industry-relevant specializations aligned with future job markets and emerging technologies." },
  { Images: "/learningmodal.png", title: "Valued Degree Certificates", desc: "UGC-entitled degrees recognized across industries and institutions globally." },
  { Images: "/personallearning.png", title: "Personalised Learning", desc: "Adaptive learning paths personalized to your pace, goals, and learning style." },
  { Images: "/realworldproject.png", title: "Real World Projects", desc: "Hands-on projects, case studies, and live industry challenges to build your portfolio." },
];
const programs: Program[] = [
  { tag: "PG PROGRAM", title: "Master of Business Administration", badge: "🔥 POPULAR", image: "/mba.webp", duration: "02 Years" },
  { tag: "UG PROGRAM", title: "Bachelor of Computer Applications", badge: "", image: "/bca.webp", duration: "03 Years" },
  { tag: "TOP UG PROGRAM", title: "Bachelor of Business Administration", badge: "⭐ TOP", image: "/bba.webp", duration: "03 Years" },
  { tag: "PG PROGRAM", title: "Master of Computer Applications", badge: "", image: "/mca.webp", duration: "02 Years" },
  { tag: "UG PROGRAM", title: "MBA With Dual Specialization", badge: "", image: "/mbaindual.webp", duration: "02 Years" },
  { tag: "PG PROGRAM", title: "BBA + MBA Degree Program", badge: "", image: "/bba+mba.jpg", duration: "05 Years" },
  { tag: "UG PROGRAM", title: "B.Com + MBA Degree Program", badge: "", image: "/B_com_MBA.jpg", duration: "05 Years" },
  { tag: "UG PROGRAM", title: "BCA + MCA Degree Program", badge: "", image: "/bca+mca.jpg", duration: "05 Years" },
  { tag: "UG PROGRAM", title: "BBA with Specialization in Travel and Tourism Management", badge: "", image: "/BBA_TAT.webp", duration: "03 Years" },
  { tag: "PG PROGRAM", title: "Master of Commerce (Financial Management)", badge: "", image: "/MComfm.webp", duration: "02 Years" },
];
const faqs: string[] = [
  "What is Amity University Online?",
  "What is the Admission Process (Entirely Online)?",
  "How Do I Choose My Course?",
  "How Will I Get Admission Confirmation?",
  "Cancellation Of Admission",
  "What Academic Support Services Are Available To Online Students?",
  "How Are the Forms of Assessments Distributed in Online Programs?",
  "Are Student Loans Available For Online Students?",
  "How Are Online Degrees Certified?",
];
const whyAmity: WhyAmityItem[] = [
  { icon: "", title: "WASC Accreditation", desc: "Internationally recognized accreditation ensuring global quality standards." },
  { icon: "", title: "NBA Recognition", desc: "National Board of Accreditation recognition for technical programs." },
  { icon: "", title: "QS Ranked Online", desc: "Ranked among top online universities globally by QS Rankings." },
  { icon: "", title: "GAA (UK) Accreditation", desc: "Global Accreditation from UK ensuring international program standards." },
  { icon: "", title: "Times Higher Employability Rankings", desc: "Consistently ranked high in graduate employability rankings." },
  { icon: "", title: "Pan-India Campus Placement Events", desc: "Regular placement drives across all major cities in India." },
  { icon: "", title: "Amigo: Learning On Mobile", desc: "AI-powered mobile learning assistant available 24/7." },
  { icon: "", title: "Prof. Ask: Your AI Career Tutor", desc: "Personal AI tutor to guide your academic and career journey." },
  { icon: "", title: "Industry Certifications for Better Employability", desc: "Free industry certifications bundled with every program." },
  { icon: "", title: "Internship Discovery Platform", desc: "Exclusive internship portal with 500+ partner companies." },
  { icon: "", title: "AI-Powered Career Discovery Platform", desc: "Smart career matching based on your skills and interests." },
  { icon: "", title: "AmicusApp for Campus Life", desc: "Stay connected with campus events, alumni and peers." },
];
const testimonials: Testimonial[] = [
  { name: "Ajimsha Puthur Abdul Hameed", image: "/1.webp", role: "MBA Graduate", text: "Amity Online gave me the flexibility to complete my MBA while working full-time. The faculty support and industry connections were exceptional." },
  { name: "Himansha Chadhha", image: "/2.webp", role: "BCA Graduate", text: "The live sessions, recorded lectures and project-based learning made this an amazing experience. I got placed before even completing my degree!" },
];
const accreditations = [
  { img: "/qs.png", text: "India's only Online MBA ranked by QS: Asia Pacific Top 10" },
  { img: "/UGC.webp", text: "First university in India to receive UGC approval for Online Degrees and Learning Platform" },
  { img: "/WASC.webp", text: "The Western Association of Schools and Colleges" },
  { img: "/wes.png", text: "WES accredited in Canada" },
];

// ── Submitting Full-Screen Overlay ──────────────────────────
function SubmittingOverlay() {
  return (
    <div className="fixed inset-0 bg-blue-950/80 backdrop-blur-sm z-[100] flex items-center justify-center">
      <div className="bg-white rounded-2xl px-10 py-10 shadow-2xl flex flex-col items-center gap-5 max-w-sm w-full mx-4 text-center">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-blue-100"></div>
          <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
        </div>
        <div>
          <h3 className="text-blue-900 font-extrabold text-xl mb-1">Your Form is Submitting...</h3>
          <p className="text-gray-500 text-sm">Please wait, we are processing your details.</p>
        </div>
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "0ms" }}></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-bounce" style={{ animationDelay: "150ms" }}></span>
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "300ms" }}></span>
        </div>
      </div>
    </div>
  );
}

// ── Reusable Submit Button ──────────────────────────────────
function SubmitButton({ submitting, onClick }: { submitting: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={submitting}
      className={`w-full font-bold py-3 rounded-full transition-all text-sm shadow-md flex items-center justify-center gap-2 ${
        submitting ? "bg-blue-600 text-white cursor-not-allowed" : "bg-gray-300 text-gray-700 hover:bg-gray-400"
      }`}
    >
      {submitting ? (
        <>
          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Your Form is Submitting...
        </>
      ) : (
        "APPLY NOW"
      )}
    </button>
  );
}

// ── Main Component ────────────────────────────────────────────
export default function AmityOnlinePage(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", course: "", state: "", qualification: "" });
  const [showEnquiry, setShowEnquiry] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitResult, setSubmitResult] = useState<string>("");
  const [enquirySource, setEnquirySource] = useState<string | null>(null);
  const [enquiryCampaign, setEnquiryCampaign] = useState<string | null>(null);
  const handleFaqToggle = (i: number) => setOpenFaq(openFaq === i ? null : i);
  const handleFormChange = (key: keyof FormState, value: string) => setForm((prev) => ({ ...prev, [key]: value }));
  const handleOpenEnquiry = () => { setShowEnquiry(true); setSubmitResult(""); };
  const handleCloseEnquiry = () => setShowEnquiry(false);

  const handleSubmit = async (): Promise<void> => {
    const { name, email, phone, course, state, qualification } = form;
    if (!name.trim() || !email.trim() || !phone.trim() || !course.trim() || !state.trim() || !qualification.trim()) {
      setSubmitResult("Please fill all required fields."); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setSubmitResult("Please enter a valid email address."); return;
    }
    if (!/^\d{10}$/.test(phone.trim())) {
      setSubmitResult("Please enter a valid 10-digit phone number."); return;
    }
    try {
      setSubmitting(true);
      setSubmitResult("");
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: `+91 ${phone.trim()}`, course: course.trim(), state: state.trim(), city: state.trim(), qualification: qualification.trim(), source: enquirySource ?? (typeof window !== "undefined" ? window.location.href : ""), campaign: enquiryCampaign ?? "Google_Search", university: "Amity University Online" }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      if (typeof window !== "undefined") window.location.href = "/welcome";
    } catch {
      setSubmitResult("Submission failed. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEnquirySource(window.location.href);
    }
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
     const ce = e as CustomEvent<{ source?: string; campaign?: string }>;
     setEnquirySource(ce.detail?.source ?? (typeof window !== "undefined" ? window.location.href : ""));
     setEnquiryCampaign(ce.detail?.campaign ?? "Google_Search"); // default campaign
      handleOpenEnquiry();
    };
    window.addEventListener("open-enquiry", handler as EventListener);
    return () => window.removeEventListener("open-enquiry", handler as EventListener);
  }, []);

  const stateOptions = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];
  const courseOptions = ["MBA","MCA","MCom","MA","BBA","BCA","BCom","BA"];
  const qualOptions = ["12th Pass","Diploma","Graduate","Post Graduate","Doctorate"];

  return (
    <div className="min-h-screen bg-white font-sans" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>

      {/* ── GLOBAL SUBMITTING OVERLAY ── */}
      {submitting && <SubmittingOverlay />}

      {/* ── NAVBAR ── */}
     {/* ── NAVBAR ── */}
<nav className="bg-[#0B1E3A] rounded-b-2xl shadow-md">
  <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
    <Image
      src="/amity_logo.png"
      alt="Amity Online"
      width={140}
      height={40}
      className="object-contain"
      priority
    />

    <button
      onClick={handleOpenEnquiry}
      className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-5 py-2 rounded-full text-sm transition-all shadow-md"
    >
      Enquire Now →
    </button>
  </div>

  {/* Yellow line below navbar */}
 
</nav>


 <div className="h-[40px] bg-yellow-400 rounded-md mt-[12px] mx-4"></div>
      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden">
        <img src="/amity_frame.png" alt="Frame" className="hidden md:block absolute inset-0 w-full h-full object-contain pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
          <div className="flex flex-col md:block">
            <div className="md:hidden w-full">
              <h1 className="text-base font-bold leading-snug text-blue-900 mb-3 px-1">Unlock global learning with our innovative online degree programs</h1>
              <img src="/amity_frame.png" alt="Amity" className="w-full h-auto object-contain" />
            </div>
            <div className="hidden md:block max-w-lg">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-snug text-blue-900">Unlock global learning with our innovative online degree programs</h1>
            </div>
          </div>

        <div className="bg-white rounded-2xl p-5 shadow-xl text-gray-800 max-w-md w-full ml-auto">
  <h3 className="text-blue-900 font-bold text-xl mb-1">
    Connect With Our Experts
  </h3>
  <p className="text-gray-500 text-sm mb-4">
    Get free counselling in just a few steps
  </p>

  <div className="space-y-4">

    {/* Name + Phone */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      
      <div>
        <label className="block text-sm font-semibold mb-1">
        Full Name <span className="text-[#0B1E3A]">*</span>
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => handleFormChange("name", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="text-[#0B1E3A] text-sm font-semibold mb-1">
          Phone Number <span className="text-[#0B1E3A]">*</span>
        </label>
        <div className="flex w-full">
          <span className="inline-flex items-center px-3 border border-r-0 border-gray-200 rounded-l-lg text-sm text-gray-600 bg-gray-50">
            +91
          </span>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => handleFormChange("phone", e.target.value)}
            className="w-full border border-gray-200 rounded-r-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>

    {/* Email + Course */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      
      <div>
        <label className="block text-sm font-semibold mb-1">
          Email Id <span className="text-[#0B1E3A]">*</span>
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => handleFormChange("email", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">
          Select Course <span className="text-[#0B1E3A]">*</span>
        </label>
        <select
          value={form.course}
          onChange={(e) => handleFormChange("course", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 text-gray-600"
        >
          <option value="">Select Course</option>
          {courseOptions.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
    </div>

    {/* State */}
    <div>
      <label className="block text-sm font-semibold mb-1">
       Select your State <span className="text-[#0B1E3A]">*</span>
      </label>
      <select
        value={form.state}
        onChange={(e) => handleFormChange("state", e.target.value)}
        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 text-gray-600"
      >
        <option value="">Select Your State</option>
        {stateOptions.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
    </div>

    {/* Qualification */}
    <div>
      <label className="block text-sm font-semibold mb-1">
        Select Your Highest Qualification <span className="text-[#0B1E3A]">*</span>
      </label>
      <select
        value={form.qualification}
        onChange={(e) => handleFormChange("qualification", e.target.value)}
        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 text-gray-600"
      >
        <option value="">Select Your Highest Qualification</option>
        {qualOptions.map((q) => (
          <option key={q}>{q}</option>
        ))}
      </select>
    </div>

    <SubmitButton submitting={submitting} onClick={handleSubmit} />

    {submitResult && (
      <div className="text-xs mt-2 text-center text-blue-900">
        {submitResult}
      </div>
    )}
  </div>
</div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={s.value} className={`rounded-2xl py-8 px-5 text-center shadow-md ${i===0?"bg-yellow-500 text-white":""} ${i===1?"bg-green-500 text-white":""} ${i===2?"bg-blue-500 text-white":""} ${i===3?"bg-red-300 text-white":""}`}>
              <div className="text-3xl md:text-4xl font-extrabold">{s.value}</div>
              <div className="text-sm font-semibold mt-2 opacity-90">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 text-center mb-2">Program Highlights And Advantages</h2>
          <p className="text-gray-500 text-center text-sm mb-10">Everything you need to succeed in your online learning journey</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1">
                <div className="mb-4 flex justify-center"><img src={h.Images} alt={h.title} className="h-14 w-auto object-contain" /></div>
                <h3 className="font-bold text-blue-900 text-base mb-2">{h.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCREDITATIONS ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-serif text-blue-900">Our Accreditations & Recognitions</h2>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">Endorsements of Academic quality & Excellence</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accreditations.map((a) => (
              <div key={a.text} className="flex items-center gap-4">
                <div className="w-40 h-40 rounded-full bg-white shadow flex items-center justify-center p-3"><img src={a.img} alt="" className="w-full h-full object-contain" /></div>
                <p className="text-gray-600 text-sm leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2">Explore Our Online Degree Programs</h2>
          <p className="text-gray-500 text-sm mb-10">Choose from a wide range of UGC-entitled programs designed for working professionals</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="rounded-2xl overflow-hidden shadow-lg bg-blue-900 text-white hover:scale-105 transition-all flex flex-col">
                <div className="relative">
                  <img src={p.image} alt={p.title} className="w-full h-52 object-cover" />
                  {p.badge && <div className="absolute bottom-0 left-0 bg-yellow-400 text-blue-900 text-xs font-bold px-4 py-1">{p.badge}</div>}
                </div>
                <div className="p-6 relative flex flex-col flex-grow">
                  <div className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-2">{p.tag}</div>
                  <h3 className="font-semibold text-xl leading-snug mb-6">{p.title}</h3>
                  <button onClick={handleOpenEnquiry} className="mt-auto flex items-center gap-2 text-sm font-semibold text-yellow-300 hover:text-yellow-400 transition">More Info <span className="text-lg">→</span></button>
                  <div className="absolute right-6 bottom-6 text-right">
                    <div className="text-2xl font-bold">{p.duration.split(" ")[0]}</div>
                    <div className="text-xs opacity-80">YEARS</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-800 py-14 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Are You Ready To Take The Next Step Towards Your Career?</h2>
          <p className="text-blue-200 mb-6 text-base">Join 1.60 Lac+ learners who are already building their future with Amity Online</p>
          <button onClick={handleOpenEnquiry} className="bg-yellow-400 text-blue-900 font-extrabold px-8 py-4 rounded-full text-lg hover:bg-yellow-300 transition-all shadow-2xl">APPLY NOW →</button>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 text-center mb-2">Hear From Our Students</h2>
          <p className="text-gray-500 text-center text-sm mb-12">Discover real stories of transformation and placement success</p>
          <div className="space-y-10">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-blue-200 rounded-2xl overflow-hidden bg-gray-50 shadow-sm hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row items-stretch">
                  <div className="md:w-1/3 w-full h-64 md:h-auto"><img src={t.image} alt={t.name} className="w-full h-full object-cover" /></div>
                  <div className="md:w-2/3 w-full p-6 md:p-10 flex flex-col justify-center text-center md:text-left">
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base italic">{t.text}</p>
                    <div>
                      <div className="inline-block bg-blue-600 text-white px-4 py-1 text-lg font-semibold rounded">{t.name}</div>
                      <div className="text-gray-500 text-sm mt-2">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((q, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button onClick={() => handleFaqToggle(i)} className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-blue-900 hover:bg-blue-50 transition-all text-sm">
                  <span>{q}</span>
                  <span className={`text-yellow-500 text-xl font-bold transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">Amity University Online provides comprehensive support and guidance for all your queries. Please contact our admissions team for detailed information specific to your situation and requirements.</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AMITY ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 text-center mb-2">Why Say Yes To <span className="text-yellow-500">Amity Online</span></h2>
          <p className="text-gray-500 text-center text-sm mb-10">Award-winning programs. Industry recognized. Career guaranteed.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {whyAmity.map((item) => (
              <div key={item.title} className="border border-gray-100 rounded-2xl p-4 hover:border-yellow-400 hover:shadow-md transition-all group text-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-blue-900 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-100 text-gray-600 text-center text-sm py-10 px-4">
        <p className="max-w-5xl mx-auto leading-relaxed">Disclaimer: We act as a marketing service partner only. Amity University holds full rights to request change or removal of any non-relevant content. Images used are for illustrative purposes and do not directly represent the respective colleges or universities.</p>
        <div className="mt-6 space-x-2">
          <a onClick={handleOpenEnquiry} className="hover:text-blue-900 transition cursor-pointer">Privacy Policy</a>
          <span>&</span>
          <a onClick={handleOpenEnquiry} className="hover:text-blue-900 transition cursor-pointer">terms-conditions</a>
        </div>
        <p className="mt-4 text-gray-500">© 2025 degreeuniversity.online - All Right Reserved.</p>
      </footer>

      {/* ── ENQUIRY MODAL ── */}
     {/* ── ENQUIRY MODAL ── */}
{showEnquiry && (
  <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-blue-900 font-bold text-xl">
          Connect With Our Experts
        </h3>
        <button
          onClick={handleCloseEnquiry}
          className="text-blue-900 font-bold text-lg"
        >
          ×
        </button>
      </div>

      <p className="text-gray-500 text-sm mb-4">
        Get free counselling in just a few steps
      </p>

      <div className="space-y-4">

        {/* Name + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

          <div>
            <label className="block text-sm font-semibold mb-1">
              Full Name <span className="text-[#0B1E3A]">*</span>
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleFormChange("name", e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Phone Number <span className="text-[#0B1E3A]">*</span>
            </label>
            <div className="flex w-full">
              <span className="inline-flex items-center px-3 border border-r-0 border-gray-200 rounded-l-lg text-sm text-gray-600 bg-gray-50">
                +91
              </span>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => handleFormChange("phone", e.target.value)}
                className="w-full border border-gray-200 rounded-r-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

        </div>

        {/* Email + Course */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

          <div>
            <label className="block text-sm font-semibold mb-1">
              Email Id <span className="text-[#0B1E3A]">*</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleFormChange("email", e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Select Course <span className="text-[#0B1E3A]">*</span>
            </label>
            <select
              value={form.course}
              onChange={(e) => handleFormChange("course", e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 text-gray-600"
            >
              <option value="">Select Course</option>
              {courseOptions.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Select your State <span className="text-[#0B1E3A]">*</span>
          </label>
          <select
            value={form.state}
            onChange={(e) => handleFormChange("state", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 text-gray-600"
          >
            <option value="">Select Your State</option>
            {stateOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Qualification */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Select Your Highest Qualification <span className="text-[#0B1E3A]">*</span>
          </label>
          <select
            value={form.qualification}
            onChange={(e) => handleFormChange("qualification", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 text-gray-600"
          >
            <option value="">Select Your Highest Qualification</option>
            {qualOptions.map((q) => (
              <option key={q}>{q}</option>
            ))}
          </select>
        </div>

        <SubmitButton submitting={submitting} onClick={handleSubmit} />

        {submitResult && (
          <div className="text-xs mt-2 text-center text-blue-900">
            {submitResult}
          </div>
        )}

      </div>
    </div>
  </div>
)}
    </div>
  );
}
