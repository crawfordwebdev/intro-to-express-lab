// import modules
import express from 'express'
import {students} from './data/students.js';


// Create Express app
const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')

// Mount Middleware (app.use)
app.use(express.static('public'));



// Mount routes
app.get('/', function(req, res) {
  res.render('index')
})


app.get('/students', function(req, res) {
  res.render('students/index', {
    students: students
  })
})


// No middleware functions or routes found
// https://expressjs.com/en/starter/faq.html
app.use((req, res, next) => {
  res.status(404).send("404: Sorry can't find that!")
})



// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})