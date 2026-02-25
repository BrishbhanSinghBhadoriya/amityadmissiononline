"use client";
import { useState } from "react";
import Image from "next/image";

// ── Types ──────────────────────────────────────────────
interface Stat {
  value: string;
  label: string;
  bg: string;
  text: string;
}

interface Highlight {
  Images: string;
  title: string;
  desc: string;
}

interface Program {
  tag: string;
  title: string;
  badge: string;
  bg: string;
}

interface WhyAmityItem {
  icon: string;
  title: string;
  desc: string;
}

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

interface FormField {
  placeholder: string;
  key: keyof FormState;
  type: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  course: string;
  city: string;
}

// ── Data ──
const stats: Stat[] = [
  { value: "30+", label: "Years of Excellence", bg: "bg-yellow-500", text: "text-white" },
  { value: "60+", label: "Programs & Certifications", bg: "bg-green-500", text: "text-white" },
  { value: "1.60 Lac+", label: "Online Learners", bg: "bg-blue-500", text: "text-white" },
  { value: "3.5L+", label: "Global Alumni Network", bg: "bg-red-300", text: "text-white" },
];
const highlights: Highlight[] = [
  {
    Images: "/emagingspecilization.png",
    title: "Emerging Specializations",
    desc: "Industry-relevant specializations aligned with future job markets and emerging technologies.",
  },
  {
    Images: "/learningmodal.png",
    title: "Valued Degree Certificates",
    desc: "UGC-entitled degrees recognized across industries and institutions globally.",
  },
  {
    Images: "/personallearning.png",
    title: "Personalised Learning",
    desc: "Adaptive learning paths personalized to your pace, goals, and learning style.",
  },
  {
    Images: "/realworldproject.png",
    title: "Real World Projects",
    desc: "Hands-on projects, case studies, and live industry challenges to build your portfolio.",
  },
];

const programs: Program[] = [
  { tag: "PG PROGRAM", title: "Master of Business Administration", badge: "🔥 POPULAR", bg: "from-blue-900 to-blue-700" },
  { tag: "UG PROGRAM", title: "Bachelor of Computer Applications", badge: "", bg: "from-slate-800 to-slate-600" },
  { tag: "TOP UG PROGRAM", title: "Bachelor of Business Administration", badge: "⭐ TOP", bg: "from-indigo-900 to-indigo-700" },
  { tag: "PG PROGRAM", title: "Master of Computer Applications", badge: "", bg: "from-blue-800 to-blue-600" },
  { tag: "UG PROGRAM", title: "MBA With Dual Specialization", badge: "", bg: "from-slate-700 to-slate-500" },
  { tag: "PG PROGRAM", title: "BBA + MBA Degree Program", badge: "", bg: "from-indigo-800 to-indigo-600" },
  { tag: "UG PROGRAM", title: "B.Com + MBA Degree Program", badge: "", bg: "from-blue-900 to-blue-700" },
  { tag: "UG PROGRAM", title: "BCA + MCA Degree Program", badge: "", bg: "from-slate-800 to-slate-600" },
  { tag: "UG PROGRAM", title: "MBA with Specialization in Travel and Tourism Management", badge: "", bg: "from-indigo-900 to-indigo-700" },
  { tag: "PG PROGRAM", title: "Master of Commerce (Financial Management)", badge: "", bg: "from-blue-800 to-blue-600" },
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
  { icon: "✅", title: "WASC Accreditation", desc: "Internationally recognized accreditation ensuring global quality standards." },
  { icon: "🏆", title: "NBA Recognition", desc: "National Board of Accreditation recognition for technical programs." },
  { icon: "📊", title: "QS Ranked Online", desc: "Ranked among top online universities globally by QS Rankings." },
  { icon: "🌐", title: "GAA (UK) Accreditation", desc: "Global Accreditation from UK ensuring international program standards." },
  { icon: "📰", title: "Times Higher Employability Rankings", desc: "Consistently ranked high in graduate employability rankings." },
  { icon: "🎪", title: "Pan-India Campus Placement Events", desc: "Regular placement drives across all major cities in India." },
  { icon: "🤖", title: "Amigo: Learning On Mobile", desc: "AI-powered mobile learning assistant available 24/7." },
  { icon: "👨‍🏫", title: "Prof. Ask: Your AI Career Tutor", desc: "Personal AI tutor to guide your academic and career journey." },
  { icon: "🔧", title: "Industry Certifications for Better Employability", desc: "Free industry certifications bundled with every program." },
  { icon: "💼", title: "Internship Discovery Platform", desc: "Exclusive internship portal with 500+ partner companies." },
  { icon: "🚀", title: "AI-Powered Career Discovery Platform", desc: "Smart career matching based on your skills and interests." },
  { icon: "📱", title: "AmicusApp for Campus Life", desc: "Stay connected with campus events, alumni and peers." },
];

