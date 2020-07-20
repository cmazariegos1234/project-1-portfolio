
//==NAV BAR==

let firstDiv = $(".navbar").append('<div class ="brand-title"> Claudia Mazariegos</div>')
let firstAttr = $(".navbar").append('<a href ="#" class="toggle-button"><span class="bar"></span> <span class="bar"></span> <span class="bar"></span> </a>')
let secondDiv = $(".navbar").append('<div class="navbar-links"><ul><li><a href="#"><a class="aaa" href="#startabout">About Me</a></a></li><li><a href="#"><a class="aaa" href="#skills">Skills</a></a></li><li><a href="#"><a class="aaa" href="#portfolio">Portfolio</a></li><li><a href="#"><a class="aaa" href="#contact">Contact</a></a></li></ul></div>')

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//==NAV BAR end ==

//==================JSON FOR SKILLS (PAGE 3)===============================

console.log($)

const url1 = 'https://spreadsheets.google.com/feeds/list/1V0A37HYtImxAfAye9-Ci0LPM86gSPVrSDRrjmIlv83A/od6/public/values?alt=json'

fetch(url1)
      .then(response => response.json())
      .then(data => {
          console.log(data.feed.entry)
          const project2 = data.feed.entry.map(entry => {
            return {
                 title1: entry.gsx$title1.$t,
                image1: entry.gsx$image1.$t,
                description1: entry.gsx$description1.$t,
                url1: entry.gsx$url1.$t
             }
          })
          app2(project2);
        })

        const app2 = (data) => {
            console.log('app is running')
            console.log(data)

            const createProjectElement2 = (project2) => {
                const $div2 = $('<div class="skills-text">')
                $div2.append($('<h2>').text(project2.title1))
                $div2.append($('<p>').text(project2.description1))
                $div2.append($('<img class="skillsImage">').attr('src', project2.image1))
                $div2.append($('<a>').attr('href', project2.url1))
                return $div2
            }
            data.forEach(project2 => {
                const $projectDiv2 = createProjectElement2(project2)
                $('.jsonskills').append($projectDiv2)
            })
        }
        
//==================JSON FOR SKILLS (PAGE 3) END===============================


//==================JSON FOR PORTFOLIO (PAGE 3)===============================

console.log($)

const url = 'https://spreadsheets.google.com/feeds/list/1IzHlB4m6IQE5oqw3yIT5FJFYS8YF8vwugNhn_OKGwrw/od6/public/values?alt=json'


fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log(data.feed.entry)
          const project = data.feed.entry.map(entry => {
            return {
                 title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
             }
          })
          console.log(project);
          app(project);
        })

        const app = (data) => {
            console.log('app is running')
            console.log(data)

            const createProjectElement = (project) => {
                const $div = $('<div class="portfolioTitle">')
                $div.append($('<h2 class = "jsonFontSize">').text(project.title))
                $div.append($('<p class = "pFontSize">').text(project.description))
                $div.append($('<img>').attr('src', project.image))
                $div.append($('<a>').attr('href', project.url).append('<div><button class="button4">Click Me</button></div>'))
                return $div
            }

            data.forEach(project => {
                const $projectDiv = createProjectElement(project)
                $('.json').append($projectDiv)
            })
        }
        
//==================JSON FOR PORTFOLIO (PAGE 3) END===============================



//=======GMAIL Email Submission======

let $firstEmailDiv = $(".newDiv").append('<div class ="wrapper"> <h2> <a name="contact" class="target1">Get In Touch</a></h2></div>')

let $secondEmailDiv = $(".wrapper").append('<div id ="error_message"></div>')

const $form = $(".wrapper").append('<form id ="myform" method="POST" class="pure-form pure-form-stacked" data-email="from_email@example.com" action="https://script.google.com/macros/s/AKfycbxgTA1aNLl9SzqUd2q5CuUM-5g85-x4m1WGrbj_/exec">')

const $firstFormDiv = $("#myform").append('<div class="input_field"><input type="text" placeholder="Name" id="name" name="Name"></input></div>')
const $formTextArea = $("#myform").append('<div class="input_field" for="message"><textarea id="message" name="message" rows="10" placeholder="Message"></textarea></div>')
const $fourthFormDiv = $("#myform").append('<div class="input_field" for="email"><input type="text" placeholder="Email" id="email" name="email" type="email" value=""></input></div>')
const $formSubmitButton = $("#myform").append('<div class="btn"><input class ="button4" type="submit"</div>')



//=======GMAIL Email Submission END======

