import Header from "@/components/layout/Header/Header";
import Main from "@/components/layout/Main/Main";
import Footer from "@/components/layout/Main/Main";
import { Drawer } from "antd";

import { Dispatch, SetStateAction, useState } from "react";
import AppContext from "@/context/AppContext";

import { Provider } from "react-redux";

import styles from "@/styles/Home.module.scss";
import store from "../store/index";
import NavigationDrawer from "../components/ui/NavigationDrawer/index";

export default function Home() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const onCloseDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <Provider store={store}>
      <AppContext.Provider value={[drawerIsOpen, setDrawerIsOpen]}>
        <NavigationDrawer onCloseDrawer={onCloseDrawer} drawerIsOpen={drawerIsOpen} />
        <Header />
        <Main />
        <footer className={styles.footer}>MKS sistemas © Todos os direitos reservados</footer>
      </AppContext.Provider>
    </Provider>
  );
}
