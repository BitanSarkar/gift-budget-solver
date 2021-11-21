import { useHistory } from "react-router";
import Cookies from "universal-cookie/es6";
import { text1, text2, text3, text4 } from "../constants";
import './MobileView1.css';

const MobileView1 = () => {
    const history = useHistory();
    const cookies = new Cookies();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value.toUpperCase());
        cookies.set("fav",event.target[0].value.toUpperCase())
        history.push("/budget-finder");
    }
    return (
        <div className="d1body_m">
            <div className="jumbo_m">
                {text1}
            </div>
            <div className="formIO_m">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12">
                            <label for="tag1" class="form-label text2_m">{text2}</label>
                            <input type="text" class="form-control text3_m" id="tag1" placeholder="Enter the name here" required="true"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <button type="submit" class="btn btn-success text4_m">{text3}</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="note_m">
                {text4}
            </div>
        </div>
    );
}
export default MobileView1;