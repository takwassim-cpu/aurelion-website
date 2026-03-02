import Hero from '../sections/Hero';
import FeaturedCollection from '../sections/FeaturedCollection';
import AurelionDifference from '../sections/AurelionDifference';
import DiamondShapeSelector from '../sections/DiamondShapeSelector';
import BespokeConcierge from '../sections/BespokeConcierge';
import EditorialJournal from '../sections/EditorialJournal';
import Newsletter from '../sections/Newsletter';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedCollection />
      <AurelionDifference />
      <DiamondShapeSelector />
      <BespokeConcierge />
      <EditorialJournal />
      <Newsletter />
    </main>
  );
};

export default Home;
