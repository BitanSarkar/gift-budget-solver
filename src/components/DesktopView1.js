import { useHistory } from 'react-router';
import Cookies from 'universal-cookie/es6';
import { text1, text2, text3, text4 } from '../constants';
import handleSubmitBut from '../handleSubmitBut';
import './DesktopView1.css';
const DesktopView1 = () => {
    const history = useHistory();
    const cookies = new Cookies();
    return (
        <div className="d1body">
            <div className="jumbo">
                {text1}
            </div>
            <div className="formIO">
                <form onSubmit={(event)=> handleSubmitBut(event,cookies,history)}>
                    <div className="row">
                        <div className="col-10">
                            <label for="tag1" class="form-label text2">{text2}</label>
                            <input type="text" class="form-control text3" id="tag1" placeholder="Enter the name here" required="true"/>
                        </div>
                        <div className="col-2">
                        <button type="submit" class="btn btn-success text4">{text3}</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="note">
                {text4}
            </div>
        </div>
    );
}
export default DesktopView1;