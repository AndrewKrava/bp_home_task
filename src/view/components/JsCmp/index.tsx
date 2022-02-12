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

// {console: { visiable: true }
const console: PublicPaneOptions = {
    type:                'console',
    id:                  '1',
    showFileName:        true,
    showLineNumber:      true,
    renderReactElements: true,
};

const player: PublicPaneOptions = {
    type:     'player',
    platform: 'web',
    id:       '11',

};

// const editor: PublicPaneOptions = {
//     type: 'editor',
// };

export const JsCmp: FC<PropTypes> = () => {
    return (
        <S.Container>
            <div className = 'js-title'>Component: JsCmp</div>

            <Playground
                code = { parameters.code }
                panes = { [ player, console, 'editor' ] }

                style = {{ width: 800, height: 500 }}
            />

        </S.Container>
    );
};
