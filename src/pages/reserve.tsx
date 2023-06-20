import { useState, FormEvent } from "react";
import { Button, Form, FormGroup } from 'reactstrap';
import reservationImg from '../assets/reservationImg.jpg'
import { useProducts } from "../context/Context";

const Reservation = () => {
    const [guests, setGuest] = useState(2);
    const [confirmed, setConfirmed] = useState(false);
    const [formData, setFormData] = useState({ name: '', date: '', time: '', guests: 0 })
    const { langEng } = useProducts();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const minusGuest = () => {
        if (guests > 1) {
            setGuest(guests - 1);
        }
    }
    const addGuest = () => {
        if (guests < 8) {
            setGuest(guests + 1);
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData({ ...formData, guests })
        setConfirmed(true);
        console.log(formData);
    }

    const dateToday = () => {
        let date = new Date();
        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString();
        if (month.length === 1) month = `0${month}`;
        let day = date.getDate().toString();
        if (day.length === 1) day = `0${day}`;
        let formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }

    return (
        <div className="">
            <div className="mx-auto col-6 col-md-5 mt-5">
                <img src={reservationImg} className="w-100 mx-auto img-fluid rounded" />
            </div>
            {!confirmed && 
                <Form onSubmit={handleSubmit} className="col-xs-6 col-md-5 d-flex flex-column mx-auto my-5">
                    <h2 className="mx-auto font">{langEng ? "make a reservation" : "예약하기"}</h2>
                    <FormGroup>
                        <label htmlFor="name">{langEng ? "name: " : "성함: "}</label>
                        <input type="text" id='name' name='name' className="form-control" onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <label>{langEng ? "number of guests:" : "손님 수"}</label>
                        <div className="guests-number-div pt-3 d-flex justify-content-center">
                            <div className="minus" onClick={minusGuest}>-</div>
                            <div className="guests-number mx-5">
                                {guests}
                            </div>
                            <div className="plus" onClick={addGuest}>+</div>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="date">{langEng ? "date: " : "날짜: "}</label>
                        <input id="date" className="form-control" name='date' type="date" max="2025-08-31" min={dateToday()} defaultValue={dateToday()} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="appt-time">{langEng ? "time: " : "시간: "}</label>
                        <input id="appt-time" type="time" name="time" className="form-control" min="08:00" max='18:00' defaultValue="10:30" onChange={handleChange}required></input>
                    </FormGroup>
                    <Button>{langEng ? "reserve" : "예약 확인"}</Button> 
                </Form>
        }
        {confirmed && <div className="col-6 col-lg-3 d-flex flex-column mx-auto my-5 py-5">
            <h2 className="text-center">Your reservation for <b>{formData.name}</b> at {formData.time} on <br />{formData.date}<br />is confirmed.</h2>

        </div>}
        </div>
        
    )
}

export default Reservation;