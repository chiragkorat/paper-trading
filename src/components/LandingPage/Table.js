import React, { useEffect, useState } from 'react'

export default function Table() {
    const [liveData, setLiveData] = useState(false)
    const [Eur, setEur] = useState({ price: 0, level: 'UP' })
    const [Jpy, setJpy] = useState({ price: 0, level: 'UP' })
    const [Gbp, setGbp] = useState({ price: 0, level: 'UP' })
    const [Chf, setChf] = useState({ price: 0, level: 'UP' })
    const [Cad, setCad] = useState({ price: 0, level: 'UP' })
    const [AudChf, setAudChf] = useState({ price: 0, level: 'UP' })
    const [Cnh, setCnh] = useState({ price: 0, level: 'UP' })
    const [Czk, setCzk] = useState({ price: 0, level: 'UP' })

    let lastEur = 0
    let lastJpy = 0
    let lastGbp = 0
    let lastChf = 0
    let lastCad = 0
    let lastAudChf = 0
    let lastCnh = 0
    let lastCzk = 0
    useEffect(() => {
        const ws = new WebSocket(
            "wss://ws.finnhub.io?token=cgnuhdhr01qvubp37aigcgnuhdhr01qvubp37aj0"
        );
        ws.addEventListener('open', function (event) {
            ws.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:EUR_USD' }))
            ws.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:USD_JPY' }))
            ws.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:GBP_USD' }))
            ws.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:USD_CHF' }))
            ws.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:AUD_CAD' }))
            ws.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:AUD_CHF' }))
            ws.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:AUD_CNH' }))
            ws.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:AUD_CZK' }))
        });

        // Listen for messages
        ws.addEventListener('message', function (event) {
            // setLiveData(JSON.parse(event.data).data)
            const allEventData = JSON.parse(event.data).data
            // allEventData && allEventData.length > 0 && allEventData.map((mainVal) =>{
            //     allData.map((val)=>{
            //         if(val.name == mainVal.s){
            //             val.price = mainVal.s
            //         }
            //         dataVal.push(val)
            //     })
            // })
            if (liveData == false) {
                allEventData && allEventData.length > 0 && allEventData.map((mainVal) => {
                    const { s, p } = mainVal
                    setLiveData(true)

                    if (s == 'OANDA:EUR_USD' && Eur.price == 0) {
                        setEur({ price: p, level: lastEur > p ? 'UP' : 'DOWN' })
                        localStorage.setItem("EUR_USD", p);
                        lastEur = p
                    }
                    if (s == 'OANDA:USD_JPY' && Jpy.price == 0) {
                        lastJpy = p
                        setJpy({ price: p, level: lastJpy > p ? 'DOWN' : 'UP' })
                        localStorage.setItem("USD_JPY", p);
                    }
                    if (s == 'OANDA:GBP_USD' && Gbp.price == 0) {
                        lastGbp = p
                        setGbp({ price: p, level: lastGbp > p ? 'DOWN' : 'UP' })
                        localStorage.setItem("GBP_USD", p);

                    }
                    if (s == 'OANDA:USD_CHF' && Chf.price == 0) {
                        lastChf = p
                        setChf({ price: p, level: lastChf > p ? 'DOWN' : 'UP' })
                        localStorage.setItem("USD_CHF", p);

                    }
                    if (s == 'OANDA:AUD_CAD' && Cad.price == 0) {
                        setCad({ price: p, level: lastCad > p ? 'DOWN' : 'UP' })
                        localStorage.setItem("AUD_CAD", p);
                    }
                    if (s == 'OANDA:AUD_CHF' && AudChf.price == 0) {
                        setAudChf({ price: p, level: lastAudChf > p ? 'DOWN' : 'UP' })
                        localStorage.setItem("AUD_CHF", p);
                    }
                    if (s == 'OANDA:AUD_CNH') {
                        setCnh({ price: p, level: lastCnh > p ? 'DOWN' : 'UP' })
                        localStorage.setItem("AUD_CNH", p);
                    }
                    if (s == 'OANDA:AUD_CZK') {
                        setCzk({ price: p, level: lastCzk > p ? 'DOWN' : 'UP' })
                        localStorage.setItem("AUD_CZK", p);
                    }
                })
            }
            // setallData(
            //     allData.map((defaultData)=>{
            //        const eventData = JSON.parse(event.data).data
            //         const newVal = eventData && eventData.length > 0 && eventData.find(({s})=> s.split(':')[1] == defaultData.name)
            //         if (newVal) {
            //            if (defaultDlastata > newVal.p) {
            //             return {...defaultData, price: newVal.p, level: 'DOWN'}
            //            } else{
            //             return {...defaultData, price: newVal.p, level: 'UP'}
            //            }
            //         }
            //         else{
            //             return {...defaultData}
            //         }
            //     })
            // )
        });

        // Unsubscribe
        var unsubscribe = function (symbol) {
            ws.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }))
        }

    }, []);


    return (

        <div className='container py-5'>
            <div style={{ padding: '50px 0px' }}>
                <div className='text-center'>
                    <h3 style={{
                        fontWeight: "600",
                        fontSize: '50px'
                    }}>
                        Market Trend
                    </h3>
                    <h6 style={{
                        marginBottom: '40px',
                        fontSize: "18px"
                    }}>
                        Check coin trends in real time.
                    </h6>
                </div>

                <table className="table table-striped">
                    <thead style={{ backgroundColor: "#B5B8B8", color: 'white', textAlign: 'left' }}>
                        <tr>
                            <th scope="col" className='py-3'>Name</th>
                            <th scope="col" className='py-3'>Last Price</th>
                            <th scope="col" className='py-3'>Name</th>
                            <th scope="col" className='py-3'>Last Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* {allData && allData.map((item,i)=>( */}
                        <tr>
                            {/* <td >{item.s}</td>
                            <td>{item.p}</td>
                            <td>{item.t}</td>
                            <td>{item.v}</td> */}
                            <td>EUR USD</td>
                            <td>{Eur.price == 0 ?
                                (Math.round(localStorage.getItem("EUR_USD") * 100) / 100).toFixed(2)
                                : (Math.round(Eur.price * 100) / 100).toFixed(2)}</td>
                            <td>AUD CAD</td>
                            <td>{Cad.price == 0 ?
                                (Math.round(localStorage.getItem("AUD_CAD") * 100) / 100).toFixed(2)
                                : (Math.round(Cad.price * 100) / 100).toFixed(2)
                            }</td>
                            {/* <td>{lastEur > Eur.price ? 'DOWN' : 'UP'}</td> */}

                        </tr>
                        <tr>
                            <td>USD JPY</td>
                            <td>{
                                Jpy.price == 0 ?
                                    (Math.round(localStorage.getItem("USD_JPY") * 100) / 100).toFixed(2)
                                    : (Math.round(Jpy.price * 100) / 100).toFixed(2)}</td>
                            <td>AUD CHF</td>
                            <td>{AudChf.price == 0 ?
                                (Math.round(localStorage.getItem("AUD_CHF") * 100) / 100).toFixed(2)
                                : (Math.round(AudChf.price * 100) / 100).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>GBP USD</td>
                            <td>{Gbp.price == 0 ?
                                (Math.round(localStorage.getItem("GBP_USD") * 100) / 100).toFixed(2)
                                : (Math.round(Gbp.price * 100) / 100).toFixed(2)}</td>
                            <td>USD CHF</td>
                            <td>{Chf.price == 0 ?
                                (Math.round(localStorage.getItem("USD_CHF") * 100) / 100).toFixed(2)
                                : (Math.round(Chf.price * 100) / 100).toFixed(2)}</td>
                        </tr>




                        {/* <tr>
                            <td className='py-3'>XRPUSDT</td>
                            <td className='py-3'>0.51</td>
                            <td className='py-3'>1.97%</td>
                            <td className='py-3'>1.97%</td>
                        </tr>
                        <tr>
                            <td className='py-3'>BTCUSDT</td>
                            <td className='py-3'>28549.03</td>
                            <td className='py-3'>0.81%</td>
                            <td className='py-3'>1.48B</td>
                        </tr>
                        <tr>
                            <td className='py-3'>ETHUSDT</td>
                            <td className='py-3'>1922.16</td>
                            <td className='py-3'>2.47%</td>
                            <td className='py-3'>988.82M</td>
                        </tr>
                        <tr>
                            <td className='py-3'>BTCUSDT</td>
                            <td className='py-3'>28549.03</td>
                            <td className='py-3'>0.81%</td>
                            <td className='py-3'>1.48B</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
