import Cookies from 'js-cookie'

export function isCookieAccepted() {
    return Cookies.get('CookieConsent') ? true : false
}