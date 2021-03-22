var pmFrame = '';
var wrapperDiv = '';
var minWidth = 0;
var contentWidth = 0;
var contentHeight = 0;
var mosaicPadding = 0;

var Pmframe = function(projectOptions) {
	this.defaultOptions = projectOptions;
	this.init = function() {
		wrapperDiv = document.getElementById(this.defaultOptions.element);
		wrapperDiv.style.margin = '0 auto';
		wrapperDiv.style.width = '100%';
		
		console.log("iraghjkhbkhjvjhvjghjghjghjn");
		pmFrame = document.createElement('iframe');

		var key = querySt("key") ? '?key='+querySt("key") : '';
		if(key == '') {	
			key = querySt("email") ? '?email='+querySt("email") : '';
		}
		pmFrame.setAttribute('src', this.defaultOptions.page+key);
		pmFrame.setAttribute('frameborder', 0);
		pmFrame.setAttribute('margin', 0);
		pmFrame.setAttribute('padding', 0);
		pmFrame.setAttribute('allowtransparency', true);
		pmFrame.setAttribute('scrolling', "no");
		pmFrame.setAttribute('allowfullscreen', "");
		pmFrame.setAttribute('allow', 'camera;microphone');
		pmFrame.style.width = '100%';
		pmFrame.style.height = '200px';
		if (!(typeof this.defaultOptions.minWidth === 'undefined')) {
			minWidth = this.defaultOptions.minWidth;
			minWidth = parseInt(minWidth);
			pmFrame.style.minWidth = this.defaultOptions.minWidth+'px';
		}
		
		wrapperDiv.innerHTML = '';
		wrapperDiv.appendChild(pmFrame);

		var pmRefUrl = window.location.href;
		var addPmLink = 0;
		var maxW = '';

		if(pmRefUrl.indexOf("Villanova") !== -1) {
			addPmLink = 1;
			maxW = 'max-width: 834px';
		}else if(pmRefUrl.indexOf("indianapolismotorspeedway.com") !== -1){
			addPmLink = 1;
			maxW = 'max-width: 1200px';
		}else if(pmRefUrl.indexOf("unitymosaic") !== -1){
			addPmLink = 1;
			maxW = 'max-width: 1200px';
		}else if(pmRefUrl.indexOf("ramwelcome.colostate.edu") !== -1){
			addPmLink = 1;
			maxW = 'max-width: 1200px';
		}else if(pmRefUrl.indexOf("gsu.edu") !== -1){
			addPmLink = 1;
			maxW = 'max-width: 1200px';
		}else if(pmRefUrl.indexOf("alum.mit.edu") !== -1){
			addPmLink = 1;
			maxW = 'max-width: 1200px';
		}else if(pmRefUrl.indexOf("blazers") !== -1){
			addPmLink = 1;
			maxW = 'max-width: 1200px';
		}
		else if(pmRefUrl.indexOf("icfj.org") !== -1){
			addPmLink = 1;
			maxW = 'max-width: 1200px';
		}


		if(addPmLink){
			var pmLinkWrapper = '<div style="width:100%; margin:0 auto; '+maxW+'"><span style="z-index: 1; float: right !important; margin-top:1px !important; line-height:normal !important; height:18px !important; font-size:12px !important;     margin-right: 5px !important;"><a style="font-size:13px !important;" href="https://www.picturemosaics.com"  target="_blank"><img class="click" style="vertical-align:-15% !important; border:none !important; line-height:normal !important; height:13px !important; display: inline-block !important; width:13px !important; margin:0 !important; padding:0 !important;" src="https://cdn.picturemosaics.com/photo-mosaic-tool/images/pmLogo2.svg" alt="Picture Mosaics"></a>&nbsp;<a style="position: relative !important; top: -1px !important; font-size:11px !important; color:#878787 !important; font-family: \'Gotham\', Arial, sans-serif !important; text-decoration:none !important; line-height:normal !important;" href="https://www.picturemosaics.com" target="_blank" title="Picture Mosaics Virtual Photo Mosaic Tool">Virtual Photo Mosaic by Picture Mosaics</a></span></div>';	
			wrapperDiv.insertAdjacentHTML('afterend', pmLinkWrapper);
		}
	
		// if(this.defaultOptions.pmBrand){
		// 	var pmLinkWrapper = '<span style="z-index: 1; float: right !important; margin-top:1px !important; line-height:normal !important; height:18px !important; font-size:12px !important;     margin-right: 5px !important;"><a style="font-size:13px !important;" href="https://www.picturemosaics.com"  target="_blank"><img class="click" style="vertical-align:-15% !important; border:none !important; line-height:normal !important; height:13px !important; width:13px !important; margin:0 !important; padding:0 !important;" src="https://cdn.picturemosaics.com/photo-mosaic-tool/images/pmLogo2.svg" alt="Picture Mosaics"></a>&nbsp;<a style="position: relative !important; top: -1px !important; font-size:11px !important; color:#878787 !important; font-family: \'Gotham\', Arial, sans-serif !important; text-decoration:none !important; line-height:normal !important;" href="https://www.picturemosaics.com" target="_blank" title="Picture Mosaics Virtual Photo Mosaic Tool">Virtual Photo Mosaic by Picture Mosaics</a></span>';	
		// 	wrapperDiv.insertAdjacentHTML('afterend', pmLinkWrapper);
		// }
	}
}

