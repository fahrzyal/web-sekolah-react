import HeroSection from "./HeroSection";
import CardJurusan from "./CardJurusan";
import CardKegiatan from "./CardKegiatan";
import jurusan1 from "./../assets/jurusan1.jpeg";
import kegiatan1 from "./../assets/Kegiatan 1.jpg";

const MainContent = ()=>{
    return (
        <div>
            <HeroSection />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center my-5">
                        <h1>Jurusan Sekolah</h1>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-12">
                        <CardJurusan image={jurusan1} jurusan="Teknik Komputer Jaringan" description="1"/>
                    </div>
                    <div className="col-lg-3  col-12">
                        <CardJurusan image={jurusan1} jurusan="Teknik Kendaraan Ringan" description="2"/>
                    </div>
                    <div className="col-lg-3  col-12">
                        <CardJurusan image={jurusan1} jurusan="Akuntansi dan Perkantoran" description="3"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan</h1>
                    </div>
                    <div className="col-12 my-3">
                        <CardKegiatan image={kegiatan1} description="Ini adalah kegiatan belajar mengajar dikelas"/>
                    </div>
                    <div className="col-12 my-3">
                        <CardKegiatan image={kegiatan1} description="Ini adalah kegiatan belajar mengajar dikelas"/>
                    </div>
                    <div className="col-12 my-3">
                        <CardKegiatan image={kegiatan1} description="Ini adalah kegiatan belajar mengajar dikelas"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;