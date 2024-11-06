// haha
Vue.component("headerComponent", {
    template: `
      <div class="header">
      <img src="/images/dwell.png" alt="Logo" class="logo">
      <ul class="nav-links">
        <li><a href="#" :class="{ active: $root.currentView === 'home' }" @click.prevent="navigate('home')">Home</a></li>
        <li><a href="#" :class="{ active: $root.currentView === 'applicationProcess' }" @click.prevent="navigate('applicationProcess')">Service</a></li>
        <li><a href="#" :class="{ active: $root.currentView === 'faqs' }" @click.prevent="navigate('faqs')">Contact</a></li>
      </ul>
      <button onclick="" class="applyButtonHeader">Join Us</button>
      </div>
  
    `,
    methods: {
      navigate(view) {
        this.$root.currentView = view;
        window.scrollTo(0, 0); // Scroll to top of the page
      },
    },
  });
  
  
  Vue.component("home", {
    data() {
      return {
        boxes: [
          // Your existing data
        ],
      };
    },
    template: `
      <div class="homeRoot">
        <div class="homeContainer">
          <div class="introText">
            <h1>DWELL</h1>
            <br>
            <h2 class="bannerText">Faith Formation & Ongoing Support for Godparents</h2>
            <br>
            <h2 class="smallBannerText">Meaningful formation in minutes. Relationship that's lifelong</h2>
            <br>
            <button class="applyButton" onclick="window.location.href='your_link_here'">Pre - Jordan Program</button>
            <button class="applyButton" onclick="window.location.href='your_link_here'">Bethany</button>
            <img class="churchImage" src="images/church.png">
          </div>       
           </div>

  
        <div class="brownBlock">
          <h3>Flash information with Catholic content creator</h3>
          <h3>Ways to foster a lifelong faith journey</h3>
        </div>
  
        <div class="learningFacilitators">
          <div class="innerContainer">
            <!-- First Row: mainBlock and secondaryBlock -->
            <div class="row">
              <div class="mainBlock">
                <h1>Fr. Mike Schmitz</h1>
                <h2>The Grace of Baptism</h2>
                <img src="images/1.jpg" class="facultyImage">
                <p>Director of Youth and Young Adult Ministry for the Diocese of Duluth and host of the widely popular podcasts 'Bible in a Year' and 'The Catechism in a Year' by Ascension, Fr. Mike speaks about the special grace received in the Baptism that makes us sons and daughters of God.</p>
              </div>
              <div class="secondaryBlock">
                <h1>Jim Gaffigan</h1>
                <h2>Teaches the Role of a Godparent</h2>
                <img src="images/2.jpg" class="facultyImage">
                <p>A stand-up comedian celebrated for his clean, family-focused humor and subtle references to his Catholic faith, Jim delivers an engaging and humorous talk on the important role of baptismal godparents in guiding and supporting the spiritual lives of their godchildren.</p>
              </div>
            </div>
            <!-- Second Row: thirdBlock -->
            <div class="thirdBlock">
              <h1>Ana & Daniel Glaze</h1>
              <h2>The Necessity of Baptism</h2>
              <img src="images/3.jpg" class="facultyImage">
              <p>Creators of the YouTube channel 'That Catholic Couple,' where they evangelize by presenting the pursuit of holiness in married life as a path to true happiness.</p>
            </div>
          </div>
        </div>
      </div>
    `,
  });
  
  
  Vue.component("applicationProcess", {
    data() {
      return {
        boxes: [
          {
            title: "Seminar 1: Customer Discovery",
            key: "November 15/2024, Notre Dame Campus, 20-30 hours",
            points: [
              "Building Your Ideal Customer Profile (ICP): Learn how to define and target the right customers for your product",
              "Messaging and Positioning: Develop effective messaging that resonates with your target audience  ",
              "Customer Outreach: Understand best practices for reaching potential customers efficiently",
              "Real-World Case Studies: AppDynamics, Harness, and Traceable will serve as examples of successful startups’ customer discovery processes",
            ],
          },
          {
            title: "Seminar 2: Design Partners and Fundraising",
            key: "February/March 2025 (During Winter/Spring Break), Silicon Valley, 20-30 hours",
            points: [
              "Engaging Design Partners: Learn how to collaborate with early adopters to refine and validate your product",
              "Fundraising Basics: Gain insights into venture capital, including fundraising strategies, pitch creation, and investor relations",
              "History of Venture Capital: Understand the historical dynamics of the venture capital industry and how they impact founders",
            ],
          },
          {
            title: "Seminar 3: Pitching, Hiring, and Leadership with Integrity",
            key: "April/May 2025, Notre Dame Campus, 2 hours",
            points: [
              "Pitching Your Startup: Teams will present their investor pitch and receive feedback from venture experts",
              "Hiring and Team Building: Learn how to hire and manage the right team for your startup",
              "Leadership with Integrity: Explore leadership challenges while maintaining ethical integrity and strong team dynamics",
            ],
          },
        ],
      };
    },
    template: `
    <div class="applicationProcessContainer">
      <div class="applicationProcessText">
          <h1>Our Service</h1>
          <br>
          <p>
          PAPERWORK IN SECONDS.
          FORMATION IN MINUTES.
          RELATIONSHIP THAT’S LIFELONG.
          </p>
      </div>
    
      <button class="applicationProcessButton" onclick="">
          Free Trail
      </button>
  

    </div>
  
  
      `,
  });
  
  // Define the 'faqs' component
  Vue.component("faqs", {
    data() {
      return {
        faqList: [
          {
            question: "What is Dwell's goal?",
            answer:
              "PAPERWORK IN SECONDS.FORMATION IN MINUTES.RELATIONSHIP THAT’S LIFELONG.",
          },
         
        ],
      };
    },
    template: `
          <div class="faqsContainer">
              <h1>FAQS</h1>
              <br>
              <ul>
                  <li v-for="(faq, index) in faqList" :key="index">
                      <h2>{{ faq.question }}</h2>
                      <h3>{{ faq.answer }}</h3>
                      <br>
                  </li>
              </ul>
          </div>
      `,
  });
  
  Vue.component("infoSection", {
    props: ["section"],
    template: `
        <div class="infoSection">
          <div class="left">
            <h2>{{ section.leftTitle }}</h2>
            <p>{{ section.leftContent }}</p>
          </div>
          <div class="right">
            <h2>{{ section.rightTitle }}</h2>
            <p>{{ section.rightContent }}</p>
          </div>
        </div>
      `,
  });
  
  Vue.component("footerComponent", {
    template: `
        <footer class="footerContainer">
          <div class="footerContent">
            <p>&copy; 2024 DWell. All rights reserved.</p>
            <nav class="footerNav">
              <a href="#" @click.prevent="navigate('home')">Home</a> |
              <a href="#" @click.prevent="navigate('applicationProcess')">Service</a> |
              <a href="#" @click.prevent="navigate('faqs')">Contact</a>
            </nav>
          </div>
        </footer>
      `,
    methods: {
      navigate(view) {
        this.$root.currentView = view;
        window.scrollTo(0, 0); // Scroll to the top of the page after changing the view
      },
    },
  });
  
  // Initialize Vue instance
  new Vue({
    el: "#app",
    data: {
      currentView: "home", // Set default view
    },
  });