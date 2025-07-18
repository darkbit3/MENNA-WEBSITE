import "./About.css";

const About = () => {
  return (
    <div className="about_container">
      <p className="page_name">Menna Story</p>
      <div className="stroy_with_pic">
        <p className="story_full_text">
          Menna Elderly & Mentally Challenging Support Center is a non-governmental, non-political, nonprofit organization founded in 2014 by a group of compassionate university students in Gondar, Ethiopia. Originally launched as "Menna Free Food Service" to feed homeless individuals, the initiative evolved into a full care center offering comprehensive support for the elderly and mentally challenged who have no one to support them. Menna now provides shelter, food, clothing, medical care, and emotional support to those in desperate need.
        </p>
        <img src="" className="imag_of_story" />
      </div>

      <div className="our_vision_page">
        <h1 className="our_vision_text">Our Vision</h1>
        <div className="our_visions_main_container">
          <div className="vision_box">
            <i>Q</i>
            <h3>Provide Shelter</h3>
            <p>
              Offer a secure, loving home for elderly and mentally challenged individuals without family.
            </p>
          </div>
          <div className="vision_box">
            <i>Q</i>
            <h3>Deliver Medical Help</h3>
            <p>
              Ensure access to healthcare services and essential medication support for our residents.
            </p>
          </div>
          <div className="vision_box">
            <i>Q</i>
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
          <img className="Gallery_pic" />
          <img className="Gallery_pic" />
          <img className="Gallery_pic" />
          <img className="Gallery_pic" />
          <img className="Gallery_pic" />
          <img className="Gallery_pic" />
          <img className="Gallery_pic" />
          <img className="Gallery_pic" />
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
            <img className="image_of_project" />
            <div className="image_of_project_cover"></div>
            <p className="project_name">Care Shelter Expansion 2025</p>
          </div>
          <div className="project_box">
            <img className="image_of_project" />
            <div className="image_of_project_cover"></div>
            <p className="project_name">Emergency Feeding Drive</p>
          </div>
          <div className="project_box">
            <img className="image_of_project" />
            <div className="image_of_project_cover"></div>
            <p className="project_name">Home-to-Home Care Service</p>
          </div>
          <div className="project_box">
            <img className="image_of_project" />
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
