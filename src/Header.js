import { useEffect, useState,useRef } from "react";
import Row from "./Row";
import "./Header.css"
import axios from "axios";
const Header=()=>{
    const Ref = useRef();
    const [Current, SetCurrent] = useState(1);
    const [Previous, SetPrev] = useState(0);
    const [Repos, SetRepos] = useState([]);
    const [After, SetAfter] = useState(false);
    useEffect(() => {
      const req =async()=>{
        const Data =await axios.get(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${Current}&size=50`);
        if(!Data.data.items.length){
          SetAfter(true);
          return
        }
        SetPrev(Current);
        SetRepos([...Repos,...Data.data.items]);
      };
      if(!After&&Previous!==Current) {
        req();
      }},[Current,After,Previous,Repos]);
      const onScroll=()=>{
        if (Ref.current) {
          const {scrollTop,scrollHeight,clientHeight} = Ref.current;
          if (scrollTop+clientHeight===scrollHeight) {
            SetCurrent(Current+1);
          }
        }
      };
    return(
        <>
        <h1>Most Starred Repos</h1>
        <div className="scroll"
        onScroll={onScroll}
        ref={Ref}
        >
        <div className="container">
        {Repos.map((repo,i)=>{
                 return(
                     <Row repo={repo} key={i}/>
                 )
             })}
        </div>
        </div>
        </>
    )
}
export default Header;
