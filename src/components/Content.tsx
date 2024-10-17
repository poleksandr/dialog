import React from 'react'

interface ContentProps {
	children: React.ReactNode
	className?: string
}

const Content: React.FC<ContentProps> = ({ children, className }) => {
	return <div className={`dialog-content ${className && className}`}>{children}</div>
}

export default Content
