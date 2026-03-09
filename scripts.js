// =======================================
// ==== GLOBAL VARIABLES ====
let currentSemester = 1;

// =======================================
// ==== NAVIGATION FUNCTIONS ====
function showStore() {
    document.getElementById("store").classList.add("active");
    document.getElementById("student").classList.remove("active");
    setActiveButton(1);
}

function showStudent() {
    document.getElementById("student").classList.add("active");
    document.getElementById("store").classList.remove("active");
    setActiveButton(0);
    resetSemesters();
}

function setActiveButton(index) {
    const btns = document.querySelectorAll(".btn");
    btns.forEach(b => b.classList.remove("active"));
    btns[index].classList.add("active");
}

// =======================================
// ==== STORE FUNCTIONS ====
const productsData = [
    {
        id: 1,
        name: "Calculatrice Scientifique",
        price: "90درهم",
        img: "produit1.png.jpeg",
        delivery: "التوصيل مجاني قرب جامعات مولاي سليمان والمدارس",
        whatsapp: "https://whatsapp.com/dl/",
        description: "آلة حاسبة علمية مثالية لطلبة ."
    },
    {
        id: 2,
        name: "Clé USB 32GB",
        price: "80 درهم",
        img: "img/product2.jpg",
        delivery: "التوصيل مجاني قرب جامعات مولاي سليمان والمدارس",
        whatsapp: "https://whatsapp.com/dl/",
        description: "USB لتخزين الدروس والملفات."
    },
    {
        id: 3,
        name: "Cahier Universitaire",
        price: "25 درهم",
        img: "img/product3.jpg",
        delivery: "التوصيل مجاني قرب جامعات مولاي سليمان والمدارس",
        whatsapp: "https://wa.me/212000000000",
        description: "دفتر منظم لجميع المواد."
    },
    {
        id: 4,
        name: "Sac Bon Qualité",
        price: "150 درهم",
        img: "img/product4.jpg",
        delivery:"التوصيل مجاني قرب جامعات مولاي سليمان س",
        whatsapp: "https://wa.me/212000000000",
        description: "حقيبة ظهر واسعة ومريحة."
    }
];

function displayProducts() {
    const container = document.getElementById("products");
    container.innerHTML = "";

    productsData.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="${product.img}">
            <p style="font-weight:bold; margin-top:10px;">${product.name}</p>
            <p style="color:#e67e22; font-weight:bold;">${product.price}</p>
        `;
        div.onclick = function() {
            openProduct(product.id);
        };
        container.appendChild(div);
    });
}
function searchProducts() {
    const text = document.getElementById("searchInput").value.toLowerCase();
    const container = document.getElementById("products");
    container.innerHTML = "";

    const filtered = productsData.filter(product =>
        product.name.toLowerCase().includes(text)
    );

    filtered.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="${product.img}">
            <p>${product.name}</p>
        `;
        div.onclick = function() {
            container.innerHTML = `
                <div class="product-page">
                    <div class="product-left">
                        <img src="${product.img}">
                    </div>
                    <div class="product-right">
                        <h2>${product.name}</h2>
                        <p>${product.description}</p>
                        <div class="delivery">${product.delivery}</div>
                        <button onclick="window.open('${product.whatsapp}')">
                            شراء عبر واتساب
                        </button>
                        <br><br>
                        <button onclick="displayProducts()">← رجوع</button>
                    </div>
                </div>
            `;
        };
        container.appendChild(div);
    });
}
function openProduct(id){
    const product = productsData.find(p => p.id === id);
    const container = document.getElementById("products");

    let mediaHTML = `<img src="${product.img}" style="width:100%; margin-bottom:10px; border-radius:8px;">`;

    container.innerHTML = `
        <div style="display:flex; gap:20px; flex-wrap:wrap; margin-top:20px;">
            <!-- نصف الصفحة الأيسر -->
            <div style="flex:1; min-width:300px;">
                ${mediaHTML}
            </div>

            <!-- نصف الصفحة الأيمن -->
            <div style="flex:1; min-width:300px; display:flex; flex-direction:column; gap:15px;">
                <h2>${product.name}</h2>
                <p style="color:#e67e22; font-weight:bold;">${product.price}</p>
                <p>${product.description}</p>
                <p style="background:#d0e8ff; padding:10px; border-radius:5px;">${product.delivery}</p>
                <button onclick="window.open('${product.whatsapp}', '_blank')" 
                        style="padding:10px; background:#00b894; color:#fff; border:none; border-radius:5px; cursor:pointer;">
                    شراء عبر واتساب
                </button>
                <button onclick="displayProducts()" 
                        style="padding:10px; background:#e67e22; color:#fff; border:none; border-radius:5px; cursor:pointer;">
                    ← العودة للمنتجات
                </button>
            </div>
        </div>
    `;
}

