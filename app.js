//start jquery 

//NAV BAR

$('<nav>')


//==================JSON FOR PORTFOLIO===============================

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
                $div.addClass('JSON')
                $div.append($('<h2>').text(project.title))
                $div.append($('<p>').text(project.description))
                $div.append($('<img>').attr('src', project.image))
                $div.append($('<a>').attr('href', project.url))
                return $div
            }
            //$('body').append(createProjectElement(data[0]))
            data.forEach(project => {
                const $projectDiv = createProjectElement(project)
                $('body').append($projectDiv)
            })
        }