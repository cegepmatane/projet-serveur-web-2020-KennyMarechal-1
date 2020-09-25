
 //  le conteneur

 var infos = [
    "La période de l'esclavage a profondément marqué l'histoire de La Réunion, comme celle des autres anciennes colonies françaises d'outre mer. Pour autant, il est difficile de dire quand précisément furent acheminés les premiers esclaves: le peuplement de l'île devient définitif en 1663, avec les premiers colons, et des Malgaches. En 1674, le gouverneur Jacob Blanquet de La Haye, représentant la Compagnie des Indes Orientales à laquelle appartient Bourbon, interdit par ordonnance les mariages mixtes: les historiens y voient un des premiers signes de la constitution d'une société esclavagiste. Dès 1689, l'île compte 113 esclaves, sur 212 habitants! En 1714, ils sont 534 sur 623 habitants. Après l'obligation de cultiver les plants de café introduits par la Compagnie des Indes Orientales en 1715, la population servile est acheminée en masse dans l'île, en provenance de Madagascar, de la côte orientale africaine (par les comptoirs portugais au sud de Delgado). A partir de 1770, le nombre de Cafres débarqués aux Mascareignes (Ile de France et Ile Bourbon) dépasse nettement les arrivées de main d'oeuvre en provenance de Madagascar (on reproche aux Malgaches leur propension au marronnage, c'est-à-dire à la fuite vers les hauteurs de l'île). Les habitants de Bourbon ont fini par dénommer cafres tout esclave originaire de l'Afrique, qu'il provînt de la côte mozambicaine, ou du golfe d'Aden. On pense que 115 000 esclaves auraient été introduits aux Mascareignes entre 1769 et 1810, alors que la traite était prohibée entre 1794 et 1802. Napoléon 1er rétablissant en effet la traite et l'esclavage, que la Révolution française avait abolis...La minorité des propriétaires terriens blancs cherche à diversifier les lieux de provenance des esclaves, afin de prévenir toute tentative de révolte au moins par la constitution d'un noyau ethnique important. Il y eut pourtant des révoltes: celle de 1799,à Sainte Rose, où 11 inculpés sont condamnés à mort, celle de 1811 à St Leu: la répression est extrêmement brutale, car il faut décourager toute nouvelle initiative. A la date de l'abolition de l'esclavage en 1848, le nombre d'esclaves était de 60 800, après avoir culminé à 69 983 en 1834. A partir de 1817, la traite est de nouveau interdite, ce qui n'empêche pas les arrivées clandestines: sans doute un peu plus de 19 000 esclaves (la démographie de la population servile étant en effet marquée par un double phénomène: d'une part, la surreprésentation masculine, d'autre part l'excédent des décès sur les naissances, d'environ 1500 personnes par an entre 1817 et 1830).",
    
    "Sainte-Appollonie, Eden, île de la Perle... Les noms que l'on a donné à cette île au fil du temps n'ont pas manqué. Certains, à eux seuls pourraient servir à tracer les jalons de son histoire. L'île de la Réunion, qui fut découverte en 1545 par le navigateur portugais Mascarenhas, fut ainsi d'abord appelée Mascareignes, nom qui fut ensuite appliqué au groupe d'îles auquel elle appartient. Les Français l'occupèrent en 1642, et Flacourt lui donna en 1649le nom d'île Bourbon. Ce fut l'époque où l'île fut l'objet d'une active politique de colonisation. En 1717, quelques plants de café y furent apportés de Moka, et ajoutèrent à l'intérêt économique de l'île. A la Révolution, on lui donna le nom d'île de la Réunion, qu'elle perdit sous l'Empire, pour devenir l'île Bonaparte. Puis, les Anglais s'en emparèrent en 1810, avant de la restituer à la France en 1815, et lui conservèrent l'ancien nom d'île Bourbon. Ce nom fut encore le sien sous la Restauration. Sous le gouvernement de Juillet, elle reprit (1848) de nouveau le nom de la Réunion qu'elle n'a plus quitté depuis. Dans l'intervalle toute cette histoire aura été abondamment marquée par ce qu'à l'époque coloniale on appelle une île à esclaves, tant l'esclavage jouait un rôle central dans son économie. Celle-ci, fondée sur la récolte de tabac, de coton, de cannelle, de vanille, de muscade, de maïs, de cacao, de café, de sucre, etc, était d'autant plus consommatrice de main d'oeuvre, qu'elle pouvait être gratuite. Ainsi, malgré les déclarations de principe venues de Métropole à partir de la révolution, cette pratique, qui se heurte à une forte résistance des colons, ne sera abolie qu'en 1848. L'île connaîtra ensuite encore une brève période de prospérité grâce à la culture de la canne à sucre. Puis, quand l'ouverture du canal de Suez (1869) l'écarte des routes maritimes importantes, son intérêt stratégique et commercial aux yeux de la Métropole, en même temps que son économie, déclinent. La pente ne commencera à être remontée (au moins pour la fraction de la population d'origine Européenne et Indienne) qu'à partir de 1946, quand l'ancienne colonie acquerra statut de Département d'Outre-Mer, au sein de la République française. Des émeutes en 1991, sont cependant venues rappeler qu'une partie de la population de l'île reste exclue de son développement."
];

var infosTitre = [
    "Titre original :	Offred",
    "Titre original :	Jour de naissance",
    "Titre original :	Retard",
    "Titre original :	Nolite te salopardes exterminorum",
    "Titre original :	Fidèle",
    "Titre original :	La place d'une femme",
    "Titre original :	De l'autre côté",
    "Titre original :	Chez Jezebel",
    "Titre original :	Le pont",
    "Titre original :	Nuit"];

var infosDif = [
    "Diffusion	: 26 avril 2017",
    "Diffusion	: 26 avril 2017",
    "Diffusion	: 26 avril 2017",
    "Diffusion	: 03 mai 2017",
    "Diffusion	: 10 mai 2017",
    "Diffusion	: 17 mai 2017",
    "Diffusion	: 24 mai 2017",
    "Diffusion	: 31 mai 2017",
    "Diffusion	: 07 juin 2017",
    "Diffusion	: 14 juin 2017",
]

var textBox= document.querySelector("#js-texte");
var textBoxTitre= document.querySelector("#js-titre");
var textBoxDif= document.querySelector("#js-dif");
var imgBox = document.querySelector("#js-image");


// les boutons

var btn1 = document.querySelector("#btn-1");
var btn2 = document.querySelector("#btn-2");

//  listener Des boutons

btn1.addEventListener("click", changeText);
btn2.addEventListener("click", changeText);

// Fonction ;

function changeText(e){
    var btnId = e.target.id;

    if(btnId == "btn-1"){
        textBox.textContent = infos[0];
        
    }
    else if(btnId == "btn-2"){
        textBox.textContent = infos[1];

    }
}