function adjustSize() {
	var mobileOrientation = -1;
	if(detectMobile() == true) {
	    if (window.matchMedia("(orientation: portrait)").matches) {
	       // you're in PORTRAIT mode
	       mobileOrientation = 0;
	    }

	    if (window.matchMedia("(orientation: landscape)").matches) {
	       // you're in LANDSCAPE mode
	       mobileOrientation = 1;
	    }   

	    if (mobileOrientation == 1) {
			wrapperDiv.style.width = '90%';
			
	    } else {
			wrapperDiv.style.width = '100%';
		}
	}

	var tempWidth = wrapperDiv.offsetWidth;

	//check for width > 767, contentHeight has to be at least 700px
	if(tempWidth > 767 && contentHeight < 700){
		contentHeight = 700;
	}

	if(minWidth) {
		if(tempWidth < minWidth) {
			tempWidth = minWidth;
		}
	}
	wrapperDiv.style.height = contentHeight +'px';
	pmFrame.style.height = 	wrapperDiv.style.height;
}

function querySt(ji) {
	hu = window.location.search.substring(1);
	gy = hu.split("?");
	for (i=0;i<gy.length;i++) {
		ft = gy[i].split("=");
		if (ft[0] == ji) {
			return ft[1];
		}
	}
}

function detectMobile() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);

  if (check == false) {
       var userAgent = navigator.userAgent || navigator.vendor || window.opera;

          // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            check = true;
        }

        if (/android/i.test(userAgent)) {
            check = true;
        }

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPhone|iPod/.test(userAgent) && !window.MSStream) {
            check = true;
        }

    }

  return check;
}


function pmReceiveMessage(event) {
	if(event.data.includes('PictureMosaics-fullscreen')){
		pmToggleFullscreen(parseInt(event.data.split('-')[2]));
	}else if(event.data[0].includes('PictureMosaics-width')){
		contentWidth = parseInt(event.data[0].split('-')[2]);
		contentHeight = parseInt(event.data[1].split('-')[2]);
		adjustSize();
	}
}

function pmToggleFullscreen(enabled){
	if(enabled){
		wrapperDiv.style.position = 'fixed';
		wrapperDiv.style.top = '0';
		wrapperDiv.style.left = '0';
		wrapperDiv.style.paddingBottom = '0';
		wrapperDiv.style.height = '100%';
		wrapperDiv.style.width = '100%';
		wrapperDiv.style.background = '#000';
		wrapperDiv.style.zIndex = '9999';
		pmFrame.style.width = '100%';
		pmFrame.style.height = '100%';
	}else if(!enabled){
		wrapperDiv.style.position = 'relative';
		wrapperDiv.style.top = 'auto';
		wrapperDiv.style.left = 'auto';
		wrapperDiv.style.height = contentHeight+'px';
		wrapperDiv.style.width = contentWidth+'px';
		wrapperDiv.style.background = 'transparent';
		wrapperDiv.style.zIndex = 'auto';
	}
}
  
window.addEventListener("message", pmReceiveMessage, false);