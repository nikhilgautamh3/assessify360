import Styles from './contact_form.module.css';
import Button from '../button/button';



const Contact_form = () => {
  return (
    <section className={Styles.container}>
        <div className={Styles.contact_form}>
        <Button/></div>
            <div className={Styles.contact_image}></div> 
        
    </section>
    
  )
}

export default Contact_form
