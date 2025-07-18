const style = document.createElement('style');
style.textContent = `

/*Image settings (Banner, Icon, Menu Items*/
.preview{
    cursor: pointer;
    width: 55%;
    height: 55%;
}
.icon-pos{
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: left;
}
.icon{
    width: 90px;
    height: 90px;
    object-fit: contain;
}
.Banner {
    font-size: 30px;
    font-weight: 780;
    padding: 20px;
    text-align: center;
}
.Banner-img{
    width: 100%;
    height: 50%;
}


/*Body Design*/
body{
    font-family: Arial, sans-serif;
    background-color: white
}
header {
    background-color: #fff;
    padding: 20px;
    text-align: center;
    position: sticky;
    top: 0;
    max-height: auto;
    overflow-y: auto;
}
@media (max-width: 970px) {
    nav ul li {
    display: none;
    }
}

/*Navigation bar (Main*/
nav {
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    direction: ltr;
    gap: 20px;
    object-fit: contain;
    padding: 0px 55px;
}
nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    background-color: #fff;
    margin: auto;
    margin-bottom: auto;
}
nav ul li {
    font-weight: 750;
    padding: 0px 5px;
    margin: 0px 3px;
}
nav ul li a {
    text-decoration: none;
    color: #333;
    display: block;
}
nav ul li a:hover {
    color: #d71e28;
}
.order-button:hover {
    background-color: #ec3c3c;
    color: #fff;
    transition: background-color 0.4s ease;
}
.order-container{
    width: auto;
    object-fit: contain;
}
.order-button{
    display: inline-block;
    margin: 20px;
    text-decoration: none;
    border: #d71e28;
    background: #d71e28;
    padding: 15px 20px;
    color: #ffffff;
    font-weight: 850;
}
main {
    direction: ltr;
    padding: 40px 20px;
    margin: 0 auto;
}
.menu-section {
    margin-bottom: 60px;
}
.menu-section h2 {
    font-size: 2em;
    border-bottom: 2px solid #ff0000;
    display: inline-block;
}
.menu-section h3 {
    margin: 10px 0 5px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 100;
    font-size: 15px;
    padding: 2%;
}
.menu-section h4 {
    margin: 10px 0 5px;
    font-size: 25px;
    padding: 1%;
}
.menu-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}
.menu-item {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    flex: 1 1 calc(33.333% - 40px);
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.menu-item img {
    display: block;
    margin: auto;
    max-width: 70%;
    height: auto;
    border-radius: 4px;
    
}
.menu-item h5 {
    margin: 10px 0 5px;
    font-size: 1.2em;
}
.menu-item p {
    font-size: 0.9em;
    color: #666;
}
.menu-content {
    flex: 1;
}
footer {
    background-color: #d71e28;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: 900;
    padding: 50px;
}
footer fo{
    height: 50px;
    
}
footer fo a{
    text-decoration: none;
    color: white;
    padding: 15px;
}
@media (max-width: 850px) {
    .sidebar {
    display: none;
    }
}
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-button {
    font-size: 18px;
    font-weight: 750;
    background-color: #ffffff;
    text-decoration: none;
    color: #333;
    display: block;
    border: none;
    cursor: pointer;

}
.dropdown::after {
      content: 'V';
      position: absolute;
      top: 40%;
      right: 0px;
      transform: translateY(-50%);
      pointer-events: none;
      font-size: 18px;
      color: #696969;
    }
.dropdown-content {
      display: none;
      position: absolute;
      background-color: #ffffff;
      min-width: 160px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
      border-radius: 4px;
}

    .dropdown-content a {
      color: black;
      padding: 10px 16px;
      text-decoration: none;
      display: block;
}

.dropdown-content a:hover {
      background-color: #f1f1f1;
}

.show {
      display: block;
}
.sidebar {
    font-weight: 700;
    height: fit-content;
    width: 250px;
    position: sticky;
    top: 300px;
    padding: 10px;
    align-items: flex-start;
}
.sidebar a {
    display: block;
    padding: 10px;
    color: rgb(0, 0, 0);
    text-decoration: none;
    margin-bottom: 5px;
    border-radius: 4px;
}
.sidebar-container {
    display: ltr;
    width: 250px;
    color: rgb(0, 0, 0);
    padding: 20px;
}
.sidebar-container-one {
    display: flex;
    flex-direction: row;
    direction: ltr;
    padding: 20px;
    gap: 20px;
    align-items: flex-start;
}

`;
document.head.appendChild(style);