import Dataimage from "./data";
import { listTools, listProyek } from "./data";


function App() {

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-1s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl"> 
          <img src={Dataimage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
          <q> Don't Look Back </q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Muhammad Faisal</h1>
        <p className="text-base/loose mb-6 opacity-50">Saya mahasiswa Teknik Informatika Universitas Negeri Semarang dengan ketertarikan di bidang Fullstack. 
        Saya bersemangat untuk terus mengasah kemampuan dalam merancang dan membangun aplikasi web yang responsif dan fungsional.</p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="#" className="bg-[#15887c] text-white px-6 py-3 rounded-lg hover:bg-[#13675a] transition flex items-center gap-2">Download CV <i className="ri-download-line ri-lg"></i> </a>
          <a href="#proyek" className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition flex items-center gap-2">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
        </div>
      </div>
      <img src={Dataimage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-2s" loading="lazy"/>
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="w-2/3 lg:w3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <img src={Dataimage.HeroImage} alt="Hero Image" className="w-24 rounded-md mb-10 sm:hidden" loading="lazy"/>
          <p className="text-base/loose mb-10">
            Saya Muhammad Faisal, mahasiswa Teknik Informatika dengan fokus pada web development, machine learning, dan UI/UX design.

Saya senang membangun solusi kreatif berbasis teknologi yang berdampak nyata, sekaligus terus belajar hal baru setiap harinya.

Dalam pengembangan proyek, saya sering menggunakan Laravel dan React sebagai framework utama, serta Python untuk pengolahan data dan eksperimen machine learning. Saya juga menggunakan Figma untuk merancang tampilan antarmuka yang menarik dan intuitif.
          </p>
          <div className="flex item-center justify-between">
            <img src={Dataimage.HeroImage} alt="Hero Image" className="w-24 rounded sm:block hidden" loading="lazy"/>
            <div className="flex items-center gap-10">
              <div>
                <h1 className="text-4xl mb-1 ">
                  45<span className="text-[#15887c]">+</span>
                  </h1>
                  <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1 ">
                  4<span className="text-[#15887c]">+</span>
                  </h1>
                  <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools yang saya gunakan</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website ataupun desain</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

          {listTools.map(tool => (
            <div className=" flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000"data-aos-delay={tool.dad} data-aos-once="true">
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}

          </div>
        </div>
      </div>

      { /* Proyek */ }

      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Proyek Saya</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" >Berikut beberapa proyek yang telah saya kerjakan</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map(proyek => (
            <div key={proyek.id} className="p-4 bg-zinc-800 arounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true" >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
              <div>
                <h1 className="text-2xl font-bold my-4">
                  {proyek.nama}
                </h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                  <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href="#" className="bg-[#15877c] p-3 rounded-lg block hover:bg-[#13675a]">Lihat Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    { /* My Experience */ }

<div className="experience mt-32 py-10 pt-24 md:pt-10" id="experience">
  <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Pengalaman Saya</h1>
  <p className="text-base/loose text-center opacity-50 mb-16" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
    Perjalanan saya dalam berorganisasi dan berkolaborasi di berbagai kegiatan kampus.
  </p>

  <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-zinc-700 h-full rounded-full"></div>
    <div className="block md:hidden absolute left-4 sm:left-6 w-[2px] bg-zinc-700 h-full rounded-full"></div>

    {/* ITEM 1 */}
    <div className="mb-20 flex flex-col md:flex-row items-center md:items-start relative" >
      <div className="bg-[#15887c] w-5 h-5 rounded-full absolute left-4 sm:left-6 top-0 transform -translate-x-1/2 md:hidden"></div>
      <div className="hidden md:block bg-[#15887c] w-5 h-5 rounded-full absolute left-1/2 top-0 transform -translate-x-1/2"></div>
      <div className="md:w-1/2 md:pr-10 md:text-right text-left w-full pl-10 sm:pl-12 md:pl-0">
        <h2 className="text-2xl font-bold text-[#15887c] mt-[-5px] md:mt-0" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true" >HIMA ILKOM UNNES</h2>
        <p className="opacity-70 mb-3" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true" >Wakil Kepala Divisi Internal | Januari 2025 - Sekarang</p>
        <p className="opacity-80 leading-relaxed" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true" >
          Mendampingi Kepala Divisi Internal dalam menjalankan program PSDM dan kegiatan minat–bakat, serta mendukung pengembangan potensi dan keterlibatan mahasiswa.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-start md:justify-start mt-6 md:mt-0 w-full pl-10 sm:pl-12 md:pl-10" data-aos="fade-left" data-aos-duration="3000" data-aos-once="true" >
        <img
          src="/assets/experience/wakoor_internal.jpeg"
          alt="Wakoor Internal"
          className="w-70 h-60 object-cover rounded-lg border border-zinc-700 shadow-lg"
        />
      </div>
    </div>

    {/* ITEM 2 */}
    <div className="mb-20 flex flex-col md:flex-row-reverse items-center md:items-start relative">
      <div className="bg-[#15887c] w-5 h-5 rounded-full absolute left-4 sm:left-6 top-0 transform -translate-x-1/2 md:hidden"></div>
      <div className="hidden md:block bg-[#15887c] w-5 h-5 rounded-full absolute left-1/2 top-0 transform -translate-x-1/2"></div>

      <div className="md:w-1/2 md:pl-10 md:text-left text-left w-full pl-10 sm:pl-12 md:pl-0">
        <h2 className="text-2xl font-bold text-[#15887c] mt-[-5px] md:mt-0" data-aos="fade-left" data-aos-duration="3000" data-aos-once="true" >Computer Science Sport And Art Competition (CSS)</h2>
        <p className="opacity-70 mb-3" data-aos="fade-left" data-aos-duration="3000" data-aos-once="true" >Steering Commite | November 2025</p>
        <p className="opacity-80 leading-relaxed" data-aos="fade-left" data-aos-duration="3000" data-aos-once="true" >
          Mengawasi jalannya rangkaian lomba, memberikan arahan strategis, serta memastikan kegiatan berjalan sesuai konsep dan standar yang ditetapkan.
        </p>
      </div>

     <div
  className="md:w-1/2 flex justify-start md:justify-end mt-6 md:mt-0 w-full pl-10 sm:pl-12 md:pr-10"
  data-aos="fade-right"
  data-aos-duration="3000"
  data-aos-once="true"
>
  <img
    src="/assets/experience/css.jpeg"
    alt="CSS"
    className="w-70 h-60 object-cover rounded-lg border border-zinc-700 shadow-lg"
  />
</div>

    </div>

    {/* ITEM 3 */}
    <div className="mb-20 flex flex-col md:flex-row items-center md:items-start relative">
      <div className="bg-[#15887c] w-5 h-5 rounded-full absolute left-4 sm:left-6 top-0 transform -translate-x-1/2 md:hidden"></div>
      <div className="hidden md:block bg-[#15887c] w-5 h-5 rounded-full absolute left-1/2 top-0 transform -translate-x-1/2"></div>

      <div className="md:w-1/2 md:pr-10 md:text-right text-left w-full pl-10 sm:pl-12 md:pl-0">
        <h2 className="text-2xl font-bold text-[#15887c] mt-[-5px] md:mt-0" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true" >OSJUR INTERFACE ILKOM 2025</h2>
        <p className="opacity-70 mb-3" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true" >Wakoor Pendamping | Agu 2025 - Sep 2025</p>
        <p className="opacity-80 leading-relaxed" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true" >
          Menjadi Pendamping OSJUR INTERFACE 2025 memberi saya kesempatan untuk belajar memimpin dan bekerja sama dalam menciptakan pengalaman OSJUR yang berkesan bagi mahasiswa baru Teknik Informatika.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-start md:justify-start mt-6 md:mt-0 w-full pl-10 sm:pl-12 md:pl-10" data-aos="fade-left" data-aos-duration="3000" data-aos-once="true">
        <img
          src="/assets/experience/Interface2025.jpeg"
          alt="Interface2025"
          className="w-70 h-60 object-cover rounded-lg border border-zinc-700"
        />
      </div>
    </div>

    {/* ITEM 4 */}
    <div className="mb-20 flex flex-col md:flex-row-reverse items-center md:items-start relative">
      <div className="bg-[#15887c] w-5 h-5 rounded-full absolute left-4 sm:left-6 top-0 transform -translate-x-1/2 md:hidden"></div>
      <div className="hidden md:block bg-[#15887c] w-5 h-5 rounded-full absolute left-1/2 top-0 transform -translate-x-1/2"></div>

      <div className="md:w-1/2 md:pl-10 md:text-left text-left w-full pl-10 sm:pl-12 md:pl-0">
        <h2 className="text-2xl font-bold text-[#15887c] mt-[-5px] md:mt-0" data-aos="fade-left" data-aos-duration="3000" data-aos-once="true" >Workshop BitCamp</h2>
        <p className="opacity-70 mb-3" data-aos="fade-left" data-aos-duration="3000" data-aos-once="true" > Sie Acara | Mei 2025 </p>
        <p className="opacity-80 leading-relaxed" data-aos="fade-left" data-aos-duration="3000" data-aos-once="true" >
        Menyusun alur kegiatan, mengoordinasikan kebutuhan teknis, dan memastikan workshop bertema Machine Learning berjalan terstruktur dan interaktif.</p>
      </div>

      <div className="md:w-1/2 flex justify-start md:justify-end mt-6 md:mt-0 w-full pl-10 sm:pl-12 md:pr-10" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true" >
        <img
          src="/assets/experience/bitcamp.jpeg"
          alt="Bitcamp"
          className="w-70 h-60 object-cover rounded-lg border border-zinc-700"
        />
      </div>
    </div>

    {/* ITEM 5 */}
    <div className="mb-20 flex flex-col md:flex-row items-center md:items-start relative">
      <div className="bg-[#15887c] w-5 h-5 rounded-full absolute left-4 sm:left-6 top-0 transform -translate-x-1/2 md:hidden"></div>
      <div className="hidden md:block bg-[#15887c] w-5 h-5 rounded-full absolute left-1/2 top-0 transform -translate-x-1/2"></div>

      <div className="md:w-1/2 md:pr-10 md:text-right text-left w-full pl-10 sm:pl-12 md:pl-0">
        <h2 className="text-2xl font-bold text-[#15887c] mt-[-5px] md:mt-0" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true" >Volunteer Osjur Interface 2024</h2>
        <p className="opacity-70 mb-3" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true" > Humas | Agu 2025 - Sep 2025 </p>
        <p className="opacity-80 leading-relaxed" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true" >
          Volunteer Humas OSJUR INTERFACE 2024 yang menangani komunikasi dan publikasi, serta meraih penghargaan Most Valuable Volunteer (MVP).
        </p>
      </div>

      <div className="md:w-1/2 flex justify-start md:justify-start mt-6 md:mt-0 w-full pl-10 sm:pl-12 md:pl-10" data-aos="fade-left" data-aos-duration="3000" data-aos-once="true" >
        <img
          src="/assets/experience/interface2024.jpeg"
          alt="Interface2024"
          className="w-70 h-60 object-cover rounded-lg border border-zinc-700"
        />
      </div>
    </div>
  </div>
</div>

   { /* Kontak */ }
   <div className="kontak mt-32 sm:py-10 p-0" id="kontak">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" >Kontak Saya</h1>
      <p className="text-base/loose text-center opacity-50 mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" >
      Mari Terhubung dengan saya.
      </p>
      <form action="https://formsubmit.co/paisalmen123@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Nama Lengkap</label>
            <input type="text" name="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
          </div>
            <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input type="email" name="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required />
          </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="pesan" className="font-semibold">Pesan</label>
            <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
          </div>
            <div>
            <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer block border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
          </div>
        </div>
      </form>
   </div>

    </> 
  )
}

export default App
