/* ============================================================
   DATOS DEL CUERPO
============================================================ */

const bodyData = {

    cabeza: {
        number: "01",
        icon: "🏛️",
        title: "Casa de la Cultura Sixto Arango Gallo",
        element: "Centro neurálgico y pensamiento consciente del municipio.",
        image: "https://culturaelcarmen.gov.co/wp-content/uploads/2019/08/panoramica_instituto.jpg.webp",
        description:
            "Es el centro neurálgico y pensamiento consciente del municipio. Como cerebro del organismo, concentra el pensamiento, la planificación artística, la pedagogía y la articulación intelectual de las dinámicas culturales a través de sus salas de formación y gestión.",
        why:
            "Procesa la memoria del Museo y las ideas de la comunidad para enviar órdenes creativas a las manos de los artesanos y a la voz de las artes escénicas."
    },

    adn: {
        number: "02",
        icon: "🧬",
        title: "Motivos florales y pincelada viva de la cerámica carmelitana",
        element: "El código genético singular de la identidad cerámica.",
        image: "https://ceramicasrenacer.com/wp-content/uploads/2025/05/Mesa-de-trabajo-1-500x500.png",
        description:
            "Contiene el código genético singular del municipio. La flor de hortensia, el pensamiento y el trazo pincelado manual son las instrucciones biológicas y estéticas que garantizan que la identidad se replique exactamente a través de las generaciones sin perder su esencia.",
        why:
            "Determina el patrón que el corazón (cerámica) necesita para latir y define la apariencia visible de la piel (murales y fachadas)."
    },

    ojos: {
        number: "03",
        icon: "👁️",
        title: "Paso de la Cerámica y miradores del Cañón del Río Melcocho",
        element: "La ventana visual del municipio hacia el interior y el exterior.",
        image: "https://caracoltv.brightspotcdn.com/dims4/default/5f942c8/2147483647/strip/true/crop/1280x720+0+0/resize/1280x720!/format/webp/quality/75/?url=https%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F64%2Fb2%2F7b22096d4bc89aaf54bf933c3b2a%2Frio-melcocho-antioquia-foto-reserva-rio-melcocho-facebook.jpg",
        description:
            "Constituyen la ventana visual del municipio hacia el interior y el exterior. Permiten contemplar la belleza del diseño urbano cerámico y la majestuosidad de la biodiversidad montañosa del cañón.",
        why:
            "Captan la luz y el entorno para que el cerebro (Casa de la Cultura) reinterprete el paisaje en nuevas expresiones patrimoniales."
    },

    oidos: {
        number: "04",
        icon: "🎭",
        title: "Festival Internacional de Teatro El Gesto Noble",
        element: "Órgano de resonancia y escucha internacional.",
        image: "https://diarioriente.com/wp-content/uploads/2023/07/52228278894_5d715677d1_h.jpg",
        description:
            "Percibe las vibraciones dramáticas, líricas y sonoras del mundo, escuchando las voces globales para integrarlas al diálogo cultural local.",
        why:
            "Retroalimenta a la lengua (poesía) y a la comunidad (sangre), enriqueciendo la sensibilidad colectiva del organismo."
    },

    nariz: {
        number: "05",
        icon: "🍲",
        title: "Tradición panadera artesanal y arepas de chócolo del Parque Principal",
        element: "El sentido olfativo primario de la bienvenida al municipio.",
        image: "https://img3.restaurantguru.com/reca-Panaderia-Santa-Cruz-food-2025-10.jpg",
        description:
            "Los efluvios del maíz tostado y el pan recién horneado evocan la memoria olfativa de la bienvenida, caracterizando la calidez de la llegada al municipio.",
        why:
            "Abre el apetito y prepara al sistema digestivo (mercado y recintos) para el alimento y la convivencia comunitaria."
    },

    boca: {
        number: "06",
        icon: "💬",
        title: "Plaza de Mercado y recintos de tertulia campesina",
        element: "Punto de ingesta energética y articulación verbal cotidiana.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8GFdFIpfuIz1FT8CRgCYCffLOI6ZHllz7BufTsAt2q24MsosboJ6IpKc&s=10",
        description:
            "Es el canal por donde el municipio ingiere los frutos de la tierra y sostiene el diálogo abierto entre el campo y la ciudad.",
        why:
            "Procesa el trabajo de los brazos (agricultores) para nutrir a la sangre (habitantes) y dar vigor a todo el cuerpo."
    },

    lengua: {
        number: "07",
        icon: "📖",
        title: "Premio Nacional de Poesía José Manuel Arango",
        element: "La articulación verbal sublime del territorio.",
        image: "https://www.udea.edu.co/wps/wcm/connect/udea/e3afc4a7-f54b-44f1-8d65-3294c398e5f1/1/jaminterna.jpg?MOD=AJPERES",
        description:
            "Modula la palabra escrita, la métrica y la sensibilidad estética expresada en el verso, dando voz profunda al sentir lírico del territorio.",
        why:
            "Expresa los pensamientos elaborados por la cabeza (Casa de la Cultura) y transmite el latido del corazón (cerámica) hecho lenguaje."
    },

    corazon: {
        number: "08",
        icon: "❤️",
        title: "Cerámica Artesanal Carmelitana (Patrimonio Cultural Inmaterial de la Nación)",
        element: "Órgano impulsor central de la vida carmelitana.",
        image: "https://corredoresturisticosdotblog.wordpress.com/wp-content/uploads/2017/11/carmen-viboral-ceramica-artesanias-colombia-2015-13.jpg",
        description:
            "Bombea la energía vital, el orgullo, la historia y el sentido de pertenencia a través de cada rincón del municipio.",
        why:
            "Sin su latido constante, las manos perderían su oficio, el esqueleto su motivo de erigirse y la piel su color distintivo."
    },

    pulmones: {
        number: "09",
        icon: "🌿",
        title: "Cañón del Río Melcocho y áreas protegidas de bosque nativo de El Carmen de Viboral",
        element: "Fuente de intercambio gaseoso y oxigenación del territorio.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDFLHVxZ2yqvfA47OAEmKdb9w5wFiwcsV-uyhxVeVasiX4LEZBTHouOkq&s=10",
        description:
            "Produce el aire puro de los bosques de niebla y regula el clima de todo el valle y la cuenca hidrográfica.",
        why:
            "Oxigena la sangre (comunidad) para que mantenga su fuerza y garantiza las lluvias que alimentan las venas (ríos y quebradas)."
    },

    sangre: {
        number: "10",
        icon: "🩸",
        title: "Comunidad carmelitana (tejido social activo de habitantes)",
        element: "El torrente vital que moviliza la vida del municipio.",
        image: "https://www.laprensaoriente.info/wp-content/uploads/2025/05/El-Carmen-de-Viboral-presento-balance-positivo-durante-la-Semana-Santa-1024x768.jpg",
        description:
            "Moviliza el calor, la energía, el trabajo y los valores por todo el cuerpo. Los ciudadanos dinamizan la economía, la cultura y la defensa territorial.",
        why:
            "Es impulsada por el corazón (cerámica), nutrida por la boca (plaza de mercado) y oxigenada por los pulmones (bosques nativos))."
    },

    memoria: {
        number: "11",
        icon: "🧠",
        title: "Museo de la Cerámica",
        element: "Centro de almacenamiento e interpretación del pasado.",
        image: "https://www.laprensaoriente.info/wp-content/uploads/2024/12/La-Casa-de-la-Cultura-de-Carmen-de-Viboral-se-transforma-en-museo-1024x760.jpg",
        description:
            "Guarda la memoria histórica, custodiando las herramientas centenarias, las primeras vajillas y la evolución técnica.",
        why:
            "Suministra datos al cerebro (Casa de la Cultura) y enseña a las huellas (nuevas generaciones) el origen de su identidad."
    },

    esqueleto: {
        number: "12",
        icon: "🦴",
        title: "Parroquia Nuestra Señora del Carmen y arquitectura colonial del centro histórico",
        element: "Estructura ósea firme que sostiene el cuerpo urbano.",
        image: "https://www.viajarenverano.com/wp-content/uploads/2016/06/IglAntCV.png",
        description:
            "Sus cimientos, columnas de madera y tapias pisadas otorgan firmeza física y estabilidad moral al municipio.",
        why:
            "Sostiene la piel (murales cerámicos) y protege los órganos internos de la comunidad ante las transformaciones del tiempo."
    },

    brazos: {
        number: "13",
        icon: "💪",
        title: "Gremio agricultor y cultivadores de hortalizas, frijol y flores",
        element: "Extremidades superiores de tracción agrícola.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzyXra8sIBFSgsFTxbpLZPbMP6u4YuujxLwYiHapTtqaKYWMgHbablQgp&s=10",
        description:
            "Emplean la fuerza física directa para labrar la tierra, sembrar el alimento y cosechar los recursos que sustentan la economía rural.",
        why:
            "Abastecen a la boca (plaza de mercado) utilizando los pies (veredas) para afianzarse al suelo productivo."
    },

    manos: {
        number: "14",
        icon: "✋",
        title: "Maestros decoradores, torneadores y pintoras de talleres cerámicos",
        element: "Motricidad fina y creación artística de la cerámica.",
        image: "https://estaticos.elcolombiano.com/binrepository/843x562/0c0/0d0/none/11101/UVQR/pceramicas5-5-jpg_41155723_20221212190820.jpg",
        description:
            "Guían el pincel, tornean la forma y plasman con precisión milimétrica la identidad visual sobre la loza cruda.",
        why:
            "Reciben la materia prima digerida por el estómago (arcilla y caolín) para convertirla en el latido tangible del corazón (cerámica)."
    },

    estomago: {
        number: "15",
        icon: "🏺",
        title: "Yacimientos naturales de arcilla, cuarzo y canteras de caolín",
        element: "Sistema metabólico y de asimilación mineral.",
        image: "https://estaticos.elcolombiano.com/binrepository/848x565/34c0/780d565/none/11101/OAHU/cvajilla-carmen-de-viboral-42-jpg_41155709_20221212190821.jpg",
        description:
            "Procesa los minerales extraídos de las entrañas de la tierra para transformarlos en la pasta cerámica cruda lista para ser trabajada.",
        why:
            "Nutre a las manos (artesanos) y requiere del calor corporal (hornos) para consolidar su proceso digestivo y creador."
    },

    venas: {
        number: "16",
        icon: "🩸",
        title: "Red hidrográfica local (Quebradas y fuentes hídricas)",
        element: "Conductos vasculares naturales que conducen el agua vital.",
        image: "https://antioquiadeaventura.com/wp-content/uploads/2025/09/la-aguada-990x490.jpg",
        description:
            "Conducen el agua vital desde las cumbres montañosas hasta los valles productivos y asentamientos humanos.",
        why:
            "Nacen en los pulmones e hidratan el barro del estómago (arcilla) para dar fluidez al organismo."
    },

    piernas: {
        number: "17",
        icon: "🛣️",
        title: "Corredores viales intermunicipales: Rionegro, La Ceja y Sonsón",
        element: "Extremidades de locomoción regional.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGMYHgqyQ9rMUhb-DGWp0tMbN9K-04qPdxKcEdtg7-rSfqmVabY6xHF3K&s=10",
        description:
            "Otorgan movilidad, estabilidad en el despliegue comercial y la capacidad de avanzar dinámicamente en el contexto del Oriente Antioqueño.",
        why:
            "Articulan los pies (veredas) con los mercados exteriores para exportar la producción de los brazos (agricultores) y de las manos (ceramistas)."
    },

    pies: {
        number: "18",
        icon: "👣",
        title: "Cincuenta y cinco veredas rurales de la geografía carmelitana",
        element: "Base de apoyo directo y firme sobre la tierra.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXPoIp7-0xYPXU1dBwzLOqW8YQ3TzI5-41A7ZuyCrqQ&s=10",
        description:
            "Constituyen el punto de contacto firme con el suelo rural de donde brotan la producción primaria y el arraigo territorial.",
        why:
            "Sostienen el peso entero del esqueleto urbano y transmiten la energía firme del suelo hacia las piernas (vías intermunicipales)."
    },

    huellas: {
        number: "19",
        icon: "👣",
        title: "Legado histórico de los fundadores y pioneros de la loza artesanal",
        element: "La impronta histórica dejada por los antepasados.",
        image: "https://static.wixstatic.com/media/b7ef8e_3b96351d99af4cec997eb7c8d122e313~mv2.jpg/v1/fill/w_980,h_656,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b7ef8e_3b96351d99af4cec997eb7c8d122e313~mv2.jpg",
        description:
            "Es la pisada de los antepasados que marca la dirección correcta por la cual deben caminar las generaciones presentes.",
        why:
            "Orienta la trayectoria de los pies (veredas) y nutre la conciencia conservada en la memoria (Museo de la Cerámica)."
    },

    piel: {
        number: "20",
        icon: "🏘️",
        title: "Murales, zócalos, baldosines y fachadas cerámicas urbanas",
        element: "Capa exterior que muestra la identidad visible del municipio.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PtaOm3Rf7seHz8iXowR3ysmUIjaZcWb8KtUcT-Od6g&s=10",
        description:
            "Muestra al mundo la belleza, el color y la textura del municipio, revistiendo las estructuras físicas con arte hecho cerámica.",
        why:
            "Cubre el esqueleto (arquitectura colonial) y refleja exteriormente la salud estética moldeada por el ADN (diseños florales)."
    },

    calor: {
        number: "21",
        icon: "🔥",
        title: "Hornos cerámicos y fuego de cocción de la bizcochería",
        element: "Mecanismo de termorregulación y energía metabólica.",
        image: "https://turismoantioquia.travel/wp-content/uploads/2022/08/JPT7083-1024x683.jpg",
        description:
            "Eleva la temperatura a más de mil grados para cristalizar la obra de arte y darle durabilidad eterna.",
        why:
            "Transforma la materia procesada por el estómago (arcilla) y trabajada por las manos para vitrificar el latido del corazón (cerámica)."
    }

};


