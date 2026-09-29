const properties = [

  {
    id: 1,
    title: "Modern Family House",
    location: "Kigali, Kicukiro",
    type: "house",
    purpose: "rent",
    price: "650,000 RWF",
    period: "/ month",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    bedrooms: 3,
    bathrooms: 2,
    area: "180 m²",
    description: "A beautiful modern family house in a peaceful neighborhood close to schools, shops and transport."
  },

  {
    id: 2,
    title: "Luxury City Apartment",
    location: "Kigali, Nyarutarama",
    type: "apartment",
    purpose: "rent",
    price: "900,000 RWF",
    period: "/ month",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    bedrooms: 2,
    bathrooms: 2,
    area: "120 m²",
    description: "Luxury apartment with modern interior, security and excellent access to Kigali city."
  },

  {
    id: 3,
    title: "Beautiful Garden Villa",
    location: "Kigali, Gacuriro",
    type: "villa",
    purpose: "buy",
    price: "180,000,000 RWF",
    period: "",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
    bedrooms: 4,
    bathrooms: 3,
    area: "300 m²",
    description: "Spacious villa with a beautiful garden, parking and a quiet residential environment."
  },

  {
    id: 4,
    title: "Affordable Apartment",
    location: "Kigali, Kimironko",
    type: "apartment",
    purpose: "rent",
    price: "450,000 RWF",
    period: "/ month",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    bedrooms: 2,
    bathrooms: 1,
    area: "90 m²",
    description: "Affordable and comfortable apartment suitable for a small family or professionals."
  },

  {
    id: 5,
    title: "Premium Family Home",
    location: "Kigali, Kabeza",
    type: "house",
    purpose: "buy",
    price: "95,000,000 RWF",
    period: "",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=80",
    bedrooms: 4,
    bathrooms: 3,
    area: "250 m²",
    description: "Premium family property with large rooms, parking and modern facilities."
  },

  {
    id: 6,
    title: "Modern Studio",
    location: "Kigali, Remera",
    type: "apartment",
    purpose: "rent",
    price: "300,000 RWF",
    period: "/ month",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    bedrooms: 1,
    bathrooms: 1,
    area: "55 m²",
    description: "Modern studio apartment in a convenient location with easy access to the city."
  }

];


let currentProperty = null;

let favorites =
  JSON.parse(localStorage.getItem("goodChoiceFavorites")) || [];


