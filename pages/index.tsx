import type { NextPage } from "next";

import UploadQuestionTest from '../src/components/UploadQuestionTest/UploadQuestionTest'

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return <div className={styles.container}><UploadQuestionTest /></div>;
};

export default Home;
