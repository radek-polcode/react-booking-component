(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,a,t){e.exports=t(40)},,,,,,function(e,a,t){},,,,function(e,a,t){},,,,function(e,a,t){},,function(e,a,t){},,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(10),c=t.n(o),l=(t(17),t(2)),i=t(3),s=t(5),m=t(4),u=t(6),d=(t(19),t(21),t(7)),f=t.n(d),v=(t(25),t(27),t(1)),h=t(29);var p=function(e){var a=e.hotelInfo,t=a.main_info;return n.a.createElement("div",{className:"col-9"},n.a.createElement("a",{href:a.urls.main_url},n.a.createElement("span",{className:"hotel-name"},t.name)),n.a.createElement("p",null,n.a.createElement(h.b.Provider,{value:{size:"0.8em"}},n.a.createElement(v.d,null)),n.a.createElement("a",{href:a.urls.map_url,className:"tool-tip location-info"},t.location," \u2013 Show on map"),n.a.createElement("span",{className:"additional-location-info tool-tip"},n.a.createElement(h.b.Provider,{value:{size:"0.8em"}},n.a.createElement(v.b,null)),"(",t.from_center," m from center )"),n.a.createElement("span",{className:"tool-tip"}," \u2013 "),"true"===t.subway_access&&n.a.createElement("span",{className:"additional-location-info tool-tip"},"Subway Access")))};t(30);var _=function(e){var a=e.reviews;return n.a.createElement("div",{className:"col-3 reviews"},n.a.createElement("div",{className:"review-score-content"},n.a.createElement("div",{className:"review-score-main"},n.a.createElement("div",{className:"review-score-title"},a.title),n.a.createElement("div",{className:"review-score-text"},a.number_of_reviews," reviews")),n.a.createElement("div",{className:"review-score-badge"},a.overall_score)),n.a.createElement("div",{className:"review-score-secondary"},n.a.createElement("a",{href:"#"},"Location ",a.location_score)),"true"===a.guest_favourite&&n.a.createElement("div",null,n.a.createElement("div",{className:"guest-favorite"},"Guest Favourite")))};var b=function(e){var a=e.hotelInfo,t=a.reviews;return n.a.createElement("div",{className:"row"},n.a.createElement(p,{hotelInfo:a}),n.a.createElement(_,{reviews:t}))};var E=function(e){var a=e.roomExpectation;return n.a.createElement("div",{className:"col-9"},n.a.createElement("p",{className:"hotel-expectation"},n.a.createElement(h.b.Provider,{value:{size:"1.5em",className:"hotel-expectation-icon"}},n.a.createElement(v.c,null)),a," of guest reviewers had their expectations of this property met or exceeded"))};t(32);var w=function(e){var a=e.roomInfo;return n.a.createElement("div",{className:"col-8 room-info"},n.a.createElement("p",{className:"room-name"},a.room_name,n.a.createElement("span",{className:"room-name-icons"},n.a.createElement(h.b.Provider,{value:{size:"0.7em",className:"room-name-icons-user"}},n.a.createElement(v.e,null)),n.a.createElement(h.b.Provider,{value:{size:"0.7em",className:"room-name-icons-user"}},n.a.createElement(v.e,null)))),n.a.createElement("p",{className:"room-left"},a.rooms_left," "))};t(34);var N=function(e){var a=e.roomPrice;return n.a.createElement("div",{className:"col-4 room-price-content"},n.a.createElement("p",{className:"room-price-for-x-nights"},"Price for ",a.number_of_nights," ",a.currency," nights"),n.a.createElement("p",{className:"room-price"},a.price," z\u0142"),n.a.createElement("p",{className:"room-price-taxes-and-fees clear-float"},"+",a.taxes_and_charges," ",a.currency," taxes and charges"),n.a.createElement("a",{href:"#",className:"btn btn-primary room-button"},"See availability",n.a.createElement(h.b.Provider,{value:{className:"room-button-arrow"}},n.a.createElement(v.a,null))))};var g=function(e){var a=e.roomExpectation,t=e.roomInfo,r=e.roomPrice;return n.a.createElement("div",{className:"row"},n.a.createElement(E,{roomExpectation:a}),n.a.createElement(w,{roomInfo:t}),n.a.createElement(N,{roomPrice:r}))},y=(t(36),function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={content:t.props.content},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.hotelInfo;return n.a.createElement("div",{className:"col-8 col-item-content"},n.a.createElement(b,{hotelInfo:e}),n.a.createElement(g,{roomInfo:e.rooms,roomExpectation:e.main_info.expectations_exceeded,roomPrice:e.price}))}}]),a}(r.Component));y.PropTypes={hotelInfo:f.a.object.isRequired};t(38);var k=function(e){var a=e.thumbnail;return n.a.createElement("div",{className:"col-4 col-item-thumbnail"},n.a.createElement("img",{className:"thumbnail",src:a,alt:"thumbnail"}))},x=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={clicked:!1},t.handleOnClick=function(){t.setState(function(e){return{clicked:!e.clicked}})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.hotelInfo;return n.a.createElement("div",{className:this.state.clicked?"row item clicked":"row item",onClick:this.handleOnClick},n.a.createElement(k,{thumbnail:e.thumbnail}),n.a.createElement(y,{hotelInfo:e}))}}]),a}(r.Component);x.PropTypes={hotelInfo:f.a.object.isRequired},x.defaultProps={hotelInfo:{}};var O={data:{item_1:{main_info:{name:"Barcelona Central Garden",location:"Eixample, Barcelona",from_center:"650",subway_access:"true",expectations_exceeded:"95%"},rooms:{rooms_name:"Bunk Bed Room and Shared Bathroom",rooms_left:"Only 2 room left"},reviews:{title:"Wonderful",number_of_reviews:"542",overall_score:"9.2",location_score:"9.5",guest_favourite:"true"},price:{number_of_nights:"2",price:"608",taxes_and_charges:"12,33",currency:"z\u0142"},thumbnail:"/images/thumb.jpg",urls:{main_url:"https://www.booking.com/hotel/es/barcelona-central-garden-hostel.html?aid=376363&sid=b25d83dd6413a7363d53abd7385acd94",map_url:"https://www.booking.com/hotel/es/barcelona-central-garden-hostel.html?aid=376363&sid=b25d83dd6413a7363d53abd7385acd94&srpvid=0dc7373df6e000ef&checkin=2019-04-29&checkout=2019-05-01&ucfs=1&srpvid=0dc7373df6e000ef&srepoch=1544428283&highlighted_blocks=55438906_88502282_0_0_0&all_sr_blocks=55438906_88502282_0_0_0&room1=A,A&hpos=1&hapos=1&dest_type=city&dest_id=-372490&srfid=57179b06ca2743ec3b9dff0897fe8094ff62afe9X1&from=searchresults;map=1&msd=1#hotelTmpl"}},item_2:{main_info:{name:"Apartament Nadwi\u015bla\u0144ska",location:"Podg\xf3rze, Krak\xf3w",from_center:"2,1km",subway_access:"false",expectations_exceeded:"100%"},rooms:{rooms_name:"Apartment 40m2 - Bigger than most in Krak\xf3w",rooms_left:"Only 1 left on our site"},reviews:{title:"Wonderful",number_of_reviews:"55",overall_score:"9.5",location_score:"9.8",guest_favourite:"false"},price:{number_of_nights:"2",price:"632",taxes_and_charges:"60",currency:"z\u0142"},thumbnail:"/images/thumb2.webp",urls:{main_url:"",map_url:""}}}},j=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this))).state={hotels:O},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},Object.keys(this.state.hotels.data).map(function(a){return n.a.createElement(x,{hotelInfo:e.state.hotels.data[a]})}),";")}}]),a}(r.Component);j.defaultProps={};var I=j;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.4652d39f.chunk.js.map