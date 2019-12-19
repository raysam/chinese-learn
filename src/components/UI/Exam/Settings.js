import React, { Component, Fragment } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Typography, Button } from '@material-ui/core';

class Settings extends Component {
    
    state = {
        activeStep: 0
    }

    handleNext = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep + 1
        });
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0
        });
    };

    render() {
        const listStep = [
            "Chọn bài cần kiểm tra",
            "Cấu hình kiểm tra"
        ];
        return (
            <Fragment>
                <Stepper activeStep={this.state.activeStep} alternativeLabel className="notbg">
                    {
                        listStep.map(label => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))
                    }
                </Stepper>
                <div>
                    {this.state.activeStep === listStep.length ? (
                    <div>
                        <Typography>All steps completed</Typography>
                        <Button onClick={this.handleReset}>Reset</Button>
                    </div>
                    ) : (
                    <div>
                        <Typography>{this.state.activeStep}</Typography>
                        <div>
                        <Button
                            disabled={this.state.activeStep === 0}
                            onClick={this.handleBack}
                        >
                            Back
                        </Button>
                        <Button variant="contained" color="primary" onClick={this.handleNext}>
                            {this.state.activeStep === listStep.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                        </div>
                    </div>
                    )}
                </div>
            </Fragment>
        );
    }
}

export default Settings;