/* script.js */
'use strict'
//

function home() {

    document.getElementById('main').style.backgroundColor = 'white';
    document.getElementById('main').innerHTML =     "<section class='home'>"
                                                    + "<p>Bienvenue sur mon site de présentation !</p>"
                                                    + "<br />"
                                                    + "<p>Je suis étudiant à l'UHA ( Université de Haute Alsace ) dans le parcous 4.0 en licence professionelle Métiers de l'informatique : conception, développement et tests de logiciels.</p>"
                                                    + "<br />"
                                                    + "<p>Vous pouvez me m'écrire à cette adresse : lienhartm8@gmail.com</p>"
                                                    + "<br />"
                                                    + "<p>Vous pouvez aussi télécharger mon <a href='./document/CV-LIENHART_Michaël.pdf' download class='telecharger'>curriculum vitae</a>.</p>"
                                                    + "</section>";

}

function research() {

    document.getElementById('main').style.backgroundColor = 'white';
    document.getElementById('main').innerHTML =     "<section class='research'>"
                                                    + "<div>"
                                                    + "<p>Je suis à la recherche d'un stage de fin d'études qui me permettra de mettre en pratique mes compétences en développement logiciel et de contribuer à des projets concrets.<br /><br />Je suis particulièrement intéressé par les domaines spécifiques comme le développement web, les tests logiciels, et je souhaite acquérir une expérience enrichissante dans un environnement dynamique et stimulant.</p>"
                                                    + "</div>"
                                                    + "</section>";

}

function cv() {

    document.getElementById('main').style.backgroundColor = 'white';
    document.getElementById('main').innerHTML =     "<section class='cv'>"
                                                    + "<h2>Comptétences</h2>"
                                                    + "<div>"
                                                    + "<ul>"
                                                    + "<li>Organisations: Scrum, méthode Agile</li>"
                                                    + "<li>Gestion de projet: Jira / Confluence / Slack / Jitsi</li>"
                                                    + "<li>Conception: Cahier des charge, maquettage, UML</li>"
                                                    + "<li>Language: HTML / CSS / JS / PHP / SQL / JAVA</li>"
                                                    + "<li>Framework: React.js / Next.js / Svelt.js / Wordpress / Symphony"
                                                    + "<li>Logiciel: Linux / Git / Docker</li>"
                                                    + "<li>Certification: PIX, SQL, JAVA (notions), Développement coté client</li>"
                                                    + "</ul>"
                                                    + "</div>"
                                                    + "<h2>Expériences</h2>"
                                                    + "<div>"
                                                    + "<ul>"
                                                    + "<li>Stagiaire - ELAN Formation - Brunsstat-Didenheim</li>"
                                                    + "<li>Informaticien Polyvalent - INFORMATIQUE+ IAE34 - Montpellier</li>"
                                                    + "</ul>"
                                                    + "</div>"
                                                    + "<h2>Formations</h2>"
                                                    + "<div>"
                                                    + "<ul>"
                                                    + "<li>2023 - en cours Licence Professionnelle - Métiers de l'informatique : conception, développement et tests de logiciels – UHA4.0 Université de Haute Alsace</li>"
                                                    + "<li>2022 / 2023 - Certificat Professionel de Webmestre Junior - CNAM GRAND EST - Auditeur</li>"
                                                    + "<li>2022 - Remise à niveau BAC+2 - Programmation informatique codage - ELAN Brunnstatt-Didenheim</li>"
                                                    + "<li>2019 / 2020 - Certificat Professionelle - Webmestre Junior - CNAM OCCITANIE</li>"
                                                    + "<li>2001 / 2003 - Bac Pro Equipements et installations électrique - Pullversheim</li>"
                                                    + "<li>1999 / 2001 - CAP / BEP électrotechnique - Blaise Pascal Colmar</li>"
                                                    + "</ul>"
                                                    + "</div>"
                                                    + "</section>";

}

function project() {

    document.getElementById('main').style.backgroundColor = 'white';
    document.getElementById('main').innerHTML =     "<section class='project'>"
                                                    + "<div>"
                                                    + "<ul>"
                                                    + "<li>Basketball - Fil Rouge Projet 401</li>"
                                                    + "<li>Mind - Fil Rouge Projet 402</li>"
                                                    + "<li>BlocNote - Fil Rouge Projet 403</li>"
                                                    + "<li>Design & Concept - Application de gestion de clients, devis et facture</li>"
                                                    + "<li>HoplaCup - Application de gestion de tournoi de water-polo</li>"
                                                    + "<li>Saime - Application de managemant d'entreprise</li>"
                                                    + "<li>Caritas - Audit et statistiques</li>"
                                                    + "</ul>"
                                                    + "</div>"
                                                    + "</section>";

}

function contact() {

    document.getElementById('main').style.backgroundColor = 'white';
    document.getElementById('main').innerHTML =     "<section class='contact'>"
                                                    + "<div>"
                                                    + "<form id='form'>"
                                                    + "<div class='field'>"
                                                    + "<label for='from_name'>Nom:</label>"
                                                    + "<input type='text' name='user_name' id='from_name'>"
                                                    + "</div>"
                                                    + "<div class='field'>"
                                                    + "<label for='user_name'>Objet:</label>"
                                                    + "<input type='text' name='objet' id='user_name'>"
                                                    + "</div>"
                                                    + "<div class='field'>"
                                                    + "<label for='message'>Message:</label>"
                                                    + "<br />"
                                                    + "<textarea type='text' name='message' id='message' rows='4' cols='50'></textarea>"
                                                    + "</div>"
                                                    + "<div class='field'>"
                                                    + "<label for='user_email'>Email:</label>"
                                                    + "<input type='text' name='user_email' id='user_email'>"
                                                    + "</div>"
                                                    + "<input type='submit' id='button' value='Send Email' >"
                                                    + "</form>"
                                                    + "</div>"
                                                    + "</section>";

        const btn = document.getElementById('button');

        document.getElementById('form')
         .addEventListener('submit', function(event) {
           event.preventDefault();
        
           btn.value = 'Sending...';
        
           const serviceID = 'service_f67zgrl';
           const templateID = 'template_0i70oag';
        
           emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
              btn.value = 'Send Email';
              alert('Sent!');
            }, (err) => {
              btn.value = 'Send Email';
              alert(JSON.stringify(err));
            });
        });

}

