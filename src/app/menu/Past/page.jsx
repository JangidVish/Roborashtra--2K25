const Gallery = () => {
    const institutes = [
      { instituteName: "Pimpri Chinchwad College of Engineering and Research,Pune" },
      { instituteName: "Pimpri Chinchwad College of Engineering,Pune" },
      { instituteName: "AISSMS College of Engineering,Pune" },
      { instituteName: "Sinhgad College of Engineering,Pune" },
      { instituteName: "MIT College of Engineering,Pune" },
      { instituteName: "Pimpri Chinchwad Education Trust (PCET), Pune" },
      { instituteName: "Indira College of Engineering and Management (ICEM), Maharashtra" },
      { instituteName: "National Institute of Technology (NIT), Trichy" },
      { instituteName: "Dr. D. Y. Patil College of Engineering (DYPCOE), Akurdi, Pune" },
      { instituteName: "Army Institute of Technology (AIT), Pune" },
      { instituteName: "SND College of Engineering & Research Center (SNDCOER), Nashik, Maharashtra" },
      { instituteName: "Sandip Foundation,Nashik" },
      { instituteName: "Vidyavardhaka College of Engineering, Mysore" },
      { instituteName: "MKSSS's Cummins College of Engineering for Women (CCOEW), Pune" },
      { instituteName: "Vivekanand Education Society's Institute Of Technology (VESIT), Mumbai" },
      { instituteName: "Pimpri Chinchwad University,Pune" },
      { instituteName: "MIT World Peace University, Pune, Maharashtra" },
      { instituteName: "Savitribai Phule Pune University (SPPU), Pune" },
      { instituteName: "COEP Technological University, Pune, Maharashtra" },
      { instituteName: "College of Engineering (COEP), Pune" },
      { instituteName: "Veermata Jijabai Technological Institute (VJTI), Mumbai" },
      { instituteName: "PCET's Nutan College of Engineering and Research, Pune, Maharashtra" },
      { instituteName: "PCET's Nutan Maharashtra Institute of Engineering and Technology (PNMIET), Talegaon Dabhade, Maharashtra" },
      { instituteName: "Marathwada Mitra Mandal's College of Engineering (MMCOE), Pune" },
      { instituteName: "JSPM Rajarshi Shahu College of Engineering, Tathawade, Pimpri-Chinchwad, Maharashtra" },
      { instituteName: "JSPM's Rajarshi Shahu College of Engineering (JSPMRSCOE), Pune" },
      { instituteName: "Smt Kashibai Navale College of Engineering (SKNCE), Pune" },
      { instituteName: "Vishwakarma Institute of Technology, Pune, Maharashtra" },
      { instituteName: "Novel International School,Pune" },
      { instituteName: "P K Technical Campus (PKTC), Pune, Maharashtra" },
    ];
  
    // Filter institutes based on location
    const inMaharashtra = institutes.filter((institute) =>
      /Maharashtra|Pune|Mumbai|Nashik|Akurdi|Talegaon/.test(institute.instituteName)
    );
  
    const outsideMaharashtra = institutes.filter(
      (institute) => !/Maharashtra|Pune|Mumbai|Nashik|Akurdi|Talegaon/.test(institute.instituteName)
    );
  
    return (
      <div className="min-h-screen bg-black text-white font-[bankGothlic] p-6">
        <h1 className="text-center text-4xl font-bold text-white mb-8">
          Institute Participated
        </h1>
  
        <div className="">
          {/* Institutes in Maharashtra */}
          
  
          {/* Institutes Outside Maharashtra */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Institutes Outoff-Maharashtra
            </h2>
            <ul className="space-y-3">
            {outsideMaharashtra
  .slice() // Create a shallow copy to avoid mutating the original array
  .sort((a, b) => a.instituteName.localeCompare(b.instituteName)) // Sort alphabetically
  .map((institute, index) => (
    <li
      key={index}
      className="p-4 bg-gray-600 hover:bg-orange-600 transition-colors duration-300 rounded-lg shadow-lg"
    >
      {institute.instituteName}
    </li>
  ))}
            </ul>
          </div>
          <br></br>
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4 ">
              Institutes In-Maharashtra
            </h2>
            <ul className="space-y-3">
            {inMaharashtra
  .slice() // Create a shallow copy to avoid mutating the original array
  .sort((a, b) => a.instituteName.localeCompare(b.instituteName)) // Sort alphabetically
  .map((institute, index) => (
    <li
      key={index}
      className="p-4 bg-gray-600 hover:bg-orange-600 transition-colors duration-300 rounded-lg shadow-lg"
    >
      {institute.instituteName}
    </li>
  ))}
            </ul>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default Gallery;
  