import React from 'react'

interface IconProps {
	src: string
}

const Icon: React.FC<IconProps> = ({ src }) => {
	return <img className="dialog-icon" src={src} alt="icon" />
}

export default Icon