const translations = {

  en: {

    home: "Home",
    properties: "Properties",
    favorites: "Favorites",
    bookings: "Bookings",
    account: "My Account",
    login: "Login",
    register: "Create account",

    heroTitle: "Find a place you'll love to live",
    heroText: "Discover homes, apartments and properties that match your lifestyle.",

    location: "Location",
    propertyType: "Property type",
    purpose: "Purpose",
    search: "Search",

    findHome: "Find a home",
    findHomeText: "Search available properties",

    bookVisit: "Book a visit",
    bookVisitText: "Schedule a property visit",

    listProperty: "List your property",
    listPropertyText: "Reach more customers",

    featured: "Featured Properties",
    viewAll: "View all",

    howWorks: "How Good Choice Works",

    step1Title: "Search",
    step1Text: "Search for a property according to your needs.",

    step2Title: "Choose",
    step2Text: "Compare properties and choose your favorite.",

    step3Title: "Book",
    step3Text: "Book a visit or request the property.",

    bookNow: "Book now",

    bookingTitle: "Book a property",
    yourName: "Your name",
    phone: "Phone number",
    visitDate: "Visit date",
    message: "Message",
    confirmBooking: "Confirm booking"

  },

  rw: {

    home: "Ahabanza",
    properties: "Amazu",
    favorites: "Ayo nakunze",
    bookings: "Booking",
    account: "Konti yanjye",
    login: "Kwinjira",
    register: "Gukora konti",

    heroTitle: "Shaka ahantu uzakunda gutura",
    heroText: "Shaka amazu n'ibibanza bijyanye n'ibyo ukeneye.",

    location: "Aho iherereye",
    propertyType: "Ubwoko bw'inzu",
    purpose: "Intego",
    search: "Shakisha",

    findHome: "Shaka inzu",
    findHomeText: "Reba amazu ahari",

    bookVisit: "Saba gusura",
    bookVisitText: "Teganya igihe cyo gusura",

    listProperty: "Shyiraho inzu yawe",
    listPropertyText: "Menyesha abakiriya benshi",

    featured: "Amazu twahisemo",
    viewAll: "Reba yose",

    howWorks: "Uko Good Choice ikora",

    step1Title: "Shakisha",
    step1Text: "Shakisha inzu ijyanye n'ibyo ukeneye.",

    step2Title: "Hitamo",
    step2Text: "Gerageza amazu atandukanye uhitemo ukunda.",

    step3Title: "Booking",
    step3Text: "Saba gusura cyangwa gukora booking.",

    bookNow: "Bookinga ubu",

    bookingTitle: "Booking y'inzu",
    yourName: "Amazina yawe",
    phone: "Numero ya telefone",
    visitDate: "Itariki yo gusura",
    message: "Ubutumwa",
    confirmBooking: "Emeza booking"

  },

  fr: {

    home: "Accueil",
    properties: "Propriétés",
    favorites: "Favoris",
    bookings: "Réservations",
    account: "Mon compte",
    login: "Connexion",
    register: "Créer un compte",

    heroTitle: "Trouvez un endroit que vous aimerez",
    heroText: "Découvrez des maisons et appartements adaptés à votre style de vie.",

    location: "Localisation",
    propertyType: "Type de propriété",
    purpose: "Objectif",
    search: "Rechercher",

    findHome: "Trouver une maison",
    findHomeText: "Rechercher les propriétés disponibles",

    bookVisit: "Réserver une visite",
    bookVisitText: "Planifier une visite",

    listProperty: "Publier votre propriété",
    listPropertyText: "Atteindre plus de clients",

    featured: "Propriétés recommandées",
    viewAll: "Voir tout",

    howWorks: "Comment Good Choice fonctionne",

    step1Title: "Rechercher",
    step1Text: "Recherchez une propriété selon vos besoins.",

    step2Title: "Choisir",
    step2Text: "Comparez les propriétés et choisissez votre préférée.",

    step3Title: "Réserver",
    step3Text: "Réservez une visite ou demandez la propriété.",

    bookNow: "Réserver",

    bookingTitle: "Réserver une propriété",
    yourName: "Votre nom",
    phone: "Numéro de téléphone",
    visitDate: "Date de visite",
    message: "Message",
    confirmBooking: "Confirmer"

  },

  de: {

    home: "Startseite",
    properties: "Immobilien",
    favorites: "Favoriten",
    bookings: "Buchungen",
    account: "Mein Konto",
    login: "Anmelden",
    register: "Konto erstellen",

    heroTitle: "Finden Sie einen Ort, den Sie lieben werden",
    heroText: "Entdecken Sie Häuser und Wohnungen, die zu Ihrem Lebensstil passen.",

    location: "Ort",
    propertyType: "Immobilientyp",
    purpose: "Zweck",
    search: "Suchen",

    findHome: "Zuhause finden",
    findHomeText: "Verfügbare Immobilien suchen",

    bookVisit: "Besichtigung buchen",
    bookVisitText: "Besichtigung planen",

    listProperty: "Immobilie anbieten",
    listPropertyText: "Mehr Kunden erreichen",

    featured: "Empfohlene Immobilien",
    viewAll: "Alle ansehen",

    howWorks: "So funktioniert Good Choice",

    step1Title: "Suchen",
    step1Text: "Suchen Sie eine Immobilie nach Ihren Bedürfnissen.",

    step2Title: "Auswählen",
    step2Text: "Vergleichen Sie Immobilien und wählen Sie Ihre Favoritin.",

    step3Title: "Buchen",
    step3Text: "Buchen Sie eine Besichtigung.",

    bookNow: "Jetzt buchen",

    bookingTitle: "Immobilie buchen",
    yourName: "Ihr Name",
    phone: "Telefonnummer",
    visitDate: "Besichtigungsdatum",
    message: "Nachricht",
    confirmBooking: "Buchung bestätigen"

  }

};


