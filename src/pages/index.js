import Home from "./Home";
import NoResult from "./NoResult";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Nft from "./nft";
import Raise from "./Raise";
import DefiDollar from "./DefiDollar";
import Arena from "./arena"


const routes = [
  { path: '/', component: <Home />},
  { path: '/no-result', component: <NoResult />},
  { path: '/faq', component: <FAQ />},
  { path: '/contact', component: <Contact />},
  { path: '/nft', component: <Nft />},
  { path: '/defidollar', component: <DefiDollar />},
  { path: '/raise', component: <Raise />},
  { path: '/arena', component: <Arena />},
]

export default routes;