# Project Overview - Claudia Mazariegos Project Worksheet

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1 (Monday)| Project Description | Complete
|Day 1 (Monday)| Wireframes / Priority Matrix / Timeline | Complete
|Day 3 (Wednesday)| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4(Thursday)| MVP & Bug Fixes | Complete
|Day 5 (Saturday)| Final Touches | Complete
|Day 6 (Next Monday)| Present | Incomplete


## Project Description

My final project will be my Resume/Work-seeking portfolio, it will have links to relevant sites and projects that I have worked on with my time at GA SEIR/TechHire. I will have a small introduction about myself in the second page, the third page will have my skills, and my last page with have social icons with my project links. 

## Google Sheet

Link to my google sheet [here](https://docs.google.com/spreadsheets/d/1V1M3Eq1NXH2PNmeTlVviRhEjX9kenq769Vo2P5mMtro/edit#gid=0) 

## Wireframes

My wireframe's are uploaded to cloudinary.

- [Mobile](https://res.cloudinary.com/techhire/image/upload/v1594490856/Mobile_Portfolio_1_GA_eek60m.png)
- [Tablet](https://res.cloudinary.com/techhire/image/upload/v1594491704/Tablet_Portfolio_1_GA_bvcfri.png)
- [Desktop](https://res.cloudinary.com/techhire/image/upload/v1594490856/Desktop_Portfolio_1_GA_j3achc.png)

Wireframing Resources:

- I used - [Figma] to create my Wireframes(https://www.figma.com/)


## Time/Priority Matrix Drawing

https://res.cloudinary.com/techhire/image/upload/v1594641022/Image_from_iOS_bi9jqa.jpg


## Timeline & Priority Matrix 

|Deliverable	| Status	| Time Spent |
| --- | :---: |  :---: | 
| Saturday - July 11 | Research ideas	| Complete 	| 1 hr |
| Saturday - July 11   | Wireframes / Priority Matrix / Timeline	| Complete	| 4 hrs |
| Monday - July 13 (After approval)  | HTML Framing	| Complete | 1 hr |
| Tuesday - July 14  | CSS Grid/Flexbox outline Mobile	| Complete | 5 hrs |	
| Tuesday - July 14  | CSS Grid/Flexbox outline Tablet & Desktop  | Complete | 7 hrs |	
| Wednesday - July 15  | Create second page for "About Me Info" & part 1 of "Skills" page	 | Complete | 2 hrs |	
| Thursday - July 16  | Email Subscription Jquery - under "About Me Info" page	| Complete | 3 hrs |	
| Friday - July 17 | Work on Navigation Hamburger Bar with Jquery  | Complete | 7 hrs |
| Saturday - July 18  | Create third page for "Portfolio" squares | Complete  | 5 hrs |		
| Saturday - July 18 | Side-bar navigation with icon images	 | Complete | 2 hr |		
| Sunday - July 19 | Finalize Project Notes and Documentation  | Complete | 2 hrs |		


## Functional Components

| Component | Priority	| Estimated Hrs |	Invested Hrs	| Actual Hrs|
| --- | :---: |  :---: | :---: | :---: |
| Research |	High	| 1	| 1 |	1 |
| Wire drawing	| High |	2	| 2	| 4 |
| Research Grid & Flex 	| High	| 1	| 2	| 2 |
| Implement Grid & Flex	| High	| 2	| 5 | 5 |
| Implement Mobile Responsiveness	| High	| 2 | 5 | 5 |		
| Create Contact Form w Jquery	| High |	1 | 4 | 4 |	
| Create About Me	| High |	1 | 3 | 3 |	
| Hamburger	| High |	1 | 3 | 3 |		
| Scroll page 	| Medium |	2 | 2 | 2 |				
| Side-bar navigation	| Medium |	2 | 1 | 1 |
| Portfolio Square Section 	| High |	6 |  6|  6|
| Skills Section 	| High |	6 | 5 |  5|	
| Bootstrap | Low | 4 | 1 | 1|
| Project Hover | L0w | 3 | 2 | 2 |
| Interactive Banner | Low | 4 | 3 | 3|
| Render data on page  | Low | 4 | 4 | 4|
| Save Data  | Low | 4 | 4 | 4|
| Social Media Icons | Low | 1 | 3 | 3|
| Finalize Documentation	| High |	1 | 2 | 2 |	
|	TOTAL | Estimated 48 hrs for MVP	| 58 hrs invested |	60 hrs spent |   

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Implement Grid & Flex	| High	| 2	| 5 | 5 |
| Implement Mobile Responsiveness	| High	| 2 | 5 | 5 |		
| Create Contact Form w Jquery	| High |	1 | 4 | 4 |	
| Create About Me	| High |	1 | 3 | 3 |	
| Hamburger	| High |	1 | 3 | 3 |		
| Scroll page 	| Medium |	2 | 2 | 2 |				
| Side-bar navigation	| Medium |	2 | 1 | 1 |
| Portfolio Square Section 	| High |	6 |  6|  6|
| Skills Section 	| High |	6 | 5 |  5|	
| Render data on page  | Low | 4 | 4 | 4|
| Save Data  | Low | 4 | 4 | 4|
| Finalize Documentation	| High |	1 | 2 | 2 |	
| Total | H | 32hrs| 44hrs | 44hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Hover | Low | 3 | 3 | 3|
| Interactive Banner | Medium | 4 | 3 | 3|
| Bootstrap | High | 4 | 4 | 4|
| Social Media Icons | Low | 1 | 1 | 1|
| Total | H | 12hrs| 11hrs | 11hrs |

## Additional Libraries - Resources used 
- project 1 - used resources 
https://www.youtube.com/watch?v=At4B7A4GOPg
https://www.youtube.com/watch?v=WY4rvU4ImgE
https://www.youtube.com/watch?v=GMXFMVg5E4U&vl=en


## Code Snippet 

 The code below allowed me to create a gmail contact me form: 
 
let $firstEmailDiv = $(".newDiv").append('<div class ="wrapper"> <h2> <a name="contact" class="target1">Get In Touch</a></h2></div>')

let $secondEmailDiv = $(".wrapper").append('<div id ="error_message"></div>')

const $form = $(".wrapper").append('<form id ="myform" method="POST" class="pure-form pure-form-stacked" data-email="from_email@example.com" action="https://script.google.com/macros/s/AKfycbxgTA1aNLl9SzqUd2q5CuUM-5g85-x4m1WGrbj_/exec">')

const $firstFormDiv = $("#myform").append('<div class="input_field"><input type="text" placeholder="Name" id="name" name="Name"></input></div>')
const $formTextArea = $("#myform").append('<div class="input_field" for="message"><textarea id="message" name="message" rows="10" placeholder="Message"></textarea></div>')
const $fourthFormDiv = $("#myform").append('<div class="input_field" for="email"><input type="text" placeholder="Email" id="email" name="email" type="email" value=""></input></div>')
const $formSubmitButton = $("#myform").append('<div class="btn"><input class ="button4" type="submit"</div>')

## Issues and Resolutions
I am still trying to make my divs for my skills to be in rows on desktop and in columns on mobile. 

