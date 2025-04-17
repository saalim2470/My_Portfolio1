import Head from 'next/head';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'PHP', 'Express.js'] },
    { category: 'Database', items: ['MySQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'REST APIs'] },
  ];

  const experience = [
    {
      title: 'React Internship',
      company: 'Masstor',
      period: 'August 2022 - Oct 2022',
      description: 'Aspiring React Developer eager to learn and contribute to real-world projects using modern web technologies.',
    },
    {
      title: 'React Native Developer',
      company: 'Masstor',
      period: 'November 2022 - present',
      description: 'Currently working on an innovative Job Board project for Masstor.',
    },

  ];

  const education = [
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Veer Narmad South Gujarat University,Surat',
      year: '2021',
      // year: '2025 - Present',
      cgpa: '7.30/10',
    },
  ];

  return (
    <>
      <Head>
        <title>About Me | Saalim Shaikh Portfolio</title>
        <meta name="description" content="Learn more about Saalim Shaikh, a ReactJS developer with experience in modern web technologies." />
      </Head>
      <main className="flex flex-col min-h-screen pt-20">
        <section className="py-20 bg-slate-800 text-rose-100">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl">Passionate React developer focused on crafting scalable, high-performance web apps with great user experience.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold mb-6">My Story</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I am a dedicated ReactJS developer with hands-on experience in both frontend and backend technologies. My journey includes impactful internships at Masstor, where I contributed to real-world projects using React Native, and even AI-driven solutions.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  During working at Masstor, I played a key role in developing modules for principals, teachers, and students, focusing on scalable and user-friendly design. I've also worked on personal and team projects like a Social Media App, a Task Management App, built using ReactJ Native and Firebase for real-time expense handling.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  I’m passionate about building modern web applications that offer seamless user experiences and are built for performance and scalability.
                </p>
                <p className="text-lg text-gray-700">
                  Beyond coding, I enjoy sketching, traveling, and staying engaged with the tech community through technical workshops and continuous learning.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Education & Experience</h2>
                {experience.map((exp, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-bold mb-2">{exp.title} at {exp.company}</h3>
                    <p className="text-gray-600 italic mb-2">{exp.period}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                ))}
                {education.map((edu, index) => (
                  <div key={index} className="mt-6">
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-gray-600 italic mb-2">{edu.institution} ({edu.year})</p>
                    <p className="text-gray-700">CGPA: {edu.cgpa}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
