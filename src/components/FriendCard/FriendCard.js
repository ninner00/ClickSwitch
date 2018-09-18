import React from "react";
import "./FriendCard.css";


function handleClick(props) {
	props.reArrangeCards();
	props.clickedCharacter(props.id);
}

function ClickCard(props) {
	return (
		<div className="card img-container" onClick={() => handleClick(props)}>
			<img alt={props.name} src={props.image} />
		</div>
	)
}

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
      </ul>
    </div>
  </div>
);

export default FriendCard;
