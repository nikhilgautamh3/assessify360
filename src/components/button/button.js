import Styles from './button.module.css';



const Button = (props) => {
  
  return (

    <button className= {props.isOutline ? Styles.outline_btn :Styles.primary_btn}>
  
    {props.icon}
     {props.text}
    </button>
  )
}

export default Button