import React from 'react'
import PropTypes from 'prop-types'

const BlurBlob = ({position , size}) => {

    const {left , top} = position 
    const {width,height} = size
  return (
    <div 
    style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)'
    }} 
    className='absolute'>
        <div className='w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob'></div>

    </div>
  )
}


BlurBlob.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string
    }),
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string
    })
}

export default BlurBlob