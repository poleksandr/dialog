import React from 'react'

interface HeaderProps {
	children: React.ReactNode
	className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
	return <div className={`dialog-header ${className && className}`}>{children}</div>
}

export default Header