/* ============================================================
   NOMBRES DE LAS PARTES DEL CUERPO
============================================================ */

const bodyPartNames = {

    cabeza: "Cabeza",
    adn: "ADN",
    ojos: "Ojos",
    oidos: "Oídos",
    nariz: "Nariz",
    boca: "Boca",
    lengua: "Lengua",
    corazon: "Corazón",
    pulmones: "Pulmones",
    sangre: "Sangre",
    memoria: "Memoria",
    esqueleto: "Esqueleto",
    brazos: "Brazos",
    manos: "Manos",
    estomago: "Estómago",
    venas: "Venas y arterias",
    piernas: "Piernas",
    pies: "Pies",
    huellas: "Huellas",
    piel: "Piel",
    calor: "Calor corporal"

};


/* ============================================================
   ELEMENTOS HTML
============================================================ */

const hotspots = document.querySelectorAll(".hotspot");

const infoPlaceholder =
    document.getElementById("infoPlaceholder");

const infoContent =
    document.getElementById("infoContent");

const infoNumber =
    document.getElementById("infoNumber");

const infoIcon =
    document.getElementById("infoIcon");

const infoBodyPart =
    document.getElementById("infoBodyPart");

const infoTitle =
    document.getElementById("infoTitle");

const infoImage =
    document.getElementById("infoImage");

