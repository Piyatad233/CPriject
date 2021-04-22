import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../styles/student.module.css";
import withAuth from "../components/withAuth";
import Navbar from "../components/navbar";

const URL = "http://localhost/api/herolists";
const admin = ({ token }) => {
  const [user, setUser] = useState({});
  const [herolists, setHerolists] = useState({});
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [rank, setRank] = useState("");
  const [number, setNumber] = useState("");
  const [herolist, setHerolist] = useState({});
  const [imgeurl, setImageUrl] = useState("");
  useEffect(() => {
    getHerolists();
    profileUser();
  }, []);
  const profileUser = async () => {
    try {
      
      const users = await axios.get(`${config.URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
     
      setUser(users.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getHerolist = async (id) => {
    const result = await axios.get(`${URL}/${id}`)
    console.log('herolist id: ', result.data)
    setHerolist(result.data)
}
 
  const getHerolists = async () => {
    let result = await axios.get(URL);
    setHerolists(result.data.list);
  };

  const addHerolist = async () => {
    let result = await axios.post(URL, {
      name,
      status,
      rank,
      number,
      imgeurl
    });
    console.log(result);
    getHerolists();
  };

  const deleteHerolist = async (id) => {
    let result = await axios.delete(`${URL}/${id}`);
    getHerolists();
  };

  const updateHerolist = async (id) => {
    let result = await axios.put(`${URL}/${id}`, {
      name,
      status,
      rank,
      number,
      imgeurl
    });
    console.log(result);
    getHerolists();
  };

  const showHerolist = () => {
    if (herolists && herolists.length) {
      return herolists.map((item, index) => {
        return (
          <div className={styles.listItem} key={index}>
            <b>Name:</b> {item.name} <br />
            <b>Status:</b> {item.status} <br />
            <b>Rank:</b> {item.rank} <br />
            <b>Number:</b> {item.number}<br />
            <b>Picture:</b> {item.imgeurl}<br />
            <div className={styles.edit_button}>
              <button
                className={styles.button_get}
                onClick={() => getHerolist(item.id)}
              >
                Get
              </button>
              <button
                className={styles.button_update}
                onClick={() => updateHerolist(item.id)}
              >
                Update
              </button>
              <button
                className={styles.button_delete}
                onClick={() => deleteHerolist(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      });
    } else {
      return <p>Loading...</p>;
    }
  };

  const handlerChangeFile = e =>{
    const reader = new FileReader();

      reader.onload = e => {
          setImageUrl(e.target.result);
      }
      if(e.target.files[0])
        reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <h1><ins>Hero Data Edit </ins></h1>
      <div className={styles.form_add}>
        <h2>Add Hero</h2>
        Name:
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        Status:
        <input
          type="text"
          name="status"
          onChange={(e) => setStatus(e.target.value)}
        ></input>
        Rank:
        <input
          type="text"
          name="rank"
          onChange={(e) => setRank(e.target.value)}
        ></input>
        Number:
        <input
          type="text"
          name="number"
          onChange={(e) => setNumber(e.target.value)}
        ></input>
        Picture : 
        <input 
        type='file' 
        accept='image/*'
        onChange={handlerChangeFile}/>
        <button
          className={styles.button_add}
          onClick={() => addHerolist(name, status, rank, number,imgeurl)}
        >
          Add
        </button>
      </div>

      <div className={styles.list}>{showHerolist()}</div>
      <div className={styles.list1}><b><i><ins>(selected Hero)</ins></i></b> <b>  Name:</b>{herolists.name}<b>  Status:</b>{herolists.status} <b>  Rank:</b>{herolists.rank}  <b>Number:</b>{herolists.number} <b>Picture:</b>{herolists.imgeurl}</div>
    </div>
  );
};
export default withAuth(admin);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
