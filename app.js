//start jquery 

//==NAV BAR==

let firstDiv = $(".navbar").append('<div class ="brand-title"> Claudia Mazariegos</div>')
let firstAttr = $(".navbar").append('<a href ="#" class="toggle-button"><span class="bar"></span> <span class="bar"></span> <span class="bar"></span> </a>')
let secondDiv = $(".navbar").append('<div class="navbar-links"><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul></div>')

//getting class from the dom 
const toggleButton = document.getElementsByClassName('toggle-Button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')
// })  //

//==NAV BAR end ==


//==================JSON FOR PORTFOLIO (PAGE 3)===============================

console.log($)

const url = 'https://spreadsheets.google.com/feeds/list/1IzHlB4m6IQE5oqw3yIT5FJFYS8YF8vwugNhn_OKGwrw/od6/public/values?alt=json'

fetch(url)
      .then(response => response.json())
      .then(data => {
          //console.log('data:', data)
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
                const $div = $('<div>')
                $div.append($('<h2>').text(project.title))
                $div.append($('<p>').text(project.description))
                $div.append($('<img>').attr('src', project.image))
                $div.append($('<a>').attr('href', project.url))
                return $div
            }
            //$('body').append(createProjectElement(data[0]))
            data.forEach(project => {
                const $projectDiv = createProjectElement(project)
                $('.body').append($projectDiv)
            })
        }
        
//==================JSON FOR PORTFOLIO (PAGE 3) END===============================



//=======Email Submission======

let $firstEmailDiv = $(".newDiv").append('<div class ="wrapper"> <h2> Contact Us</h2></div>')

let $secondEmailDiv = $(".wrapper").append('<div id ="error_message"></div>')

const $form = $(".wrapper").append('<form id ="myform">')
const $firstFormDiv = $("#myform").append('<div class="input_field"><input type="text" placeholder="name" id="name"></input></div>')
const $secondFormDiv = $("#myform").append('<div class="input_field"><input type="text" placeholder="subject" id="subject"></input></div>')
const $thirdFormDiv = $("#myform").append('<div class="input_field"><input type="text" placeholder="phone" id="phone"></input></div>')
const $fourthFormDiv = $("#myform").append('<div class="input_field"><input type="text" placeholder="email" id="email"></input></div>')
const $formTextArea = $("#myform").append('<div class="input_field"><textarea id="message" placeholder="Message"></textarea></div>')
const $formSubmitButton = $("#myform").append('<div class="btn"><input type="submit"</div>')


function validation() {
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(name.length < 5) {
        text = "Please Enter Your Name"
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length !=10) {
        text = "Please Enter Phone Number";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length  < 6) {
        text = "Please Enter Phone Email";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length)

    return false;

}


//=======Email Submission======