const infoElement =
    document.getElementById("infoElement");

const infoDescription =
    document.getElementById("infoDescription");

const infoWhy =
    document.getElementById("infoWhy");

const bodyIndex =
    document.getElementById("bodyIndex");


/* ============================================================
   MOSTRAR INFORMACIÓN
============================================================ */

function showPart(partKey) {

    const data = bodyData[partKey];

    if (!data) {
        return;
    }

    hotspots.forEach(button => {
        button.classList.remove("active");
    });

    const selectedButton =
        document.querySelector(
            `.hotspot[data-part="${partKey}"]`
        );

    if (selectedButton) {
        selectedButton.classList.add("active");
    }

    infoNumber.textContent =
        `${data.number} · ${data.title}`;

    infoIcon.textContent =
        data.icon;

    infoBodyPart.textContent =
        bodyPartNames[partKey];

    infoTitle.textContent =
        data.title;

    infoImage.src =
        data.image;

    infoImage.alt =
        data.title;

    infoElement.textContent =
        data.element;

    infoDescription.textContent =
        data.description;

    infoWhy.textContent =
        data.why;

    infoPlaceholder.classList.add("hidden");

    infoContent.classList.remove("hidden");

    if (window.innerWidth <= 1000) {

        setTimeout(() => {

            document
                .getElementById("infoPanel")
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        }, 100);

    }

}


/* ============================================================
   EVENTOS DE LOS HOTSPOTS
============================================================ */

hotspots.forEach(button => {

    button.addEventListener("click", () => {

        const part =
            button.dataset.part;

        showPart(part);

    });

});


/* ============================================================
   CREAR ÍNDICE
============================================================ */

Object.entries(bodyData).forEach(
    ([key, data], index) => {

        const button =
            document.createElement("button");

        button.className =
            "index-item";

        button.type =
            "button";

        button.innerHTML = `

            <small>
                ${String(index + 1).padStart(2, "0")}
            </small>

            <strong>
                ${data.icon}
                ${bodyPartNames[key]}
            </strong>

            <span>
                ${data.title}
            </span>

        `;

        button.addEventListener(
            "click",
            () => {

                showPart(key);

                const bodySection =
                    document.querySelector(
                        ".body-section"
                    );

                bodySection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

        bodyIndex.appendChild(button);

    }
);


/* ============================================================
   ERROR DE IMAGEN
============================================================ */

infoImage.addEventListener(
    "error",
    () => {

        infoImage.style.display = "none";

    }
);


/* ============================================================
   ANIMACIÓN SUAVE AL CARGAR
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document.body.classList.add("loaded");

    }
);