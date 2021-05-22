version_txt = [
    'import',
    ' requests\n\n',
    'return',
    ' requests.get("',
    'https://api.userge.tk/version',
    '").json()'
]
getban_txt = [
    'import',
    ' requests\n\n',
    'token ',
    '=',
    ' "your_api_key"\n',
    'id', ' ', '=', ' ',  '777000',
    '\nurl ', '=', ' ',
    'f"https://api.userge.tk/getban?api_key={',
    'token', '}&user_id={', 'id', '}', '"\n\n',
    'return', ' requests.get(', 'url', ').json()'
]
getallban_txt = [
    'import',
    ' requests\n\n',
    'token ',
    '=',
    ' "your_api_key"',
    '\nurl ', '=', ' ',
    'f"https://api.userge.tk/getban?api_key={',
    'token', '}', '"\n\n',
    'return', ' requests.get(', 'url', ').json()'
]
addban_txt = ['import', ' requests\n\n', 'data ', '=', ' {\n',
'    "api_key": "your_api_key",\n',
'    "user_id": ', '777000', ',\n',
'    "reason": "Test reason"',
'\n}\n\n', 'return', ' requests.post("', 'https://api.userge.tk/addban', '", data', '=', 'data).json()']
updateban_txt = ['import', ' requests\n\n', 'data ', '=', ' {\n',
'    "api_key": "your_api_key",\n',
'    "user_id": ', '777000', ',\n',
'    "reason": "Test reason"',
'\n}\n\n', 'return', ' requests.post("', 'https://api.userge.tk/updateban', '", data', '=', 'data).json()']
deleteban_txt = ['import', ' requests\n\n', 'data ', '=', ' {\n',
'    "api_key": "your_api_key",\n',
'    "user_id": ', '777000', ',',
'\n}\n\n', 'return', ' requests.post("', 'https://api.userge.tk/deleteban', '", data', '=', 'data).json()']
create_token = ['import', ' requests\n\n', 'url ', '=', ' "', 'https://api.userge.tk/createtoken', '"\n\ndata ', '=', ' {\n',
'    "user_id": ', '777000', ',\n',
'    "name": "Krishna"',
'\n}\n\n', 'return', ' requests.post(', 'url', ', data', '=', 'data).json()']
promote_token = ['import', ' requests\n\n', 'url ', '=', ' "', 'https://api.userge.tk/promotetoken', '"\n\ndata ', '=', ' {\n',
'    "api_key": "your_api_key"\n',
'    "user_id": ', '777000', ',\n',
'    "perms": "can_ban can_unban"',
'\n}\n\n', 'return', ' requests.post(', 'url', ', data', '=', 'data).json()']
demote_token = ['import', ' requests\n\n', 'url ', '=', ' "', 'https://api.userge.tk/demotetoken', '"\n\ndata ', '=', ' {\n',
'    "api_key": "your_api_key"\n',
'    "user_id": ', '777000',
'\n}\n\n', 'return', ' requests.post(', 'url', ', data', '=', 'data).json()']
delete_token = ['import', ' requests\n\n', 'url ', '=', ' "', 'https://api.userge.tk/deletetoken', '"\n\ndata ', '=', ' {\n',
'    "api_key": "your_api_key"\n',
'    "user_id": ', '777000',
'\n}\n\n', 'return', ' requests.post(', 'url', ', data', '=', 'data).json()']
stats_txt = [
    'import',
    ' requests\n\n',
    'return',
    ' requests.get("',
    'https://api.userge.tk/stats',
    '").json()'
]

//  yaha tak sab text h

// carouselcheck = {
//     "version": false,
//     "getban": false,
//     "getallbans": false,
//     "addban": false,
//     "updateban": false,
//     "deleteban": false,
//     "createtoken": false,
//     "promotetoken": false,
//     "demotetoken": false,
//     "deletetoken": false,
//     "stats": false
// }

getcolor = {
    "import": "#f92672",
    "return": "#f92672",
    "777000": "#ae81ff",
    "=": "#f92672",
    "id": "#f6aa11",
    "token": "white",
    'url': "#e6db74",
    "https://api.userge.tk/version": "#e6db74",
    "https://api.userge.tk/stats": "#e6db74",
    'f"https://api.userge.tk/getban?api_key={': "#e6db74",
    '}&user_id={': "#e6db74",
    "}": "#e6db74",
    "https://api.userge.tk/addban": "#e6db74",
    "https://api.userge.tk/deleteban": "#e6db74",
    "https://api.userge.tk/updateban": "#e6db74",
    "https://api.userge.tk/createtoken": "#e6db74",
    "https://api.userge.tk/promotetoken": "#e6db74",
    "https://api.userge.tk/demotetoken": "#e6db74",
    "https://api.userge.tk/deletetoken": "#e6db74"
}
// offsets = []
// getPixelsforanimation()

