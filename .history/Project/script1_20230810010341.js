/* Home page style */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* .container {
    max-width: 960px;
    margin-top: 25px;
    margin: auto;
  } */
  
  /* nav {
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    background-color: #201f18a6; 
  } */

  /* h1{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color:rgb(31, 2, 7);
    align-items: center;
  }
  
  h3{
    color: #cc3333;
    margin-top: 1%;
  }*/
  
  nav {
    background-color: #1974a8;
    /* color: #1b0c0c; */
    padding: 00%;
    background-image: none;
    /* margin-left: 30%; */
    /* width: 100%; */
  }

  .logo {
    color: #7cd15a;
    font-size: 30px;
    align-items: center;
    bottom: 0;
  }
  
  .logo span {
    color: #043369;
  } 
  
img{
  width: 3%;
  height: 4%;

}
  .menu_bar {
    /* background-color: #839db6; */
    /* height: 50px; */
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    /* padding-bottom: 10%; */
  
    /* position: relative; */
  }
  
  .menu_bar ul {
    list-style: none;
    display: flex;
  }
  
  .menu_bar ul li {
    padding: 10px 30px;
    position: relative;
  }
  
  .menu_bar ul li a {
    font-size: 20px;
    color: #e9e9e9;
    text-decoration: none;
  
    transition: all 0.3s;
  }
  
  .menu_bar ul li a:hover {
    color: #000408;
  }
  
  /* a{
    color: #020202;
  } */
  
  ul.menu{
    /* list-style-type: none; */
    /* margin-right: 20%; */
    margin-left: 20%;
    /* padding: 0%; */
  }
  
  ul.menu li {
    display: inline-block;
    margin-right: 20px;
  }
  
  ul.menu li a {
    color: #fff;
    text-decoration: none;
    padding: 5px;
  }
  
  ul.menu li a:hover {
    background-color: #ebd9d9;
  }

  ul.submenu {
    display: none;
    position: absolute;
    background-color:lightslategray;
    /* border: 30%; */
    border-radius: 3%;
    
  }
  
  ul.submenu li a:hover {
    background-color: #ebd9d9;
  }

  li#dropdown:hover .submenu {
    display: block;
  }

  ul.submenu li {
    display: block;
    padding: 2px;
    line-height: 2;
  }
  
  ul.submenu li a {
    color: #fff;
    /* padding: 5px;
    padding-left: 10%; */
    /* display: block; */
    font-family: "Helvetica Neue",Helvetica,Arial;
    font-size: 13pt;
    margin-right: 20%;
    width: 10%;
  }

  .row{
    /* display: flex; */
    /* height: 88%; */
    align-items: center;
    margin-top: 15%;
    margin-left: 10%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18pt;
    /* border-style: #01050a; */
  }

  .button {
    display: inline-block;
    background-color: #9caab8;
    font-size: 18px;
    padding: 12px;
    border-radius: 10px;
    margin-top: 2%;
    margin-left: 10%;
    cursor: pointer;
    text-decoration: none;
    color: black;
  }

  /* Basic styles for the dropdown container */
  .dropdown-container {
    width: 95%;
    border: 1px solid #a52a2a;
    padding: 10px;
}

/* Style for the overview section */
.overview {
    cursor: pointer;
    font-weight: bold;
    font-size: 20pt;
}

/* Initially hide the detailed description */
.description {
    display: none;
    margin-top: 10px;
}

/* Show the description when the dropdown is expanded */
.expanded .description {
    display: block;
}


/* footer {
  background-color: #f3e2e2;
  padding: 10px;
  text-align: center;
  color: #333;
  font-size: 14px;
  margin-top: 25%;
  padding-right: 30%;
  margin-right: 0%;
}

footer .icons {
margin-top: 1px;
} */

footer .icons a {
color: #921515;
margin-left: 3px;
}

/* img.img1 {
  margin-left: 20%;
  width: 100%;
} */
/* image/rosewood.jpg */

.slideshow {
  width: 30%;
  position: relative;
  margin-top: 2%;
  margin-left: 10%;
  /* border: 1px solid */
}

.slideshow2 {
  width: 30%;
  position: relative;
  margin-top: 2%;
  margin-left: 10%;
  border: 1px solid
}

/* Hide the images by default */
.Slides {
  display: none;
}

.slides2 {
  display: none;
  /* margin-top: 10%; */
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
}

.prev1, .next1 {
  cursor: pointer;
  position:relative;
  top: 100%;
  width: 10%;
  margin-top: 10%;
  padding: 16%;
  color: rgb(8, 5, 5);
}

/* Position the "next button" to the right */
.next, .next1 {
  right: 0;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .prev1:hover .next:hover, .next1:hover {
  background-color: rgba(0,0,0,0.8);
}


/* Number text (1/3 etc) */
.options {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}