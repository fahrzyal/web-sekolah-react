import HeroSection from "./HeroSection";
import CardJurusan from "./CardJurusan";
import jurusan1 from "./../assets/jurusan1.jpeg"

const MainContent = ()=>{
    return (
        <div>
            <HeroSection />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan Sekolah</h1>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3">
                        <CardJurusan image={jurusan1}/>
                    </div>
                    <div className="col-3">
                        <CardJurusan image={jurusan1}/>
                    </div>
                    <div className="col-3">
                        <CardJurusan image={jurusan1}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;