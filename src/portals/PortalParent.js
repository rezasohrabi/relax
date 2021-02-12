import React from 'react'
import Modal from './Modal';
import PortalModal from './PortalModal'


export default class PortalParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isOpenP: false
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {this.setState({isOpen: true})}}>
                    Open modal
                </button>
                <button onClick={() => {this.setState({isOpenP: true})}}>
                    Open portal modal
                </button>
                <div className='modalWrapper'>
                    <Modal 
                    header='this is modal header'
                    message='this is modal body'
                    isOpen={this.state.isOpen}
                    onClose={() => {this.setState({isOpen: false})}} 
                    />
                    <PortalModal
                    header='this is portal modal header'
                    message='this is portal modal body'
                    isOpen={this.state.isOpenP}
                    onClose={() => {this.setState({isOpenP: false})}}
                    />
                </div>
            </div>
        )
    }
}