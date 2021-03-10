import React from 'react';
/*instead  of "{props.name}",  we can use "{name}"
if we write "const {name} = props"
or if you change "const Card = (props)" to "const Card = ({name})"*/
const Card = ({ name, email ,  id }) => {
	return (
		<div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt = 'robot-photo' src = {`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>	
	);
}

export default Card;