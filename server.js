import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

//Import restaurant data into data/restaurants.js 
import restaurantData from './data/restaurants.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//inoke the static middle ware | Pros: being able to re use code over again without re writing it 
app.use(express.static(path.join(__dirname, 'public'))); 

// set up view engine for ejs template
app.set("view engine", "ejs"); /*Tells express to use EJS for rendering views */
app.set("views", path.join(__dirname, 'views')); /*Look for the EJS TEMPLATES in views folder*/


// Setting the paths for each file
app.get('/home', (req, resp) => { /* Define the GET route for the URL | when visited its triggerd */
    resp.sendFile(path.join(__dirname, 'public', 'home.html')); /* Tells Express to send the file as resp to the browers aka client */
});

app.get("/Attractions", (req,resp) => { /* Define the GET route for the URL | when visited its triggerd */
    resp.sendFile(path.join(__dirname, 'public', 'Attractions.html')); /* Tells Express to send the file as resp to the browers aka client */
});

//Render the restaurants page dynamically with EJS so use resp.render vs sendFile
app.get('/restaurants', (req,resp) => { /* Define the GET route for the URL | when visited its triggerd */
    let data = {"restaurants":restaurantData.restaurantData} /*Create a data object that holds restu.info */
    console.log(data)
    resp.render('restaurants', data);/* this function allows to dynamicallt generate and serve web pages with changing data like a list */
});

app.get("/index", (req,resp) => { /* Define a GET route for the url | when visited its trigged */
   
    resp.sendFile(path.join(__dirname, 'public', 'index.html')); /* Where to locate the file */
});


// Setting up the port for our local server using the listen request
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

                                                    /* In Summary */

/* 
So I bulit an Express application aka a node.js framework | Serves web pages and dynamically renders content |
I used the express.static middleware to serve static files from the public directory. I also set up a
view engine for EJS templates. I created routes for each page and used the resp.render method to
render the restaurants page dynamically with EJS. I also used the resp.sendFile method to serve static files
*/ 
                                                    /* Key Terms */

/* path.join(__dirname, 'public') -> with the help of __dirname and 'public' i can directtly tell Express to access the folder */
/* View engine -> allows me to generate HTML Pages Dynamically with js */
/* EJS -> Embedded JavaScript */
/*req -> contains info about HTTP made to the server | resp -> object we use to send a resp back to the client(browser) */
/* resp.render() -> is used to render dynamic view using EJS template */