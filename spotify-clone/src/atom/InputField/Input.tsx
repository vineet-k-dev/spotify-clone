import './style.css'

type InputProps = {
  title: string
  type: string
  labelPosition: string
  display?: string
}

const Input = ({title,type,labelPosition,display}: InputProps) => {
  return (
    <div className={`inputField ${display} ${type}`}>
        {labelPosition === 'left' && <label>{title}</label>}
        {type === 'checkbox' ? <input type={type} className='checkbox-btn'/> : <input type={type} placeholder={title} />}
        {labelPosition === 'right' && <label>{title}</label>}
    </div>
  )
}

export default Input