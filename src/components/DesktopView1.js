import { useHistory } from 'react-router';
import Cookies from 'universal-cookie/es6';
import { text1, text2, text3, text4 } from '../constants';
import './DesktopView1.css';
const DesktopView1 = () => {
    const history = useHistory();
    const cookies = new Cookies();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value.toUpperCase());
        cookies.set("fav",event.target[0].value.toUpperCase())
        history.push("/budget-finder");
    }
    cookies.set('myCat', 'Pacman', { path: '/' });
    console.log(cookies.get('myCat')); // Pacman
    return (
        <div className="d1body">
            <div className="jumbo">
                {text1}
            </div>
            <div className="formIO">
                <form onSubmit={handleSubmit}>
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