import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import { Strategy } from "passport-local";
import pg from "pg";
import multer from "multer";
import { encryptedPassword, checkPassword } from './passwordConfig.js';

const app = express();
const port = 3000;
const upload = multer({ storage: multer.memoryStorage() });
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "I am the example of simplicity",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Test",
  password: "bhatti",
  port: "5432",
});
db.connect();
//routes
app.get("/", (req, res) => {
  res.render("welcome.ejs");
});
app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/imgupdate", (req,res)=>{
  res.render("updateImg.ejs");
})



// uploading images to db
app.post("/upload", upload.single("profileImage"), async (req, res) => {
  try {
    if(req.isAuthenticated()){
   // Assuming you're storing this for a specific user
    const imageBuffer = req.file.buffer;
    const {email} = req.user;
    await db.query("UPDATE items SET image = $1 WHERE email = $2", [
      imageBuffer,
      email
    ]);

    res.redirect("/dashboard");
  }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading image");
  }
});
// so lastly, we will dynamically get data from database it very simple(remember this is the last step.)
app.get("/dashboard", async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const { fname, lname, image } = req.user;
        
        const result = await db.query('SELECT image FROM items WHERE email = $1', [req.user.email]);
        const imageData = result.rows[0].image.toString('base64');

      res.render("dashboard.ejs", {
        image: imageData,
        fname: fname , 
        lname: lname 
      });
    } catch (error) {
      console.error(error);

      res.render("dashboard.ejs", {
        image: null,
        fname: null,
        lname: null,
      });
    }
  } else {
    res.redirect("/login");
  }
});


app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
app.post("/register", async (req, res) => {
  const { fName, lName, email, password } = req.body;
  const checkResult = await db.query("SELECT * FROM items WHERE email = $1", [
    email,
  ]);

  if (checkResult.rows.length > 0) {
    res.redirect("/login");
  } else {
    const hashedPassword = encryptedPassword(password)
    const result = await db.query(
      `INSERT INTO items (fname, lname, email, password) VALUES ($1,$2,$3,$4) RETURNING *`,
      [fName, lName, email, hashedPassword]
    );
    const user = result.rows[0];
    req.login(user, (err) => {
      res.redirect("/dashboard");
    });
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

passport.use(
  "local",
  new Strategy(async function verify(username, password, done) {
    try {
      let verifyPassword = await checkPassword(username, password);
      
      
      if (verifyPassword && Object.keys(verifyPassword).length > 0) {
        return done(null, verifyPassword);
      } else {
        return done(null, false);
      }
    } catch (err) {
      console.error("Error during authentication:", err);
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  return done(null, user);
});
passport.deserializeUser((user, cb) => {
  cb(null, user);
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
