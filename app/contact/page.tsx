"use client";

import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <main className="min-h-screen bg-[var(--bg)] text-[var(--primary)] px-10 md:px-20 py-20">
            <h1 className="text-5xl md:text-6xl font-semibold mb-10">Contact</h1>

            <p className="text-lg md:text-xl text-[var(--text)] max-w-3xl leading-relaxed">
                If you’re interested in working together, feel free to reach out. I
                offer in-person therapy in Santa Monica, CA, as well as secure telehealth
                sessions for clients across California.
            </p>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Contact Form */}
                <div>
                    <h2 className="text-3xl font-semibold mb-6">Send a Message</h2>

                    {submitted ? (
                        <p className="text-lg text-[var(--text)] leading-relaxed">
                            Thank you for reaching out. Your message has been received and I
                            will respond within 1–2 business days.
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm uppercase tracking-wide mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full border border-[var(--primary)]/30 bg-white px-4 py-3 text-lg outline-none focus:border-[var(--primary)]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm uppercase tracking-wide mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full border border-[var(--primary)]/30 bg-white px-4 py-3 text-lg outline-none focus:border-[var(--primary)]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm uppercase tracking-wide mb-2">
                                    Message
                                </label>
                                <textarea
                                    required
                                    rows={6}
                                    className="w-full border border-[var(--primary)]/30 bg-white px-4 py-3 text-lg outline-none focus:border-[var(--primary)]"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="border border-[var(--primary)] px-10 py-4 text-sm tracking-wide uppercase hover:bg-[var(--primary)] hover:text-[var(--bg)] transition"
                            >
                                Send Message →
                            </button>
                        </form>
                    )}
                </div>

                {/* Office Info */}
                <div>
                    <h2 className="text-3xl font-semibold mb-6">Office Location</h2>

                    <p className="text-lg text-[var(--text)] leading-relaxed">
                        <span className="font-medium text-[var(--primary)]">
                            Santa Monica, CA
                        </span>
                        <br />
                        In-person sessions available by appointment.
                    </p>

                    <div className="mt-10 border-t border-[var(--primary)]/30 pt-8">
                        <p className="text-lg text-[var(--text)]">
                            Email:{" "}
                            <span className="underline underline-offset-4">
                                hello@mayatherapy.com
                            </span>
                        </p>

                        <p className="mt-3 text-lg text-[var(--text)]">
                            Phone:{" "}
                            <span className="underline underline-offset-4">
                                (555) 555-5555
                            </span>
                        </p>

                        <p className="mt-8 text-lg text-[var(--text)] leading-relaxed">
                            Office sessions are held in a quiet, private space designed to
                            feel calm, grounded, and supportive.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20 border-t border-[var(--primary)]/30 pt-10 text-sm text-[var(--text)] text-center">
                <p>© 2026 Dr. Maya Reynolds, PsyD.</p>
            </div>
        </main>
    );
}
