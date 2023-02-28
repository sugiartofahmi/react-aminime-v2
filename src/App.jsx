import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Router from "./router";
import Loading from "./components/Loading";
import MainLayout from "./layouts/MainLayout";
import ContentLayout from "./layouts/ContentLayout";
const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <ContentLayout>
          <Suspense fallback={<Loading />}>
            <Router />
          </Suspense>
        </ContentLayout>
      </Suspense>
    </MainLayout>
  );
};

export default App;
