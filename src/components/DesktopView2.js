import "./DesktopView2.css"
import Cookies from "universal-cookie/es6";
import { text5, text6, text7, text8, text9, text10, GO, events, text11 } from '../constants';
import { useState } from "react";

const DesktopView2= () => {
    const [but, setBut] = useState(0);
    const [disp, setDisp] = useState(false);
    const [budget, setBudget] = useState("Rs 0.00");
    const favPerson = new Cookies().get("fav");
    const handleSubmit = (event) => {
        event.preventDefault();
        if(but===1) {
            window.location.reload();
            setBut(0);
            return;
        }
        setBut(1);
        const rel = event.target[0].value/100;
        const evn = disp?event.target[2].value/100:parseFloat(event.target[1].value);
        const inc = parseFloat(disp?event.target[3].value:event.target[2].value);
        const bare = parseFloat(disp?event.target[4].value:event.target[3].value);
        console.log(rel,evn,inc,bare)
        const bud = Math.round((Math.sqrt(inc)*rel*evn*13.6 + bare)*100)/100;
        const res = Math.min(bud, Math.round((0.25*inc)*100)/100);
        setBudget("Rs " + res);
    }
    const changeHandle = (event) => {
        if(event.target["type"] === "select-one" && event.target.value === ""){
            setDisp(true);
        }
        else if(event.target["type"] === "select-one"){
            setDisp(false);
        }
    }
    return (
        <div className="d2body">
            <div className="d2head">{text5}</div>
            <div className="row">
                <div className="col-8">
                    <div className="formIO">
                    <form onSubmit={handleSubmit} onChange={changeHandle}>
                        <div className="row">
                            <div className="col-10">
                                <div className="q1">
                                    <label for="tag1" class="form-label q1">{text6}</label>
                                    <div className="extreme">{favPerson}</div>
                                    <input type="range" class="form-range" id="tag1" required="true"/>
                                    <div className="row">
                                        <div className="col-1">lowest</div>
                                        <div className="col-10"></div>
                                        <div className="col-1">highest</div>
                                    </div>
                                </div>
                                <div className="q2">
                                    <label for="tag2" class="form-label q2">{disp?text11:text7}</label>
                                    <select class="form-select" required="true">
                                        {events.map(e => <option value={e.value}>{e.name}</option>)}
                                    </select>
                                    {disp?<>
                                        <div className="row">
                                        <div className="col-9"></div>
                                        <div className="col-1">100th Birthday</div>
                                        <div className="col-2"></div>
                                    </div>
                                    <input type="range" class="form-range q1" id="tag1"  required="true"/>
                                    <div className="row">
                                        <div className="col-8"></div>
                                        <div className="col-1">25th Marriage Anniversary</div>
                                        <div className="col-3"></div>
                                    </div></>:<></>}
                                </div>
                                <div className="q2">
                                    <label for="tag3" class="form-label q2">{text8}</label>
                                    <input type="number" class="form-control q3" id="tag3" style={{width:"70%"}} required="true"/>
                                </div>
                                <div className="q2">
                                    <label for="tag4" class="form-label q2">{text9}</label>
                                    <input type="number" class="form-control q3" id="tag4" style={{width:"70%"}} required="true"/>
                                </div>
                            </div>
                            <div className="col-2">
                            <button type="submit" class="text4 q1">{GO[but]}</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
                {but===1?<div className="col-4">
                    <div className="result">{text10}</div>
                    <div className="result">{budget}</div>
                </div>
                :<></>}
                
            </div>
            
        </div>
    );
}
export default DesktopView2;