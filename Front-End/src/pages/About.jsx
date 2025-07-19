import "./About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella, faTemperatureHalf, faBowlFood } from '@fortawesome/free-solid-svg-icons';
import img222 from "../assets/african-child-says-stop-racism-600nw-490141447.jpg"
import imag1 from "../assets/5387.jpg"
import img1 from "../assets/IMG_20250719_063834_584.jpg"
import img2 from "../assets/IMG_20250719_063834_704.jpg"
import img3 from "../assets/IMG_20250719_063834_767.jpg"
import img4 from "../assets/IMG_20250719_063835_082.jpg"
import img5 from "../assets/IMG_20250719_063835_111.jpg"
import img6 from "../assets/IMG_20250719_063835_131.jpg"
import img7 from "../assets/IMG_20250719_063835_133.jpg"
import img8 from "../assets/IMG_20250719_063835_190.jpg"
import img9 from "../assets/IMG_20250719_063835_299.jpg"
import img10 from "../assets/IMG_20250719_063840_191.jpg"
import img11 from "../assets/IMG_20250719_063847_301.jpg"
import img12 from "../assets/IMG_20250719_063847_355.jpg"
import img13 from "../assets/IMG_20250719_063847_384.jpg"
import img14 from "../assets/IMG_20250719_063847_617.jpg"
import img15 from "../assets/IMG_20250719_063847_645.jpg"
import img16 from "../assets/IMG_20250719_063847_662.jpg"
import img17 from "../assets/IMG_20250719_063847_787.jpg"
import img18 from "../assets/IMG_20250719_063847_918.jpg"
import img19 from "../assets/IMG_20250719_063847_935.jpg"
import img20 from "../assets/IMG_20250719_063848_027.jpg"
import img21 from "../assets/IMG_20250719_063853_915.jpg"
import img22 from "../assets/IMG_20250719_063853_996.jpg"
import img23 from "../assets/IMG_20250719_063854_029.jpg"
import img24 from "../assets/IMG_20250719_063854_097.jpg"
import img25 from "../assets/IMG_20250719_063854_716.jpg"
import img26 from "../assets/IMG_20250719_063854_758.jpg"
import img27 from "../assets/IMG_20250719_063854_760.jpg"
import img28 from "../assets/IMG_20250719_063854_777.jpg"
import img29 from "../assets/IMG_20250719_063906_633.jpg"
import img30 from "../assets/IMG_20250719_063906_662.jpg"
import img31 from "../assets/IMG_20250719_063847_787.jpg"
import img32 from "../assets/IMG_20250719_063906_793.jpg"
import img33 from "../assets/IMG_20250719_063906_825.jpg"
import img38 from "../assets/IMG_20250719_063906_871.jpg"
import img34 from "../assets/IMG_20250719_063907_339.jpg"
import img35 from "../assets/IMG_20250719_063907_404.jpg"
import img36 from "../assets/IMG_20250719_063907_406.jpg"
import img37 from "../assets/IMG_20250719_063907_552.jpg"




