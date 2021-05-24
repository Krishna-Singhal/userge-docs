// version_txt = [
//     'import',
//     ' requests\n\n',
//     'return',
//     ' requests.get("',
//     'https://api.userge.tk/version',
//     '").json()'
// ]
// getban_txt = [
//     'import',
//     ' requests\n\n',
//     'token ',
//     '=',
//     ' "your_api_key"\n',
//     'id', ' ', '=', ' ',  '777000',
//     '\nurl ', '=', ' ',
//     'f"https://api.userge.tk/getban?api_key={',
//     'token', '}&user_id={', 'id', '}', '"\n\n',
//     'return', ' requests.get(', 'url', ').json()'
// ]
// getallban_txt = [
//     'import',
//     ' requests\n\n',
//     'token ',
//     '=',
//     ' "your_api_key"',
//     '\nurl ', '=', ' ',
//     'f"https://api.userge.tk/getban?api_key={',
//     'token', '}', '"\n\n',
//     'return', ' requests.get(', 'url', ').json()'
// ]
// addban_txt = ['import', ' requests\n\n', 'data ', '=', ' {\n',
// '    "api_key": "your_api_key",\n',
// '    "user_id": ', '777000', ',\n',
// '    "reason": "Test reason"',
// '\n}\n\n', 'return', ' requests.post("', 'https://api.userge.tk/addban', '", data', '=', 'data).json()']
// updateban_txt = ['import', ' requests\n\n', 'data ', '=', ' {\n',
// '    "api_key": "your_api_key",\n',
// '    "user_id": ', '777000', ',\n',
// '    "reason": "Test reason"',
// '\n}\n\n', 'return', ' requests.post("', 'https://api.userge.tk/updateban', '", data', '=', 'data).json()']
// deleteban_txt = ['import', ' requests\n\n', 'data ', '=', ' {\n',
// '    "api_key": "your_api_key",\n',
// '    "user_id": ', '777000', ',',
// '\n}\n\n', 'return', ' requests.post("', 'https://api.userge.tk/deleteban', '", data', '=', 'data).json()']
// create_token = ['import', ' requests\n\n', 'url ', '=', ' "', 'https://api.userge.tk/createtoken', '"\n\ndata ', '=', ' {\n',
// '    "user_id": ', '777000', ',\n',
// '    "name": "Krishna"',
// '\n}\n\n', 'return', ' requests.post(', 'url', ', data', '=', 'data).json()']
// promote_token = ['import', ' requests\n\n', 'url ', '=', ' "', 'https://api.userge.tk/promotetoken', '"\n\ndata ', '=', ' {\n',
// '    "api_key": "your_api_key"\n',
// '    "user_id": ', '777000', ',\n',
// '    "perms": "can_ban can_unban"',
// '\n}\n\n', 'return', ' requests.post(', 'url', ', data', '=', 'data).json()']
// demote_token = ['import', ' requests\n\n', 'url ', '=', ' "', 'https://api.userge.tk/demotetoken', '"\n\ndata ', '=', ' {\n',
// '    "api_key": "your_api_key"\n',
// '    "user_id": ', '777000',
// '\n}\n\n', 'return', ' requests.post(', 'url', ', data', '=', 'data).json()']
// delete_token = ['import', ' requests\n\n', 'url ', '=', ' "', 'https://api.userge.tk/deletetoken', '"\n\ndata ', '=', ' {\n',
// '    "api_key": "your_api_key"\n',
// '    "user_id": ', '777000',
// '\n}\n\n', 'return', ' requests.post(', 'url', ', data', '=', 'data).json()']
// stats_txt = [
//     'import',
//     ' requests\n\n',
//     'return',
//     ' requests.get("',
//     'https://api.userge.tk/stats',
//     '").json()'
// ]

auth_text = `from UsergAntiSpamApi import Client

client = Client(API_KEY)`;

version_txt = `from UsergAntiSpamApi import Client

client = Client(API_KEY)

print(client.get_version().json())`;

getban_txt = `from UsergAntiSpamApi import Client

client = Client(API_KEY)

print(client.getban(777000).json())`;

