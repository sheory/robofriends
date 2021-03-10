import React from 'react';
import Card from './Card';
/*When you do  a loop you have to remember  you have to give it a unique key*/
const CardList = ({robots}) => {	
	return (
		<div>
			{
				robots.map((user, i) => {
				return (
				 <Card 
						key={i} /*key is better to be a element the doesn't change, exemplo id.*/
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}
					/>
				);
			})
		}
	</div>
	);
}

export default CardList;
