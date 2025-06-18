import { useState } from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        "Programming Languages",
        "Full Stack Developer",
        "Documentation and Simple Software Testing",
        "Object-Oriented Programming",
        "Data Structures and Algorithms",
      ]
    },
    {
      title: "Databases & Big Data",
      skills: [
        "SQL and noSQL Database",
        "Big Data",
        "Data Lake",
        "Data Warehouse",
        "Batch and Streaming Data Processing",
        "Data Governance",
        "Data Modeling",
        "Data Management",
      ]
    },
    {
      title: "Cloud Computing",
      skills: [
        "Azure",
        "Cloud Data",
        "Cloud Networking",
        "Cloud Security",
        "Cloud Services",
        "Cloud Storage",
        "Hybrid Cloud",
        "Sales for Cloud",
        "Cloud Architect",
        "Cloud Specialist"
      ]
    },
    {
      title: "Artificial Intelligence",
      skills: [
        "AI",
        "Machine Learning",
        "Generative AI",
        "Prompt Engineering",
        "AI Models",
      ]
    },
    {
      title: "IT Infrastructure",
      skills: [
        "Virtualization",
        "Infrastructure",
        "IT Architects",
        "IT Specialist",
        "IT Operations",
        "IT Security",
        "IT Support",
        "IT Management",
      
      ]
    },
    {
      title: "Operating Systems",
      skills: [
        "Operating Systems",
        "Windows",
        "AIX",
        "Linux",
        "Systems Administrator",
        "Systems Programmer",
        "Security",
        "Servers",
        "Scale-out",
        "Scale-up",
        "Virtualization",

      ]
    },
    {
      title: "Collaboration & Soft Skills",
      skills: [
        "Communication",
        "Collaboration",
        "Co-Creation",
        "Communication Skills",
        "Partnership",
        "Organization",
        "Team Focused",
        "Actionable Insights",
        "Influence",
        "Problem Solving",
        "Critical Thinking",
        "Decision Making",
        "Adaptability",
        "Creativity",
        "Time Management",
        "Conflict Resolution",
        "Negotiation",
        "Leadership",
        "Mentoring",
        "Coaching",
      ]
    },
    {
      title: "Workplace Mindset",
      skills: [
        "Productivity",
        "Workplace Mindset",
        "Workplace Culture",
        "Workplace Environment",
        "Trusted Relationships",
        "Emotional Intelligence",
        "Mental Management",
        "Mindfulness",
        "Relaxation Techniques",
        "Self-Awareness",
        "Visualization Practices",
        "Flexible",
        "Courageous",
        "Outcome Focused",
        "Customer Focused",
        "Results Driven",
        "Continuous Learning",
        "Growth Mindset",
        "Self-Improvement",
        "Self-Development",
        "Self-Reflection",
        "Self-Discipline",
        "Self-Motivation",
      ]
    },
    {
      title: "Agile & Methodologies",
      skills: [
        "Agile",
        "Agile Methodologies",
        "Agile Software Development",
        "Agile Project Management",
        "Agile Scrum",  
        "Agile Kanban",
        "Agile Operations",
        "Iterations",
        "Sprints",
        "Design Thinking",
        "Lean",
        "DevOps",
        "Continuous Integration",
        "Continuous Delivery",        
        "IBM Garage",
        "Methodology",
        "Growth Behaviors",
        "Growth Minded",
        "Growth Mindset",
        
      ]
    },
    {
      title: "Technical Tools",
      skills: [
        "SMIT",
        "Shell",
        "Hadoop",
        "Power",
        "VS Code",
        "Git",
        "GitHub",
        "Visual Studio",
        "Bitbucket",
        "IntelliJ",
        "Power BI",
        "Excel",
      ]
    },
    {
      title: "Data Analyst",
      skills: [
        "Pandas",
        "Data Modeling",   
        "Python",
        "NumPy",
        "Data Visualization",
        "Data Analysis",
        "Data Science",

      ]
    }
  ];


  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-1">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="flex justify-center mb-12 space-x-2">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-2 rounded-full transition-all ${activeCategory === index ? 'bg-[#eba504] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {category.title}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
              <span className="text-center">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

// DONE