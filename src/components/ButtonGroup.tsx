import React from 'react'

interface ButtonGroupProps {
	buttons: React.ReactNode[]
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
	return (
		<div className="button-group">
			{buttons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	)
}

export default ButtonGroup
