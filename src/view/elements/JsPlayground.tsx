// Core
import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styled from 'styled-components';

type Task = {
    code?: string;
    taskDescription?: string;
}
// Types
type PropTypes = {
    task: Task;
}

import Playground from 'javascript-playgrounds';

import { PublicPaneOptions } from 'javascript-playgrounds/dist/src/utils/options';


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

const Container = styled.div`
    .playground {
        display: flex;
        margin: auto;
    }
    div {
        margin: 10px;
    }
`;

const modules = [
    { name: 'moment', globalName: 'moment', url: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.14.1/moment.min.js' },
    { name: 'fetch', globalName: 'fetch', url: 'https://cdnjs.cloudflare.com/ajax/libs/fetch/3.6.2/fetch.min.js' },
    // { name: 'ky', globalName: 'ky', url: 'https://cdnjs.cloudflare.com/ajax/libs/ky/0.27.0/index.min.js' },
    // { name: 'fetch', globalName: 'fetch', url: '' },


];

export const JsPlayground: FC<PropTypes> = (props) => {
    const [ playgroundWidth, setPlagroundWidth ] = useState(60);
    const key = uuidv4();

    function changePlaygroundWidth(event: React.ChangeEvent<HTMLInputElement>): void {
        const value = Number(event.target.value);
        if (value > 50 && 100) {
            setPlagroundWidth(value - 5);
        }
    }

    return (
        <Container>
            <div className = 'js-title'>El: JsPlayground For Testing</div>

            <div className = 'task-description'>
                <pre>{props.task.taskDescription}</pre>
            </div>

            <div>
                <label htmlFor = 'input-playground-width'>Width ⚙️</label>
                <input
                    defaultValue = { 60 }
                    id = 'input-playground-width'
                    type = 'number'
                    onChange = { (value) => changePlaygroundWidth(value) }
                />
            </div>

            <Playground
                className = 'playground'
                code = { props.task.code }
                css = { styles }
                key = { key }
                modules = { modules }
                panes = { [ 'editor', player ] }
                style = {{ width: playgroundWidth + '%', height: 800 }}
            />

        </Container>
    );
};
