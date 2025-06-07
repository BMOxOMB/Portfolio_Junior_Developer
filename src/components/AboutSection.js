import { useState } from 'react';

const AboutSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  const cards = [
    {
      title: "Who I Am?",
      content: "I am a passionate Junior Developer with a solid academic foundation and hands-on experience in programming, statistical analysis, and data modeling. I am eager to apply my skills in a professional environment and contribute to innovative projects.",
      image: null
    },
    {
      title: "Education",
      content: "Currently pursuing a Bachelor's degree in Computer Science at Cenfotec University. Completed courses in Web Development, Agile Methodologies, Data Structures, and Algorithms. I am also taking a specialization in Data Science in Alura LATAM.",
      image: null
    },
    {
      title: "Experience",
      content: "My developer experience is primarily academic, where I have developed projects in web development and data analysis. I have worked on personal projects using multiple programming languages, applying my knowledge in real-world scenarios.",
      image: null
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              onClick={() => setActiveCard(index)}
              className={`p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 ${activeCard === index ? 'bg-[#eba504] text-white scale-105' : 'bg-white hover:shadow-lg'}`}
            >
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// DONE