const testimonials: Testimonial[] = [
  {
    name: "Abhishek Praffar Abdul Hamed",
    role: "MBA Graduate",
    text: "Amity Online gave me the flexibility to complete my MBA while working full-time. The faculty support and industry connections were exceptional.",
  },
  {
    name: "Himansha Chadhha",
    role: "BCA Graduate",
    text: "The live sessions, recorded lectures and project-based learning made this an amazing experience. I got placed before even completing my degree!",
  },
];

const accreditations = [
  {
    img: "/qs.png",
    text: "India's only Online MBA ranked by QS: Asia Pacific Top 10",
  },
  {
    img: "/UGC.webp",
    text: "First university in India to receive UGC approval for Online Degrees and Learning Platform",
  },
  {
    img: "/WASC.webp",
    text: "The Western Association of Schools and Colleges",
  },
  {
    img: "/wes.png",
    text: "WES accredited in Canada",
  },
];;

const socialLinks: string[] = ["f", "in", "yt", "tw"];

const quickLinks: string[] = ["About Amity", "All Programs", "Admissions", "Student Login", "Contact Us"];

const formFields: FormField[] = [
  { placeholder: "Full Name *", key: "name", type: "text" },
  { placeholder: "Email Address *", key: "email", type: "email" },
  { placeholder: "Phone Number *", key: "phone", type: "tel" },
  { placeholder: "City / State *", key: "city", type: "text" },
];

