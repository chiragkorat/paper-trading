import React, { useState } from 'react'
import cal from '../components/Asset/Images/cal.png'
import reload from '../components/Asset/Images/reload.png'
import upArrow from '../components/Asset/Images/upArrow.png'
import downArrow from '../components/Asset/Images/downArrow.png'


export default function Sidebar(props) {
  // const [value, setValue] = React.useState(0);
  const [color, setColor] = React.useState(false);
  const [fColor, setFColor] = React.useState(true);
  const [open, setOpen] = React.useState(0);
  const [calculator, setCalculator] = React.useState(1);
  const [buyCalculator, setBuyCalculator] = React.useState(1);
  const [upDown, setUpDown] = React.useState(0);
  const [upDownSL, setUpDownSL] = React.useState(0);
  const [boxCheck, setBoxCheck] = useState(false);
  const [boxCheck2, setBoxCheck2] = useState(false);
  const [sellData, setSellData] = useState(0);
  const [buyData, setBuyData] = useState(0);

  // const sell = () => {
  //   props.sellData(sellData);
  //   console.log("PPPp", sellData)
  // }
  // props.sell(sellData);
  // props.buy(buyData);

  const changeColor = () => {
    setColor(!color)
    setFColor(false)
  }
  const changeBlueColor = () => {
    setColor(false)
    setFColor(!fColor)
  }

  return (
    <div>
      <div className="d-flex justify-content-between pb-3 mx-2">
        <p className="h6">FX:EURUSD, Paper Trading</p>
        <button type="button" className="btn-close" aria-label="Close"></button>
      </div>
      <div className="btn-group btn-group-lg pb-3 mx-2 w-100" role="group" aria-label="Large button group">
        <button onClick={() => changeColor()} className={color == true ? 'active btn btn-danger' : 'btn btn-light '} style={{ fontSize: "14px" }}>SELL <br />0.39</button>
        <button onClick={() => changeBlueColor()} className={fColor == true ? 'active btn btn-primary' : ' btn btn-light'} style={{ fontSize: "14px" }}>BUY <br /> 0.39</button>
      </div>
      <div className='m-2'>
        <ul className="nav nav-tabs justify-content-around bg-transparent " id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Market</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Limit</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Stop</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
            {fColor == true ?
              <div className='m-2'>
                <p className='m-0'>Units</p>
                {/* <div className='border py-1 px-4 b-2 d-flex justify-content-between'> */}
                {/* <span>{buyCalculator}</span> */}
                <input className='border py-1 px-4 b-2 d-flex justify-content-between' style={{ width: "100%" }} min="1" type='number' value={buyCalculator} onChange={(e) => setBuyCalculator(e.target.value)} />

                {/* <img src={cal} width='25px' onClick={() => setOpen(!open)} /> */}
                {/* </div> */}
                {open == true &&
                  <div className='d-flex flex-column' style={{ marginLeft: "230px" }} >
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator - 1)}>-</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 1)}>+</li>
                    </ul>
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 1)}>1</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 5)}>5</li>
                    </ul>
                    <ul className='d-flex m-0 '>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 25)}>25</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 100)}>100</li>
                    </ul>
                    <ul className='d-flex m-0 '>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 500)}>500</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 1000)}>1000</li>
                    </ul>
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(0)}>C</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(1)}><img src={reload} width="30px" /></li>
                    </ul>
                  </div>
                }
              </div>
              :
              <div className='m-2'>
                <p className='m-0'>Units</p>
                {/* <div className='border py-1 px-4 b-2 d-flex justify-content-between'> */}
                {/* <span>{calculator}</span> */}
                {/* <img src={cal} width='25px' onClick={() => setOpen(!open)} /> */}
                <input className='border py-1 px-4 b-2 d-flex justify-content-between' style={{ width: "100%" }} min="1" type='number' value={calculator} onChange={(e) => setCalculator(e.target.value)} />

                {/* </div> */}
                {open == true &&
                  <div className='d-flex flex-column' style={{ marginLeft: "230px" }} >
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator - 1)}>-</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 1)}>+</li>
                    </ul>
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 1)}>1</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 5)}>5</li>
                    </ul>
                    <ul className='d-flex m-0 '>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 25)}>25</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 100)}>100</li>
                    </ul>
                    <ul className='d-flex m-0 '>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 500)}>500</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 1000)}>1000</li>
                    </ul>
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(0)}>C</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(1)}><img src={reload} width="30px" /></li>
                    </ul>
                  </div>
                }
              </div>
            }

            <div className='row'>
              <div className='col-md-6'>
                <div className='text-start p-2'>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={() => setBoxCheck(!boxCheck)} />
                  <label className="form-check-label ps-2" for="flexCheckChecked">
                    TP
                  </label>
                  <ul className={boxCheck == true ? ' checkBox-border' : 'disable ps-0'}  >
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      {upDown}.0
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' onClick={() => setUpDown(upDown + 1)} />
                        <img src={downArrow} width='15px' onClick={() => setUpDown(upDown - 1)} />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='text-start p-2'>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={() => setBoxCheck2(!boxCheck2)} />
                  <label className="form-check-label ps-2" for="flexCheckChecked" >
                    SL
                  </label>
                  <ul className={boxCheck2 == true ? ' checkBox-border pl-0' : 'disable ps-0'}>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      {upDown}.0
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' onClick={() => setUpDownSL(upDownSL + 1)} />
                        <img src={downArrow} width='15px' onClick={() => setUpDownSL(upDownSL - 1)} />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            <div className='row pt-2 w-100'>
              <div className='col-md-6'>
                <h6>Price</h6>
                <select className="form-select" aria-label="Default select example">
                  <option selected>1.450</option>
                  <option value="1">2.450 </option>
                  <option value="2">3.450</option>
                  <option value="3">4.450</option>
                </select>
              </div>

              <div className='col-md-6'><h6>Ticks</h6>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Ask</option>
                  <option value="1">Ask + 1 </option>
                  <option value="2">Ask + 2</option>
                  <option value="3">Ask + 3</option>
                </select>
              </div>
            </div>
            {fColor == true ?
              <div className='m-2'>
                <p className='m-0'>Units</p>
                {/* <div className='border py-1 px-4 b-2 d-flex justify-content-between'> */}
                {/* <span>{buyCalculator}</span> */}
                <input className='border py-1 px-4 b-2 d-flex justify-content-between' style={{ width: "100%" }} min="1" type='number' value={buyCalculator} onChange={(e) => setBuyCalculator(e.target.value)} />

                {/* <img src={cal} width='25px' onClick={() => setOpen(!open)} /> */}
                {/* </div> */}
                {open == true &&
                  <div className='d-flex flex-column' style={{ marginLeft: "230px" }} >
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator - 1)}>-</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 1)}>+</li>
                    </ul>
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 1)}>1</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 5)}>5</li>
                    </ul>
                    <ul className='d-flex m-0 '>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 25)}>25</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 100)}>100</li>
                    </ul>
                    <ul className='d-flex m-0 '>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 500)}>500</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 1000)}>1000</li>
                    </ul>
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(0)}>C</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(1)}><img src={reload} width="30px" /></li>
                    </ul>
                  </div>
                }
              </div>
              :
              <div className='m-2'>
                <p className='m-0'>Units</p>
                {/* <div className='border py-1 px-4 b-2 d-flex justify-content-between'> */}
                {/* <span>{calculator}</span> */}
                {/* <input value={calculator} onChange={(e) => setCalculator(e.target.value)} /> */}
                <input className='border py-1 px-4 b-2 d-flex justify-content-between' style={{ width: "100%" }} min="1" type='number' value={calculator} onChange={(e) => setCalculator(e.target.value)} />

                {/* <img src={cal} width='25px' onClick={() => setOpen(!open)} /> */}
                {/* </div> */}
                {open == true &&
                  <div className='d-flex flex-column' style={{ marginLeft: "230px" }} >
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator - 1)}>-</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 1)}>+</li>
                    </ul>
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 1)}>1</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 5)}>5</li>
                    </ul>
                    <ul className='d-flex m-0 '>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 25)}>25</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 100)}>100</li>
                    </ul>
                    <ul className='d-flex m-0 '>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 500)}>500</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 1000)}>1000</li>
                    </ul>
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(0)}>C</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(1)}><img src={reload} width="30px" /></li>
                    </ul>
                  </div>
                }
              </div>
            }
            <div className='row'>
              <div className='col-md-6'>
                <div className='text-start p-2'>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={() => setBoxCheck(!boxCheck)} />
                  <label className="form-check-label ps-2" for="flexCheckChecked">
                    TP
                  </label>
                  <ul className={boxCheck == true ? ' checkBox-border' : 'disable ps-0'} >
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      {upDown}.0
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' onClick={() => setUpDown(upDown + 1)} />
                        <img src={downArrow} width='15px' onClick={() => setUpDown(upDown - 1)} />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='text-start p-2'>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={() => setBoxCheck2(!boxCheck2)} />
                  <label className="form-check-label ps-2" for="flexCheckChecked">
                    SL
                  </label>
                  <ul className={boxCheck2 == true ? ' checkBox-border' : 'disable ps-0'}>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      {upDown}.0
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' onClick={() => setUpDown(upDown + 1)} />
                        <img src={downArrow} width='15px' onClick={() => setUpDown(upDown - 1)} />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <select className="form-select" aria-label="Default select example">
              <option selected>Ask</option>
              <option value="1">Ask + 1 </option>
              <option value="2">Ask + 2</option>
              <option value="3">Ask + 3</option>
            </select>
          </div>
          <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
            <div className='row pt-2 w-100'>
              <div className='col-md-6'>
                <h6>Price</h6>
                <select className="form-select" aria-label="Default select example">
                  <option selected>1.450</option>
                  <option value="1">2.450 </option>
                  <option value="2">3.450</option>
                  <option value="3">4.450</option>
                </select>
              </div>

              <div className='col-md-6'><h6>Ticks</h6>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Ask</option>
                  <option value="1">Ask + 1 </option>
                  <option value="2">Ask + 2</option>
                  <option value="3">Ask + 3</option>
                </select>
              </div>
            </div>
            {fColor == true ?
              <div className='m-2'>
                <p className='m-0'>Units</p>
                {/* <div className='border py-1 px-4 b-2 d-flex justify-content-between'> */}
                {/* <span>{buyCalculator}</span>
                  <img src={cal} width='25px' onClick={() => setOpen(!open)} /> */}
                <input className='border py-1 px-4 b-2 d-flex justify-content-between' style={{ width: "100%" }} min="1" type='number' value={buyCalculator} onChange={(e) => setBuyCalculator(e.target.value)} />

                {/* </div> */}
                {open == true &&
                  <div className='d-flex flex-column' style={{ marginLeft: "230px" }} >
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator - 1)}>-</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 1)}>+</li>
                    </ul>
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 1)}>1</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 5)}>5</li>
                    </ul>
                    <ul className='d-flex m-0 '>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 25)}>25</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 100)}>100</li>
                    </ul>
                    <ul className='d-flex m-0 '>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 500)}>500</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(buyCalculator + 1000)}>1000</li>
                    </ul>
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(0)}>C</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setBuyCalculator(1)}><img src={reload} width="30px" /></li>
                    </ul>
                  </div>
                }
              </div>
              :
              <div className='m-2'>
                <p className='m-0'>Units</p>
                {/* <div className='border py-1 px-4 b-2 d-flex justify-content-between'>
                  <span>{calculator}</span>
                  <img src={cal} width='25px' onClick={() => setOpen(!open)} />
                </div> */}
                <input className='border py-1 px-4 b-2 d-flex justify-content-between' style={{ width: "100%" }} min="1" type='number' value={calculator} onChange={(e) => setCalculator(e.target.value)} />

                {open == true &&
                  <div className='d-flex flex-column' style={{ marginLeft: "230px" }} >
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator - 1)}>-</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 1)}>+</li>
                    </ul>
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 1)}>1</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 5)}>5</li>
                    </ul>
                    <ul className='d-flex m-0 '>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 25)}>25</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 100)}>100</li>
                    </ul>
                    <ul className='d-flex m-0 '>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 500)}>500</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(calculator + 1000)}>1000</li>
                    </ul>
                    <ul className='d-flex m-0 ' >
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(0)}>C</li>
                      <li className="border list-unstyled text-center" style={{ width: "55px", height: "40px" }} onClick={() => setCalculator(1)}><img src={reload} width="30px" /></li>
                    </ul>
                  </div>
                }
              </div>
            }
            <div className='row'>
              <div className='col-md-6'>
                <div className='text-start p-2'>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={() => setBoxCheck(!boxCheck)} />
                  <label className="form-check-label ps-2" for="flexCheckChecked">
                    TP
                  </label>
                  <ul className={boxCheck == true ? ' checkBox-border' : 'disable ps-0'}>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      {upDown}.0
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' onClick={() => setUpDown(upDown + 1)} />
                        <img src={downArrow} width='15px' onClick={() => setUpDown(upDown - 1)} />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='text-start p-2'>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={() => setBoxCheck2(!boxCheck2)} />
                  <label className="form-check-label ps-2" for="flexCheckChecked">
                    SL
                  </label>
                  <ul className={boxCheck2 == true ? ' checkBox-border pl-0' : 'disable ps-0'}>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      {upDown}.0
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' onClick={() => setUpDown(upDown + 1)} />
                        <img src={downArrow} width='15px' onClick={() => setUpDown(upDown - 1)} />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                    <li className='list-unstyled border d-flex justify-content-between px-3 align-items-center'>
                      1
                      <div className='d-flex flex-column'>
                        <img src={upArrow} width='15px' />
                        <img src={downArrow} width='15px' />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <select className="form-select" aria-label="Default select example">
              <option selected>Ask</option>
              <option value="1">Ask + 1 </option>
              <option value="2">Ask + 2</option>
              <option value="3">Ask + 3</option>
            </select>
          </div>
        </div>

      </div>
      <div className='py-3 mx-2'>
        {fColor == true ?
          <button type="button" className="btn btn-primary w-100" onClick={() =>
            // setBuyData(buyCalculator)
            props.buy(buyCalculator)
          }>BUY {(Math.round(buyCalculator * 0.39)).toFixed(2)}</button>
          :
          <button type="button" className="btn btn-danger w-100" onClick={() =>
            // setSellData(calculator)
            props.sell(calculator)

          }>SELL {(Math.round(calculator * 0.39)).toFixed(2)}</button>
        }
      </div>
    </div>
  )
}

