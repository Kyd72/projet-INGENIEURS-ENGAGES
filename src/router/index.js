import { createRouter, createWebHistory } from 'vue-router'
import SidebarView from "@/views/etudiant/sidebar/SidebarView.vue";
import AccueilEtudiant from "@/views/etudiant/main_component/AccueilEtudiant.vue";
import MesActivitesView from "@/views/etudiant/main_component/MesActivitesView.vue";
import MesPointsView from "@/views/etudiant/main_component/MesPointsView.vue";
import ProposerActiviteView from "@/views/etudiant/main_component/ProposerActiviteView.vue";
import SinscrireActiviteEtudiantView from "@/views/etudiant/main_component/SinscrireActiviteEtudiantView.vue";
import LoginToIEView from "@/views/login/main/LoginToIEView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/LoginEtudiant',
      name: 'LoginEtudiant',
      components: {sidebar_etudiant_router:SidebarView,
        main_component_etudiant_router:LoginToIEView}
    },
    {
      path: '/AccueilEtudiant',
      name: 'AccueilEtudiant',
      components: {sidebar_etudiant_router:SidebarView,
        main_component_etudiant_router:AccueilEtudiant}
    },
    {
      path: '/SinscrireActivite',
      name: 'SinscrireActivite',
      components: {sidebar_etudiant_router:SidebarView,
        main_component_etudiant_router:SinscrireActiviteEtudiantView}
    },
    {
      path: '/MesActivites',
      name: 'MesActivites',
      components: {sidebar_etudiant_router:SidebarView,
        main_component_etudiant_router:MesActivitesView}
    },
    {
      path: '/ProposerActivite',
      name: 'ProposerActivite',
      components: {sidebar_etudiant_router:SidebarView,
        main_component_etudiant_router:ProposerActiviteView}
    },
    {
      path: '/MesPoints',
      name: 'MesPoints',
      components: {sidebar_etudiant_router:SidebarView,
        main_component_etudiant_router:MesPointsView}
    }
  ]
})

export default router
