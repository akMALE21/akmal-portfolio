const Footer = () => {
    return (
        <footer className="bg-[#1a3c2f] text-white py-6 text-center">
        <p className="text-sm">
            © {new Date().getFullYear()} Akmal Munggaran.
        </p>
        <p className="text-xs mt-1">
            Built with React & TailwindCSS
        </p>
        </footer>
    );
};

export default Footer;
