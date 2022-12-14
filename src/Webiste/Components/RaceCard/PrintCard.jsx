import Accordion from "react-bootstrap/Accordion";
import { RaceCardData } from "../../data/data";
import shirt from "../../assets/image 5.png";
import pic from "../../assets/Ellipse 7.png";
import ScrollContainer from 'react-indiana-drag-scroll'
import { useSelector } from "react-redux";
import arrow1 from "../../assets/image 3 (Traced).png";
import Moment from "react-moment";
import Cookies from "js-cookie";
const Card = () => {
  const myPara = {
    fontWeight: "700",
    fontSize: "12px",
    color: "rgba(0, 0, 0, 0.5)",
  };
  const myPara1 = {
    fontWeight: "700",
    fontSize: "12px",
    color: "#000",
  };
  const btnNew = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "3px 10px",
    gap: "10px",
    width: "96px",
    height: "21px",
    background: "#19469D",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
  };
  const btnNew1 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "3px 10px",
    gap: "10px",
    width: "96px",
    height: "21px",
    background: "#FF0000",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
  };
  const { data: singlerace, status } = useSelector((state) => state.singlerace);
  const cookiedata = Cookies.get('i18next')
  return (
    <div className="RaceDetailCard">
                        <div className="forfexclass">
                          <Accordion defaultActiveKey="0">
                            <div className="RaceAndHorseModelDataCSSFlex">
                              {singlerace.RaceAndHorseModelData === undefined ? (
                                <>N/A</>
                              ) : (
                                singlerace.RaceAndHorseModelData.map((data,index) => {
                                  return (
                                    <div className="RaceAndHorseModelDataCSS">
                                     <Accordion.Item eventKey='0'>
                                      <Accordion.Header>
                                        <div className="cardracesAccordion">
                                          <div className="cardraces1">
                                            <img src={data.HorseImage} alt="" />
                                            <span className="cardraces1box">
                                              <p>1-3-22</p>
                                              <h3>0{data.Foal}</h3>
                                            </span>
                                          </div>
                                          <div className="cardraces2">
                                            <div
                                              style={{
                                                display: "flex",
                                                gap: "10px",
                                              }}
                                            >
                                              <p
                                                style={{
                                                  fontWeight: "700",
                                                  fontSize: "19.6px",
                                                  lineHeight: "24px",
                                                  color: "#19469D",
                                                }}
                                              >
                                                <span>
                                                  {cookiedata === "en"
                                                    ? data.NameEn
                                                    : data.NameAr}
                                                </span>
                                              </p>
                                              <p style={myPara}>
                                                <Moment fromNow ago>
                                                  {data.DOB}
                                                </Moment>{" "}
                                                GR H ({data.Height})
                                              </p>
                                            </div>
                                            <div
                                              style={{
                                                display: "flex",
                                                lineHeight: "1px",
                                              }}
                                            >
                                              <p style={myPara}>
                                                Dam{" "}
                                                <b>
                                                  :
                                                  {data.DamData === null ? (
                                                    <>N/A</>
                                                  ) : (
                                                    <>{data.DamData.NameEn} </>
                                                  )}{" "}
                                                </b>
                                              </p>
                                              <p style={myPara}>
                                                Sire{" "}
                                                <b>
                                                  :
                                                  {data.GSireData === null ? (
                                                    <>N/A</>
                                                  ) : (
                                                    <>{data.GSireData.NameEn} </>
                                                  )}
                                                </b>
                                              </p>
                                              <p style={myPara}>
                                                G.Sire{" "}
                                                <b>
                                                  {" "}
                                                  :{" "}
                                                  {data.GSireData === null ? (
                                                    <>N/A</>
                                                  ) : (
                                                    <>{data.GSireData.NameEn} </>
                                                  )}
                                                </b>
                                              </p>
                                            </div>
                                            <div
                                              style={{
                                                display: "flex",
                                              }}
                                            >
                                              <p
                                                style={{
                                                  fontWeight: "400",
                                                  fontSize: "12px",
                                                  lineHeight: "15px",
                                                  color: "#FF0000",
                                                }}
                                              >
                                                {data.ActiveOwnerData === null ? <>Na/A</> :data.ActiveOwnerData.NameEn}
                                              </p>
                                              <p
                                                style={{
                                                  fontWeight: "300",
                                                  fontSize: "9px",
                                                  lineHeight: "15px",
                                                  color: "rgba(0, 0, 0, 0.5)",
                                                }}
                                              >
                                                (8 - 3 - 2 - 8 - 4)
                                              </p>
                                            </div>
                                            <div className="trainerbreader_section">
                                              <img
                                                src={data.ActiveOwnerData.image}
                                                alt=""
                                                className="trainerbreader_image"
                                              />{" "}
                                              <div className="race_trainerbreader">
                                                <p>
                                                  T <b>{data.ActiveTrainerData === null ? <>N/A</> :data.ActiveTrainerData.NameEn} </b>
                                                </p>
                                                <p>
                                                  B
                                                  <b>
                                                    {cookiedata === "en"
                                                      ? data.BreederData.NameEn
                                                      : data.BreederData
                                                          .NameAr}{" "}
                                                  </b>
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                          {/* <div className="cardraces3">
                                          <div>
                                            <p style={myPara1}>{singlerace.Horses.map((data) => data.GSire)}</p>
                                            <p style={myPara1}>56kg</p>
                                          </div>
                                          <div>
                                            <img src={singlerace.Owner.map((data) => data.image)} alt="" />
                                          </div>
                                        </div> */}
                                    <div className="cardraces4">
                                            <p
                                              style={{
                                                fontWeight: "300",
                                                fontSize: "12px",
                                                lineHeight: "15px",
                                                color: "rgba(0, 0, 0, 0.5)",
                                                textAlign: "end",
                                              }}
                                            >
                                              TT OR: {singlerace.JockeyModels.length < 1 ? <>N/A</> : (singlerace.JockeyModels[index].Rating === undefined ? <>N/A</> : singlerace.JockeyModels[index].Rating)}
                                            </p>
                                            <div className="cardracesjockey">
                                              <div className="cardracesjockeyleft">
                                                <p>
                                                  J <b>{singlerace.JockeyModels.length < 1 ? <>N/A</> : (singlerace.JockeyModels[index].NameEn === undefined ? <>N/A</> :singlerace.JockeyModels[index].NameEn)}</b>
                                                </p>
                                                <p>{singlerace.JockeyModels.length < 1 ? <>N/A</> : (singlerace.JockeyModels[index].MaximumJockeyWeight === undefined ? <>N/A</> :singlerace.JockeyModels[index].MaximumJockeyWeight)}kg</p>
                                                <p
                                                  style={{
                                                    fontWeight: "300",
                                                    fontSize: "9px",
                                                    lineHeight: "15px",
                                                    color: "rgba(0, 0, 0, 0.5)",
                                                  }}
                                                >
                                                  47 (8 - 3 - 2 - 8 - 4)
                                                </p>
                                              </div>
                                              <img
                                                src={singlerace.JockeyModels.length < 1 ? <>N/A</> :(singlerace.JockeyModels[index].image === undefined ? <>N/A</> :singlerace.JockeyModels[index].image)}
                                                alt=""
                                                className="cardracesjockeyimg"
                                              />
                                            </div>
                                            <div className="cardracesjockeycards">
                                              <ul>
                                                <li>C</li>
                                                <li>D</li>
                                                <li>CL</li>
                                                <li>BF</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <div className="pmclass">
                                            <p>
                                              PM: AED <b>{data.PurchasePrice}</b>
                                            </p>
                                            <p>
                                              BTO: AED <b>55,000</b>
                                            </p>
                                            <p>
                                              SP: AED <b>55,000</b>
                                            </p>
                                          </div>
                                          <div className="uaecareer">
                                            <p>UAE Career: 47 (2 - 8 - 4)</p>
                                            <p>Lifetime: 47 (2 - 8 - 4)</p>
                                            <p>Turf :47 (2 - 8 - 4) </p>
                                            <p>Durt :47 (2 - 8 - 4) </p>
                                            <p>Dist: 47 (2 - 8 - 4) </p>
                                            <p>AW :47 (2 - 8 - 4) </p>
                                          </div>
                                        </div>
                                      </Accordion.Header>
                                      <Accordion.Body className="AccordionBody11">
                                        <div className="mycardclass1">
                                          <div className="BodyNew">
                                            <table className="customers">
                                              <tr>
                                                <th>Date</th>
                                                <th>Cr</th>
                                                <th>Dist</th>
                                                <th>TC</th>
                                                <th>Type</th>
                                                <th>Dts</th>
                                                <th>time</th>
                                                <th>Jockey</th>
                                                <th>Wgt</th>
                                                <th>FP</th>
                                                <th>Les</th>
                                                <th>RS</th>
                                                <th>BtBy</th>
                                                <th>Kgs</th>
                                                <th>Draw</th>
                                              </tr>
                                            </table>
                                          </div>
                                          <div className="BodyNew1">
                                            <table className="customers2">
                                              <tr>
                                                <th>12 Oct 22</th>
                                                <th>Wol (T)</th>
                                                <th>2400</th>
                                                <th>D</th>
                                                <th>S</th>
                                                <th>Novice</th>
                                                <th>02:05:55</th>
                                                <th>Miss </th>
                                                <th>58</th>
                                                <th>6</th>
                                                <th>16.25</th>
                                                <th>5</th>
                                                <th>67</th>
                                                <th>5</th>
                                                <th>
                                                  <img src={arrow1} alt="" />
                                                </th>
                                              </tr>
                                            </table>
                                          </div>
                                          <div className="BodyNew2">
                                            <table className="customers2">
                                              <tr>
                                                <th>12 Oct 22</th>
                                                <th>Wol (T)</th>
                                                <th>2400</th>
                                                <th>D</th>
                                                <th>S</th>
                                                <th>Novice</th>
                                                <th>02:05:55</th>
                                                <th>Miss </th>
                                                <th>58</th>
                                                <th>6</th>
                                                <th>16.25</th>
                                                <th>5</th>
                                                <th>67</th>
                                                <th>5</th>
                                                <th>
                                                  <img src={arrow1} alt="" />
                                                </th>
                                              </tr>
                                            </table>
                                          </div>
                                          <div className="BodyNew3">
                                            <table className="customers2">
                                              <tr>
                                                <th>12 Oct 22</th>
                                                <th>Wol (T)</th>
                                                <th>2400</th>
                                                <th>D</th>
                                                <th>S</th>
                                                <th>Novice</th>
                                                <th>02:05:55</th>
                                                <th>Miss </th>
                                                <th>58</th>
                                                <th>6</th>
                                                <th>16.25</th>
                                                <th>5</th>
                                                <th>67</th>
                                                <th>5</th>
                                                <th>
                                                  <img src={arrow1} alt="" />
                                                </th>
                                              </tr>
                                            </table>
                                          </div>
                                        </div>
                                      </Accordion.Body>
                                    </Accordion.Item>
                                    </div>
                                  );
                                })
                              )}
                            </div>
                          </Accordion>
                        </div>
                      </div>
  );
};
export default Card;
