// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';


// Types
type PropTypes = {
    /* type props here */
}

import Playground from 'javascript-playgrounds';

import { PublicPaneOptions } from 'javascript-playgrounds/dist/src/utils/options';


const parameters = {
    code: `const array = [ 2, 5, 9, 15, 0, 4 ];

function print(arr) {
    for (const el of arr) {
        if (el > 3 && el < 10) {
            console.log(el);
        }
    }
}

print(array);` };

// TODO REMOVE
// const console: PublicPaneOptions = {
//     type:                'console',
//     id:                  '1',
//     showFileName:        true,
//     showLineNumber:      true,
//     renderReactElements: true,
// };

const player: PublicPaneOptions = {
    type:     'player',
    platform: 'web',
    id:       'player',

    console: {
        visible:             true,
        collapsible:         false,
        maximized:           true,
        renderReactElements: false,
        showFileName:        true,
        showLineNumber:      true,
    },

};


const playgroundStyles: React.CSSProperties = {
    width: 800, height: 500,
};

const styles = `
    .CodeMirror-scroll {
        background-color: #eeeeee;
    }
    .cm-s-react .CodeMirror-linenumber {
        color: black;
    }
    .CodeMirror-gutter {
        background-color: #eeeeee;
    }
`;
// #e0f2f1
// #b2dfdb more
// #eceff1

// .CodeMirror-gutter
// CodeMirror-lines  .CodeMirror-linenumber  .CodeMirror-gutter-elt


export const JsPlayground1: FC<PropTypes> = () => {
    return (
        <S.Container>
            <div className = 'js-title'>Component: JsCmp For Testing</div>

            <Playground
                className = 'playground'
                code = { parameters.code }
                css = { styles }
                panes = { [ 'editor', player ] }
                style = { playgroundStyles }
            />

        </S.Container>
    );
};
