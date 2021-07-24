import React from 'react'

class Photo extends React.Component {
    render() {
        return (
            this.props.photo.map((val,index)=>{
                return(
                    <div key={index}>
                    <img src={val.urls.small} alt={val.alt_description}/>
                    </div>
                )
            })
        )
    }
}

export default Photo
