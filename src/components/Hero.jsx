const Hero = () => {
    return (
        <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center bg-[#1a3c2f] text-white px-4"
        >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Akmal Munggaran
        </h1>
        <h2 className="text-xl md:text-2xl text-[#6ee7b7] mb-4">
            Data Analyst | Data Engineer | Data Scientist
        </h2>
        <p className="max-w-xl text-lg mb-6">
            A Data Enthusiast with a background in Information Systems, passionate about turning complex problems into impactful analytics and engineering solutions.
        </p>

        {/* Tombol */}
        <div className="flex flex-col sm:flex-row gap-4">
        <a
            href="https://wa.me/6285156985695"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6ee7b7] text-[#1a3c2f] font-semibold px-6 py-3 rounded-lg hover:bg-[#34d399] transition text-center w-40"
        >
            Let's Talk
        </a>
        <a
            href="/cv.pdf"
            target="_blank"
            className="border border-[#6ee7b7] text-[#6ee7b7] px-6 py-3 rounded-lg hover:bg-[#6ee7b7]/10 transition font-semibold text-center w-40"
        >
            Download CV
        </a>
        </div>
        </section>
    );
};

export default Hero;
