import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Portfolio from '../views/Portfolio.vue';
import Publications from '../views/Publications.vue';
import Projects from '../views/Projects.vue';
import PortfolioGISVis from '../views/portfolios/Portfolio-GIS-vis.vue';
import PortfolioGIS from '../views/portfolios/Portfolio-GIS.vue';
import PythonPackages from '../views/portfolios/PythonPackages.vue';
import LLMEngineering from '../views/portfolios/LLMEngineering.vue';
import LangDiaryAgentic from '../views/portfolios/LangDiaryAgentic.vue';
import LlmAnalysisExampleMmdAndCka from '../views/portfolios/LlmAnalysisExampleMmdAndCka.vue';
import WaterNetworkPredictionTimesFM from '../views/portfolios/WaterNetworkPredictionTimesFM.vue';
import MuSpNa from '../views/portfolios/MuSpNa.vue';
import AgenticAICka from '../views/portfolios/AgenticAICka.vue';
import MMDPaperDemoCatDog from '../views/MmdPaperDemoCatDog';
import MmdPaperDemoParticleDNN from '../views/MmdPaperDemoParticleDNN';
import MmdPaperDemoSumoMost from '../views/MmdPaperDemoSumoMost';
import TeachingAndTalks from '../views/Teaching-and-Talks.vue';
// import { component } from 'vue/types/umd';
// import { component } from 'vue/types/umd';

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
    path: '/portfolio/portfolio-gis',
    name: 'PortfolioGIS',
    component: PortfolioGIS,
  },
  {
    path: '/portfolio/portfolio-gis/visualization',
    name: 'PortfolioGISVis',
    component: PortfolioGISVis,

  },
  {
    path: '/portfolio/python-packages',
    name: 'PythonPackages',
    component: PythonPackages,
  },
  {
    path: '/portfolio/llm-engieering',
    name: 'LLMEngineering',
    component: LLMEngineering,
  },
  {
    path: '/portfolio/llm-engieering/lang-diary-agentic',
    name: 'LangDiaryAgentic',
    component: LangDiaryAgentic,
  },
  {
    path: '/portfolio/llm-engieering/llm-analysis-example-mmd-and-cka',
    name: 'LlmAnalysisExampleMmdAndCka',
    component: LlmAnalysisExampleMmdAndCka,
  },
  {
    path: '/portfolio/llm-engieering/agentic-ai-cka',
    name: 'AgenticAICka',
    component: AgenticAICka,
  },
  {
    path: '/portfolio/llm-engieering/timesfm-xai-analysis',
    name: 'WaterNetworkPredictionTimesFM',
    component: WaterNetworkPredictionTimesFM,
  },
  {
    path: '/portfolio/MuSpNa',
    name: 'MuSpNa',
    component: MuSpNa,
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
    path: '/teaching-and-talks',
    name: 'TeachingAndTalks',
    component: TeachingAndTalks,
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
