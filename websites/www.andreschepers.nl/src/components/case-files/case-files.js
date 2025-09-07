/*
 * Copyright 2022 - 2025 André Schepers
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

const CASE_FILES = [
    {
        'href': '#organization-for-the-protection-of-natural-persons'
        ,'image': 'assets//img/case-file/Mstr_dArtagnan.jpg'
        ,'imageSource': 'https://nl.wikipedia.org/wiki/Charles_de_Batz_de_Castelmore#/media/Bestand:Mstr_dArtagnan.jpg'
        ,'heading': 'Organization for the Protection of Natural Persons'
        ,'subheading': 'The necessity for an explicit organization: One for All and All for One'
    },{
        'href': '#stop-femicide-now'
        ,'image': 'assets//img/case-file/human-rights-logo.jpg'
        ,'imageSource': 'https://www.humanrightslogo.net/en/download'
        ,'heading': 'Stop Femicide Now!'
        ,'subheading': 'The potential inability (unwillingness) of society to stop Femicide'
    },{
        'href': '#failing-dutch-information-technology'
        ,'image': 'assets//img/case-file/information-technology.jpg'
        ,'imageSource': 'https://en.wikipedia.org/wiki/Information_technology#/media/File:CSIRO_ScienceImage_8130_The_computer_lab_on_RV_Southern_Surveyor.jpg'
        ,'heading': 'Dutch use of Information Technology'
        ,'subheading': 'Dutch society\'s apparent inability to protect its citizens'
    },{
        'href': '#dutch-farmers-protests'
        ,'image': 'assets//img/case-file/dutch-farmers-protests.jpg'
        ,'imageSource': 'https://en.wikipedia.org/wiki/Dutch_farmers%27_protests#/media/File:Boerenprotest_2.jpg'
        ,'heading': 'Dutch Farmers Protests'
        ,'subheading': 'Raging Infants acting Undemocratic and Anti-societal'
    },{
        'href': '#love-or-the-lack-thereof'
        ,'image': 'assets//img/case-file/Romeo_and_Juliet_(watercolour)_by_Ford_Maddox_Brown.jpg'
        ,'imageSource': 'https://en.wikipedia.org/wiki/Love#/media/File:Romeo_and_Juliet_(watercolour)_by_Ford_Maddox_Brown.jpg'
        ,'heading': 'Love... or the lack thereof'
        ,'subheading': 'Do the right people get together, or is it all merely a business deal with mother nature'
    },{
        'href': '#public-transport'
        ,'image': 'assets//img/case-file/Newtonbostoncar.jpg'
        ,'imageSource': 'https://en.wikipedia.org/wiki/Public_transport#/media/File:Newtonbostoncar.jpg'
        ,'heading': 'Public Transport'
        ,'subheading': 'Rules of engagement: Code of Conduct and House Rules'
    },{
        'href': '#banga-lists'
        ,'image': 'assets//img/case-file/ANP-494023906-USC.jpg'
        ,'imageSource': 'https://www.rtl.nl/nieuws/binnenland/artikel/5441427/voorlopig-geen-subsidie-voor-studentencorps-utrecht-om-bangalijst'
        ,'heading': 'Banga lists'
        ,'subheading': 'Where did it go wrong... And where was/is society!'
    },{
        'href': '#democracy'
        ,'image': 'assets//img/case-file/The_Parthenon_in_Athens.jpg'
        ,'imageSource': 'https://en.wikipedia.org/wiki/Parthenon'
        ,'heading': 'Democracy'
        ,'subheading': 'Societal (social) system building'
    },{
        'href': '#dutch-government-rules-of-engagement'
        ,'image': 'assets//img/case-file/dutch-government-logo.jpg'
        ,'heading': 'Dutch Government: Rules of Engagement'
        ,'subheading': 'Government'
    },{
        'href': '#water-cannon-incident'
        ,'image': 'assets//img/case-file/watercanon.jpg'
        ,'heading': 'Water cannon incident'
        ,'subheading': 'Police / Department of Justice'
    },{
        'href': '#abuse-and-rape-in-female-prisons'
        ,'image': 'assets//img/case-file/nieuwersluis-vrouwen-gevangenis.jpg'
        ,'heading': 'Abuse and rape in Dutch female prisons'
        ,'subheading': 'Department of Justice'
    },{
        'href': '#arriva-rules-of-engagement'
        ,'image': 'assets//img/case-file/arriva-logo.jpg'
        ,'heading': 'Arriva: Rules of Engagement'
        ,'subheading': 'Public Transport'
    },{
        'href': '#ns-rules-of-engagement'
        ,'image': 'assets//img/case-file/ns.jpg'
        ,'heading': 'NS: Rules of Engagement'
        ,'subheading': 'Public Transport'
    },{
        'href': '#dutch-childcare-benefits-scandal'
        ,'image': 'assets//img/case-file/Belastingdienst_Toeslagen_enveloppen.jpg'
        ,'heading': 'Dutch childcare benefits scandal'
        ,'subheading': 'Government'
    },{
        'href': '#societal-rules-of-engagement'
        ,'image': 'assets//img/case-file/society.jpg'
        ,'heading': 'Society: Rules of Engagement'
        ,'subheading': 'Societal (social) system building'
    },{
        'href': '#police-undervalued'
        ,'image': 'assets//img/case-file/politie_vlag.jpg'
        ,'imageSource': 'https://commons.wikimedia.org/wiki/File:Politie_vlag.png'
        ,'heading': 'Dutch Police: The Undervalued Professionals'
        ,'subheading': 'Societal problems'
    },{
        'href': '#bullying-at-work-and-in-education'
        ,'image': 'assets//img/case-file/Bullying_Físico.JPG'
        ,'imageSource': 'https://commons.wikimedia.org/wiki/File:Bullying_F%C3%ADsico.JPG'
        ,'heading': 'Bullying: Undermining work, education and society by violating human rights'
        ,'subheading': 'Societal problems'
    },{
        'href': '#societies-responsibility-towards-the-youth'
        ,'image': 'assets//img/case-file/Gänget_vid_Böckaregatan_i_Ystad_2019.jpg'
        ,'imageSource': 'https://commons.wikimedia.org/wiki/File:G%C3%A4nget_vid_B%C3%B6ckaregatan_i_Ystad_2019.jpg'
        ,'heading': 'Youth: Role of Society to do the right thing morally'
        ,'subheading': 'Societal problems'
    },{
        'href': '#glossary-an-ubiquitous-language'
        ,'image': 'assets//img/case-file/selena-gomez.jpg'
        ,'imageSource': 'https://www.selenagomez.com/#/'
        ,'heading': 'Glossary'
        ,'subheading': 'a(n) ubiquitous language'
    }

]

export default CASE_FILES;
