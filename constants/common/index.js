import Board from "~/components/icon/Board.vue";
import Settings from "~/components/icon/Settings.vue";

export const ROUTER_PATH = {
    HOME: '/',
    SETTINGS: '/settings',
}

export const ROUTER_NAME = {
    HOME: 'Home',
    SETTINGS: 'Settings',
}

export const MENU_ITEMS = [
    {
        href: ROUTER_PATH.HOME,
        text: ROUTER_NAME.HOME,
        icon: Board,
    },
    {
        href: ROUTER_PATH.SETTINGS,
        text: ROUTER_NAME.SETTINGS,
        icon: Settings,
    },
]

export const BUTTONS_TEXT = {
    REMOVE: 'remove',
    ADD: 'add',
    EDIT: 'edit',
    SAVE: 'save',
    CANCEL: 'cancel',
}