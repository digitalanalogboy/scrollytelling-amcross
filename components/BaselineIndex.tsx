import Image from "next/image";
import BaseLine01 from "../public/images/baseline01.jpg";

export default function BaselineIndex() {
  return (
    <div
      className="relative bg-white mt-96 flex justify-center"
      style={{ fontFamily: "trebuchet" }}
    >
      <div className="items-center w-full mx-auto ">
        <div className="py-10">
          <h1
            className="font-bold text-2xl text-center my-10 font-sans"
            style={{ fontSize: "5vh" }}
          >
            Latar Belakang Program
          </h1>
          <Image src={BaseLine01} layout="responsive" />
          <div className="flex w-full justify-center">
            <div className="max-w-6xl">
              
              <p className="py-5 px-10 text-justify text-xl">
                Provinsi Lampung dan Nusa Tenggara Timur dipilih sebagai wilayah
                prioritas tinggi ditetapkan dalam kelas risiko tinggi dalam
                indeks pengurangan risiko nasional.
              </p>
              <p className="py-5 px-10 text-justify text-xl">
                Program ini bertujuan untuk membangun kapasitas masyarakat dalam
                kesiapsiagaan dan saat menghadapi bencana, serta untuk
                memperkuat kapasitas kelembagaan PMI dalam memberikan layanan
                manajemen risiko bencana yang penting kepada masyarakat. Melalui
                program ini, kelompok masyarakat rentan diharapkan bisa
                mengatasi kerentanan berupa kesenjangan, ketidaksetaraan,
                pengucilan, dan degradasi lingkungan kronis.
              </p>
            </div>
          </div>
        </div>
        <iframe
          className="w-full aspect-video youtube"
          title="vimeo-player"
          src="https://www.youtube.com/embed/gA-kB2-AxeQ?controls=0"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="py-10 ">
          <h1
            className="font-bold text-2xl text-center my-10 font-sans"
            style={{ fontSize: "5vh" }}
          >
            Studi <i>Baseline</i>
          </h1>
          <div className="w-full flex justify-center">
            <div className="max-w-6xl">
              <p className="py-5 px-10 text-justify text-xl">
                Berdasarkan data awal yang didapatkan melalui Studi{" "}
                <i>Baseline</i>, masyarakat dan komunitas sekolah memiliki
                pengetahuan mengenai risiko bencana yang ada di lingkungan
                mereka, namum masih sedikit yang tau bagaimana respon yang tepat
                dalam merencanakan atau bereaksi ketika bencana terjadi.
              </p>
            </div>
          </div>
        </div>
        <iframe
          className="w-full aspect-video youtube"
          title="vimeo-player"
          src="https://www.youtube.com/embed/qVWCkzdufUk?controls=0"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="w-full flex justify-center mb-20">
          <div className="max-w-6xl">
            <p className="py-5 px-10 text-justify text-xl">
              Peningkatan kapasitas di masyarakat sudah mulai berjalan dengan
              dibentuknya SIBAT di beberapa komunitas sasaran. Selanjutnya
              aktivitas yang dilakukan banyak yang berhubungan dengan respon
              Covid-19 di area implementasi.
            </p>
            <p className="py-5 px-10 text-justify text-xl">
              Hasil Studi Baseline bisa dilihat pada visualisasi data berikut
              ini.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
