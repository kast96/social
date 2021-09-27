import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.state.status) {
            this.setState({status: this.props.status});
        }
    }

    render() {
        return (
            <div className="profile__status">
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} type="text" autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }
            </div>
        )
    };
}

export default ProfileStatus;