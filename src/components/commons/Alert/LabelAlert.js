import React, { Component } from "react";
import styles from './AlertCss';
import { withStyles } from "@material-ui/styles";
import { 
    SentimentVerySatisfiedOutlined as DefaultIcon, 
    SentimentDissatisfiedOutlined as ErrorIcon, 
    ReportProblemOutlined as WarningIcon, 
    EmojiObjectsOutlined as InfoIcon, 
    Spellcheck as SuccessIcon, 
} from "@material-ui/icons";

class LabelAlert extends Component {
    render() {
        const { classes } = this.props;
        let icon = null;

        switch(this.props.mainType) {
            case 'error':
                icon = <ErrorIcon fontSize="small" />
                break;
            case 'warning':
                icon = <WarningIcon fontSize="small" />
                break;
            case 'info':
                icon = <InfoIcon fontSize="small" />
                break;
            case 'success':
                icon = <SuccessIcon fontSize="small" />
                break;
            default:
                icon = <DefaultIcon fontSize="small"/>
        }

        return (
            <div className={classes.infoNote+((this.props.mainType) ? ` ${this.props.mainType}` : '')+((this.props.className) ? ` ${this.props.className}` : '')}>
                <div className={classes.infoIcon}>
                    {icon}                   
                </div>
                <div className={classes.infoMess}>
                    {(this.props.title) ? (<span className={classes.infoTitle}>{this.props.title}</span>) : ''}
                    <p>{this.props.children}</p>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(LabelAlert);
