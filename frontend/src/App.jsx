import { useState } from "react";
import "./App.css";

const translations = {
  en: {
    language: "English",

    welcome: "WELCOME BACK 👋",
    hello: "Hello, Farmer!",
    welcomeText:
      "Manage your procurement and get agricultural assistance in one place.",

    procurement: "Procurement",
    procurementText:
      "Check procurement centres, schedules and get your digital token.",
    viewProcurement: "View Procurement →",

    ai: "Kissan AI Assistant",
    aiText:
      "Ask questions about crops, farming and your procurement.",
    askAI: "Ask Kissan AI →",

    token: "My Token",
    tokenText:
      "Check your current token and estimated waiting time.",
    viewToken: "View Token →",

    cropHealth: "Crop Health",
    cropHealthText:
      "Get information about crop health and common diseases.",
    checkHealth: "Check Crop Health →",

    community: "Farmer Community",
    communityText:
      "Connect with farmers near you and share farming advice.",
    joinCommunity: "Join Community →",

    nearby: "Nearby Procurement Centres",
    nearbyText: "Find centres and check their current queue.",
    viewAll: "View All",

    moderate: "Moderate Queue",
    low: "Low Queue",
    farmers: "Farmers",
    viewCentre: "View Centre",

    back: "Back to Dashboard",

    localNetwork: "LOCAL FARMER NETWORK",
    communityTitle: "Meerut Farmer Community",
    communityDescription:
      "Connect with farmers near you, ask questions and share farming experiences.",
    farmersNearby: "Farmers nearby",

    questionTitle: "Have a question? 🌱",
    questionPlaceholder:
      "Ask other farmers about crops, farming, diseases or anything related to agriculture...",
    postQuestion: "Post Question",

    wheatQuestion:
      "Which wheat variety is performing well this season?",
    wheatDescription:
      "I am planning to sow wheat next week. Would love to know what other farmers are using.",

    tomatoQuestion:
      "My tomato leaves are turning yellow. Has anyone faced this?",
    tomatoDescription:
      "I have noticed yellow leaves over the last few days. Any suggestions?",

    helpful: "Helpful",

    register: "Register",
    registrationTitle: "Farmer Registration",
    registrationSubtitle:
      "Register on KissanSetu to connect with farmers near you.",

    name: "Full Name",
    phone: "Mobile Number",
    state: "State",
    district: "District",
    village: "Village / Area",
    pincode: "PIN Code",

    namePlaceholder: "Enter your full name",
    phonePlaceholder: "Enter your mobile number",
    statePlaceholder: "Enter your state",
    districtPlaceholder: "Enter your district",
    villagePlaceholder: "Enter your village or area",
    pincodePlaceholder: "Enter your PIN code",

    registerButton: "Register Farmer",
    registering: "Registering...",

    registrationSuccess:
      "Farmer registered successfully! 🌾",
    registrationError:
      "Unable to register farmer. Please try again.",

    requiredFields:
      "Please fill in all the fields.",

    alreadyRegistered:
      "Want to return to the dashboard?",
  },

  hi: {
    language: "हिंदी",

    welcome: "वापसी पर स्वागत है 👋",
    hello: "नमस्ते किसान जी!",
    welcomeText:
      "अपनी खरीदारी का प्रबंधन करें और कृषि संबंधी सहायता एक ही जगह पाएं।",

    procurement: "फसल खरीद",
    procurementText:
      "खरीद केंद्र, समय-सारणी देखें और अपना डिजिटल टोकन प्राप्त करें।",
    viewProcurement: "खरीद देखें →",

    ai: "किसान AI सहायक",
    aiText:
      "फसल, खेती और खरीद से जुड़े सवाल पूछें।",
    askAI: "किसान AI से पूछें →",

    token: "मेरा टोकन",
    tokenText:
      "अपना वर्तमान टोकन और अनुमानित प्रतीक्षा समय देखें।",
    viewToken: "टोकन देखें →",

    cropHealth: "फसल स्वास्थ्य",
    cropHealthText:
      "फसल के स्वास्थ्य और सामान्य बीमारियों की जानकारी प्राप्त करें।",
    checkHealth: "फसल स्वास्थ्य देखें →",

    community: "किसान समुदाय",
    communityText:
      "अपने आसपास के किसानों से जुड़ें और खेती की जानकारी साझा करें।",
    joinCommunity: "समुदाय से जुड़ें →",

    nearby: "नज़दीकी खरीद केंद्र",
    nearbyText: "केंद्र खोजें और वर्तमान कतार देखें।",
    viewAll: "सभी देखें",

    moderate: "मध्यम कतार",
    low: "कम कतार",
    farmers: "किसान",
    viewCentre: "केंद्र देखें",

    back: "डैशबोर्ड पर वापस जाएं",

    localNetwork: "स्थानीय किसान नेटवर्क",
    communityTitle: "मेरठ किसान समुदाय",
    communityDescription:
      "अपने आसपास के किसानों से जुड़ें, सवाल पूछें और खेती के अनुभव साझा करें।",
    farmersNearby: "नज़दीकी किसान",

    questionTitle: "कोई सवाल है? 🌱",
    questionPlaceholder:
      "फसल, खेती, बीमारी या कृषि से जुड़ा कोई भी सवाल पूछें...",
    postQuestion: "सवाल पोस्ट करें",

    wheatQuestion:
      "इस मौसम में गेहूं की कौन सी किस्म अच्छी है?",
    wheatDescription:
      "मैं अगले सप्ताह गेहूं बोने की योजना बना रहा हूं। जानना चाहता हूं कि दूसरे किसान कौन सी किस्म इस्तेमाल कर रहे हैं।",

    tomatoQuestion:
      "मेरे टमाटर के पत्ते पीले हो रहे हैं। क्या किसी और को भी ऐसी समस्या हुई है?",
    tomatoDescription:
      "पिछले कुछ दिनों से पत्ते पीले हो रहे हैं। कोई सुझाव?",

    helpful: "उपयोगी",

    register: "पंजीकरण",
    registrationTitle: "किसान पंजीकरण",
    registrationSubtitle:
      "अपने आसपास के किसानों से जुड़ने के लिए KissanSetu पर पंजीकरण करें।",

    name: "पूरा नाम",
    phone: "मोबाइल नंबर",
    state: "राज्य",
    district: "जिला",
    village: "गांव / क्षेत्र",
    pincode: "पिन कोड",

    namePlaceholder: "अपना पूरा नाम दर्ज करें",
    phonePlaceholder: "अपना मोबाइल नंबर दर्ज करें",
    statePlaceholder: "अपना राज्य दर्ज करें",
    districtPlaceholder: "अपना जिला दर्ज करें",
    villagePlaceholder: "अपना गांव या क्षेत्र दर्ज करें",
    pincodePlaceholder: "अपना पिन कोड दर्ज करें",

    registerButton: "किसान का पंजीकरण करें",
    registering: "पंजीकरण हो रहा है...",

    registrationSuccess:
      "किसान का पंजीकरण सफल रहा! 🌾",
    registrationError:
      "पंजीकरण नहीं हो सका। कृपया दोबारा प्रयास करें।",

    requiredFields:
      "कृपया सभी जानकारी भरें।",

    alreadyRegistered:
      "डैशबोर्ड पर वापस जाना चाहते हैं?",
  },
};

