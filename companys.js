const companys = {
    'fas': {
        'name': 'Фирма "Администратор Сети"',
        'link': 'https://administrator.net.ru',
        'site': 'administrator.net.ru',
        'phone': '8 800 777-5566'
    },
    'sm': {
        'name': 'SERVERMALL',
        'link': 'https://servermall.ru',
        'site': 'servermall.ru',
        'phone': '8 800 755-2551'
    },

    'sp': {
        'name': 'SPECIALTY.RU',
        'link': 'https://SPECIALTY.RU',
        'site': 'specialty.ru',
        'phone': '8 800 100-3810'
    }
}

function getCompany (name){
    return companys[name]
}
function getCompanyName (name){
    return companys[name].name
}
function getCompanySite (name){
    return companys[name].site
}
function getCompanyLink (name){
    return companys[name].link
}
function getCompanyPhone (name){
    return companys[name].phone
}