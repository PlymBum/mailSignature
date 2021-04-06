const companys = {
    'fas': {
        'name': 'Фирма "Администратор Сети"',
        'link': 'https://administrator.net.ru',
        'site': 'administrator.net.ru',
        'phone': `8 800 777-5566`
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

const nameHtml = document.getElementById('name')
const postHtml = document.getElementById('post')
const siteHtml = document.getElementById('site')
const companyHtml = document.getElementById('company')
const linkHtml = document.getElementById('link')
const site=document.getElementById('site')
const phone=document.getElementById('phone')
const extPhone=document.getElementById('extPhone')
const mailHtml=document.getElementById('mail')


// let companys = {
//     'Фирма "Администратор Сети"': 'https://administrator.net.ru',
//     'SERVERMALL': 'https://servermall.ru',
//     'SPECIALTY.RU': 'https://specialty.ru'
// }

const inputName = document.getElementById('inputName')
const inputPost = document.getElementById('inputPost')
const inputExtPhone = document.getElementById('inputExtPhone')
const selectCompany = document.getElementById('selectCompany')
const inputMail=document.getElementById('inputMail')

inputName.oninput = () => nameHtml.innerHTML = inputName.value
inputPost.oninput = () => postHtml.innerHTML = inputPost.value
inputExtPhone.oninput = () => extPhone.innerText=inputExtPhone.value
inputMail.oninput=()=>{
    mailHtml.innerText=inputMail.value
    mailHtml.setAttribute('href',`mailto:${inputMail.value}`)
}


selectCompany.addEventListener('change', () => {
    companyHtml.innerText =getCompanyName(selectCompany.value)
    linkHtml.setAttribute('href',getCompanyLink(selectCompany.value))
    site.innerText = getCompanySite(selectCompany.value)
    site.setAttribute('href',getCompanyLink(selectCompany.value))
    phone.innerHTML = getCompanyPhone(selectCompany.value)
})


function num (number){
    phone.insertAdjacentText("beforeend", ` доб. ${number} (звонок бесплатный)`)
}