// ── Component ──────────────────────────────────────────
export default function AmityOnlinePage(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    course: "",
    city: "",
  });
  const [showEnquiry, setShowEnquiry] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitResult, setSubmitResult] = useState<string>("");

  const handleFaqToggle = (index: number): void => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormChange = (key: keyof FormState, value: string): void => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleOpenEnquiry = (): void => {
    setShowEnquiry(true);
    setSubmitResult("");
  };

  const handleCloseEnquiry = (): void => {
    setShowEnquiry(false);
  };

  const handleSubmit = async (): Promise<void> => {
    if (!form.name || !form.email || !form.phone || !form.city) {
      setSubmitResult("Please fill all required fields.");
      return;
    }
    try {
      setSubmitting(true);
      setSubmitResult("");
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error("Failed to submit");
      }
      setSubmitResult("Submitted successfully!");
      setForm({ name: "", email: "", phone: "", course: "", city: "" });
      setShowEnquiry(false);
    } catch {
      setSubmitResult("Submission failed. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-white font-sans"
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      {/* ── NAVBAR ── */}
      <nav className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 rounded shadow-md sticky top-0 z-50 border-b-2 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
           <Image
              src="/amity_logo.png"   
                alt="Amity Online"
                width={140}
                height={40}
                className="object-contain"
                priority
                />
              </div>
          <button onClick={handleOpenEnquiry} className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-5 py-2 rounded-full text-sm transition-all shadow-md hover:shadow-lg">
            Enquire Now →
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
     <section className="relative bg-white overflow-hidden">

  {/* Frame Image Background */}
  <img
    src="/amity_frame.png"
    alt="Frame"
    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
  />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center z-10">

    {/* Left */}
    <div className="max-w-lg">

  <div className="inline-block bg-yellow-400 text-blue-900 text-[10px] font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
    🌍 Global Online Learning
  </div>

  <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-snug mb-3 text-blue-900">
    Unlock Global Learning With Our{" "}
    <span className="text-yellow-500">Innovative Online</span>{" "}
    Degree Programs
  </h1>

  <p className="text-blue-900 text-sm md:text-base mb-5 leading-relaxed">
    UGC-entitled degrees from India&apos;s top-ranked university. Learn at your pace, anywhere in the world.
  </p>

  <div className="flex flex-wrap gap-3">
    <button className="bg-blue-900 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-blue-800 transition-all shadow-md text-sm">
      Explore Programs
    </button>

    <button
      onClick={handleOpenEnquiry}
      className="border-2 border-blue-900 text-blue-900 px-5 py-2.5 rounded-full hover:bg-blue-900 hover:text-white transition-all font-semibold text-sm"
    >
      Talk to an Expert
    </button>
  </div>

</div>

    {/* Right - Connect Form */}
    <div className="bg-white rounded-2xl p-5 shadow-xl text-gray-800 max-w-md w-full ml-auto">
      <h3 className="text-blue-900 font-bold text-xl mb-1">
        Connect With Our Experts
      </h3>
      <p className="text-gray-500 text-sm mb-4">
        Get free counselling in just a few steps
      </p>

      <div className="space-y-3">
        {formFields.map((f) => (
          <input
            key={f.key}
            type={f.type}
            placeholder={f.placeholder}
            value={form[f.key]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormChange(f.key, e.target.value)
            }
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        ))}

        <select
          value={form.course}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleFormChange("course", e.target.value)
          }
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 text-gray-500"
        >
          <option value="">Select Course *</option>
          <option>MBA</option>
          <option>BCA</option>
          <option>BBA</option>
          <option>MCA</option>
          <option>B.Com</option>
          <option>M.Com</option>
        </select>

        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-all text-sm shadow-md disabled:opacity-60"
        >
          APPLY NOW →
        </button>

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

    {stats.map((s: any, i: number) => (
      <div
        key={s.value}
        className={`
          rounded-2xl py-8 px-5 text-center shadow-md
          ${i === 0 ? "bg-yellow-500 text-white" : ""}
          ${i === 1 ? "bg-green-500 text-white" : ""}
          ${i === 2 ? "bg-blue-500 text-white" : ""}
          ${i === 3 ? "bg-red-300 text-white" : ""}
        `}
      >
        <div className="text-3xl md:text-4xl font-extrabold">
          {s.value}
        </div>
        <div className="text-sm font-semibold mt-2 opacity-90">
          {s.label}
        </div>
      </div>
    ))}

  </div>
</section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 text-center mb-2">
            Program Highlights And Advantages
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10">
            Everything you need to succeed in your online learning journey
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h: Highlight) => (
              <div
                key={h.title}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1"
              >
                <div className="mb-4 flex justify-center">
               <img
                 src={h.Images}
                 alt={h.title}
                 className="h-14 w-auto object-contain"
                 />
              </div>
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
      <h2 className="text-2xl md:text-3xl font-serif text-blue-900">
        Our Accreditations & Recognitions
      </h2>
      <p className="text-gray-500 text-sm mt-2 md:mt-0">
        Endorsements of Academic quality & Excellence
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {accreditations.map((a) => (
        <div key={a.text} className="flex items-center gap-4">

          {/* Circle Image */}
          <div className="w-40 h-40 rounded-full bg-white shadow flex items-center justify-center p-3">
            <img src={a.img} alt="" className="w-full h-full object-contain" />
          </div>

          {/* Text */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {a.text}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>
      {/* ── PROGRAMS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2">
            Explore Our Online Degree Programs
          </h2>
          <p className="text-gray-500 text-sm mb-10">
            Choose from a wide range of UGC-entitled programs designed for working professionals
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((p: Program) => (
              <div
                key={p.title}
                className={`bg-gradient-to-br ${p.bg} rounded-2xl p-6 text-white relative overflow-hidden hover:scale-105 transition-all cursor-pointer shadow-lg`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-8 translate-x-8" />
                {p.badge && (
                  <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-0.5 rounded-full mb-3">
                    {p.badge}
                  </span>
                )}
                <div className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-2">{p.tag}</div>
                <h3 className="font-bold text-lg leading-tight mb-4">{p.title}</h3>
                <button onClick={handleOpenEnquiry} className="bg-white text-blue-900 text-xs font-bold px-4 py-2 rounded-full hover:bg-yellow-400 transition-all">
                  Know More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-800 py-14 text-white text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            Are You Ready To Take The Next Step Towards Your Career?
          </h2>
          <p className="text-blue-200 mb-6 text-base">
            Join 1.60 Lac+ learners who are already building their future with Amity Online
          </p>
          <button onClick={handleOpenEnquiry} className="bg-yellow-400 text-blue-900 font-extrabold px-8 py-4 rounded-full text-lg hover:bg-yellow-300 transition-all shadow-2xl">
            APPLY NOW →
          </button>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 text-center mb-2">
            Hear From Our Students
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10">
            Discover real stories of transformation and placement success
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t: Testimonial) => (
              <div
                key={t.name}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200"
              >
                <div className="flex text-yellow-400 text-xl mb-3">{"⭐".repeat(5)}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-blue-900 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((q: string, i: number) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-blue-900 hover:bg-blue-50 transition-all text-sm"
                >
                  <span>{q}</span>
                  <span
                    className={`text-yellow-500 text-xl font-bold transition-transform ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">
                    Amity University Online provides comprehensive support and guidance for all your queries.
                    Please contact our admissions team for detailed information specific to your situation and
                    requirements.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AMITY ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 text-center mb-2">
            Why Say Yes To <span className="text-yellow-500">Amity Online</span>
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10">
            Award-winning programs. Industry recognized. Career guaranteed.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {whyAmity.map((item: WhyAmityItem) => (
              <div
                key={item.title}
                className="border border-gray-100 rounded-2xl p-4 hover:border-yellow-400 hover:shadow-md transition-all group text-center"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-blue-900 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-blue-950 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
             <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
           <Image
              src="/amity_logo.png"   
                alt="Amity Online"
                width={140}
                height={40}
                className="object-contain"
                priority
                />
              </div>
          <button onClick={handleOpenEnquiry} className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-5 py-2 rounded-full text-sm transition-all shadow-md hover:shadow-lg">
            Enquire Now →
          </button>
        </div>
            <p className="text-blue-300 text-sm leading-relaxed">
              India&apos;s leading online university offering UGC-entitled degrees with global recognition and
              100% placement support.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-yellow-400 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-blue-300 text-sm">
              {quickLinks.map((link: string) => (
                <li key={link} className="hover:text-white cursor-pointer transition-colors">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-yellow-400 mb-3">Contact Us</h4>
            <div className="text-blue-300 text-sm space-y-2">
              <p>📞 7042646766</p>
              <p>📧 degreeuniversity.online </p>
              <p>🌐 degreeuniversity.online </p>
              <div className="flex gap-3 mt-4">
                {socialLinks.map((s: string) => (
                  <div
                    key={s}
                    className="w-8 h-8 bg-blue-800 hover:bg-yellow-400 hover:text-blue-900 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-all"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-5 text-center text-blue-400 text-xs">
          © 2024 Amity University Online. All Rights Reserved. | Privacy Policy | Terms &amp; Conditions
        </div>
      </footer>
      {/* ── ENQUIRY MODAL ── */}
      {showEnquiry && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-blue-900 font-bold text-xl">Enquiry Form</h3>
              <button onClick={handleCloseEnquiry} className="text-blue-900 font-bold text-lg">×</button>
            </div>
            <div className="space-y-3">
              {formFields.map((f) => (
                <input
                  key={f.key}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleFormChange(f.key, e.target.value)
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              ))}
              <select
                value={form.course}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  handleFormChange("course", e.target.value)
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 text-gray-500"
              >
                <option value="">Select Course *</option>
                <option>MBA</option>
                <option>BCA</option>
                <option>BBA</option>
                <option>MCA</option>
                <option>B.Com</option>
                <option>M.Com</option>
              </select>
              <button onClick={handleSubmit} disabled={submitting} className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-all text-sm shadow-md disabled:opacity-60">
                Submit →
              </button>
              {submitResult && (
                <div className="text-xs mt-2 text-center text-blue-900">{submitResult}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
