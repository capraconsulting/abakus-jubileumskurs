export const NAVIGATION_PUSH = 'navigation/NAVIGATION_PUSH'
export const NAVIGATION_POP = 'navigation/NAVIGATION_POP'

export const navigateTo = routeName => ({
  type: NAVIGATION_PUSH,
  payload: {
    routeName: routeName
  }
});

export const navigateBack = () => ({
  type: NAVIGATION_POP
});
