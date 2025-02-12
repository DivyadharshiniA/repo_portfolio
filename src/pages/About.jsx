import React from "react";

export default function About() {
  const headingColor = "#2c3e50"; // Replace this with your navbar color if different

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-4" style={{ color: headingColor }}><br/> About Me</h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Hi, I'm <span className="font-bold">Divyadharshini</span>, I’m a Computer Science student and a UI/UX Designer Intern at Purezza Technologies. 
          Passionate about building impactful solutions through software engineering, I thrive in collaborative environments while continuously learning and embracing new challenges. 
          I’ve worked on projects like a News Aggregator, Resale App, and Earth AR, specializing in React, front-end development, and UI/UX.
        </p>

        <h2 className="text-3xl font-semibold mb-4" style={{ color: headingColor }}>Internship</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Purezza Technologies</strong> — UI/UX Designer Intern (Dec 2024 - Present)
          </li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4" style={{ color: headingColor }}>Education</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Kongu Engineering College</strong> — Bachelor of Engineering in Computer Science and Design (2022 - 2026) | CGPA: 8.16
          </li>
          <li>
            <strong>Kongu Vellalar Matriculation Higher Secondary School</strong> — Higher Secondary Certificate (2021 - 2022) | 93.16%
          </li>
          <li>
            <strong>Roots Matriculation Higher Secondary School</strong> — Secondary School Leaving Certificate (2019 - 2020) | 92.2%
          </li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4" style={{ color: headingColor }}>Technical Skills</h2>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Programming Languages:</strong> C, C#, Java, Python</li>
          <li><strong>Web Development:</strong> HTML, CSS, JavaScript</li>
          <li><strong>Libraries:</strong> React.js</li>
          <li><strong>Game Engine:</strong> Unity</li>
          <li><strong>3D Tool:</strong> Blender</li>
          <li><strong>Graphic Design:</strong> Adobe Illustrator, Framer, Canva</li>
          <li><strong>Databases:</strong> MySQL, MongoDB</li>
          <li><strong>Wireframing & Prototyping:</strong> Figma</li>
          <li><strong>UX/UI Design:</strong> Figma</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4" style={{ color: headingColor }}>Soft Skills</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Problem-Solving</li>
          <li>Communication & Collaboration</li>
          <li>Adaptability</li>
          <li>Creativity & Innovation</li>
          <li>Time Management</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4" style={{ color: headingColor }}>Achievements</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Secured 3rd place in the Digital Delight competition at Kongu Engineering College.</li>
          <li>Presented a paper on "Virtual Zoo" at Coimbatore Institute of Technology and Sri Krishna College of Engineering and Technology, Coimbatore.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4" style={{ color: headingColor }}>Area of Interest</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Data Structures</li>
          <li>OOPs</li>
          <li>UI/UX</li>
          <li>AR/VR</li>
        </ul>
      </div>

    </div>
  );
}
