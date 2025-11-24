import Dataimage from "./data";
import { listTools, listProyek } from "./data";
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";


function App() {

  return (
    <>
      <div id="home" className="hero grid md:grid-cols-2 items-center pt-40 xl:gap-0 gap-6 grid-cols-1 max-w-7xl mx-auto px-4 md:px-2">
      <div className="animate__animated animate__fadeInUp animate__delay-1s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl"> 
          <img src={Dataimage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
          <q> Don't Look Back </q>
        </div>
        <h1
  className="
    text-5xl font-bold mb-6 leading-tight
    bg-gradient-to-r from-[#ff76e9] via-[#7f6bff] to-[#007bff]
    bg-clip-text text-transparent
  "
>
  <Typewriter
    words={[
      "Hi, I'm Muhammad Faisal",
      "Informatics Engineering Student",
    ]}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1200}
  />
</h1>


<h2 class="role-rotate text-2xl font-semibold mb-4"></h2>


<p className="text-base/loose mb-6 text-white opacity-70">
 A man passionate about crafting responsive web experiences, exploring intelligent systems,
and creating clean, thoughtful visuals where technology, logic, and aesthetics come together to form meaningful digital moments.
</p>

        <div className="flex items-center sm:gap-4 gap-2">
<a
  href="/assets/CV_MuhammadFaisal.pdf"
  download="CV_MuhammadFaisal.pdf"
  className="inline-flex items-center justify-center px-6 py-3 font-medium text-white rounded-full
         bg-gradient-to-r from-[#ff76e9] to-[#007bff]
         transition-all duration-300 ease-out
         hover:shadow-[0_0_15px_2px_rgba(0,123,255,0.8)]
         hover:scale-110"> Download CV <i class="ri-download-line ri-lg ml-2"></i>
</a>

          <a href="#about" 
  className="inline-flex items-center justify-center border border-white px-6 py-3 rounded-full text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:shadow-lg hover:scale-[1.05]">
  Explore Now! 
  <i className="ri-arrow-down-line ri-lg ml-2"></i>
</a>
        </div>
      </div>
<img 
  src={Dataimage.HeroImage} 
  alt="Hero Image" 
  className="
    w-[400px] md:ml-auto 
    animate__animated animate__fadeInUp animate__delay-2s
    rounded-3xl 
    shadow-2xl shadow-[#ff76e980] 
    transition-all duration-700
    hover:scale-105 hover:shadow-[#007bff80] 
    hover:rotate-1
    hover:brightness-110
  " 
  loading="lazy"
/>
      </div>

      {/* About */}
<div
  id="about"
  className="mt-32 py-20"
  data-aos="fade-up"
  data-aos-duration="1200"
  data-aos-once="true"
>
  <h1 className="text-4xl font-bold text-center mb-4">
    About{" "}
    <span className="bg-gradient-to-r from-[#ff76e9] to-[#007bff] bg-clip-text text-transparent">
      Me
    </span>
  </h1>

  <p className="text-center opacity-60 max-w-2xl mx-auto mb-16 text-base leading-relaxed">
    A brief introduction to who I am, what I do, and what keeps me going.
  </p>

  <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto px-6">

    {/* Photo */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <div className="
        relative rounded-3xl overflow-hidden
        border border-white/10 shadow-xl 
        shadow-[#ff76e950] hover:shadow-[#007bff50] 
        transition-all duration-500
      ">
        <img
          src={Dataimage.AboutImage}
          alt="Foto Faisal"
          loading="lazy"
          className="
            w-72 h-72 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px]
            object-cover rounded-3xl
            hover:scale-105 transition-all duration-500
          "
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#ff76e930] to-[#007bff30] opacity-40 mix-blend-soft-light"></div>
      </div>
    </div>

 
    <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">

      <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#ff76e9] to-[#007bff] bg-clip-text text-transparent">
        Muhammad Faisal
      </h2>

      <p className="text-base leading-relaxed text-white/80 hover:text-white transition-all duration-300">
        I’m an Informatics Engineering student focusing on web development, machine learning, and UI/UX design.
        I enjoy building digital solutions that are functional, visually appealing, and impactful.
      </p>

      <p className="text-base leading-relaxed text-white/80 hover:text-white transition-all duration-300">
       In web development, I am used to using <span className="font-semibold text-white">Laravel</span> and 
        <span className="font-semibold text-white"> React</span> as my main tech stack. For data experiments, I use 
        <span className="font-semibold text-white"> Python</span>. I also rely on 
        <span className="font-semibold text-white"> Figma</span> to design modern user interfaces that are intuitive, consistent, and easy to use.
      </p>

      {/* Highlight Box */}
      <div className="bg-zinc-900/40 border border-white/10 p-5 rounded-2xl mt-6 backdrop-blur-md">
        <h3 className="font-semibold text-lg mb-2 text-white">Areas of Expertise</h3>
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          {["Web Development", "Frontend", "Backend", "Machine Learning", "UI/UX Design"].map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-zinc-800 rounded-full border border-white/10 text-sm opacity-80 hover:opacity-100 hover:bg-zinc-700 transition-all"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</div>
<div>

        {/* Tools */}

<div className="tools mt-32">
  <h1
    className=" text-4xl/snug font-extrabold mb-4 bg-gradient-to-r from-[#ff76e9] to-[#007bff] text-transparent text-center bg-clip-text"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    Tools I use to bring ideas to life
  </h1>

  <p
    className="text-base opacity-60 max-w-2xl mx-auto text-center leading-relaxed"
    data-aos="fade-up"
    data-aos-delay="300"
    data-aos-once="true"
  >
    Some of the tools I commonly use in website development, design, and other digital project development.
  </p>

  <div
    className="
      tools-box mt-14 
      grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2
      gap-4 max-w-7xl mx-auto px-2
    "
  >
    {listTools.map((tool) => (
      <div
        key={tool.id}
        className="
          group flex items-center gap-4 
          p-5 rounded-2xl 
          border border-white/10 
          bg-zinc-900/40 backdrop-blur-md
          hover:bg-zinc-900 
          hover:border-[#007bff]/40 
          transition-all duration-500
          shadow-lg hover:shadow-[#007bff40]
        "
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay={tool.dad}
        data-aos-once="true"
      >
        {/* Icon */}
        <div
          className="
            w-16 h-16 rounded-xl 
            bg-zinc-800 
            flex items-center justify-center 
            border border-white/10
            group-hover:scale-110 
            group-hover:bg-zinc-700 
            transition-all duration-500
          "
        >
          <img
            src={tool.gambar}
            alt={tool.nama}
            loading="lazy"
            className="w-10 h-10 object-contain"
          />
        </div>

        {/* Text */}
        <div>
          <h4 className="font-semibold text-lg group-hover:text-white transition">
            {tool.nama}
          </h4>
          <p className="opacity-60 text-sm">{tool.ket}</p>
        </div>
      </div>
    ))}
  </div>
</div>
</div>

      {/* Projects */}
<div className="projects mt-32 py-10 max-w-7xl mx-auto px-4 md:px-2" id="projects">

  {/* Title */}
  <h1
    className="text-4xl/snug font-extrabold mb-3 bg-gradient-to-r from-[#ff76e9] to-[#007bff] text-transparent bg-clip-text"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    My Projects
  </h1>

  {/* Subtitle */}
  <p
    className="text-base opacity-60 max-w-xl leading-relaxed"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="300"
    data-aos-once="true"
  >
   Here are some projects I have worked on in web development, UI design, and other technologies.
  </p>

  {/* Grid */}
  <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">

    {listProyek.map((proyek) => (
      <div
        key={proyek.id}
        className="p-4 bg-zinc-800 border border-zinc-700 rounded-xl hover:border-[#ff76e9] transition-all duration-300 hover:shadow-xl hover:shadow-[#ff76e93a]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay={proyek.dad}
        data-aos-once="true"
      >
        
        {/* Image */}
        <img
          src={proyek.gambar}
          alt="Proyek Image"
          loading="lazy"
          className="rounded-lg mb-4"
        />

        {/* Title */}
        <h1
  className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#ff76e9] to-[#007bff] text-transparent bg-clip-text"
>
  {proyek.nama}
</h1>


        {/* Description */}
        <p className="text-sm opacity-70 leading-relaxed mb-4">
          {proyek.desk}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {proyek.tools.map((tool, index) => (
            <p
              className="py-1 px-3 border border-zinc-500 bg-zinc-700/40 rounded-md text-xs font-semibold"
              key={index}
            >
              {tool}
            </p>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8">
          <a
            href={proyek.link}
            target="_blank"
            className="bg-gradient-to-r from-[#ff76e9] to-[#007bff] py-2 px-4 rounded-lg block text-center font-semibold hover:opacity-90 transition"
          >
            Check it Now!
          </a>
        </div>
      </div>
    ))}

  </div>
</div>
    

    {/* My Experience */}

<div className="experience mt-32 py-10 pt-24 md:pt-10" id="experience">

  <h1 className="text-4xl font-bold text-center mb-4"
  data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true">
    My{" "}
    <span className="bg-gradient-to-r from-[#ff76e9] to-[#007bff] bg-clip-text text-transparent">
      Experience
    </span>
  </h1>

  <p
    className="text-base/loose text-center opacity-50 mb-16"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="200"
    data-aos-once="true"
  >
    My journey in organizing and collaborating in various campus activities.
  </p>

  <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">

    
    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gradient-to-b from-[#ff76e9] to-[#007bff] h-full rounded-full"></div>
    <div className="block md:hidden absolute left-4 sm:left-6 w-[3px] bg-gradient-to-b from-[#ff76e9] to-[#007bff] h-full rounded-full"></div>

    {[
      {
        title: "HIMA ILKOM UNNES",
        role: "Vice Head of Internal Division | January 2025 - Present",
        desc: "Assisting the Head of Internal Division in implementing PSDM programs and talent activities, as well as supporting the development of student potential.",
        img: "/assets/experience/wakoor_internal.jpeg",
        flip: false,
      },
      {
        title: "Computer Science Sport And Art Competition (CSS)",
        role: "Steering Committee | November 2025",
        desc: "Overseeing the competition implementation, providing strategic direction, and ensuring activities run according to standards.",
        img: "/assets/experience/css.jpeg",
        flip: true,
      },
      {
        title: "OSJUR INTERFACE ILKOM 2025",
        role: "Deputy Coordinator | Aug 2025 - Sep 2025",
        desc: "Learning to lead and collaborate in creating a memorable OSJUR experience for new students.",
        img: "/assets/experience/Interface2025.jpeg",
        flip: false,
      },
      {
        title: "Workshop BitCamp",
        role: "Event Committee | May 2025",
        desc: "Organizing the event flow, coordinating technical needs, and ensuring the Machine Learning workshop runs smoothly.",
        img: "/assets/experience/bitcamp.jpeg",
        flip: true,
      },
      {
        title: "Volunteer OSJUR INTERFACE 2024",
        role: "Public Relations | Aug 2024 - Sep 2024",
        desc: "Handling event publicity and communication, and receiving the Most Valuable Volunteer (MVP) award.",
        img: "/assets/experience/interface2024.jpeg",
        flip: false,
      },
    ].map((item, index) => (
      <div
        key={index}
        className={`mb-20 flex flex-col ${
          item.flip ? "md:flex-row-reverse" : "md:flex-row"
        } items-center md:items-start relative`}
      >
        
        <div className="bg-gradient-to-r from-[#ff76e9] to-[#007bff] w-5 h-5 rounded-full absolute left-4 sm:left-6 top-0 transform -translate-x-1/2 md:hidden"></div>
        <div className="hidden md:block bg-gradient-to-r from-[#ff76e9] to-[#007bff] w-5 h-5 rounded-full absolute left-1/2 top-0 transform -translate-x-1/2"></div>

       
        <div
          className={`md:w-1/2 w-full ${
            item.flip
              ? "md:pl-10 md:text-left"
              : "md:pr-10 md:text-right"
          } text-left pl-10 sm:pl-12 md:pl-0`}
        >
          <h2
            className="text-2xl font-bold bg-gradient-to-r from-[#ff76e9] to-[#007bff] text-transparent bg-clip-text"
            data-aos={item.flip ? "fade-left" : "fade-right"}
            data-aos-duration="2000"
            data-aos-once="true"
          >
            {item.title}
          </h2>

          <p
            className="opacity-70 mb-3"
            data-aos={item.flip ? "fade-left" : "fade-right"}
            data-aos-duration="2000"
            data-aos-once="true"
          >
            {item.role}
          </p>

          <p
            className="opacity-80 leading-relaxed"
            data-aos={item.flip ? "fade-left" : "fade-right"}
            data-aos-duration="2000"
            data-aos-once="true"
          >
            {item.desc}
          </p>
        </div>

      
        <div
          className={`md:w-1/2 w-full mt-6 md:mt-0 flex ${
            item.flip ? "md:justify-end" : "md:justify-start"
          } pl-10 sm:pl-12 ${item.flip ? "md:pr-10" : "md:pl-10"}`}
          data-aos={item.flip ? "fade-right" : "fade-left"}
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            className="w-70 h-60 object-cover rounded-lg border-2 
            border-[#007bff] shadow-lg shadow-[#007bff] 
            transition duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
          />
        </div>
      </div>
    ))}
  </div>
</div>

{/* Contact */}
<div className="contact mt-32 p-5" id="contact">

  <div className="text-center mb-14">
    <h1
      className="text-4xl font-extrabold bg-gradient-to-r from-[#ff76e9] to-[#007bff] text-transparent bg-clip-text"
      data-aos="fade-up"
    >
      My Contact
    </h1>
  <p
  className="text-base opacity-70 mt-2 leading-relaxed"
  data-aos="fade-up"
  data-aos-delay="200"
>
  I’m always open to{" "}
  <span class="bg-gradient-to-r from-[#ff76e9] to-[#007bff] text-transparent bg-clip-text font-semibold">
    new opportunities and collaborations
  </span>.
  
  <span class="block mt-2">
    Whether you’re working on something exciting or simply want to connect, feel free to reach out!
  </span>
</p>

  </div>

  {/* WRAPPER */}
  <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">

    {/* CARD GRID EMAIL & WHATSAPP */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">

      {/* EMAIL CARD */}
      <a
        href="https://mail.google.com/mail/?view=cm&to=muhammadfaisal.0514@gmail.com"
        target="_blank"
        className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 
                   shadow-[0_0_50px_rgb(0,0,0,0.3)] hover:shadow-[0_0_80px_rgb(0,123,255,0.25)]
                   transition-all duration-500 flex flex-col items-center gap-4 group"
        data-aos="fade-right"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff76e91a] via-[#ffffff05] to-[#007bff1a]"></div>
        <FaEnvelope className="text-4xl text-blue-400 group-hover:scale-110 transition duration-300 z-10" />
        <h2 className="text-xl font-semibold text-white z-10">Email Me</h2>
        <p className="text-white/80 text-center text-sm z-10">
          muhammadfaisal.0514@gmail.com
        </p>
      </a>

      {/* WHATSAPP CARD */}
      <a
        href="https://wa.me/6289623080473"
        target="_blank"
        className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 
                   shadow-[0_0_50px_rgb(0,0,0,0.3)] hover:shadow-[0_0_80px_rgb(0,123,255,0.25)]
                   transition-all duration-500 flex flex-col items-center gap-4 group"
        data-aos="fade-left"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff76e91a] via-[#ffffff05] to-[#007bff1a]"></div>
        <FaWhatsapp className="text-4xl text-green-400 group-hover:scale-110 transition duration-300 z-10" />
        <h2 className="text-xl font-semibold text-white z-10">WhatsApp</h2>
        <p className="text-white/80 text-center text-sm z-10">
          0896-2308-0473
        </p>
      </a>

    </div>

    {/* SOCIAL MEDIA SECTION */}
    <div className="w-full flex flex-col items-center gap-5">
      <h2 className="text-center text-xl font-semibold text-[#007bff] tracking-wide">
        You can also find me on:
      </h2>

      <div className="flex items-center gap-6">

        {/* GitHub */}
        <a
          href="https://github.com/paisalmen14"
          target="_blank"
          className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-3 rounded-xl 
                     hover:bg-white/10 transition-all duration-300 group"
        >
          <FaGithub className="text-3xl group-hover:scale-110 transition" />
          <span className="text-white/90">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muhammad-faisal-838220195/"
          target="_blank"
          className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-3 rounded-xl 
                     hover:bg-white/10 transition-all duration-300 group"
        >
          <FaLinkedin className="text-3xl text-blue-500 group-hover:scale-110 transition" />
          <span className="text-white/90">LinkedIn</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/muhfaisal1_/"
          target="_blank"
          className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-3 rounded-xl 
                     hover:bg-white/10 transition-all duration-300 group"
        >
          <FaInstagram className="text-3xl text-pink-500 group-hover:scale-110 transition" />
          <span className="text-white/90">Instagram</span>
        </a>

      </div>
    </div>

  </div>
</div>


    </> 
  )
}

export default App
