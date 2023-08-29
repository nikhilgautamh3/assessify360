import React, { useState } from 'react'
import Styles from './contact.module.css';
import Button from './button/button';
import { MdMessage } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { AiFillMail } from 'react-icons/ai'
const Help = () => {

    const [shownumber, setShownumber] = useState(false)
    return (
        <>
            <h1 className={Styles.heading}>CONTACT US</h1>
            <p className={Styles.paragraph}>LET'S CONNECT.WE ARE HERE TO HELP YOU AND ARE READY TO HERE FROM YOU.
                WE GREATLY VALUE YOUR QUERIES AND IN CASE YOU FACE ANY DIFFICULTY WITH ASSESSIFY 360 PLATFORM
                ,FEEL FREE TO CONTACT US AND WE WILL SURELY RESPOND TO YOU AT THE EARLIEST.HAVE A
                HAPPY ASSESSMENT!! THANKYOU</p>

            <div className={Styles.container}  >
                <div className={Styles.contact_section}>




                    <div className={Styles.top_btn}>
                        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />

                        <div onClick={() => { setShownumber(!shownumber) }}>
                            <Button

                                text={`${shownumber ? "12312333332121" : "VIA CALL"}`} icon={<FiPhoneCall fontSize="24px" />} />

                        </div>
                    </div>
                    <div >
                       <div className={Styles.email} > <Button
                            isOutline={true}
                            text="VIA EMAIL" icon={<AiFillMail fontSize="24px" />} /></div>
                        <form>
                            <div className={Styles.form_control}>
                                <label htmlFor="name" >Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                        </form>
                        <form>
                            <div className={Styles.email_control}>
                                <label  htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" />
                            </div>
                        </form>
                        <form>
                            <div className={Styles.message_control}>
                                <label htmlFor="message">Message</label>

                                <textarea name="message" id="message" cols="30" rows="6"></textarea>
                            </div>
                            <div style={{ display: "flex", justifyContent: "initial", }}>
                                <Button
                                    text="SUBMIT" />  </div>
                        </form>
                    </div>
                </div>
                <div className={Styles.image1}  >
                    <div ><img
                        src="/images/contact.png"
                        alt="image"
                        className={Styles.contact_image}
                    /></div>
                </div>



            </div>
        </>
    )
}

export default Help