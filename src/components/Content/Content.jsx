import Card from "../Card/Card";
import "./Content.css";



const Content = () => {
    return (
        <div className="content">
            <div className="container">
                <h2 className="disc">TOUR DATES</h2>
                <p className="par"><i>Remember to book your tickets!</i></p>
                <ul className="txt">
                    <li className="txt-content">
                        September <span>Sold out</span>
                    </li>
                    <li className="txt-content">
                        October <span>Sold out</span>
                    </li>
                    <li className="txt-content">
                        November <span id="num">3</span>
                    </li>
                </ul>

                <div className="card">
                    <Card 
                    image= '/image/img1.jpg'
                    title= 'New York'
                    date= 'Fri 27 Nov 2016'
                    description= 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.'
                    />
                    <Card 
                    image= '/image/img2.jpg'
                    title= 'Paris'
                    date= 'Sat 28 Nov 2016'
                    description= 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.'
                    />
                    <Card 
                    image= '/image/img3.jpg'
                    title= 'San Francisco'
                    date= 'Sun 29 Nov 2016'
                    description= 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.'
                    />
                </div>
            </div>
        </div>
    );
}

export default Content;