
import  { useState } from "react";
interface feature{
  title : string,
  desc : string,
  img : string
}
interface testimonial {
  name :string,
  score : number,
  quote : string,
  img : string,
}
type universitylogo = {
  name : string,
  logo : string,
}

export default function App() {

  const[isOpen,setIsopen] = useState<boolean>(false)
         const features:feature[]=[
              {
                title: "Mock Tests",
                desc: "Real exam-style mock tests with detailed score breakdowns and actionable feedback.",
                img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=60",
              },
              {
                title: "Speaking Practice",
                desc: "Friendly, structured speaking sessions that improve fluency, pronunciation and confidence.",
                img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=60",
              },
              {
                title: "AI Band Score Evaluation",
                desc: "Instant AI-powered band score predictions with corrections for Task 1 and Task 2 writing.",
                img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=60",
                },
            ];
            const testimonials:testimonial[] = [
              {
                name: "Aisha",
                score: 8.5,
                quote: "I scored 8.5 thanks to their coaching! The speaking practice was a game-changer.",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=60",
              },
              {
                name: "Priya",
                score: 9.0,
                quote: "Personalized study plan and regular evaluation made all the difference.",
                img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=60",
              },
              {
                name: "Kevin",
                score: 8.5,
                quote: "I owe my score to them, Best coaching I have ever had",
                img: "https://images.unsplash.com/photo-1653300415221-66bf45b795ea?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }
            ]
            const universityLogos:universitylogo[] = [
                    {
                      name: "Harvard University",
                      logo: "https://th.bing.com/th/id/OIP.RqTNJ-ytopU_X4L20qKGggHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
                    },
                    {
                      name: "Yale University",
                      logo: "https://tse3.mm.bing.net/th/id/OIP.uOR9YcWf9LCaHGa3J1VzHgHaGB?rs=1&pid=ImgDetMain&o=7&rm=3",
                    },
                    {
                      name: "Princeton University",
                      logo: "https://logos-world.net/wp-content/uploads/2023/02/Princeton-Emblem.png",
                    },
                    {
                      name: "Columbia University",
                      logo: "https://th.bing.com/th/id/R.ef586aaddb1e95055d066705bcd1c248?rik=%2f5YYmojjTwqokw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fcolumbia-university-logo-png--1200.png&ehk=OUmVbgytE8DlAVxiXhyGVZi1oLYu4NxgvsgNjfOPCMc%3d&risl=&pid=ImgRaw&r=0",
                    },
                    {
                      name: "University of Pennsylvania",
                      logo: "https://tse3.mm.bing.net/th/id/OIP.scbnbmK62gpNKcazUngaggHaIa?rs=1&pid=ImgDetMain&o=7&rm=3",
                    },
                    {
                      name: "Cornell University",
                      logo: "https://tse3.mm.bing.net/th/id/OIP.Hnf-sE-Zw9n-DcCUO7G36QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
                    },
                    {
                      name: "Brown University",
                      logo: "https://logos-world.net/wp-content/uploads/2022/11/Brown-University-Emblem.png",
                    },
                    {
                      name: "MIT",
                      logo: "https://logospng.org/download/mit/logo-mit-icon-1024.png",
                    },
                  ];


  return (
    <div className="font-sans text-gray-800 bg-white relative ">
       {/* navbar */}
       <section className="relative">
      {/* desktop nav */}
    <div className=" hidden md:flex flex-col lg:flex-row items-center justify-between gap-4 fixed top-5 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-white/20 border border-white/20 shadow-lg px-6 py-4 rounded-xl w-[90%] max-w-4xl  text-white">
      <h1 className="text-4xl font-extrabold text-blue-400 tracking-wide">LearnIn</h1>

      <nav>
        <ul className="flex flex-row gap-2 lg:gap-6 text-sm lg:text-base font-medium">
          <li><a href="#contact" className=" text-gray-800 hover:text-blue-300 transition">Contact Us</a></li>
          <li><a href="#privacy" className=" text-gray-800 hover:text-blue-300 transition">Privacy</a></li>
          <li><a href="#terms" className=" text-gray-800 hover:text-blue-300 transition">Terms</a></li>
        </ul>
      </nav>
    </div>

    {/* mobile nav */}
      <div className="md:hidden fixed top-2 left-1/2 transform -translate-x-1/2 
  backdrop-blur-md bg-white/10 flex flex-row items-center justify-between gap-4  
  border border-white/20 shadow-lg px-6 py-4 rounded-xl w-[90%] max-w-4xl z-50">

      <h1 className="text-3xl  font-extrabold text-blue-400 tracking-wide">LearnIn</h1>
      <button onClick={()=>setIsopen(!isOpen)} className="transition">
        {
          isOpen ?(
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          ):(
               <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="black"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="hamburger-icon"
      >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
          )

        }
      </button>

          <nav className="absolute top-20  z-50 w-[90%] max-w-4xl ">
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } z-50  flex-col lg:flex-row items-center gap-4 lg:gap-6 text-sm  font-medium p-5 backdrop-blur-md bg-white/90 border border-white/20 rounded-lg shadow-lg`}
        >
          <li>
            <a href="#contact" className=" z-50 text-gray-800 hover:text-blue-300 transition">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#privacy" className="z-50 text-gray-800 hover:text-blue-300 transition">
              Privacy
            </a>
          </li>
          <li>
            <a href="#terms" className=" z-50 text-gray-800 hover:text-blue-300 transition">
              Terms
            </a>
          </li>
        </ul>
      </nav>
    </div>
    </section>
     
          {/* HERO Section */}
      <header
        className=" h-screen min-h-[640px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(3,37,65,0.55), rgba(3,37,65,0.55)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
       
        <div className="max-w-3xl px-6">
          <h1 className=" text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Achieve Your Dream IELTS Score
          </h1>
          <p className="mt-4 text-blue-100 text-lg sm:text-xl">Expert coaching, personalized feedback, and proven strategies.</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform"
            >
              Book a Free Trial
            </a>
            <a
              href="#courses"
              className="inline-block text-white ring-1 ring-white/30 px-5 py-3 rounded-lg hover:bg-white/10 transition"
            >
              View Courses
            </a>
          </div>

          <div className="mt-12 text-blue-200 text-sm">
            <span className="inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
              </svg>
              1-on-1 feedback • Mock tests • Proven live strategies
            </span>
          </div>
        </div>
      </header>
      
      {/* ---------- FEATURE CARDS ---------- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900">What We Offer</h2>
          <p className="mt-2 text-center text-blue-600 max-w-2xl mx-auto">Tailored services to get you ready for every section of the IELTS exam.</p>

          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
         {features.map((card:feature) => (
              <article
                key={card.title}
                className="bg-gradient-to-b from-white to-blue-50 rounded-xl shadow-md overflow-hidden transform hover:shadow-lg transition p-0"
              >
                <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url('${card.img}')` }} />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-blue-900">{card.title}</h3>
                  <p className="mt-2 text-sm text-blue-700">{card.desc}</p>
                  <div className="mt-4">
                    <a
                      href="#contact"
                      className="inline-block text-blue-700 font-medium hover:underline"
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
              {/* content */}
        <section className="py-12 px-6 bg-white">
             <div className="max-w-7xl mx-auto ">
            <h2 className="font-bold text-3xl md:text-4xl text-center">
              Universities Our Students Have Been Accepted Into
            </h2>

               <main className="grid  grid-cols-5 md:grid-cols-10 mt-10">
                 {
                universityLogos.map((uni:universitylogo)=>(
                  <main key={uni.name}>
                    
                   <img
                    src={uni.logo}
                    alt={`${uni.name} Logo`}
                    className="h-16 w-auto object-contain"
                  />
                  </main>
                 
                ))
              }
               </main>
             
            </div>
        </section>
      {/* ---------- TESTIMONIALS ---------- */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900">Testimonials</h2>
          <p className="mt-2 text-center text-blue-600 max-w-2xl mx-auto">Hear from students who've improved their band scores with us.</p>

          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {testimonials.map((t:testimonial) => (
              <figure key={t.name} className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-4 hover:shadow-lg transition">
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <div className="text-blue-900 font-semibold">{t.name}</div>
                    <div className="text-sm text-blue-600">Band {t.score}</div>
                  </div>
                </div>
                <blockquote className="text-gray-700">“{t.quote}”</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>  

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="py-16 px-6 bg-blue-50 overflow-hidden">
            <div className="max-w-4xl mx-auto  flex flex-col">
          
              <h3 className="text-2xl md:text-4xl font-bold text-blue-900 text-center">Get in touch</h3>
              <p className="mt-2 text-blue-600 text-center">Have questions or want to book your free trial? Send us a message</p>
           

            <div className=" p-8 rounded-md shadow-md mt-12 bg-white">
              <form className="space-y-4  " onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-blue-700">Name</label>
                  <input required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-700">Email</label>
                  <input type="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-700">Phone</label>
                  <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-700">Message</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">Send Message</button>
                </div>
              </form>
            </div>
         
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="py-4 px-6 bg-blue-300 text-grey-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">© {new Date().getFullYear()} Baby Codes IELTS Institute. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>

     
    </div>
  );
}
