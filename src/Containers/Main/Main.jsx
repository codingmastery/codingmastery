import React from 'react';
import './Main.scss';
import FormBox from '../../Components/FormBox/FormBox';

const Main = () => {
  return (
    <main className="grid-container-mainContent">
      <div className="jumbotron">
        <FormBox formContainerName="Subscribe" />
      </div>

      {/* <DoubleContent data={null} /> */}
    </main>
  );
};

export default Main;
