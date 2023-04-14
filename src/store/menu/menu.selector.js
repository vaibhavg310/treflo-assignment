import {createSelector} from 'reselect'

const selectMenuReducer = state => state.menu

export const selectMenuList = createSelector(
    [selectMenuReducer],
    menu => menu.menuList
)

export const selectMenuIsLoading = createSelector(
    [selectMenuReducer],
    menu => menu.isLoading
)

export const selectMenuError = createSelector(
    [selectMenuReducer],
    menu => menu.error
)

