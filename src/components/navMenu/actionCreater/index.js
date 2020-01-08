import { SHOW_NAV, CHANGE_MENU_URL } from '../actions'

export const showMenuNav = () =>{
    return {
        type: SHOW_NAV
    }
}
export const changeMenuUrl = (value) =>{
    return {
        type: CHANGE_MENU_URL,
        value: value
    }
}