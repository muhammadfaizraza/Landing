import React,{useEffect} from 'react';
import '../../CSS/HomeCSS/blogs.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSponsor, STATUSES } from "../../../redux/getReducer/getSponsorSlice";
import img from '../../../assets/Rectangle 19.png'
import Cookies from "js-cookie";

const Sponsor = () => {
  const dispatch = useDispatch();
  const { data: sponsor, status } = useSelector((state) => state.sponsor);
  const cookiedata = Cookies.get('i18next')

  useEffect(() => {
    dispatch(fetchSponsor());
  },[])

  if (status === STATUSES.LOADING) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
    
      </h2>
    );
  }

  if (status === STATUSES.ERROR) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Something went wrong!
      </h2>
    );
  }
  return (
    <>
      <div className="sponsor">
    
      {
            sponsor.slice(0,1).map((item) => {
              return(
                <a href={item.Url} target='_blank'>
                  <div  className='sponsorimg' >
                <img src={item.image} alt=""/>
                <h2 className='first-txt'>
                {cookiedata === 'en' ? (item.TitleEn === null ? <>N/A</> : item.TitleEn) : (item.TitleAr === null ? <>N/A</> : item.TitleAr)}
                </h2>
                </div>
                </a>
              )
            })
          }
      </div>  
    </>
  )
}
export default Sponsor