const About = () => {
  return (
    <div className="about_container">
      <p className="page_name">Menna Story</p>
      <div className="stroy_with_pic">
        <p className="story_full_text">
          Menna Elderly & Mentally Challenging Support Center is a non-governmental, non-political, nonprofit organization founded in 2014 by a group of compassionate university students in Gondar, Ethiopia. Originally launched as "Menna Free Food Service" to feed homeless individuals, the initiative evolved into a full care center offering comprehensive support for the elderly and mentally challenged who have no one to support them. Menna now provides shelter, food, clothing, medical care, and emotional support to those in desperate need.
        </p>
        <img src={img10} className="imag_of_story" />
      </div>

      <div className="our_vision_page">
        <h1 className="our_vision_text">Our Vision</h1>
        <div className="our_visions_main_container">
          <div className="vision_box">
            <i><FontAwesomeIcon icon={faUmbrella} /></i>
            <h3>Provide Shelter</h3>
            <p>
              Offer a secure, loving home for elderly and mentally challenged individuals without family.
            </p>
          </div>
          <div className="vision_box">
            <i><FontAwesomeIcon icon={faTemperatureHalf} /></i>
            <h3>Deliver Medical Help</h3>
            <p>
              Ensure access to healthcare services and essential medication support for our residents.
            </p>
          </div>
          <div className="vision_box">
            <i><FontAwesomeIcon icon={faBowlFood} /></i>
            <h3>Feed the Hungry</h3>
            <p>
              Continue school feeding and daily nutrition programs for orphans, elders, and others in need.
            </p>
          </div>
        </div>
      </div>

      <div className="our_impact_success_journey">
        <p className="success_hype_text">OUR SUCCESSFUL JOURNEY</p>
        <div className="success_box_main_container">
          <div className="success_container">
            <p className="text_1">1200+</p>
            <p className="text_2">Elderly Supported</p>
          </div>
          <div className="success_container">
            <p className="text_1">420+</p>
            <p className="text_2">Children Fed Daily</p>
          </div>
          <div className="success_container">
            <p className="text_1">100+</p>
            <p className="text_2">Homes Constructed</p>
          </div>
          <div className="success_container">
            <p className="text_1">12+</p>
            <p className="text_2">Care Camps Built</p>
          </div>
        </div>
      </div>

      <div className="gallery_main_container">
        <p className="gallery_text_1">Gallery</p>
        <div className="main_gallery_pics">
          <div className="gallery_pic_boxer">
            <img className="Gallery_pic" src={img23} />
          </div>
          <div className="gallery_pic_boxer">
            <img className="Gallery_pic" src={img5} />
          </div>
          <div className="gallery_pic_boxer">
            <img className="Gallery_pic" src={img1} />
          </div>
          <div className="gallery_pic_boxer">
            <img className="Gallery_pic" src={img7} />
          </div>
          <div className="gallery_pic_boxer">
            <img className="Gallery_pic" src={img2} />
          </div>
          <div className="gallery_pic_boxer">
            <img className="Gallery_pic" src={img27} />
          </div>
          <div className="gallery_pic_boxer">
            <img className="Gallery_pic" src={img22} />
          </div>
          <div className="gallery_pic_boxer">
            <img className="Gallery_pic" src={img26} />
          </div>
        </div>
        <a href="" className="seeMoreGallery">See More</a>
      </div>

      <div className="Projects_main">
        <div className="projectPage_header">
          <p className="text_1">Projects</p>
          <p className="text_2">That Are Helping People</p>
        </div>
        <div className="project_boxes">
          <div className="project_box">
            <img className="image_of_project" src={img37}/>
            <div className="image_of_project_cover"></div>
            <p className="project_name">Care Shelter Expansion 2025</p>
          </div>
          <div className="project_box">
            <img className="image_of_project" src={img4}/>
            <div className="image_of_project_cover"></div>
            <p className="project_name">Emergency Feeding Drive</p>
          </div>
          <div className="project_box">
            <img className="image_of_project" src={img38}/>
            <div className="image_of_project_cover"></div>
            <p className="project_name">Home-to-Home Care Service</p>
          </div>
          <div className="project_box">
            <img className="image_of_project" src={img33}/>
            <div className="image_of_project_cover"></div>
            <p className="project_name">School Feeding Program</p>
          </div>
        </div>
      </div>

      <div className="future_plan_main">
        <div className="future_plan_text">
          We Plan In Future To Build The Biggest Camp For Helpless People
        </div>
        <div className="Future_plans_box">
          <div className="future_things_main_container">
            <div className="future_plan">
              <div className="future_number">1</div>
              <p className="text_1">Food Packing</p>
              <p className="text_2">
                Continue preparing and distributing food packs to vulnerable families in crisis.
              </p>
            </div>
            <div className="future_plan">
              <div className="future_number">2</div>
              <p className="text_1">Mobile Medical Units</p>
              <p className="text_2">
                Deploy mobile clinics to reach elders and mentally challenged people in remote villages.
              </p>
            </div>
            <div className="future_plan">
              <div className="future_number">3</div>
              <p className="text_1">Safe Housing Units</p>
              <p className="text_2">
                Build long-term housing units for abandoned seniors and people with mental illness.
              </p>
            </div>
            <div className="future_plan">
              <div className="future_number">4</div>
              <p className="text_1">Mental Health Center</p>
              <p className="text_2">
                Establish a specialized center for mental health care, therapy, and rehabilitation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="partners_main">
          <p className="partner_text_1">Partners of Menna</p>
          <div className="partners_list">
            <div className="each_partner">
              <img className="partner_logo" />
              <p className="partner_description">
                Collaboration with local and international health foundations for treatments.
              </p>
            </div>
            <div className="each_partner">
              <img className="partner_logo" />
              <p className="partner_description">
                Chapa payment system for secure and simple donations.
              </p>
            </div>
            <div className="each_partner">
              <img className="partner_logo" />
              <p className="partner_description">
                Municipal government support for facility and shelter expansion.
              </p>
            </div>
            <div className="each_partner">
              <img className="partner_logo" />
              <p className="partner_description">
                NGO partners supporting our food and disaster relief programs.
              </p>
            </div>
            <div className="each_partner">
              <img className="partner_logo" />
              <p className="partner_description">
                Volunteer youth networks involved in school meal services.
              </p>
            </div>
            <div className="each_partner">
              <img className="partner_logo" />
              <p className="partner_description">
                France-based Menna partners facilitating outreach and donations.
              </p>
            </div>
            <div className="each_partner">
              <img className="partner_logo" />
              <p className="partner_description">
                US supporters funding emergency care and housing projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