function renderProperties(list = properties) {

  const grid = document.getElementById("propertyGrid");

  grid.innerHTML = "";

  if (list.length === 0) {

    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:50px">
        <h3>No properties found</h3>
        <p>Try another search.</p>
      </div>
    `;

    return;
  }


  list.forEach(property => {

    const liked = favorites.includes(property.id);

    const card = document.createElement("div");

    card.className = "property-card";

    card.innerHTML = `

      <div class="property-image">

        <img
          src="${property.image}"
          alt="${property.title}"
        >

        <span class="status">
          ${property.purpose === "rent" ? "FOR RENT" : "FOR SALE"}
        </span>

        <button
          class="favorite ${liked ? "liked" : ""}"
          onclick="toggleFavorite(${property.id})"
        >
          ${liked ? "♥" : "♡"}
        </button>

      </div>


      <div class="property-info">

        <h3>
          ${property.title}
        </h3>

        <div class="location">
          📍 ${property.location}
        </div>

        <div class="price">
          ${property.price}

          <span>
            ${property.period}
          </span>
        </div>


        <div class="property-features">

          <span>
            🛏️ ${property.bedrooms} Beds
          </span>

          <span>
            🚿 ${property.bathrooms} Baths
          </span>

          <span>
            📐 ${property.area}
          </span>

        </div>


        <div class="card-buttons">

          <button
            class="details-btn"
            onclick="showProperty(${property.id})"
          >
            Details
          </button>

          <button
            class="book-btn"
            onclick="bookProperty(${property.id})"
          >
            Book
          </button>

        </div>

      </div>

    `;

    grid.appendChild(card);

  });

}


function showProperty(id) {

  const property =
    properties.find(p => p.id === id);

  if (!property) return;

  currentProperty = property;

  document.getElementById("modalImage").src =
    property.image;

  document.getElementById("modalTitle").textContent =
    property.title;

  document.getElementById("modalLocation").textContent =
    "📍 " + property.location;

  document.getElementById("modalPrice").textContent =
    property.price + " " + property.period;

  document.getElementById("modalPurpose").textContent =
    property.purpose === "rent"
      ? "FOR RENT"
      : "FOR SALE";

  document.getElementById("modalDescription").textContent =
    property.description;

  document.getElementById("modalFeatures").innerHTML = `

    <span>🛏️ ${property.bedrooms} Bedrooms</span>

    <span>🚿 ${property.bathrooms} Bathrooms</span>

    <span>📐 ${property.area}</span>

  `;

  document
    .getElementById("propertyModal")
    .classList.add("show");

}


function bookProperty(id) {

  currentProperty =
    properties.find(p => p.id === id);

  document
    .getElementById("bookingModal")
    .classList.add("show");

}


function openBooking() {

  closeModal("propertyModal");

  if (currentProperty) {

    document
      .getElementById("bookingModal")
      .classList.add("show");

  }

}


function submitBooking(event) {

  event.preventDefault();

  const name =
    document.getElementById("customerName").value;

  const phone =
    document.getElementById("customerPhone").value;

  const date =
    document.getElementById("visitDate").value;

  const message =
    document.getElementById("bookingMessage").value;


  const booking = {

    property:
      currentProperty
        ? currentProperty.title
        : "",

    name,
    phone,
    date,
    message,

    created:
      new Date().toISOString()

  };


  const bookings =
    JSON.parse(localStorage.getItem("goodChoiceBookings")) || [];

  bookings.push(booking);

  localStorage.setItem(
    "goodChoiceBookings",
    JSON.stringify(bookings)
  );


  closeModal("bookingModal");

  document.querySelector(
    "#bookingModal form"
  ).reset();

  showMessage(
    "✅ Booking request sent successfully!"
  );

}


function toggleFavorite(id) {

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(item => item !== id);

    showMessage("Removed from favorites");

  } else {

    favorites.push(id);

    showMessage("❤️ Added to favorites");

  }

  localStorage.setItem(
    "goodChoiceFavorites",
    JSON.stringify(favorites)
  );

  renderProperties();

}


function searchProperties() {

  const location =
    document
      .getElementById("searchLocation")
      .value
      .toLowerCase();

  const type =
    document.getElementById("propertyType").value;

  const purpose =
    document.getElementById("purpose").value;


  const results =
    properties.filter(property => {

      const locationMatch =
        !location ||
        property.location
          .toLowerCase()
          .includes(location);

      const typeMatch =
        type === "all" ||
        property.type === type;

      const purposeMatch =
        purpose === "all" ||
        property.purpose === purpose;

      return (
        locationMatch &&
        typeMatch &&
        purposeMatch
      );

    });


  renderProperties(results);

  document
    .getElementById("properties")
    .scrollIntoView({
      behavior: "smooth"
    });

}


function showAllProperties() {

  document
    .getElementById("searchLocation")
    .value = "";

  document
    .getElementById("propertyType")
    .value = "all";

  document
    .getElementById("purpose")
    .value = "all";

  renderProperties(properties);

}


function toggleProfile() {

  document
    .getElementById("profileMenu")
    .classList.toggle("show");

}


function toggleMobileMenu() {

  document
    .getElementById("mobileMenu")
    .classList.toggle("show");

}


function openLogin() {

  document
    .getElementById("profileMenu")
    .classList.remove("show");

  document
    .getElementById("registerModal")
    .classList.remove("show");

  document
    .getElementById("loginModal")
    .classList.add("show");

}


function openRegister() {

  document
    .getElementById("profileMenu")
    .classList.remove("show");

  document
    .getElementById("loginModal")
    .classList.remove("show");

  document
    .getElementById("registerModal")
    .classList.add("show");

}


function login(event) {

  event.preventDefault();

  closeModal("loginModal");

  showMessage(
    "✅ Login successful!"
  );

}


function register(event) {

  event.preventDefault();

  closeModal("registerModal");

  showMessage(
    "✅ Account created successfully!"
  );

}


function openOwnerForm() {

  document
    .getElementById("ownerModal")
    .classList.add("show");

}


function submitOwner(event) {

  event.preventDefault();

  closeModal("ownerModal");

  showMessage(
    "🏡 Property submitted successfully!"
  );

}


function closeModal(id) {

  document
    .getElementById(id)
    .classList.remove("show");

}


function openNotifications() {

  showMessage(
    "🔔 You have no new notifications."
  );

}


function showMessage(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 3000);

}


/* CHAT */

function toggleChat() {

  document
    .getElementById("chatBox")
    .classList.toggle("show");

}


function chatEnter(event) {

  if (event.key === "Enter") {

    sendChat();

  }

}


function sendChat() {

  const input =
    document.getElementById("chatInput");

  const message =
    input.value.trim();

  if (!message) return;


  const chat =
    document.getElementById("chatMessages");


  chat.innerHTML += `

    <div class="user-message">
      ${escapeHTML(message)}
    </div>

  `;


  input.value = "";


  setTimeout(() => {

    let reply =
      "Thank you for contacting Good Choice. How can we help you?";


    const lower =
      message.toLowerCase();


    if (
      lower.includes("price") ||
      lower.includes("cost") ||
      lower.includes("igiciro")
    ) {

      reply =
        "You can see the price of each property on its property card.";

    }


    else if (
      lower.includes("book") ||
      lower.includes("booking") ||
      lower.includes("booking")
    ) {

      reply =
        "Choose a property and click 'Book' to request a visit.";

    }


    else if (
      lower.includes("location") ||
      lower.includes("aho")
    ) {

      reply =
        "Tell us the location you are looking for, for example Kigali, Kicukiro or Nyarutarama.";

    }


    chat.innerHTML += `

      <div class="bot-message">
        🤖 ${reply}
      </div>

    `;


    chat.scrollTop =
      chat.scrollHeight;

  }, 700);

}


function escapeHTML(text) {

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}


/* LANGUAGE */

function changeLanguage(language) {

  const data =
    translations[language];

  if (!data) return;


  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.getAttribute("data-i18n");

      if (data[key]) {

        element.textContent =
          data[key];

      }

    });


  localStorage.setItem(
    "goodChoiceLanguage",
    language
  );

}


document
  .getElementById("language")
  .addEventListener("change", function() {

    changeLanguage(this.value);

  });


/* INITIALIZE */

const savedLanguage =
  localStorage.getItem("goodChoiceLanguage") || "en";

document
  .getElementById("language")
  .value = savedLanguage;

changeLanguage(savedLanguage);

renderProperties();


/* CLOSE MODALS WHEN CLICKING OUTSIDE */

document
  .querySelectorAll(".modal")
  .forEach(modal => {

    modal.addEventListener("click", function(event) {

      if (event.target === modal) {

        modal.classList.remove("show");

      }

    });

  });


/* CLOSE PROFILE WHEN CLICKING OUTSIDE */

document.addEventListener("click", function(event) {

  const profile =
    document.getElementById("profileMenu");

  const button =
    document.querySelector(".profile-btn");

  if (
    profile.classList.contains("show") &&
    !profile.contains(event.target) &&
    !button.contains(event.target)
  ) {

    profile.classList.remove("show");

  }

});
