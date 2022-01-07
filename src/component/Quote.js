import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({title,author,color}) => {
    return (
        <div>
            <h1 style={{color: color}}>&ldquo; {title} &rdquo;</h1>
            <h3 className="auth" style={{color: color}}>- {author}</h3>
        </div>
    )
}

Quote.defaultProps = {
    title: 'Famous Quotes'
}

Quote.propTypes = {
   title: PropTypes.string,
   author: PropTypes.string
}
export default Quote
