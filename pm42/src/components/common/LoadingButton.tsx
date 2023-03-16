//const LoadingButton = () => {
//  TweenMax.set("svg", {
//    visibility: "visible",
//  });
//  CustomBounce.create("myBounce", { strength: 0.67, squash: 2 });

//  var tl = new TimelineMax({ repeat: -1 }).timeScale(1.42);
//  tl.to(".mainDot", 1, {
//    x: 240,
//    ease: Sine.easeInOut,
//  })
//    .staggerTo(
//      ".otherDots circle",
//      0.3,
//      {
//        y: -40,
//        ease: Sine.easeOut,
//      },
//      0.09,
//      0.06
//    )
//    .staggerTo(
//      ".otherDots circle",
//      0.7,
//      {
//        y: 0,
//        ease: "myBounce",
//      },
//      0.09,
//      0.48
//    )
//    .staggerTo(
//      ".otherDots circle",
//      0.7,
//      {
//        scaleY: 0.7,
//        scaleX: 1.23,
//        ease: "myBounce-squash",
//        transformOrigin: "bottom",
//      },
//      0.09,
//      0.48
//    )
//    .staggerTo(
//      ".otherDots circle",
//      1,
//      {
//        x: -40,
//        ease: Expo.easeOut,
//      },
//      0.09,
//      0.68
//    )
//    .to(
//      ".mainDot",
//      1.8,
//      {
//        x: 200,
//        ease: Elastic.easeOut.config(0.61, 0.7),
//      },
//      1
//    );

//  return (
//    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
//      <g className="dots">
//        <circle className="mainDot" cx="300" cy="300" r="12.5" fill="#e8e4e3" />
//        <g className="otherDots" fill="#e8e4e3">
//          <circle cx="340" cy="300" r="12.5" />
//          <circle cx="380" cy="300" r="12.5" />
//          <circle cx="420" cy="300" r="12.5" />
//          <circle cx="460" cy="300" r="12.5" />
//          <circle cx="500" cy="300" r="12.5" />
//        </g>
//      </g>
//    </svg>
//  );
//};

//export default LoadingButton;
