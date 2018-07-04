import React from 'react';

export default class Footer extends React.Component {
    render() {
        var footerStyle = {
            margin: '100px'
        }
        return (
            <div style={footerStyle}>
                <p>&copy; Ram</p>
            </div>
        )
    }
}