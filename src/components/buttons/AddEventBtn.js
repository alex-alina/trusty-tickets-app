import React  from 'react'
import { Link } from 'react-router-dom';

export default function AddEventBtn(props) {
  return (
    <button>
      <Link to={`/events-add`}>
        Add Event
      </Link>
    </button>
  )
}


