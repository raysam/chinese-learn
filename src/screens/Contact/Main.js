import React, { Component, Fragment } from "react";
import { Typography, Link, IconButton, Tooltip  } from "@material-ui/core";
import { FileCopyOutlined as CopyIcon } from '@material-ui/icons';

class Main extends Component {

    copyMail = () => {
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute("id", "dummy_id");
        document.getElementById("dummy_id").value="luu.dat.tham@gmail.com";
        dummy.select();
        dummy.setSelectionRange(0, 999999);

        document.execCommand("copy");
        document.body.removeChild(dummy);
    }

    render() {
        return (
            <Fragment>
                <Typography variant="subtitle2" gutterBottom>
                    Trang web này sử dụng:
                </Typography>
                <Typography variant="body1" gutterBottom>
                    ReactJS, Javascript, Google Sheet API
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Liên Hệ:
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Nếu như có vấn đề gì hay lỗi web xin liên hệ mail&nbsp;
                    <Link href="mailto:luu.dat.tham@gmail.com">luu.dat.tham@gmail.com</Link>
                    <Tooltip title="Copy" placement="top" >
                        <IconButton aria-label="copy" onClick={this.copyMail} style={{marginLeft: 10}} size="small" >
                            <CopyIcon fontSize="inherit" />
                        </IconButton >
                    </Tooltip>
                    &nbsp;để báo lỗi cho mình.
                </Typography>
            </Fragment>
        );
    }
}

export default Main;