// =======================================
// ==== STUDENT FUNCTIONS ====
function resetSemesters() {
    document.getElementById("semesters-container").style.display = "flex";
    document.getElementById("back-btn").style.display = "none";
    document.getElementById("modules-container").innerHTML = "";
}

function showModules(semester) {
    currentSemester = semester;

    const semestersContainer = document.getElementById("semesters-container");
    const modulesContainer = document.getElementById("modules-container");
    const backBtn = document.getElementById("back-btn");

    semestersContainer.style.display = "none";
    backBtn.style.display = "block";
    modulesContainer.innerHTML = "";

    let modules = [];

    if (semester === 1) {
        modules = [
            "Analyse1",
            "Analyse2",
            "Électricité",
            "Circuit électrique",
            "Ltc fr",
            "Méthodologie",
            "Algo et programmation"
        ];
    } else if (semester === 2) {
        modules = [
            "Algébre1",
            "Algébre2",
            "thermodynamique",
            "structure de matiére",
            "anglais",
            "mécanique du point...",
            "digital skills et intellegence artificielle"
        ];
        
    }else if (semester === 3) {
        modules = [
            "null",
            "null",
            "null",
            "null",
            "null",
            "null",
            "null"
            
        ];
}else {if (semester === 4) {
        modules = [
            "null",
            "null",
            "null",
            "null",
            "null",
            "null",
            "null"
        ];
}
}
    modules.forEach(name => {
        const div = document.createElement("div");
        div.className = "module";
        div.textContent = name;
        div.onclick = function() {
            showPDFList(name);
        };
        modulesContainer.appendChild(div);
    });
}

