import { Fragment } from "react"; 
import PageContent from "../Common/PageContent/PageContent";
import MainHeader from "../Common/Header/MainHeader";
import Project from "../Project/Project";
import Experience from "../Experience/Experience";

const Dashboard = () =>{
    return (
        <Fragment>
          <main>
            <MainHeader />
            <PageContent>              
            </PageContent> 
            <Project />
            <Experience />
          </main>
        </Fragment>
      );
}

export default Dashboard;