import { useDispatch } from 'react-redux';
import { toggleCardView } from '../store/cardsSlice';
import { useState } from 'react';
import { MdEmail } from 'react-icons/md';

const Sidebar = () => {
    const dispatch = useDispatch();
    const [feedback, setFeedback] = useState({
        name: '',
        email: '',
        feed: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFeedback('');
        setTimeout(() => setSubmitted(false), 3000);
    }
    function Feedback(e) {
        let value = e.target.value
        let id = e.target.id

        setFeedback(prev => ({
            ...prev,
            [id]: value
        }))
    }
    return (
        <div className={`${submitted ? 'sidebar1' : 'sidebar'} `}>
            {!submitted && <div className='view-toggle'>
                <h3>View Toggle</h3>
                <div style={{ display: 'flex', marginBottom: "10px" }} className='toggle-btn'>
                    <button onClick={() => dispatch(toggleCardView())}>
                        <img src="./toggle-0.svg" />
                    </button>
                    <button onClick={() => dispatch(toggleCardView())} style={{ backgroundColor: "#98EEC9" }}>
                        <img src="./toggle-2.svg" />
                    </button>
                </div>

            </div>}
            <div className='feedback'>
                <div className='feedback-component'>
                    <div>
                        <h3> Have a Feedback</h3>
                        <button onClick={() => setSubmitted(prev => !prev)} className='feedback-btn'>we're Listening</button>
                    </div>
                </div>
                {submitted &&
                    <form id="feedbackForm" onSubmit={(e) => handleFeedbackSubmit(e)}>
                        <h1>thank you for taking your time</h1>
                        <div className='input'>
                            <label>First Name</label>


                            <input value={feedback.name || ''} id="name" onChange={(e) => Feedback(e)}
                            />
                        </div>
                        <div className='input'>
                            <label>Email id</label>

                            <input value={feedback.email || ''}
                                id="email" onChange={(e) => Feedback(e)}
                            />
                        </div>
                        <div className='input'>
                            <label>Feedback </label>
                            <textarea
                                value={feedback.feed || ''}
                                id="feed"
                                onChange={(e) => Feedback(e)}
                                required
                                placeholder='Enter your feedback'
                            />
                        </div>

                        <button type='submit'>Submit</button>
                    </form>
                }
            </div>
        </div>
    )
}
export default Sidebar;