// function getPixelsforanimation() {

//     width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//     offsets = [3300, 4000, 4750, 5650, 6600, 7650, 8500, 9630, 10600, 11550]
//     if (width > 1500)
//          offsets = [2600, 3100, 3600, 4300, 4900, 5950, 6350, 7050, 7650, 8350]
//     else if (width >= 1200)
//          offsets = [2800, 3200, 3800, 4400, 5150, 5850, 6450, 7150, 7800, 8250]
//     else if (width >= 900)
//         offsets = [3150, 3550, 4050, 4650, 5400, 6120, 6700, 7500, 8150, 8800]
//     else if (width >= 500)
//         offsets = [3000, 3650, 4350, 5250, 6200, 7250, 8130, 9150, 10000, 11000]
// }

carousel(version_txt, "#version-txt")
runAll(5000)


// var $window = $(window), previousScrollTop = 0, scrollLock = false;

// $window.scroll(function(event) {     
//     if(scrollLock) {
//         $window.scrollTop(previousScrollTop); 
//     }

//     previousScrollTop = $window.scrollTop();

// });

// window.addEventListener("scroll", function () {
//     if(scrollLock) {
//         $window.scrollTop(previousScrollTop); 
//     }

//     previousScrollTop = $window.scrollTop();
//     if (window.pageYOffset > offsets[0]) {
//         if (carouselcheck.getban == false) {
//             carousel(getban_txt, "#getban-txt")
//             carouselcheck.getban = true
//         }
//     } if (window.pageYOffset > offsets[1]) {
//         if (carouselcheck.getallbans == false) {
//             carousel(getallban_txt, "#getallbans-txt")
//             carouselcheck.getallbans = true
//         }
//     } if (window.pageYOffset > offsets[2]) {
//         if (carouselcheck.addban == false) {
//             carousel(addban_txt, "#addban-txt")
//             carouselcheck.addban = true
//         }
//     } if (window.pageYOffset > offsets[3]) {
//         if (carouselcheck.updateban == false) {
//             carousel(updateban_txt, "#updateban-txt")
//             carouselcheck.updateban = true
//         }
//     } if (window.pageYOffset > offsets[4]) {
//         if (carouselcheck.deleteban == false) {
//             carousel(deleteban_txt, "#deleteban-txt")
//             carouselcheck.deleteban = true
//         }
//     } if (window.pageYOffset > offsets[5]) {
//         if (carouselcheck.createtoken == false) {
//             carousel(create_token, "#create-token-txt")
//             carouselcheck.createtoken = true
//         }
//     } if (window.pageYOffset > offsets[6]) {
//         if (carouselcheck.promotetoken == false) {
//             carousel(promote_token, "#promote-token-txt")
//             carouselcheck.promotetoken = true
//         }
//     } if (window.pageYOffset > offsets[7]) {
//         if (carouselcheck.demotetoken == false) {
//             carousel(demote_token, "#demote-token-txt")
//             carouselcheck.demotetoken = true
//         }
//     } if (window.pageYOffset > offsets[8]) {
//         if (carouselcheck.deletetoken == false) {
//             carousel(delete_token, "#delete-token-txt")
//             carouselcheck.deletetoken = true
//         }
//     } if (window.pageYOffset > offsets[9]) {
//         if (carouselcheck.stats == false) {
//             carousel(stats_txt, "#stats-txt")
//             carouselcheck.stats = true
//         }
//     }
// })
async function runAll() {
    await waitForMs(4500)
    carousel(getban_txt, "#getban-txt")
    await waitForMs(7400)
    carousel(getallban_txt, "#getallbans-txt")
    await waitForMs(6900)
    carousel(addban_txt, "#addban-txt")
    await waitForMs(7500)
    carousel(updateban_txt, "#updateban-txt")
    await waitForMs(7500)
    carousel(deleteban_txt, "#deleteban-txt")
    await waitForMs(7500)
    carousel(create_token, "#create-token-txt")
    await waitForMs(7300)
    carousel(promote_token, "#promote-token-txt")
    await waitForMs(8000)
    carousel(demote_token, "#demote-token-txt")
    await waitForMs(7500)
    carousel(delete_token, "#delete-token-txt")
    await waitForMs(7500)
    carousel(stats_txt, "#stats-txt")
}

async function carousel(txt, eleRef) {
    await typeInColor(txt, eleRef);
}

async function typeInColor(txt, eleRef) {
    let i = 0;
    scrollLock = true;
    while(i < txt.length) {
        color = "white"
    if (txt[i] in getcolor)
        color = getcolor[txt[i]]
    await typeSentence(txt[i], color, eleRef)
    i++;
    }
    scrollLock = false;
    return;
}

async function typeSentence(sentence, color, eleRef, delay = 35) {
  let i = 0;
  letters = sentence.split("")
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i].fontcolor(color));
    i++
  }
  return;
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}