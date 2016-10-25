export default (props) => {

	"use static";var Zodiac=function(){function n(n,t){function l(n){e.x=n.pageX-window.innerWidth/2;e.y=n.pageY-window.innerHeight/2}function a(n){e.x=Math.min(Math.max(-n.gamma,-30),30)*(window.innerWidth/30);e.y=Math.min(Math.max(-n.beta,-30),30)*(window.innerHeight/30)}var h=this,n,o,s;if(t===void 0&&(t={}),this.options={directionX:-1,directionY:-1,velocityX:[.1,.2],velocityY:[.5,1],bounceX:!0,bounceY:!1,parallax:.2,pivot:0,density:6e3,dotRadius:[1,5],linkColor:"rgba(99,99,99,.8)",linkDistance:50,linkWidth:2},n=typeof n=="string"||n instanceof String?document.getElementById(n):n,n.tagName!="CANVAS")throw"no canvas";for(o in t)this.options[o]=t[o];t=this.options;var i=this._ctx=n.getContext("2d",{alpha:!t.backgroundColor}),e={x:0,y:0},r,u,f,c=function(){var l,n,o,s,v,a;for(t.backgroundColor?(i.fillStyle=t.backgroundColor,i.fillRect(0,0,u,f),i.fillStyle=t.dotColor):i.clearRect(0,0,u,f),i.beginPath(),l=0;l<r.length;l++)for(n=r[l],n.x+=n.vx,n.y+=n.vy,t.parallax&&(v=n.z*t.parallax,n.dx+=(e.x*v-n.dx)/10,n.dy+=(e.y*v-n.dy)/10),o=n.x+n.dx,s=n.y+n.dy,(o<0||o>u)&&(t.bounceX?n.vx=-n.vx:n.x=(o+u)%u-n.dx),(s<0||s>f)&&(t.bounceY?n.vy=-n.vy:n.y=(s+f)%f-n.dy),i.moveTo(o+n.r,s),i.arc(o,s,n.r,0,Math.PI*2),a=l-1;a>=0;a--){var h=r[a],w=h.x-n.x,b=h.y-n.y,nt=Math.sqrt(w*w+b*b);if(nt<t.linkDistance){var o=n.x+n.dx,s=n.y+n.dy,y=h.x+h.dx,p=h.y+h.dy,k=Math.atan2(p-s,y-o),d=Math.cos(k),g=Math.sin(k);o+=n.r*d;s+=n.r*g;y-=h.r*d;p-=h.r*g;i.moveTo(o,s);i.lineTo(y,p)}}i.stroke();t.dotColor&&i.fill();requestAnimationFrame(c)};s=this._refresh=function(){var e,s,v;r=h._=h._||[];e=[].concat(t.dotRadius);(e.length==1||e[0]==e[1])&&(e=e[0]);u=n.width=n.offsetWidth;f=n.height=n.offsetHeight;var c=t.velocityX,l=t.velocityY,o=Math.random,a=Math.ceil(u*f/t.density);for(s=r.length-1;s>=0;s--)(r[s].x>u||r[s].y>f)&&r.splice(s,1);for(a<r.length&&r.splice(a);a>r.length;)v=o(),r.push({z:(v-t.pivot)/4,r:e[1]?v*(e[1]-e[0])+e[0]:e,x:Math.ceil(o()*u),y:Math.ceil(o()*f),vx:(t.directionX||(o()>.5?1:-1))*(o()*(c[1]-c[0])+c[0]),vy:(t.directionY||(o()>.5?1:-1))*(o()*(l[1]-l[0])+l[0]),dx:0,dy:0});i.strokeStyle=t.linkColor;i.lineWidth=t.linkWidth;i.fillStyle=t.dotColor};window.addEventListener("resize",s,!1);document.addEventListener("mousemove",l,!1);window.addEventListener("deviceorientation",a,!1);s();c()}return n}();(function(){for(var i=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n){var t=(new Date).getTime(),r=Math.max(0,16-(t-i)),u=window.setTimeout(function(){n(t+r)},r);return i=t+r,u});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(n){clearTimeout(n)})})();

	let options = {
	    directionX: 0,
	    directionY: 1,
	    velocityX: [.1, .2],
	    velocityY: [.2, 1],
	    bounceX: true,
	    bounceY: false,
	    parallax: .25,
	    pivot: 0,
	    density: 10000,
	    dotRadius: [2, 5],
	    backgroundColor: hexToRgb(props.color),
	    dotColor: 'rgba(255,255,255,0.25)',
	    linkColor: 'rgba(255,255,255,0.25)',
	    linkDistance: 50,
	    linkWidth: 2
	};

	let canvas = document.getElementById(props.container);
	let context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);

	new Zodiac(props.container,options);
}

const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return "rgb(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + ")";
}