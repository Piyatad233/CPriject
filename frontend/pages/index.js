import Head from 'next/head' 
import Layout from '../components/layout' 
import useSWR, { mutate } from "swr";
import axios from "axios";
import React, { } from "react";
import styles from "../styles/Index.module.css";
import Navbar from "../components/navbar";
const URL = "http://localhost/api/herolists";
const URL_SEL = "http://localhost/api/purchase";
const fetcher = (key) => fetch(key).then((res) => res.json());
const index = () => {
  const { data, error } = useSWR(URL, fetcher, { revalidateOnFocus: false });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log("data", data);
  
  const selStu = async (id) => {
    let result = await axios.post(`${URL_SEL}/${id}`)
    mutate(URL, data);
  }

  const showHerolist = () => {
    if (data.list && data.list.length) {
      return data.list.map((item, index) => {
        return (
          <div className={styles.listItem} key={index}>
            <b>Picture :</b><img src={item.imgeurl} width={200} hight={200} /><br />
            <div><b>Name:</b> {item.name}</div>
            <div><b>Status:</b> {item.status}</div>
             <div> <b>Rank:</b> {item.rank} </div>
            <div><b>Number:</b> {item.number}</div>
            
            <div>
            <button
              className={styles.btn}
              onClick={() => selStu(item.id)}
            >
              Select
            </button></div>
          </div>
        );
      });
    } else {
      return <p>Loading...</p>;
    }
  };
  return (
    <Layout>
       <Head>
        <title>Home Page</title>
    </Head>
    <div className={styles.container}><Navbar />
      <div className={styles.title}>
      <marquee bgcolor="#A9E0B8" direction="lefe" scrollamount="5" width="100%"><ins>Welcome to My HeroWorld</ins></marquee></div>
      <div className={styles.list}>
        {showHerolist()}
      </div>
      </div>
    
    </Layout>
  );
};
export default index;
