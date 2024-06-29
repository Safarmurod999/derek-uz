import React from 'react'
import { useNavigate } from 'react-router-dom'

const TopLink = ({ title, link }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(link)} className='toplink'>
            <p>{title}</p>
            <button>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 1C8.75 0.585787 8.41421 0.25 8 0.25L1.25 0.25C0.835786 0.25 0.5 0.585786 0.5 1C0.5 1.41421 0.835786 1.75 1.25 1.75H7.25V7.75C7.25 8.16421 7.58579 8.5 8 8.5C8.41421 8.5 8.75 8.16421 8.75 7.75L8.75 1ZM1.53033 8.53033L8.53033 1.53033L7.46967 0.46967L0.46967 7.46967L1.53033 8.53033Z" fill="#231F20" />
                </svg>
            </button>
        </div>
    )
}

export default TopLink