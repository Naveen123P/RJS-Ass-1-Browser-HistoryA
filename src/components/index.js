import './index.css'

const BrowserHistory = props => {
  const {HistoryDetails, onDelete} = props
  const {id} = HistoryDetails

  const onDeleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="listItem" key={HistoryDetails.id}>
      <p>{HistoryDetails.timeAccessed}</p>
      <img
        src={HistoryDetails.logoUrl}
        alt="domain logo"
        className="logo-Img"
      />
      <div className="title-domain">
        <p>{HistoryDetails.title}</p>
        <p className="span">{`${HistoryDetails.domainUrl}`}</p>
      </div>

      <button
        data-testid="delete"
        key={HistoryDetails.id}
        onClick={onDeleteItem}
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default BrowserHistory
