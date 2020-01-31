https://www.taniarascia.com/using-react-router-spa/

https://material-ui.com/components/tabs/ might be a better fit for a demo

https://material-ui.com/guides/composition/#link this overwrites the link component of the normal react router LINK

Sign in
https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in

Admin your reservation https://material-ui.com/components/pickers/
https://material-ui-pickers.dev/demo/datetime-picker

Basic CRA with routing
Add various example material interface pages
Dark mode
Add redux

https://codesandbox.io/s/l4yo482pll

FETCH API

// Replace ./data.json with your JSON feed
fetch('./data.json')
.then(response => {
return response.json()
})
.then(data => {
// Work with JSON data here
console.log(data)
})
.catch(err => {
// Do something for an error here
})

error check

var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
data.forEach(movie => {
console.log(movie.title)
})
} else {
console.log('error')
}
