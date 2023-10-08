import React from 'react';
import { useSelector } from 'react-redux';
import ForYouSection from '../../components/shared/ForYouSection';
import CategoriesSection from '../../components/shared/CategoriesSection';
import ContinueLearningSection from './ContinueLearningSection';
import TopCoursesSection from '../../components/shared/TopCoursesSection';
import '../../assets/styles/Dashboard.css';


const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if(!user) {
        return <p>Loading...</p>;
  }

  return (
    <div>
      <ForYouSection isAuthenticated={isAuthenticated} />
      <CategoriesSection />
      <ContinueLearningSection/>
      <TopCoursesSection />
    </div>
  );
};

export default Dashboard;
