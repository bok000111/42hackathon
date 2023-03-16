const LoadingButton = () => {
  return (
    <div id="container">
      <div className="stick"></div>
      <div className="stick"></div>
      <div className="stick"></div>
      <div className="stick"></div>
      <div className="stick"></div>
      <div className="stick"></div>

      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingButton;

//$text_color: white;
//$stick_color: white; //Changes the colour of all sticks
//$stick_length: 30px; //Changes length of all sticks
//$stick_distance: -8px; //Changes distance between sticks (will need editing after 30px)

//@import url(https://fonts.googleapis.com/css?family=Lato:100,300,700);

//html {
// background-color:#DC554F;
//}

//h1 {

// font-family: 'Lato';
// color:$text_color;
// text-transform: uppercase;
// font-size:1em;
// letter-spacing:1.5px;
// text-align:center;
// width:155px;
// margin-top:20px;
// -webkit-animation: fade 2s infinite;
// -moz-animation: fade 2s infinite;

//}

//#container {

//  width:$stick_length*6;
//  padding-top:180px;
//  margin:auto;
//  vertical-align: middle;

//}

//.stick {

// width: $stick_length;
// height:3px;
// background:$stick_color;
// display:inline-block;
// margin-left:$stick_distance;

//}

//.stick:nth-child(n) {
//  transform:rotate(30deg);
//  -ms-transform:rotate(30deg); /* IE 9 */
//  -webkit-transform:rotate(30deg); /* Safari and Chrome */
//   -moz-transform:rotate(30deg);
//   -webkit-animation: fall 2s infinite;
//   -moz-animation: fall 2s infinite;

//}
//.stick:nth-child(2n) {
//   transform:rotate(-30deg);
//  -ms-transform:rotate(-30deg); /* IE 9 */
//  -webkit-transform:rotate(-30deg); /* Safari and Chrome */
//  -moz-transform:rotate(-30deg);
//  -webkit-animation: rise 2s infinite;
//  -moz-animation: rise 2s infinite;

//}

//@-webkit-keyframes rise {
//  50% { transform:rotate(30deg);
//  -ms-transform:rotate(30deg); /* IE 9 */
//  -webkit-transform:rotate(30deg);
//  -moz-transform:rotate(30deg);
//    ;}
//}
//@-moz-keyframes rise {
// 50% { transform:rotate(30deg);
//  -ms-transform:rotate(30deg); /* IE 9 */
//  -webkit-transform:rotate(30deg);
//   -moz-transform:rotate(30deg);
//}
//}
//@-o-keyframes rise {
//  50% { transform:rotate(30deg);
//  -ms-transform:rotate(30deg); /* IE 9 */
//  -webkit
