import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Portfolio from '../views/Portfolio.vue';
import Publications from '../views/Publications.vue';
import Projects from '../views/Projects.vue';
import PortfolioGIS from '../views/Portfolio-GIS';
import MMDPaperDemoCatDog from '../views/MmdPaperDemoCatDog';
import MmdPaperDemoParticleDNN from '../views/MmdPaperDemoParticleDNN';
import MmdPaperDemoSumoMost from '../views/MmdPaperDemoSumoMost';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/portfolio-gis',
    name: 'PortfolioGIS',
    component: PortfolioGIS,
  },
  {
    path: '/publications',
    name: 'Publications',
    component: Publications,
  },
  {
    path: '/publications/mmd-paper-demo-cat-or-dog',
    name: 'MMDPaperDemoCatDog',
    component: MMDPaperDemoCatDog,
  },
  {
    path: '/publications/mmd-paper-demo-particle-simulation',
    name: 'MMDPaperDemoParticleSimulation',
    component: MmdPaperDemoParticleDNN,
  },
  {
    path: '/publications/mmd-paper-demo-sumo-most',
    name: 'MMDPaperDemoSumoMost',
    component: MmdPaperDemoSumoMost,
  },
  {
    path: '/projects',
    name: Projects,
    component: Projects,
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
