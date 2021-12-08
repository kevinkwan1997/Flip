import React from 'react'
import HistoryItem from '../components/home/HistoryItem'

const HistoryView = ({ history }) => {
    return (
        <div className="view-container">
            <div className="view-inner full-history-view">
                {
                    history.map((soldItem) => {
                        return <HistoryItem soldItem={ soldItem } />
                    })
                }
            </div>
        </div>
    )
}

export default HistoryView