getallban_txt = `from UsergAntiSpamApi import Client

client = Client(API_KEY)

print(client.getbans().json())`;

addban_txt = `from UsergAntiSpamApi import Client

client = Client(API_KEY)

print(client.add_ban(777000, "reason of ban").json())`;

updateban_txt = `from UsergAntiSpamApi import Client

client = Client(API_KEY)

print(client.update_ban(777000, "reason of ban").json())`;

deleteban_txt = `from UsergAntiSpamApi import Client

client = Client(API_KEY)

print(client.delete_ban(777000).json())`;

get_me = `from UsergAntiSpamApi import Client

client = Client(API_KEY)

print(client.get_me())`;

create_token = `import requests

url = "https://api.userge.tk/createtoken"

data = {
    "user_id": 777000,
    "name": "Krishna"
}

return requests.post(url, data=data).json()`;

promote_token = `from UsergAntiSpamApi import Client

client = Client(API_KEY)

print(client.promote_user(777000, ["can_ban", "can_unban"]).json())`;

demote_token  = `from UsergAntiSpamApi import Client

client = Client(API_KEY)

print(client.demote_user(777000).json())`;

delete_token = `from UsergAntiSpamApi import Client

client = Client(API_KEY)

print(client.delete_my_token().json())`;

stats_txt = `from UsergAntiSpamApi import Client

client = Client(API_KEY)

print(client.get_api_stats().json())`;

carouselcheck = {
    "version": false,
    "getban": false,
    "getallbans": false,
    "addban": false,
    "updateban": false,
    "deleteban": false,
    "getme": false,
    "create_token": false,
    "promotetoken": false,
    "demotetoken": false,
    "deletetoken": false,
    "stats": false
}

// getcolor = {
//     "import": "#f92672",
//     "return": "#f92672",
//     "777000": "#ae81ff",
//     "=": "#f92672",
//     "id": "#f6aa11",
//     "token": "white",
//     'url': "#e6db74",
//     "https://api.userge.tk/version": "#e6db74",
//     "https://api.userge.tk/stats": "#e6db74",
//     'f"https://api.userge.tk/getban?api_key={': "#e6db74",
//     '}&user_id={': "#e6db74",
//     "}": "#e6db74",
//     "https://api.userge.tk/addban": "#e6db74",
//     "https://api.userge.tk/deleteban": "#e6db74",
//     "https://api.userge.tk/updateban": "#e6db74",
//     "https://api.userge.tk/createtoken": "#e6db74",
//     "https://api.userge.tk/promotetoken": "#e6db74",
//     "https://api.userge.tk/demotetoken": "#e6db74",
//     "https://api.userge.tk/deletetoken": "#e6db74"
// }
offsets = []
getPixelsforanimation()

function getPixelsforanimation() {

    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    offsets = [3030, 3650, 4330, 5250, 6100, 7000, 7870, 8400, 9350, 10250, 10950, 11500]
    if (width > 1500)
         offsets = [2600, 3100, 3550, 4200, 4900, 5600, 6200, 6450, 7250, 7900, 8500, 9000]
    else if (width >= 1200)
         offsets = [2450, 2900, 3430, 4050, 4750, 5500, 6050, 6330, 7150, 7800, 8400, 8750]
    else if (width >= 900)
        offsets = [2880, 3350, 3930, 4620, 5330, 6070, 6650, 7000, 7777, 8410, 9050, 9400]
    else if (width >= 500)
        offsets = [2700, 3350, 4000, 4950, 5850, 6650, 7440, 8020, 8960, 9800, 10520, 11020]
}

carousel(auth_text, "#authentication-txt")
// runAll()


// var $window = $(window), previousScrollTop = 0, scrollLock = false;

// $window.scroll(function(event) {
//     if(scrollLock) {
//         $window.scrollTop(previousScrollTop); 
//     }

//     previousScrollTop = $window.scrollTop();

// });

processing = false

