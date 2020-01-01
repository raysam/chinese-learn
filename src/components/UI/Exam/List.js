import React, { Component, Fragment } from 'react';
import WordItem from './Item';
import { Grid } from '@material-ui/core';

class List extends Component {
    render() {
        return (
            <Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={3}>
                        <WordItem pinyin="lǎoshī" word="老师" mword="老師" mean="thầy, cô" note="note" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <WordItem pinyin="lǎoshī" word="老师" mword="老師" mean="thầy, cô" note="note" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <WordItem pinyin="lǎoshī" word="老师" mword="老師" mean="thầy, cô" note="note" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <WordItem pinyin="lǎoshī" word="老师" mword="老師" mean="thầy, cô" note="note" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <WordItem pinyin="lǎoshī" word="老师" mword="老師" mean="thầy, cô" note="note" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <WordItem pinyin="lǎoshī" word="老师" mword="老師" mean="thầy, cô" note="note" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <WordItem pinyin="lǎoshī" word="老师" mword="老師" mean="thầy, cô" note="note" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <WordItem pinyin="lǎoshī" word="老师" mword="老師" mean="thầy, cô" note="note" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <WordItem pinyin="lǎoshī" word="老师" mword="老師" mean="thầy, cô" note="note" />
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

export default List;