function App() {
  const [language, setLanguage] = useState("en");
  const [page, setPage] = useState("dashboard");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    district: "",
    village: "",
    pincode: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const t = translations[language];


  // =========================
  // FORM INPUT
  // =========================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // =========================
  // REGISTER FARMER
  // =========================

  const handleRegister = async (e) => {
    e.preventDefault();

    setMessage("");

    if (
      !formData.name ||
      !formData.phone ||
      !formData.state ||
      !formData.district ||
      !formData.village ||
      !formData.pincode
    ) {
      setMessage(t.requiredFields);
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/farmers",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(t.registrationSuccess);

        setFormData({
          name: "",
          phone: "",
          state: "",
          district: "",
          village: "",
          pincode: "",
        });
      } else {
        setMessage(
          data.message || t.registrationError
        );
      }

    } catch (error) {

      console.error("Registration error:", error);

      setMessage(t.registrationError);

    } finally {
      setLoading(false);
    }
  };


  // =========================
  // NAVBAR
  // =========================

  const Navbar = () => (
    <nav className="navbar">

      <div
        className="logo"
        onClick={() => setPage("dashboard")}
        style={{ cursor: "pointer" }}
      >
        🌾 <span>KissanSetu</span>
      </div>

      <div className="nav-right">

        <select
          value={language}
          onChange={(e) =>
            setLanguage(e.target.value)
          }
          className="language-selector"
        >
          <option value="en">🌐 English</option>
          <option value="hi">🌐 हिंदी</option>
        </select>

        <span>🔔</span>

        <button
          className="register-nav-button"
          onClick={() => setPage("register")}
        >
          👨‍🌾 {t.register}
        </button>

      </div>

    </nav>
  );


  // =========================
  // REGISTRATION PAGE
  // =========================

  if (page === "register") {
    return (
      <div className="app">

        <Navbar />

        <main className="registration-page">

          <button
            className="back-button"
            onClick={() => setPage("dashboard")}
          >
            ← {t.back}
          </button>


          <div className="registration-container">

            <div className="registration-header">

              <div className="registration-icon">
                👨‍🌾
              </div>

              <h1>
                {t.registrationTitle}
              </h1>

              <p>
                {t.registrationSubtitle}
              </p>

            </div>


            <form
              className="registration-form"
              onSubmit={handleRegister}
            >

              {/* NAME */}

              <div className="form-group">

                <label>
                  {t.name}
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder}
                />

              </div>


              {/* PHONE */}

              <div className="form-group">

                <label>
                  {t.phone}
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.phonePlaceholder}
                  maxLength="10"
                />

              </div>


              {/* STATE */}

              <div className="form-group">

                <label>
                  {t.state}
                </label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder={t.statePlaceholder}
                />

              </div>


              {/* DISTRICT */}

              <div className="form-group">

                <label>
                  {t.district}
                </label>

                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  placeholder={t.districtPlaceholder}
                />

              </div>


              {/* VILLAGE */}

              <div className="form-group">

                <label>
                  {t.village}
                </label>

                <input
                  type="text"
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  placeholder={t.villagePlaceholder}
                />

              </div>


              {/* PINCODE */}

              <div className="form-group">

                <label>
                  {t.pincode}
                </label>

                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder={t.pincodePlaceholder}
                  maxLength="6"
                />

              </div>


              <button
                type="submit"
                className="registration-submit"
                disabled={loading}
              >
                {loading
                  ? t.registering
                  : t.registerButton}
              </button>


              {message && (
                <div className="registration-message">
                  {message}
                </div>
              )}

            </form>

          </div>

        </main>

      </div>
    );
  }


  // =========================
  // COMMUNITY PAGE
  // =========================

  if (page === "community") {
    return (
      <div className="app">

        <Navbar />

        <main className="community-page">

          <button
            className="back-button"
            onClick={() => setPage("dashboard")}
          >
            ← {t.back}
          </button>


          <div className="community-header">

            <div>

              <p className="small-text">
                {t.localNetwork}
              </p>

              <h1>
                👨‍🌾 {t.communityTitle}
              </h1>

              <p>
                {t.communityDescription}
              </p>

            </div>


            <div className="community-members">

              <span>👥</span>

              <strong>127</strong>

              <span>
                {t.farmersNearby}
              </span>

            </div>

          </div>


          <div className="post-box">

            <h2>
              {t.questionTitle}
            </h2>

            <textarea
              placeholder={t.questionPlaceholder}
            />

            <button className="post-button">
              {t.postQuestion}
            </button>

          </div>


          <div className="community-posts">

            <div className="community-post">

              <div className="post-user">

                <span className="post-avatar">
                  👨‍🌾
                </span>

                <div>

                  <strong>
                    Rajesh Kumar
                  </strong>

                  <span>
                    {language === "en"
                      ? "Meerut • 2 hours ago"
                      : "मेरठ • 2 घंटे पहले"}
                  </span>

                </div>

              </div>


              <h3>
                🌾 {t.wheatQuestion}
              </h3>

              <p>
                {t.wheatDescription}
              </p>


              <div className="post-actions">

                <span>❤️ 18</span>

                <span>💬 7</span>

                <span>👍 {t.helpful}</span>

              </div>

            </div>


            <div className="community-post">

              <div className="post-user">

                <span className="post-avatar">
                  👩‍🌾
                </span>

                <div>

                  <strong>
                    Sunita Devi
                  </strong>

                  <span>
                    {language === "en"
                      ? "Meerut • 5 hours ago"
                      : "मेरठ • 5 घंटे पहले"}
                  </span>

                </div>

              </div>


              <h3>
                🍅 {t.tomatoQuestion}
              </h3>

              <p>
                {t.tomatoDescription}
              </p>


              <div className="post-actions">

                <span>❤️ 12</span>

                <span>💬 9</span>

                <span>👍 {t.helpful}</span>

              </div>

            </div>

          </div>

        </main>

      </div>
    );
  }


  // =========================
  // DASHBOARD
  // =========================

  return (
    <div className="app">

      <Navbar />

      <main className="dashboard">

        <section className="welcome">

          <div>

            <p className="small-text">
              {t.welcome}
            </p>

            <h1>
              {t.hello}
            </h1>

            <p>
              {t.welcomeText}
            </p>

          </div>

        </section>


        <section className="feature-grid">


          <div className="feature-card procurement">

            <div className="icon">
              🚜
            </div>

            <h2>
              {t.procurement}
            </h2>

            <p>
              {t.procurementText}
            </p>

            <button>
              {t.viewProcurement}
            </button>

          </div>


          <div className="feature-card chatbot">

            <div className="icon">
              🤖
            </div>

            <h2>
              {t.ai}
            </h2>

            <p>
              {t.aiText}
            </p>

            <button>
              {t.askAI}
            </button>

          </div>


          <div className="feature-card">

            <div className="icon">
              🎟️
            </div>

            <h2>
              {t.token}
            </h2>

            <p>
              {t.tokenText}
            </p>

            <button>
              {t.viewToken}
            </button>

          </div>


          <div className="feature-card">

            <div className="icon">
              🌱
            </div>

            <h2>
              {t.cropHealth}
            </h2>

            <p>
              {t.cropHealthText}
            </p>

            <button>
              {t.checkHealth}
            </button>

          </div>


          <div className="feature-card community-card">

            <div className="icon">
              👨‍🌾
            </div>

            <h2>
              {t.community}
            </h2>

            <p>
              {t.communityText}
            </p>

            <button
              onClick={() =>
                setPage("community")
              }
            >
              {t.joinCommunity}
            </button>

          </div>

        </section>


        <section className="centres">

          <div className="section-heading">

            <div>

              <h2>
                📍 {t.nearby}
              </h2>

              <p>
                {t.nearbyText}
              </p>

            </div>

            <button className="view-all">
              {t.viewAll}
            </button>

          </div>


          <div className="centre-grid">


            <div className="centre-card">

              <div>

                <h3>
                  {language === "en"
                    ? "Meerut Procurement Centre"
                    : "मेरठ खरीद केंद्र"}
                </h3>

                <p>
                  📍{" "}
                  {language === "en"
                    ? "Meerut, Uttar Pradesh"
                    : "मेरठ, उत्तर प्रदेश"}
                </p>

              </div>


              <div className="centre-status">

                <span className="status-dot"></span>

                {t.moderate}

              </div>


              <div className="centre-info">

                <span>
                  👥 42 {t.farmers}
                </span>

                <span>
                  ⏱️{" "}
                  {language === "en"
                    ? "~1 hr 20 min"
                    : "~1 घंटा 20 मिनट"}
                </span>

              </div>


              <button>
                {t.viewCentre}
              </button>

            </div>


            <div className="centre-card">

              <div>

                <h3>
                  {language === "en"
                    ? "Modipuram Centre"
                    : "मोदीपुरम खरीद केंद्र"}
                </h3>

                <p>
                  📍{" "}
                  {language === "en"
                    ? "Modipuram, Uttar Pradesh"
                    : "मोदीपुरम, उत्तर प्रदेश"}
                </p>

              </div>


              <div className="centre-status">

                <span className="status-dot"></span>

                {t.low}

              </div>


              <div className="centre-info">

                <span>
                  👥 18 {t.farmers}
                </span>

                <span>
                  ⏱️{" "}
                  {language === "en"
                    ? "~35 min"
                    : "~35 मिनट"}
                </span>

              </div>


              <button>
                {t.viewCentre}
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;