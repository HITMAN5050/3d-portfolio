import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder & CMO</h4>
                <h5>Runiverse - Gamified Running and Fitness Platform</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Co-built India's first gamified running app — live on Android Play
              Store. Own the full product marketing function: brand strategy,
              growth engine, Instagram content playbook, iOS waitlist system, and
              SSIP grant pitch. Also hands-on with frontend development and
              AI-directed architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SWE Intern</h4>
                <h5>Tripta Innovation Pvt. Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Shipped production-ready features across internal and client-facing
              web apps. Built and deployed two live AI-powered assistant
              chatbots: assistant.tripta.in/rely and assistant.tripta.in/radix.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Lead</h4>
                <h5>Imagine X (Freelance)</h5>
              </div>
              <h3>2024–</h3>
            </div>
            <p>
              Lead a small team of developers on freelance client projects.
              Delivered a production-grade Mobile CRM (React Native + Appwrite +
              Meta WhatsApp Business API) and TailorPro SaaS (Next.js + Appwrite
              + jsPDF).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE</h4>
                <h5>IIIT Vadodara (Gandhinagar)</h5>
              </div>
              <h3>2024–28</h3>
            </div>
            <p>
              CPI: 6.46 | Ideathon Finalist at Cerebro 2024–25 (top applicants
              from 26,000+).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12th & 10th</h4>
                <h5>BAPS Swaminarayan Gurukul, Gondal</h5>
              </div>
              <h3>2022–24</h3>
            </div>
            <p>
              12th Boards: 94% (97.08 PR) | JEE Mains: 98.00 PR | 10th Boards:
              92%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
