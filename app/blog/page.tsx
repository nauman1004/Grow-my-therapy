export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[var(--bg)] text-[var(--primary)] px-10 md:px-20 py-20">
            <h1 className="text-5xl md:text-6xl font-semibold mb-10">Blog</h1>

            <p className="text-lg md:text-xl text-[var(--text)] max-w-3xl leading-relaxed">
                Welcome to the blog. Here I’ll share insights on anxiety, trauma
                recovery, burnout, perfectionism, and practical tools for emotional
                well-being.
            </p>

            <div className="mt-16 border-t border-[var(--primary)]/30 pt-10">
                <h2 className="text-3xl font-semibold mb-4">Coming Soon</h2>
                <p className="text-lg text-[var(--text)] leading-relaxed max-w-2xl">
                    New articles are currently being written. Please check back soon for
                    updates.
                </p>
            </div>

            <div className="mt-20 border-t border-[var(--primary)]/30 pt-10 text-sm text-[var(--text)]">
                <p>© 2026 Dr. Maya Reynolds, PsyD.</p>
            </div>
        </main>
    );
}
