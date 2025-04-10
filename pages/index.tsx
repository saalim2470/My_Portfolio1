import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Saalim Shaikh | Portfolio</title>
        <meta name="description" content="ReactJS Developer Portfolio for Saalim Shaikh" />
      </Head>
      <main className="flex flex-col min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-slate-800 text-rose-100 py-20">
        {/* <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20"> */}
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  Hi, I'm <span className="text-rose-400">Saalim Shaikh</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl mb-6">
                  ReactJS Developer
                </h2>
                <p className="text-lg mb-8">
                  Passionate about building scalable web applications using ReactJS and the MERN stack, with a strong focus on performance, user experience, and modern web technologies. Constantly exploring new tools and best practices to enhance development efficiency and scalability.                </p>
                <div className="flex space-x-4">
                  <Link
                    href="/contact"
                    className="bg-rose-500 hover:bg-rose-600 text-slate-300 px-6 py-3 rounded-md font-semibold transition duration-300"
                  >
                    Contact Me
                  </Link>
                  {/* <Link
                    href="/projects"
                    className="border-2 border-rose-100 hover:bg-rose-100 hover:text-slate-800 text-rose-100 px-6 py-3 rounded-md font-semibold transition duration-300"
                  >
                    View Projects
                  </Link> */}
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="w-64 h-64 mx-auto overflow-hidden">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
                    alt="Saalim Shaikh"
                    width={256}
                    height={256}
                    className="object-contain w-full h-full"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <p className="text-lg text-gray-700 mb-6">
                  I am a ReactJS developer with experience in frontend and backend technologies. I have completed internships at IBM SkillBuild, Codsoft, and Infolabz, building applications using ReactJS, MERN stack, and AI solutions.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Recently, I developed an Expense Tracker using ReactJS and Firebase for real-time financial management.
                </p>
                <Link
                  href="/about"
                  className="text-rose-600 font-semibold hover:text-rose-800 transition duration-300"
                >
                  Learn more about me →
                </Link>
              </div>
              <div className="md:w-1/2 md:pl-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-100 p-4 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Frontend</h3>
                    <p>ReactJS, Next.js, Bootstrap, TailwindCSS</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Backend</h3>
                    <p>Node.js, Express, MongoDB, Firebase</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Projects</h3>
                    <p>Expense Tracker, Blogging Platform, Task Management Tool & more</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Tools</h3>
                    <p>Git, GitHub, REST APIs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
