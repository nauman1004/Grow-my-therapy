"use client";

import { useState } from "react";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [openBackground, setOpenBackground] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--primary)]">
      {/* Navbar */}
      <header className="w-full px-10 md:px-20 py-10 flex items-center justify-between">
        <h1 className="text-xl font-medium tracking-wide">
          Dr. Maya Reynolds
        </h1>

        <nav className="flex items-center gap-12 text-lg">
          <a href="/blog" className="hover:underline underline-offset-4">
            Blog
          </a>
          <a href="/contact" className="hover:underline underline-offset-4">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full px-10 md:px-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-[320px] h-[420px] sm:w-[420px] sm:h-[520px] md:w-[520px] md:h-[640px] overflow-hidden rounded-t-full rounded-b-md">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
                alt="Meditation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05]">
              Anxiety & <br /> Trauma Therapy <br /> in Santa Monica, CA
            </h2>

            <p className="mt-10 text-lg md:text-xl max-w-xl leading-relaxed text-[var(--text)]">
              Feeling overwhelmed, stuck in overthinking, or emotionally drained
              can be exhausting. Dr. Maya Reynolds offers a grounded, supportive
              space to help you work through anxiety, trauma, burnout, and
              stress—at your own pace.
            </p>

            <button className="mt-12 border border-[var(--primary)] px-8 py-3 text-sm md:text-base tracking-wide uppercase hover:bg-[var(--primary)] hover:text-[var(--bg)] transition">
              Schedule a Free Consultation →
            </button>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Side */}
          <div className="flex flex-col gap-14 px-10 md:px-20 py-20 border-b border-[var(--primary)]/30 lg:border-b-0 lg:border-r">
            <div>
              <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
                A calm space <br /> to reconnect.
              </h2>

              <p className="mt-12 text-lg md:text-xl leading-relaxed max-w-xl text-[var(--text)]">
                Many people I work with appear “fine” on the outside, but inside
                they feel anxious, exhausted, or emotionally stuck.
              </p>

              <p className="mt-8 text-lg md:text-xl leading-relaxed max-w-xl text-[var(--text)]">
                Therapy can be a place to slow down, understand what’s happening,
                and build tools that create long-term change.
              </p>
            </div>

            <div className="border-t border-[var(--primary)]/30 pt-10">
              <a
                href="#"
                className="uppercase tracking-wide text-sm font-medium hover:underline underline-offset-4"
              >
                Get in touch →
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full h-[500px] lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1400&q=80"
              alt="Calm space"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Specialties */}
      <section className="w-full px-10 md:px-20 py-28">
        <h2 className="text-5xl md:text-6xl font-semibold text-center mb-20">
          Specialties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border border-[var(--primary)]/30 bg-[var(--card)] p-10 flex flex-col justify-between min-h-[650px]">
            <div>
              <h3 className="text-2xl font-semibold">Anxiety & Overthinking</h3>
              <p className="mt-8 text-lg leading-relaxed text-[var(--text)]">
                Learn to manage worry, racing thoughts, and tension in the body
                through CBT, mindfulness, and grounding strategies.
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80"
                  alt="Anxiety"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-[var(--primary)]/30 bg-[var(--card)] p-10 flex flex-col justify-between min-h-[650px]">
            <div>
              <h3 className="text-2xl font-semibold">Trauma & EMDR</h3>
              <p className="mt-8 text-lg leading-relaxed text-[var(--text)]">
                Support for both single-incident trauma and long-term patterns,
                using EMDR and body-based healing approaches.
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
                  alt="Trauma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-[var(--primary)]/30 bg-[var(--card)] p-10 flex flex-col justify-between min-h-[650px]">
            <div>
              <h3 className="text-2xl font-semibold">Burnout & Perfectionism</h3>
              <p className="mt-8 text-lg leading-relaxed text-[var(--text)]">
                Therapy for high-achieving adults who feel exhausted, stuck,
                disconnected, or under constant internal pressure.
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=900&q=80"
                  alt="Burnout"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[650px]">
          {/* Left Image */}
          <div className="w-full h-[450px] lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=1400&q=80"
              alt="Support"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="bg-[#d9d4cc] flex flex-col justify-between px-12 md:px-20 py-20">
            <div>
              <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
                You don’t have to do this <br />
                all <span className="italic font-normal">alone.</span>
              </h2>

              <p className="mt-10 text-lg md:text-xl text-[var(--text)]">
                If you are facing any of these, there is support available:
              </p>

              <ul className="mt-10 space-y-4 text-lg md:text-xl list-disc pl-8 text-[var(--text)]">
                <li>Constant worry or panic</li>
                <li>Difficulty sleeping or relaxing</li>
                <li>Feeling emotionally overwhelmed</li>
                <li>Burnout and exhaustion</li>
                <li>Past experiences affecting your present</li>
              </ul>

              <p className="mt-14 text-lg md:text-xl leading-relaxed max-w-xl text-[var(--text)]">
                Together, we’ll work toward insight, emotional regulation, and a
                stronger sense of safety in your daily life.
              </p>
            </div>

            <div className="pt-10 border-t border-[var(--primary)]/30 text-center">
              <a
                href="#"
                className="uppercase tracking-wide text-sm font-medium hover:underline underline-offset-4"
              >
                Work with me →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: About */}
      <section className="w-full px-10 md:px-20 py-28 bg-[var(--bg)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-6xl font-semibold leading-tight">
              Hi, I’m Dr. Maya Reynolds.
            </h2>

            <p className="mt-10 text-lg md:text-xl leading-relaxed max-w-xl text-[var(--text)]">
              I’m a licensed clinical psychologist based in Santa Monica,
              California. My approach is warm, collaborative, and grounded. I
              integrate CBT, EMDR, mindfulness-based practices, and body-based
              techniques to support healing and long-term resilience.
            </p>

            <button className="mt-14 border border-[var(--primary)] px-10 py-4 text-sm tracking-wide uppercase hover:bg-[var(--primary)] hover:text-[var(--bg)] transition">
              Let’s connect →
            </button>
          </div>

          {/* Right Images */}
          {/* Right Images */}
          {/* Right Images */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-[320px] h-[420px] sm:w-[420px] sm:h-[520px] md:w-[520px] md:h-[650px] overflow-hidden rounded-t-full rounded-b-md">
              <img
                src="/maya.png"
                alt="Dr. Maya Reynolds"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute bottom-6 right-2 sm:bottom-8 sm:right-6 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full overflow-hidden border border-[var(--bg)] bg-white shadow-md">


              <img
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80"
                alt="Plant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>


        </div>
      </section>

      {/* Our Office Section */}
      <section className="w-full px-10 md:px-20 py-28 bg-white">
        <h2 className="text-6xl font-semibold text-center">Our Office</h2>

        <p className="mt-10 text-lg md:text-xl text-center max-w-4xl mx-auto text-[var(--text)] leading-relaxed">
          Sessions are available in-person from my Santa Monica office, designed
          to feel calm, private, and grounding. The space is filled with natural
          light and offers a comfortable, uncluttered environment so you can
          arrive and exhale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <img
            src="/office1.jpeg"
            alt="Therapy Office"
            className="w-full h-[350px] object-cover rounded-lg"
          />
          <img
            src="/office2.jpeg"
            alt="Counseling Space"
            className="w-full h-[350px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-10 md:px-20 py-28 bg-[var(--bg)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-[380px] h-[520px] overflow-hidden rounded-t-full rounded-b-md">
              <img
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=80"
                alt="FAQ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right FAQ */}
          <div>
            <h2 className="text-6xl font-semibold mb-10">FAQs</h2>

            {[
              {
                q: "Do you offer telehealth sessions?",
                a: "Yes. I offer secure telehealth sessions for clients located in California.",
              },
              {
                q: "What issues do you specialize in?",
                a: "I specialize in anxiety, panic, trauma, burnout, perfectionism, and chronic stress.",
              },
              {
                q: "Do you currently have openings?",
                a: "Yes. I am currently accepting new adult clients for both in-person and online therapy.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border-t border-[var(--primary)]/30 py-6"
              >
                <button
                  className="w-full flex items-center justify-between text-2xl font-medium"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                >
                  {item.q}
                  <span className="text-3xl">{openFAQ === idx ? "−" : "+"}</span>
                </button>

                {openFAQ === idx && (
                  <p className="mt-4 text-lg text-[var(--text)] leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="w-full px-10 md:px-20 py-28 bg-[var(--bg)]">
        <h2 className="text-6xl font-semibold text-center mb-16">
          My Professional Background
        </h2>

        <div className="max-w-4xl mx-auto">
          {[
            {
              q: "Education",
              a: "PsyD in Clinical Psychology with specialized training in evidence-based trauma therapy.",
            },
            {
              q: "Licensure",
              a: "Licensed Clinical Psychologist in California.",
            },
            {
              q: "Certifications",
              a: "Advanced training in EMDR, CBT, mindfulness-based approaches, and body-based trauma work.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border-t border-[var(--primary)]/30 py-6"
            >
              <button
                className="w-full flex items-center justify-between text-2xl font-medium"
                onClick={() =>
                  setOpenBackground(openBackground === idx ? null : idx)
                }
              >
                {item.q}
                <span className="text-3xl">
                  {openBackground === idx ? "−" : "+"}
                </span>
              </button>

              {openBackground === idx && (
                <p className="mt-4 text-lg text-[var(--text)] leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[var(--accent)] text-white py-32 px-10 md:px-20 text-center">
        <h2 className="text-6xl font-semibold">Get started today.</h2>

        <p className="mt-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Ready to take the first step toward a calmer, healthier you? Reach out
          to book your first session. I look forward to supporting your
          therapeutic journey.
        </p>

        <button className="mt-16 border border-white px-12 py-4 text-sm tracking-wide uppercase hover:bg-white hover:text-[var(--accent)] transition">
          Get in touch →
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[var(--bg)] px-10 md:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-lg">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Dr. Maya Reynolds</h3>
            <p>Santa Monica, CA</p>
            <p className="mt-6 underline underline-offset-4">
              hello@mayatherapy.com
            </p>
            <p className="mt-2 underline underline-offset-4">(555) 555-5555</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Hours</h3>
            <p>Monday – Friday</p>
            <p>10am – 6pm</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Find</h3>
            <p className="underline underline-offset-4">Home</p>
            <p className="underline underline-offset-4 mt-2">Contact</p>
            <p className="underline underline-offset-4 mt-2">Blog</p>
          </div>
        </div>

        <div className="mt-20 border-t border-[var(--primary)]/30 pt-10 text-center text-sm text-[var(--text)]">
          <p>All Rights Reserved © 2026 Dr. Maya Reynolds, PsyD.</p>
        </div>
      </footer>
    </main>
  );
}
