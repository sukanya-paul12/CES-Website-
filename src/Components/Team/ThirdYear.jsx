import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import abhishekImg from '../../assets/abhishekSah.jpg';
import akashSinghImg from '../../assets/akashSingh.jpg';
import amarKumarImg from '../../assets/AmarKumarDas.jpg';
import bhashwarNandiImg from '../../assets/bhashwarNandi.png';
import gandharImg from '../../assets/gandharGautam.jpeg';
import pijushMandalImg from '../../assets/pijushMandal.jpg';
import prithvishImg from '../../assets/prithvish.jpg';
import rahulRudraImg from '../../assets/rahulRudra.webp';
import sanketImg from '../../assets/sanket.jpg';
import shreshthaImg from '../../assets/shreshtha.jpg';
import sinjiniImg from '../../assets/sinjini.jpeg';
import srinivasImg from '../../assets/srinivas.jpeg';
import sukanyaImg from '../../assets/sukanya.jpeg';
import tharunImg from '../../assets/tharun.jpg';
import vishalPalImg from '../../assets/vishalPal.jpeg';
import gairikImg from '../../assets/gairik.jpg';

const ThirdYear = () => {
  const members = [
    { 
      name: 'Shreshtha', 
      post: 'Social Media Handler', 
      image: shreshthaImg,
      linkedin: 'https://www.linkedin.com/in/shreshtha-nitd-civil?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      instagram: 'https://www.instagram.com/shreshtha.ltd?igsh=MXBmNjR5OHlvaHVjcA=='
    },
    { 
      name: 'M D S Srinivasa Kashyap', 
      post: 'Social Media Handler', 
      image: srinivasImg,
      linkedin: 'https://www.linkedin.com/in/m-d-s-srinivasa-kashyap-1b6a2a3a9?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      instagram: 'https://www.instagram.com/shanmukha_srinivas_machavaram?utm_source=qr&igsh=MXJkdzMwOW82a3h6MA=='
    },
    { 
      name: 'Sukanya Paul', 
      post: 'Web + Content', 
      image: sukanyaImg,
      linkedin: 'https://www.linkedin.com/in/khapna-ronrang-517437331/',
      instagram: 'https://www.instagram.com/_.chaotic_life._?igsh=ejlxbHowc2xyNml5'
    },
    { 
      name: 'Sinjini Haldar', 
      post: '', 
      image: sinjiniImg,
      linkedin: '',
      instagram: ''
    },
    { 
      name: 'Prithvish Chakraborty', 
      post: '', 
      image: prithvishImg,
      linkedin: 'https://www.linkedin.com/in/prithvish-chakraborty?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: ''
    },
    { 
      name: 'Bhashwar Nandi', 
      post: '', 
      image: bhashwarNandiImg,
      linkedin: 'https://www.linkedin.com/in/bhashwar-nandi-3274bb39b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      instagram: 'https://www.instagram.com/bhas_hwar6?igsh=YWlhOG5rMDJlZHN0'
    },
    { 
      name: 'Rahul Rudra', 
      post: 'Web Developer', 
      image: rahulRudraImg,
      linkedin: 'https://www.linkedin.com/in/rahul-rudra-469918324?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      instagram: 'https://www.instagram.com/rudra_r_45.0/'
    },
    { 
      name: 'Sanket Chell', 
      post: '', 
      image: sanketImg,
      linkedin: 'https://www.linkedin.com/in/sanket-chell-1bb877338',
      instagram: ''
    },
    { 
      name: 'Pijush Mandal', 
      post: '', 
      image: pijushMandalImg,
      linkedin: 'https://www.linkedin.com/in/pijush-mandal',
      instagram: 'https://www.instagram.com/pijushm_03?igsh=MTJsa2lxcDlkMndmcg=='
    },
    { 
      name: 'Gandhar Gautam', 
      post: '', 
      image: gandharImg,
      linkedin: 'https://www.linkedin.com/in/gandhar-gautam-ab6377335?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      instagram: 'https://www.instagram.com/_rishii32?igsh=a25pdXVxbGhxaWQw&utm_source=qr'
    },
    { 
      name: 'Amar Kumar Das', 
      post: '', 
      image: amarKumarImg,
      linkedin: 'https://www.linkedin.com/in/amar-kumar-das-989653340',
      instagram: 'https://www.instagram.com/amarkumardas_/'
    },
    { 
      name: 'Aakash Kumar Singh', 
      post: '', 
      image: akashSinghImg,
      linkedin: '',
      instagram: ''
    },
    { 
      name: 'Abhishek Sah', 
      post: '', 
      image: abhishekImg,
      linkedin: 'https://www.linkedin.com/in/abhishek-sah-259b53311?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      instagram: 'https://www.instagram.com/abhisheksah2025?igsh=MjJpOXl3Z29taTZj'
    },
    { 
      name: 'Vishal Pal', 
      post: '', 
      image: vishalPalImg,
      linkedin: 'http://www.linkedin.com/in/vishal-pal-465233325',
      instagram: 'https://www.instagram.com/arjuna6170/'
    },
    {
      name: 'Dasari Tharun',
      post: '',
      image: tharunImg,
      linkedin: '',
      instagram: 'https://www.instagram.com/mr_tharun_2603?igsh=MXI2dGx5NzMzbTVrMQ=='
    },
    {
      name: 'Gairik Roy',
      post: '',
      image: gairikImg,
      linkedin: 'https://www.linkedin.com/in/gairik-roy-59b524346/',
      instagram: 'https://www.instagram.com/its_roy1257?utm_source=qr&igsh=MTVtZTFsYTBsdGV4dQ=='
    },
  ];
  return (
    <section className="team-subsection third-year">
      <div className="team-grid">
        {members.map((member, idx) => (
          <div key={idx} className="team-card">
            <div className="team-image-wrapper">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="team-post">{member.post}</p>
              <div className="team-card-social" style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="socialHover" aria-label="Instagram">
                    <BsInstagram className="social-icon-prop" size={20} />
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="socialHover" aria-label="LinkedIn">
                    <BsLinkedin className="social-icon-prop" size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThirdYear;
