import PropTypes from 'prop-types'
import React from 'react'
const GenerateQuote = ({color,Click}) => {
    return (
        <button className="btn" style={{backgroundColor: color}} onClick={Click}>New Quotes</button>
    )
}

GenerateQuote.defaultProps={
    color: 'rgb(129, 177, 119)',
}
GenerateQuote.propTypes={
    Click: PropTypes.func
}
export default GenerateQuote