// =======================================
// ==== PDF FUNCTIONS ====
function showPDFList(moduleName) {
    const container = document.getElementById("modules-container");

    container.innerHTML = `
        <div style="display:flex; justify-content: space-between; align-items:center; margin-bottom:20px;">
            <h2>${moduleName}</h2>
            <button onclick="showModules(currentSemester)" 
                style="padding:10px 15px; background:#e67e22; color:#fff; border:none; border-radius:5px; cursor:pointer;">
                ← Retour
            </button>
        </div>
        <div id="pdf-grid" style="margin-top:20px; display:flex; flex-direction:column; gap:15px;"></div>
    `;

    const grid = document.getElementById("pdf-grid");

    let pdfs = []; // مصفوفة PDFs لكل Module

    if(moduleName === "Analyse1") {
        pdfs = ["cours TDs Analyse 1-2 GI_MSd","Cours_Analyse1_Chap2 Suite numérique_by Wise GI_MSD","Cours_Analyse1_Chapitre1_Nombre réel GI_msd 2026","cours les suites + les nombre réel prof ST","cours prof ST les suites et les fonctions","TD1 Prof ST","TD2 prof ST","correction TD1 PAR PROF ST","corrction TD1 prof ST","examens analyse1","examen 21_22 an1","Examen Analyse I ","Examen 2022 an1"
     ,"Cours 1.Mo3in" 
        ];
    } else if(moduleName === "Algo et programmation") {
        pdfs = ["TD N°1 algo GI_MSD 2026","TD N°2 GI_MSD","Chapitre1","chapitre2","Chapitre3,4,5 prof youssef","TP1  correction prof youssef","TP2 correction prof youssef","TP3 correction prof youssef","TP4 correction prof youssef","TP5 correction prof youssef","TDs Algo prof Youssef","correction des  partie des TDs","Correction des TDs algo","exam algo 2024","exam algo normale 2025-2026"];
    }else if(moduleName === "Circuit électrique") {
pdfs = ["cours complet circuit électrique et électronique.prof elhajjamy","tout les serie avec correction","Examen_2024_2025_CEE_normal","Correction_Examen_2024_2025_CEE_normal (1)","examen circuit normal 2025-2026","exam tp circuit 2025-2026"];
    }else if(moduleName === "Analyse2") {
pdfs = ["cours prof maaden","cours prof maaden les integral + les équations différenciell","tout les TD avec correction de prof maaden","exercice corrigé avec prof ma3den dans l'amphi ","TD ANALYSE 2 prof TD","examen 2025-2026 analyse2","ANALYSE 2 cours PDF","ANALYSE 2 PDF cours","examen-2021-analyse2","examen 2022 chakir","examen 2023 chakir"
,"ts2.3 analyse 2","td4 . analyse 2","ratt analyse 2 prof maaden 2026"
];
    }else if(moduleName === "Méthodologie") {
pdfs = ["cours MTU (soft skills) (1) GI_MSD 2026","polycope METU","TD methu","metu td."];
    }else if(moduleName === "Électricité") {
pdfs = ["polycope cours electricite 2025","polycope tp electriecite","TD electriecite 2024","Tds Électricité ","tout les Tds électricité 2025","correction les tds 2025 électricité","examens électricité","rattrapage élec 2025-2026"];
     }else if(moduleName === "Ltc fr") {
pdfs = ["LTC cours et TD"];
     }else if(moduleName === "structure de matiére") {
pdfs = ["structures géométriques","Tableau périodique des éléments_01","Tableau périodique des élèments_02","chapitre_ 01 structure","chapitre_ 02 structure","chapitre_ 03 structure","chapitre_ 03 structure atome","chapitre_ 04 structure","chapitre_ 05 structure","chapitre_ 06 structure","chapitre_ 07 structure","structure_atome0000000"
    ,"Examen_SdM_ Rattrapage","Examen_SdM_MIPC-GE-GM_Section A_P1S1_2021","Examen_SdM_Section A_S1_2020_2021- Ordinaire","Examen_SdM_Section B_S2_2019_2020- Ordinaire","ATOMISTIQUE MIPC S1","TD MIPC_ 04_20_21","TD MIPC_ 03_20_21","TD MIPC_ 02_20_21","TD MIPC_ 01_20_21","TD_Structure de la Matière_MIPC 2","TD_Structure de la Matière_MIPC-1","TD_Structure de la Matière_MIPC-GE-GM_Série 03","TD_Structure de la Matière_MIPC-GE-GM_Série 04","TP structure de la matière","Manipulation-01_ Structure Matiére","Manipulation-02_ Structure Matiére"   
];
     }else if(moduleName === "thermodynamique") {
pdfs = ["Chapitre 1 - Thermodynamique MIPC (Section A)","Chapitre 2 - Thermodynamique MIPC (Section A)","Chapitre 3 - Thermodynamique MIPC (Section A)","Chapitre 4 - Thermodynamique MIPC (Section A)","Chapitre 5 - Thermodynamique MIPC (Section A)","polycopie-cours-thermodynamique-2021","Cours thermodynamique_chap 3 2023","Cours thermodynamique_chap 2 2023","Cours thermodynamique_chap 1 2023","chap 4 THERMO","TD thermodynamique 20 24_rajii","TDs thermodynamique","resumé thermo+exercices","examen thermodynamique 2023","examen thermodynamique 20233","Polycopié-Examens-Thermodynamique-Raji","exams thermo ...","TD1-Thermo_2020-2021-SECTION-A-FST","TD1-Thermo_2020-2021-SECTION-A-FST-Solution","TD2-Thermo_2020-2021-SECTION-A-FST","TD2-Thermo_2020-2021-SECTION-A-FST-Solution","TP 1 de thermodynamique 2023","TP 2 de thermodynamique 2023","TP 2 de thermodynamique G1_2","TP 3 de thermodynamique 2023","polycopie-cours-thermodynamique-2021"
    ,"relations"
];
     }else if(moduleName === "mécanique du point...") {
pdfs = ["cours Mecanique Du Point MIPC GE GM","exams MEQANIQUE DES POINTS MIPC S1","exams MEQANIQUE DES POINTS MIPC S1","TD  1 méc","TD  2 méc","TD  3 méc","TD  4 méc","operateurs-differentiels 2021","OPTIQUE GEOMETRIQUE",];
     }else if(moduleName === "Algébre1") {
pdfs = ["Algèbre I-première séance 2026","Algebre01_Chapitre01_GESE_GMSI (1)","Algebre01_Chapitre04_GESE_GMSI_Seance5_6 GI 2026","Algebre01_Chapitre05_GESE_GMSI_Seance7_8 GI 2026","Algebre01_Chapitre05_GESE_GMS_Seance9_10 GI 2026","Algebre01_Chapitre06_GESE_GMS_Seance11_12 GI 2026",,"Polynome_alg1_cour4_2020_2021","Cours  complet d_algèbre exo7","ALGEBRE 1 MIPC S2","Matrices_bis_alg1_cour7_2020_2021","TD1_algebre1_2020_2021_ccc","TD2_algebre_1_2020_21_cc","TD2_Nombres Complexes et polyn algebre_1_2020_21_ex","TD3_ Fraction algebre_1_2020_2021","TD3_algebre_1_2020_2021cc","TD4 Matrices et syst`emes _algebre_1_2020_21","TD4_algebre_1_2020_21c_","TD5_ Espace vectoriel et applic algebre_1_2020_2021c","TD5_algebre_1_2020_2021cc","Tout les TDs Analyse et Algèbre (1et2)","CamScanner 12-27-2022 14.31","CamScanner 12-27-2022 14.33","cont1_algebre_1_2020-2021e (1)",""];
     }else if(moduleName === "Algébre2") {
pdfs = ["Algebre02_Chapitre01_GESE_GMSI_Seance1_2 2026","Algebre02_Chapitre02_GESE_GMSI_Seance3 2026","Algebre02_Chapitre03_GESE_GMSI_Seance6 2026","Algebre02_chapitre04__GESE_GMSI_Partie1et2 2026","Révision d'Algèbre II 2026","chapitre  1 alg2","chapitre  2_1  DETERMINANTS alg2","chapitre 3_1 alg2","chapitre 3_2 alg2","chapitre 3_3 alg2","chapitre 4 alg2","cont1_algebre_1_2020-2021e (1)",""];
     }else if(moduleName === "digital skills et intellegence artificielle") {
pdfs = ["TD 1 digital","chapitre1&2_DS_IA digital","TD_DS_IA_1 di","DS_cour_PowerPoint dig","reseaux & internet 2026","DS_cour_word dig","reseaux & internet 2026","Excel_initial_avancé dig","Intégration DS_chap_IA dig","QCM_Réseaux&Internet dig","Teams_Présentation.pptx dig",""];
      }else if(moduleName === "anglais") {
pdfs = ["ltc eng 2026"];
     }else if(moduleName === "") {
pdfs = [];
     }else if(moduleName === "") {
pdfs = [];
     }else if(moduleName === "") {
pdfs = [];
     }else if(moduleName === "") {
pdfs = [];
      }else if(moduleName === "") {
pdfs = [];
      }else if(moduleName === "") {
pdfs = [];
      }else if(moduleName === "") {
pdfs = [];
      }else if(moduleName === "") {
pdfs = [];
      }else if(moduleName === "") {
pdfs = [];
      }else if(moduleName === "") {
pdfs = [];
      }else if(moduleName === "") {
pdfs = [];
      }else if(moduleName === "") {
pdfs = [];
      }else if(moduleName === "") {
pdfs = [];
      }else if(moduleName === "") {
pdfs = [];
 }    

  

pdfs.forEach(pdfName => {
        const box = document.createElement("div");
        box.className = "pdf-box";
        box.textContent = pdfName;
        box.onclick = function() {
            openPDFPage(pdfName);
        };
        grid.appendChild(box);
    });
}

function openPDFPage(pdfName) {
    window.open(`${pdfName}.pdf`, "_blank");
}

// عرض المنتجات عند تحميل الصفحة
displayProducts();





