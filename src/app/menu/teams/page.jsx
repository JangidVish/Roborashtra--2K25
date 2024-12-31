import Member from "@/components/Member/Member";
import "./teams.css";



const coordinator = "https://drive.google.com/uc?export=download&id=1i_kNhK8CKupiqRdNPnnam5bN_CLnGFGj"
const lead="https://drive.google.com/uc?export=download&id=1ZxT1U-h6MnztTmpfG0hma7mpAcdOR-Qg"
const colead="https://drive.google.com/uc?export=download&id=1yOOTeMHiUIvyZbYa95hf3dACukaKm_OO"
const colead2 = "https://drive.google.com/uc?export=download&id=1rwiu5FKbF1RQ3UkHMOz0weGvomBqxAIP"

const designHead = "https://drive.google.com/uc?export=download&id=1tzGJZHb_4bqjauRuy-loY6_oBW-Sm5A4"
const prProfessionalHead1="https://drive.google.com/uc?export=download&id=1qtvDZJ1xVSv7CbkGR1sf3xBuLHTovIJZ"
const psHead="https://drive.google.com/uc?export=download&id=19ozId6kf-UZFiVjCHdjnIdTl0LolREEZ"
const manganementHead1="https://drive.google.com/uc?export=download&id=1M2VkA5ceNe_qA4EJol7qVhPlwJaKbgT_"
const prProfessionalHead2="https://drive.google.com/uc?export=download&id=15VnheBm64zJlzNJZWjrYITSmjD_vnIeg"
const manganementHead2="https://drive.google.com/uc?export=download&id=1rwiu5FKbF1RQ3UkHMOz0weGvomBqxAIP"
const financeHead="https://drive.google.com/uc?export=download&id=1s264yNvN0GIAhin0j0b10ElhGaPrz9md"
const webHead="https://drive.google.com/uc?export=download&id=1yOOTeMHiUIvyZbYa95hf3dACukaKm_OO"
const cadCamHead="https://drive.google.com/uc?export=download&id=1nzJlWt09SLlVLeng2zVXOLTOohvFPDDJ"
const workshopcoHead="https://drive.google.com/uc?export=download&id=1oWu0AL2E4BOUKyc1_S8KqJFTZMMv4lzA"
const manganementCohead="https://drive.google.com/uc?export=download&id=1hcIdqt4jv7z7l8ukXi7VuD03godGfNsV"
const psCohead="https://drive.google.com/uc?export=download&id=1xiMYQuFjmkTgZxLWgaekvFzbqvvibhCy"
const designCohead="https://drive.google.com/uc?export=download&id=10GgbyN0jEeyIC2hmFlZt8bn09hx6QgcF"
const provisionalCohead="https://drive.google.com/uc?export=download&id=1yJp-SMZQBWY-pCpkvDeyxllRGCPzMFxJ "
const professionalCohead="https://drive.google.com/uc?export=download&id=1Pku3BwYO-rGxZK_XRo_5VbJ2nS5bOzp3"
const cotentCohead="https://drive.google.com/uc?export=download&id=1HhVIcNhNeqnkZzhLvPpUQMpuGmLE5ufJ"

export default function Teams() {



  return (
    
    // <div className=" text-center text-lg">
    //   Coming Soon </div>
    <div className="team" >
    <div className="team_wrapper">
      <p className="text-center">(Hover or Click Cards to see Contact)</p>


      <h2 className="text-center text-lg">Event Co-ordinator</h2>
      <div className="team_row">
            <Member image={coordinator} email={"mahendra.salunke@pccoer.in"} linkedIn={"https://www.linkedin.com/in/mahendra-salunke-b9958128/"} phnNo={9763722206}/>
      </div>

      <h2 className="text-center text-lg">Lead & Co-Lead</h2>
      <div className="team_row">
            <Member image={lead} email={"aditya.pardeshi_comp22@pccoer.in"} linkedIn={"https://www.linkedin.com/in/om-khare-5bb6b8236/"} phnNo={8956596939}/>
            <Member image={colead} email={"vishal.jangid_it22@pccoer.in"} linkedIn={"https://www.linkedin.com/in/vishal-jangid-359b54259/"} phnNo={9172008630}/>
            <Member image={colead2} email={"pratik.chavare_comp22@pccoer.in"} linkedIn={"https://www.linkedin.com/in/pratik-chavare-b5369b200/"} phnNo={8265005103}/>

      </div>

      <h2 className="text-center text-lg">Head & Co-Head</h2>
      <div className="team_row">
      <Member image={designHead} email={""} linkedIn={""} phnNo={7410133456}/>
      <Member image={prProfessionalHead1} email={""} linkedIn={""} phnNo={9356944819}/>
      <Member image={prProfessionalHead2} email={""} linkedIn={""} phnNo={8788158081}/>
      <Member image={psHead} email={""} linkedIn={""} phnNo={8767835399}/>
      <Member image={manganementHead1} email={""} linkedIn={""} phnNo={9075219569}/>
      <Member image={manganementHead2} email={""} linkedIn={""} phnNo={8265005103}/>
      <Member image={financeHead} email={""} linkedIn={""} phnNo={9172008630}/>
      <Member image={webHead} email={""} linkedIn={""} phnNo={9172008630}/>
      <Member image={cadCamHead} email={""} linkedIn={""} phnNo={8847747922}/>
      <Member image={workshopcoHead} email={""} linkedIn={""} phnNo={9975190027}/>
      <Member image={manganementCohead} email={""} linkedIn={""} phnNo={7887992517}/>
      <Member image={psCohead} email={""} linkedIn={""} phnNo={9307727077}/>
      <Member image={designCohead} email={""} linkedIn={""} phnNo={9527481956}/>
      <Member image={provisionalCohead} email={""} linkedIn={""} phnNo={9307727077}/>
      <Member image={professionalCohead} email={""} linkedIn={""} phnNo={7498193847}/>
      <Member image={cotentCohead} email={""} linkedIn={""} phnNo={9699983793}/>
     

      </div>
    </div>
  </div>
  );
}