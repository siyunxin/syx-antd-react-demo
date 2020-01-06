const defaultState = {
    navShow: false,
    activeId: 'login',
    menuList: [
        {
            name: '登录/注册',
            menuId: 'login',
            href: '/login'
        },
        {
            name: '花里胡哨',
            menuId: 'hlhs',
            href: 'hlhs',
        },
        {
            name: '技术支持',
            menuId: 'jszc',
            href: '/jszc'
        },
        {
            name: '关于我们',
            menuId: 'aboutus',
            href: '/aboutus'
        }
    ],
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'show_nav':
            newState.navShow = !newState.navShow;
            return newState
            break;
        case 'change_menu_url':
            newState.activeId = action.value;
            newState.navShow = !newState.navShow;
            return newState
            break;
        default:
            return state
            break;
    }
};