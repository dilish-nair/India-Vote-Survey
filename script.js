const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 960 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);





  // Get references to dropdown menus
  const stateDropdown = document.getElementById('stateDropdown');
  const parliamentDropdown = document.getElementById('parliamentDropdown');
  const assemblyDropdown = document.getElementById('assemblyDropdown');

  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const option3 = document.getElementById("option3");

  option1.addEventListener("change", function() {
    stateDropdown.disabled = !option1.checked;
    parliamentDropdown.disabled = true;
    assemblyDropdown.disabled = true;
  })

  option2.addEventListener("change", function() {
    stateDropdown.disabled = !option2.checked;
    parliamentDropdown.disabled = !option2.checked;
    assemblyDropdown.disabled = true;
  })

  option3.addEventListener("change", function() {
    stateDropdown.disabled = !option3.checked;
    parliamentDropdown.disabled = !option3.checked;
    assemblyDropdown.disabled = !option3.checked;
  })

  // Define the data for parliament and assembly constituencies
  const constituencyData = {
      "Andhra Pradesh": {
          "Araku": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Srikakulam": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Vizianagaram": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Visakhapatnam": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Anakapalli": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kakinada": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Amalapuram": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Rajahmundry": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Narasapuram": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Eluru": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Machilipatnam": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Vijayawada": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Guntur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Narasaraopet": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bapatla": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ongole": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nandyal": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kurnool": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Anantapur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Hindupur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kadapa": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nellore": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Tirupati": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Rajampet": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Chittoor": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Arunachal Pradesh": {
          "Arunachal East": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Arunachal West": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Assam": {
          "Kokrajhar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dhubri": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Barpeta": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Darrang–Udalguri": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Guwahati": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Diphu": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Karimganj": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Silchar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nagaon": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kaziranga": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sonitpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jorhat": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dibrugarh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Lakhimpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Andaman and Nicobar Islands": {
          "Andaman and Nicobar Islands": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Bihar": {
          "Valmiki Nagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Paschim Champaran": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Purvi Champaran": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sheohar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sitamarhi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Madhubani": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jhanjharpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Supaul": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Araria": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kishanganj": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Katihar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Purnia": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Madhepura": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Darbhanga": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Muzaffarpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Vaishali": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Gopalganj": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Siwan": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Maharajganj": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Saran": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Hajipur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ujiarpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Samastipur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Begusarai": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Khagaria": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bhagalpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Banka": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Munger": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nalanda": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Patna Sahib": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Pataliputra": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Arrah": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Buxar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sasaram": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Karakat": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jahanabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Aurangabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Gaya": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nawada": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jamui": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Chhattisgarh": {
          "Sarguja": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Raigarh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Janjgir–Champa": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Korba": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bilaspur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Rajnandgaon": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Durg": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Raipur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mahasamund": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bastar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kanker": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Chandigarh": {
          "Chandigarh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Dadra and Nagar Haveli and Daman and Diu": {
          "Dadra and Nagar Haveli": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Daman and Diu": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Delhi": {
          "Chandni Chowk": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "North East Delhi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "East Delhi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "New Delhi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "North West Delhi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "West Delhi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "South Delhi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Goa": {
          "North Goa": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "South Goa": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Gujarat": {
          "Kachchh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Banaskantha": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Patan": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mahesana": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sabarkantha": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Gandhinagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ahmedabad East": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ahmedabad West": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Surendranagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Rajkot": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Porbandar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jamnagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Junagadh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Amreli": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bhavnagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Anand": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kheda": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Panchmahal": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dahod": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Vadodara": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Chhota Udaipur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bharuch": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bardoli": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Surat": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Navsari": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Valsad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Haryana": {
          "Ambala": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kurukshetra": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sirsa": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Hisar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Karnal": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sonipat": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Rohtak": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bhiwani–Mahendragarh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Gurgaon": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Faridabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Himachal Pradesh": {
          "Kangra": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mandi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Hamirpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Shimla": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Jharkhand": {
          "Rajmahal": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dumka": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Godda": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Chatra": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kodarma": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Giridih": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dhanbad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ranchi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jamshedpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Singhbhum": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Khunti": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Lohardaga": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Palamau": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Hazaribagh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Jammu and Kashmir": {
          "Baramulla": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Srinagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Anantnag–Rajouri": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Udhampur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jammu": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Karnataka": {
          "Chikkodi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Belgavi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bagalakote": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bijapura": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "kalburgi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Raichur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bidar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Koppal": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bellary": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Haveri": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dharwad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Uttara Kannada": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Davanagere": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Shimoga": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Udupi Chikmagalur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Hassan": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dakshina Kannada": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Chitradurga": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Tumkur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mandya": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mysore": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Chamarajanagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bangalore Rural": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bangalore North": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bangalore Central": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bangalore South": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Chikballapur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kolar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Kerala": {
          "Kasaragod": ["Manjeshwar", "Kasaragod", "Udma", "Kanhangad", "Trikaripur", "Payyannur", "Kalliasseri"],
          "Kannur": ["Taliparamba", "Irikkur", "Azhikode", "Kannur", "Dharmadam", "Mattannur", "Peravoor"],
          "Vadakara": ["Thalassery", "Kuthuparamba", "Vadakara", "Kuttiadi", "Nadapuram", "Quilandy", "Perambra"],
          "Wayanad": ["Mananthavady", "Sulthanbathery", "Kalpetta", "Thiruvambadi", "Ernad", "Nilambur", "Wandoor"],
          "Kozhikode": ["Balusseri", "Elathur", "Kozhikode North", "Kozhikode South", "Beypore", "Kunnamangalam", "Koduvally"],
          "Malappuram": ["Kondotty", "Manjeri", "Perinthalmanna", "Mankada", "Malappuram", "Vengara", "Vallikkunnu"],
          "Ponnani": ["Tirurangadi", "Tanur", "Tirur", "Kottakkal", "Thavanur", "Ponnani", "Thrithala"],
          "Palakkad": ["Pattambi", "Shoranur", "Ottappalam", "Kongad", "Mannarkkad", "Malampuzha", "Palakkad"],
          "Alathur": ["Tarur", "Chittur", "Nemmara", "Alathur", "Chelakkara", "Kunnamkulam", "Wadakkanchery"],
          "Thrissur": ["Guruvayoor", "Manalur", "Ollur", "Thrissur", "Nattika", "Irinjalakuda", "Pudukkad"],
          "Chalakudy": ["Kaipamangalam", "Chalakudy", "Kodungallur", "Perumbavoor", "Angamaly", "Aluva", "Kunnathunad"],
          "Ernakulam": ["Kalamassery", "Paravur", "Vypeen", "Kochi", "Tripunithura", "Ernakulam", "Thrikkakara"],
          "Idukki": ["Muvattupuzha", "Kothamangalam", "Devikulam", "Udumbanchola", "Thodupuzha", "Idukki", "Peerumade"],
          "Kottayam": ["Piravom", "Pala", "Kaduthuruthy", "Vaikom", "Ettumanoor", "Kottayam", "Puthuppally"],
          "Alappuzha": ["Aroor", "Cherthala", "Alappuzha", "Ambalappuzha", "Haripad", "Kayamkulam", "Karunagappally"],
          "Mavelikkara": ["Changanassery", "Kuttanad", "Mavelikkara", "Chengannur", "Kunnathur", "Kottarakkara", "Pathanapuram"],
          "Pathanamthitta": ["Kanjirappally", "Poonjar", "Thiruvalla", "Ranni", "Aranmula", "Konni", "Adoor"],
          "Kollam": ["Chavara", "Punalur", "Chadayamangalam", "Kundara", "Kollam", "Eravipuram", "Chathannoor"],
          "Attingal": ["Varkala", "Attingal", "Chirayinkeezhu", "Nedumangad", "Vamanapuram", "Aruvikkara", "Kattakkada"],
          "Thiruvananthapuram": ["Kazhakkoottam", "Vattiyoorkavu", "Thiruvananthapuram", "Nemom", "Parassala", "Kovalam", "Neyyattinkara"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Ladakh": {
          "Ladakh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Lakshadweep": {
          "Lakshadweep": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Madhya Pradesh": {
          "Morena": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bhind": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Gwalior": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Guna": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Tikamgarh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Damoh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Khajuraho": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Satna": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Rewa": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sidhi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Shahdol": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jabalpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mandla": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Balaghat": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Chhindwara": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Hoshangabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Vidisha": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bhopal": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Rajgarh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dewas": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ujjain": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mandsour": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ratlam": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dhar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Indore": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Khargone": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Khandwa": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Betul": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Maharashtra": {
          "Nandurbar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dhule": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jalgaon": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Raver": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Buldhana": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Akola": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Amravati": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Wardha": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ramtek": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nagpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bhandara–Gondiya": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Gadchiroli–Chimur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Chandrapur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Yavatmal–Washim": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Hingoli": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nanded": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Parbhani": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jalna": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Aurangabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dindori": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nashik": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Palghar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bhiwandi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kalyan": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Thane": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mumbai North": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mumbai North West": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mumbai North East": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mumbai North Central": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mumbai South Central": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mumbai South": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Raigad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Maval": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Pune": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Baramati": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Shirur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ahmednagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Shirdi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Beed": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Osmanabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Latur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Solapur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Madha": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sangli": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Satara": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ratnagiri–Sindhudurg": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kolhapur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Hatkanangle": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Manipur": {
          "Inner Manipur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Outer Manipur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Meghalaya": {
          "Shillong": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Tura": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Mizoram": {
          "Mizoram": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Nagaland": {
          "Nagaland": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Odisha": {
          "Bargarh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sundargarh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sambalpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Keonjhar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mayurbhanj": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Balasore": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bhadrak": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jajpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dhenkanal": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bolangir": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kalahandi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nabarangpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kandhamal": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Cuttack": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kendrapara": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jagatsinghpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Puri": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bhubaneswar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Aska": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Berhampur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Koraput": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Punjab": {
          "Gurdaspur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Amritsar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Khadoor Sahib": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jalandhar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Hoshiarpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Anandpur Sahib": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ludhiana": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Fatehgarh Sahib": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Faridkot": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Firozpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bathinda": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sangrur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Patiala": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Puducherry": {
          "Puducherry": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Rajasthan": {
          "Ganganagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bikaner": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Churu": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jhunjhunu": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sikar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jaipur Rural": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jaipur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Alwar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bharatpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Karauli–Dholpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dausa": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Tonk–Sawai Madhopur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ajmer": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nagaur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Pali": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jodhpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Barmer": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jalore": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Udaipur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Banswara": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Chittorgarh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Rajsamand": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bhilwara": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kota": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jhalawar–Baran": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Sikkim": {
          "Sikkim": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Tamilnadu": {
          "Thiruvallur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Chennai North": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Chennai South": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Chennai Central": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sriperumbudur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kancheepuram": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Arakkonam": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Vellore": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Krishnagiri": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dharmapuri": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Tiruvannamalai": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Arani": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Villupuram": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kallakurichi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Salem": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Namakkal": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Erode": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Tiruppur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nilgiris": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Coimbatore": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Pollachi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dindigul": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Karur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Tiruchirappalli": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Perambalur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Cuddalore": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Chidambaram": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mayiladuturai": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nagapattinam": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Thanjavur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sivaganga": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Madurai": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Theni": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Virudhunagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ramanathapuram": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Thoothukkudi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Tenkasi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Tirunelveli": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kanyakumari": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Telangana": {
          "Adilabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Peddapalle": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Karimnagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nizamabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Zahirabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Medak": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Malkajgiri": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Secunderabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Hyderabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Chevella": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mahbubnagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nagarkurnool": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nalgonda": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bhongir": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Warangal": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mahabubabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Khammam": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Tripura": {
          "Tripura West": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Tripura East": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Uttarakhand": {
          "Tehri Garhwal": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Garhwal": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Almora": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nainital–Udhamsingh Nagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Haridwar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "Uttar Pradesh": {
          "Saharanpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kairana": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Muzaffarnagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bijnor": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Nagina": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Moradabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Rampur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sambhal": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Amroha": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Meerut": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Baghpat": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ghaziabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Gautam Buddha Nagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bulandshahr": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Aligarh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Hathras": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mathura": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Agra": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Fatehpur Sikri": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Firozabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mainpuri": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Etah": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Badaun": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Aonla": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bareilly": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Pilibhit": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Shahjahanpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kheri": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dhaurahra": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sitapur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Hardoi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Misrikh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Unnao": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mohanlalganj": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Lucknow": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Rae Bareli": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Amethi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sultanpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Pratapgarh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Farrukhabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Etawah": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kannauj": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kanpur Urban": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Akbarpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jalaun": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jhansi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Hamirpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Banda": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Fatehpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kaushambi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Phulpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Prayagraj": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Barabanki": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ayodhya": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ambedkar Nagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bahraich": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kaiserganj": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Shrawasti": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Gonda": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Domariyaganj": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Basti": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Sant Kabir Nagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Maharajganj": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Gorakhpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kushi Nagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Deoria": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bansgaon": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Lalganj": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Azamgarh": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ghosi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Salempur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ballia": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jaunpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Machhlishahr": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ghazipur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Chandauli": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Varanasi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bhadohi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mirzapur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Robertsganj": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      "West Bengal": {
          "Cooch Behar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Alipurduars": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jalpaiguri": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Darjeeling": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Raiganj": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Balurghat": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Maldaha Uttar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Maldaha Dakshin": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jangipur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Baharampur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Murshidabad": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Krishnanagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ranaghat": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bangaon": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Barrackpore": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Dum Dum": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Barasat": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Basirhat": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jaynagar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Mathurapur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Diamond Harbour": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jadavpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kolkata Dakshin": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kolkata Uttar": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Howrah": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Uluberia": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Srerampur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Hooghly": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Arambag": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Tamluk": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Kanthi": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Ghatal": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Jhargram": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Medinipur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Purulia": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bankura": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bishnupur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bardhaman Purba": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bardhaman–Durgapur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Asansol": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Bolpur": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          "Birbhum": ["Assembly1", "Assembly2", "Assembly3", "Assembly4", "Assembly5", "Assembly6", "Assembly7"],
          // Add more parliament constituencies and corresponding assembly constituencies for Andhra Pradesh
      },
      // Add data for other states similarly
  };

  // Function to populate parliament dropdown based on selected state
  function populateParliamentDropdown(selectedState) {
      parliamentDropdown.innerHTML = '<option value="">Select Parliament Constituency</option>';
      if (selectedState in constituencyData) {
          const parliamentConstituencies = Object.keys(constituencyData[selectedState]);
          parliamentConstituencies.forEach(function (parliamentConstituency) {
              const option = document.createElement('option');
              option.value = parliamentConstituency;
              option.textContent = parliamentConstituency;
              parliamentDropdown.appendChild(option);
          });
      }
  }

  // Function to populate assembly dropdown based on selected parliament constituency
  function populateAssemblyDropdown(selectedState, selectedParliament) {
      assemblyDropdown.innerHTML = '<option value="">Select Assembly Constituency</option>';
      if (selectedState in constituencyData && selectedParliament in constituencyData[selectedState]) {
          const assemblyConstituencies = constituencyData[selectedState][selectedParliament];
          assemblyConstituencies.forEach(function (assemblyConstituency) {
              const option = document.createElement('option');
              option.value = assemblyConstituency;
              option.textContent = assemblyConstituency;
              assemblyDropdown.appendChild(option);
          });
      }
  }

  // Event listener for state dropdown change
  stateDropdown.addEventListener('change', function () {
      const selectedState = stateDropdown.value;
      populateParliamentDropdown(selectedState);
      // Clear assembly dropdown
      assemblyDropdown.innerHTML = '<option value="">Select Assembly Constituency</option>';
  });

  // Event listener for parliament dropdown change
  parliamentDropdown.addEventListener('change', function () {
      const selectedState = stateDropdown.value;
      const selectedParliament = parliamentDropdown.value;
      populateAssemblyDropdown(selectedState, selectedParliament);
  });


// popup 
// document.getElementById('openPopup').addEventListener('click', function() {
//     document.getElementById('popup').style.display = 'block';
// });

// document.querySelector('.close').addEventListener('click', function() {
//     document.getElementById('popup').style.display = 'none';
// });