window.addEventListener("scroll", function () {
    // if(scrollLock) {
    //     $window.scrollTop(previousScrollTop); 
    // }

    // previousScrollTop = $window.scrollTop();
    document.getElementById("demo").innerHTML = window.pageYOffset
    if (processing == false) {
        if (window.pageYOffset > offsets[0]) {
            if (carouselcheck.getban == false) {
                processing = true
                carousel(getban_txt, "#getban-txt")
                carouselcheck.getban = true
            }
        } if (window.pageYOffset > offsets[1]) {
            if (carouselcheck.getallbans == false) {
                processing = true
                carousel(getallban_txt, "#getallbans-txt")
                carouselcheck.getallbans = true
            }
        } if (window.pageYOffset > offsets[2]) {
            if (carouselcheck.addban == false) {
                processing = true
                carousel(addban_txt, "#addban-txt")
                carouselcheck.addban = true
            }
        } if (window.pageYOffset > offsets[3]) {
            if (carouselcheck.updateban == false) {
                processing = true
                carousel(updateban_txt, "#updateban-txt")
                carouselcheck.updateban = true
            }
        } if (window.pageYOffset > offsets[4]) {
            if (carouselcheck.deleteban == false) {
                processing = true
                carousel(deleteban_txt, "#deleteban-txt")
                carouselcheck.deleteban = true
            }
        } if (window.pageYOffset > offsets[5]) {
            if (carouselcheck.create_token == false) {
                processing = true
                carousel(create_token, "#create-token-txt")
                carouselcheck.create_token = true
            } 
        } if (window.pageYOffset > offsets[6]) {
            if (carouselcheck.getme == false) {
                processing = true
                carousel(get_me, "#getme-txt")
                carouselcheck.getme = true
            }
        } if (window.pageYOffset > offsets[7]) {
            if (carouselcheck.promotetoken == false) {
                processing = true
                carousel(promote_token, "#promote-token-txt")
                carouselcheck.promotetoken = true
            }
        } if (window.pageYOffset > offsets[8]) {
            if (carouselcheck.demotetoken == false) {
                processing = true
                carousel(demote_token, "#demote-token-txt")
                carouselcheck.demotetoken = true
            }
        } if (window.pageYOffset > offsets[9]) {
            if (carouselcheck.deletetoken == false) {
                processing = true
                carousel(delete_token, "#delete-token-txt")
                carouselcheck.deletetoken = true
            }
        }  if (window.pageYOffset > offsets[10]) {
            if (carouselcheck.version == false) {
                processing = true
                carousel(version_txt, "#version-txt")
                carouselcheck.version = true
            }
        } if (window.pageYOffset > offsets[11]) {
            if (carouselcheck.stats == false) {
                processing = true
                carousel(stats_txt, "#stats-txt")
                carouselcheck.stats = true
            }
        }
    }
})
async function runAll() {
    await waitForMs(2000)
    carousel(getban_txt, "#getban-txt")
    await waitForMs(3000)
    carousel(getallban_txt, "#getallbans-txt")
    await waitForMs(3000)
    carousel(addban_txt, "#addban-txt")
    await waitForMs(4000)
    carousel(updateban_txt, "#updateban-txt")
    await waitForMs(4000)
    carousel(deleteban_txt, "#deleteban-txt")
    await waitForMs(4000)
    carousel(create_token, "#create-token-txt")
    await waitForMs(4000)
    carousel(promote_token, "#promote-token-txt")
    await waitForMs(4000)
    carousel(demote_token, "#demote-token-txt")
    await waitForMs(4000)
    carousel(delete_token, "#delete-token-txt")
    await waitForMs(4000)
    carousel(stats_txt, "#stats-txt")
}

async function carousel(txt, eleRef) {
    await typeSentence(txt, eleRef);
}

async function typeInColor(txt, eleRef) {
    let i = 0;
    while(i < txt.length) {
        color = "white"
    if (txt[i] in getcolor)
        color = getcolor[txt[i]]
    await typeSentence(txt[i], color, eleRef)
    i++;
    }
    // scrollLock = false;
    return;
}

async function typeSentence(sentence, eleRef, delay = 10) {
  let i = 0;
  letters = sentence.split("")
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  processing = false
  return;
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
