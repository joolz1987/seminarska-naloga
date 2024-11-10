import { Game } from "@/types/game";

const games: Game[] = [
    {
        id:1, 
        title: "Horizon Zero Dawn", 
        price: 59.99, 
        image: "/horizon.jpg", 
        description:"Horizon Zero Dawn je akcijsko-pustolovska igra, postavljena v postapokaliptični svet, kjer so tehnološke živali nadomestile divje živali, ljudje pa živijo v plemenskih skupnostih. Igralec prevzame vlogo Aloy, mlade lovke iz plemena Nora, ki raziskuje skrivnosti svoje preteklosti in odkrije resnico o propadu civilizacije. Igra združuje elemente odprtega sveta z intenzivnimi boji, kjer igralec uporablja lok in sulico ter pametne taktike za premagovanje mehaničnih zveri. S svojo čudovito grafiko, globoko zgodbo in bogatim svetom je Horizon Zero Dawn postala priljubljena med oboževalci iger in kritiki."
    },
    {
        id:2, 
        title: "Skyrim", 
        price: 19.99, 
        image: "/skyrim.jpg",
        description: "The Elder Scrolls V: Skyrim je legendarna fantazijska RPG igra, postavljena v odprti svet, kjer igralec raziskuje deželo Skyrim. Kot Dragonborn, junak z zmožnostjo nadzorovati kri zmaja, mora igralec ustaviti preroško vrnitev zmajev, vključno z mogočnim Alduinom, uničevalcem sveta. Igra omogoča svobodno raziskovanje, razvoj lastnega lika in sprejemanje odločitev, ki vplivajo na potek dogodkov. S številnimi nalogami, raznolikimi nasprotniki, bogatimi zgodbami in možnostjo raziskovanja magije, bojevanja in skrivnosti ponuja Skyrim poglobljeno igralno izkušnjo, ki igralce že leta očara s svojo kompleksnostjo in neskončnimi možnostmi."
    },
    {
        id:3, 
        title: "Star Wars: Jedi Fallen Order", 
        price: 39.99, 
        image: "/fallen-order.jpg",
        description: "Star Wars Jedi: Fallen Order je akcijsko-pustolovska igra, ki sledi mlademu Jediju Calu Kestisu, enemu izmed redkih preživelih po ukazu 66, ki je uničil Jedi red. Igra je postavljena v vesolje Vojne zvezd po dogodkih tretjega filma in združuje napeto zgodbo s kompleksnimi boji, raziskovanjem in platformskimi izzivi. Igralec potuje na različne planete, nadgrajuje Caleve sposobnosti Sile, se sooča z nevarnimi sovražniki, kot so inkvizitorji, in razkriva skrivnosti stare civilizacije. Jedi: Fallen Order prinaša svežo in poglobljeno izkušnjo v svet Vojne zvezd, ki je navdušila oboževalce in kritike."
    },
    {
        id:4, 
        title: "Star Wars: Jedi Survivor", 
        price: 59.99, 
        image: "/jedi-survivor.jpeg", 
        description: "Star Wars Jedi: Survivor nadaljuje zgodbo Cala Kestisa, pet let po dogodkih v Jedi: Fallen Order. Kot eden zadnjih Jedi v galaksiji, ki je pod nadzorom Imperija, se Cal spopada z novo stopnjo nevarnosti, medtem ko se trudi preživeti in zaščititi tiste, ki jih ima rad. Igra nadgrajuje original z izboljšanimi bojnimi mehanikami, večjimi možnostmi uporabe Sile in poglobljenimi raziskovalnimi elementi. Igralci raziskujejo nove planete, se srečujejo z zavezništvi in sovražniki, razkrivajo stare skrivnosti in se poglabljajo v galaktično vojno proti Imperiju. Jedi: Survivor ponuja bogato, napeto izkušnjo v vesolju Vojne zvezd, ki razširja svet Cala in njegovo pot Jedija.",
    },
    {
        id:5, 
        title: "Elden Ring", 
        price: 69.99, 
        image: "/elden-ring.jpg", 
        description: "Elden Ring je akcijsko-RPG igra razvijalcev FromSoftware in ustvarjalca Georgea R. R. Martina, znanega po Pesmi ledu in ognja. Postavljena je v mistično deželo Lands Between, kjer igralec prevzame vlogo Tarnished, izgnanca, ki išče Eldenski prstan, da bi postal Elden Lord in obnovil ravnovesje. Igra združuje raziskovanje odprtega sveta, intenzivne boje in strateške spopade s skrivnostnimi pošastmi in mogočnimi šefi. Igralci lahko razvijajo svoj lik, raziskujejo starodavne ruševine, rešujejo uganke ter odkrivajo kompleksno zgodbo in skrivnosti sveta. Elden Ring slovi po zahtevnosti, poglobljeni atmosferi in svobodi igranja, ki omogoča številne pristope k napredovanju."
    },
    {
        id:6, 
        title: "Grand Theft Auto V", 
        price: 49.99, 
        image: "/Grand_Theft_Auto_V.png",
        description: "Grand Theft Auto V (GTA 5) je akcijsko-pustolovska igra v odprtem svetu, postavljena v mesto Los Santos, ki je navdihnjeno po Los Angelesu. Igralci prevzamejo nadzor nad tremi glavnimi liki: bivšim roparjem Michaelom, mladim preprodajalcem Franklinom in nepredvidljivim Trevorjem. Skupaj se zapletajo v kriminalne podvige, od drznih ropov do obračunov s tolpami in preživetja v svetu korupcije. Igra združuje napeto zgodbo, raznoliko igranje, kjer lahko igralci vozijo, letijo, raziskujejo, in se spopadajo v akcijskih misijah. Poleg tega ima GTA 5 še bogat večigralski način, GTA Online, ki ponuja nešteto vsebin in posodobitev za dolgoletno zabavo."
    },
];

export default games;