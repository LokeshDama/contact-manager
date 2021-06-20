import './FlashMessage.css'

const FlashMessage = ({ type = 'success', message }) => {
  return (
    <div className={type}>
      {message}
    </div>
  )
}

export default FlashMessage;
