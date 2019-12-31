import React, { Component, Fragment } from 'react';
import WordItem from './Item';

class List extends Component {
    render() {
        return (
            <Fragment>
                <WordItem pinyin="lǎoshī" word="老师" mword="老師" mean="thầy, cô" note="note" />
            </Fragment>
        );
    }
}

export default List;