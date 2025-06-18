const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6 text-center">
        <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r bg-gradient-to-r from-[#eba504] to-[#eb4e04] flex items-center justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/imgs/f-1.png`}
          alt="Logo"
          className="w-38 h-38 object-contain rounded-full"
        />
      </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Efra&iacute;n P&eacute;rez</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">Junior Developer | Web & Data Science</p>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:efraimbmoxomb@gmail.com?subject=I%20reviewed%20your%20portfolio%20and%20would%20like%20discuss."
            className="px-6 py-3 bg-[#eba504] text-white rounded-lg hover:bg-[#eb4e04] transition-colors inline-block"
          >
            Contact Me
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/files/Efrain Perez - CV.pdf`}
            download
            className="px-6 py-3 border bg-[#eb4e04]/50 text-white rounded-lg hover:bg-[#eb4e04] transition-colors inline-block"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;