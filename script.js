/* script.js */
'use strict'
//

function home() {

    document.getElementById('main').style.backgroundColor = 'white';
    document.getElementById('main').innerHTML =     "<section class='home'>"
                                                    + "<p>Bienvenue sur mon site de présentation !</p>"
                                                    + "<br>"
                                                    + "<p>J'ai été fasciné par l'informatique, dès lors que j'ai pu apercevoir des informaticiens travailleret se divertir...</p>"
                                                    + "<br>"
                                                    + "<p>J'ai toujours pu entretenir ma part de connaissance tout au long de ma formation, même quand je m'évertuai dans d'autre proffession.</p>"
                                                    + "<br>"
                                                    + "<p>Documentations, ouvrages, tutoriels </p>"
                                                    + "</section>";

}

function research() {

    document.getElementById('main').style.backgroundColor = 'white';
    document.getElementById('main').innerHTML =     "<section class='research'>"
                                                    + "<ul>"
                                                    + "<li>Organisations: Scrum, méthode Agile</li>"
                                                    + "<li>Gestion de projet: Jira / Confluence / Slack / Jitsi</li>"
                                                    + "<li>Conception: Cahier des charge, maquettage, UML</li>"
                                                    + "<li>Language: HTML / CSS / JS / PHP / SQL / JAVA</li>"
                                                    + "<li>Framework: React.js / Next.js / Svelt.js / Wordpress / Symphony"
                                                    + "<li>Logiciel: Linux / Git / Docker</li>"
                                                    + "<li>Certification: PIX, SQL, JAVA (notions), Développement coté client</li>"
                                                    + "</ul>"
                                                    + "</section>";

}

function cv() {

    document.getElementById('main').style.backgroundColor = 'white';
    document.getElementById('main').innerHTML =     "<section class='cv'>"
                                                    + "<h2>Comptétences</h2>"
                                                    + "<p></p>"
                                                    + "<h2>Expériences</h2>"
                                                    + "<ul>"
                                                    + "<li>Stagiaire - ELAN Formation - Brunsstat-Didenheim</li>"
                                                    + "<li>Informaticien Polyvalent - INFORMATIQUE+ IAE34 - Montpellier</li>"
                                                    + "</ul>"
                                                    + "<h2>Formations</h2>"
                                                    + "<ul>"
                                                    + "<li>2023 - en cours Licence Professionnelle - Métiers de l'informatique : conception, développement et tests de logiciels – UHA4.0 Université de Haute Alsace</li>"
                                                    + "<li>2022 / 2023 - Certificat Professionel de Webmestre Junior - CNAM GRAND EST - Auditeur</li>"
                                                    + "<li>2022 - Remise à niveau BAC+2 - Programmation informatique codage - ELAN Brunnstatt-Didenheim</li>"
                                                    + "<li>2019 / 2020 - Certificat Professionelle - Webmestre Junior - CNAM OCCITANIE</li>"
                                                    + "<li>2001 / 2003 - Bac Pro Equipements et installations électrique - Pullversheim</li>"
                                                    + "<li>1999 / 2001 - CAP / BEP électrotechnique - Blaise Pascal Colmar</li>"
                                                    + "</ul>"
                                                    + "</section>";

}

function project() {

    document.getElementById('main').style.backgroundColor = 'white';
    document.getElementById('main').innerHTML =     "<section class='project'>"
                                                    + "<ul>"
                                                    + "<li>Fil Rouge Projet 401 - Basketball</li>"
                                                    + "<li>Fil Rouge Projet 402 - Mind</li>"
                                                    + "<li>Fil Rouge Projet 403 - BlocNote</li>"
                                                    + "<li>Design & Concept - Application de gestion de devis / facture</li>"
                                                    + "<li>HoplaCup - Application de gestion de tournoi de water-polo</li>"
                                                    + "<li>Saime - Application de managemant d'entreprise</li>"
                                                    + "<li>Caritas - Audit</li>"
                                                    + "</ul>"
                                                    + "</section>";

}

function contact() {

    document.getElementById('main').style.backgroundColor = 'white';
    document.getElementById('main').innerHTML =     "<section class='contact'>"
                                                    + "<p>Vous pouvez me m'écrire à cette adresse : lienhartm8@gmail.com</p>"
                                                    + "<br />"
                                                    + "<p>Vous pouvez aussi télécharger mon <a href='./document/CV-LIENHART_Michaël.pdf' download class='telecharger'>curriculum vitae</a>.</p>"
                                                    + "<br />"
                                                    + "<form id='form'>"
                                                    + "<div class='field'>"
                                                    + "<label for='from_name'>from_name</label>"
                                                    + "<input type='text' name='from_name' id='from_name'>"
                                                    + "</div>"
                                                    + "<div class='field'>"
                                                    + "<label for='user_name'>user_name</label>"
                                                    + "<input type='text' name='user_name' id='user_name'>"
                                                    + "</div>"
                                                    + "<div class='field'>"
                                                    + "<label for='message'>message</label>"
                                                    + "<textarea type='text' name='message' id='message' rows='4' cols='50'></textarea>"
                                                    + "</div>"
                                                    + "<div class='field'>"
                                                    + "<label for='user_email'>user_email</label>"
                                                    + "<input type='text' name='user_email' id='user_email'>"
                                                    + "</div>"
                                                    + "<input type='submit' id='button' value='Send Email' >"
                                                    + "</form>"
                                                    + "</section>";

        const btn = document.getElementById('button');

        document.getElementById('form')
         .addEventListener('submit', function(event) {
           event.preventDefault();
        
           btn.value = 'Sending...';
        
           const serviceID = 'default_service';
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

