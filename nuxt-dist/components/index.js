export { default as Logo } from '../../components/Logo.vue'
export { default as Contact } from '../../components/Helpers/Contact.vue'
export { default as FooterArea } from '../../components/Helpers/FooterArea.vue'
export { default as Lander } from '../../components/Helpers/Lander.vue'
export { default as NavigationBar } from '../../components/Helpers/NavigationBar.vue'
export { default as ProjectCards } from '../../components/Helpers/ProjectCards.vue'
export { default as Projects } from '../../components/Helpers/Projects.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyContact = import('../../components/Helpers/Contact.vue' /* webpackChunkName: "components/Helpers/Contact" */).then(c => c.default || c)
export const LazyFooterArea = import('../../components/Helpers/FooterArea.vue' /* webpackChunkName: "components/Helpers/FooterArea" */).then(c => c.default || c)
export const LazyLander = import('../../components/Helpers/Lander.vue' /* webpackChunkName: "components/Helpers/Lander" */).then(c => c.default || c)
export const LazyNavigationBar = import('../../components/Helpers/NavigationBar.vue' /* webpackChunkName: "components/Helpers/NavigationBar" */).then(c => c.default || c)
export const LazyProjectCards = import('../../components/Helpers/ProjectCards.vue' /* webpackChunkName: "components/Helpers/ProjectCards" */).then(c => c.default || c)
export const LazyProjects = import('../../components/Helpers/Projects.vue' /* webpackChunkName: "components/Helpers/Projects" */).then(c => c.default || c)
