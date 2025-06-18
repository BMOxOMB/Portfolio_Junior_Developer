import { useRef, useState } from 'react';

const CertificationsSection = () => {
  const scrollContainerRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState('All');
  
  const certifications = [
    {
      title: "Associate Software Engineer",
      issuer: "Cenfotec University",
      date: "2023",
      image: `${process.env.PUBLIC_URL}/imgs/associate-degree.png`,
      url: "https://www.acreditta.com/credential/744a63f2-5ba3-471d-87ad-fa32b8199e92?utm_source=copy&resource_type=badge&resource=744a63f2-5ba3-471d-87ad-fa32b8199e92"
    },
    {
      title: "AZ-104 Azure Administrator (Workshop)",
      issuer: "Cenfotec University",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/imgs/azure-workshop.png`,
      url: "https://www.acreditta.com/credential/f0bec963-cecd-40e8-a231-27e7dd7fa253?utm_source=copy&resource_type=badge&resource=f0bec963-cecd-40e8-a231-27e7dd7fa253"
    },
    {
      title: "AZ-900: Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2022",
      image: `${process.env.PUBLIC_URL}/imgs/azure-fundamentals.png`,
      url: "https://www.credly.com/badges/feb10225-3e62-4882-952b-fb2f48ad67de/embedded"
    },
    {
      title: "Big Data Foundations",
      issuer: "IBM",
      date: "2023",
      image: `${process.env.PUBLIC_URL}/imgs/BigDataFoundations.png`,
      url: "https://www.credly.com/badges/11542543-24ba-45a5-beb5-b874e0ca2a9f/embedded"
    },
    {
      title: "IBM Agile Explorer",
      issuer: "IBM",
      date: "2023",
      image: `${process.env.PUBLIC_URL}/imgs/IBM-Agile-Explorer.png`,
      url: "https://www.credly.com/badges/9b264ab8-3917-4cd8-b3b4-8fcd320f287a/embedded"
    },
    {
      title: "IBM Growth Behaviors",
      issuer: "IBM",
      date: "2023",
      image: `${process.env.PUBLIC_URL}/imgs/IBM-Growth-Behaviors.png`,
      url: "https://www.credly.com/badges/a42066c3-d8d8-4c2c-89ee-d33feaea31fb/embedded"
    },
    {
      title: "IBM watsonx Essentials",
      issuer: "IBM",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/imgs/IBM Watsonx Essentials.png`,
      url: "https://www.credly.com/badges/16526372-2ba0-4a3d-a060-b73c9395aedb/embedded"
    },
    {
      title: "IBM Virtual Collaborator",
      issuer: "IBM",
      date: "2023",
      image: `${process.env.PUBLIC_URL}//imgs/IBM-Virtual-Collaborator-1.png`,
      url: "https://www.credly.com/badges/dd78a6f9-6a17-49d6-aadf-26a254d37d08/embedded"
    },
    {
      title: "Enterprise Design Thinking Practitioner",
      issuer: "IBM",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/imgs/Enterprise Design Thinking Practitioner.png`,
      url: "https://www.credly.com/badges/ee02b493-186e-494c-a076-9f7adee47df5/embedded"
    },
    {
      title: "IBM Garage Essentials",
      issuer: "IBM",
      date: "2023",
      image: `${process.env.PUBLIC_URL}/imgs/IBM_Garage_Essentials.png`,
      url: "https://www.credly.com/badges/6fe971cf-007d-4026-8792-5ab95e48ff64/embedded"
    },
    {
      title: "Explorations into Mindfulness",
      issuer: "IBM",
      date: "2023",
      image: `${process.env.PUBLIC_URL}/imgs/Explorations_into_Mindfulness.png`,
      url: "https://www.credly.com/badges/d04fb42d-4f6e-4fc0-a356-cd4ce2bc5233/embedded"
    },
    {
      title: "AIX Systems Administrator - Fundamentals",
      issuer: "IBM",
      date: "2023",
      image: `${process.env.PUBLIC_URL}/imgs/Interskill_AIX Systems Administrator_Fundamentals.png`,
      url: "https://www.credly.com/badges/ae924375-2474-439f-90da-d0f14e532d0a/embedded"
    },
    {
      title: "AIX Systems Administrator - Experienced",
      issuer: "IBM",
      date: "2023",
      image: `${process.env.PUBLIC_URL}/imgs/Interskill_AIX Systems Administrator_Experienced.png`,
      url: "https://www.credly.com/badges/5cb794d4-21ee-4bc8-ba3b-2a6be293c435/embedded"
    },
    {
      title: "IBM Power Systems Power10 Foundational",
      issuer: "IBM",
      date: "2023",
      image: `${process.env.PUBLIC_URL}/imgs/IBM Power Systems Power10 Foundational.png`,
      url: "https://www.credly.com/badges/6bc958e2-bb1e-4fe9-9449-564faa737eb0/embedded"
    },
    /*{
      title: "UX/UI Design Principles",
      issuer: "Interaction Design Foundation",
      date: "2023",
      image: "https://via.placeholder.com/200x120?text=UX+UI+Design",
      url: "#"
    },
    {
      title: "UX/UI Design Principles",
      issuer: "Interaction Design Foundation",
      date: "2023",
      image: "https://via.placeholder.com/200x120?text=UX+UI+Design",
      url: "#"
    },*/
  ];

  // Get unique years from certifications
  const years = ['All', ...new Set(certifications.map(cert => cert.date))].sort((a, b) => {
    if (a === 'All') return -1;
    if (b === 'All') return 1;
    return b.localeCompare(a);
  });

  // Filter certifications based on selected year
  const filteredCerts = selectedYear === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.date === selectedYear);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Digital Badges & Certifications</h2>
        
        {/* Year Filter */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  selectedYear === year
                    ? 'bg-[#eba504] shadow-sm text-white'
                    : 'text-gray-600 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                {year} {year !== 'All' && `(${certifications.filter(c => c.date === year).length})`}
              </button>
            ))}
          </div>
        </div>
        
        <div className="relative">
          {filteredCerts.length > 0 ? (
            <>
              <button 
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Scroll left"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide space-x-6 py-4 px-2"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {filteredCerts.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-72 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <div className="h-40 bg-gray-100 flex items-center justify-center p-4">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="h-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{cert.issuer} • {cert.date}</p>
                      <a 
                        href={cert.url}
                        className="inline-block mt-3 px-4 py-2 text-sm bg-[#eba504] text-white rounded-lg hover:bg-[#eb4e04] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Credential
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Scroll right"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          ) : (
            <div className="text-center py-12 text-gray-500">
              No certifications found for the selected year.
            </div>
          )}
        </div>
        
        {filteredCerts.length > 0 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(filteredCerts.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      left: index * 300 * 4,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;

// DONE