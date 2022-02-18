// Core
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Playground from 'javascript-playgrounds';
import { PublicPaneOptions } from 'javascript-playgrounds/dist/src/utils/options';
import { v4 as uuidv4 } from 'uuid';


// Styles
const Container = styled.div`

    .playground {
        display: flex;
        margin: auto;
    }
    div {
        margin: 10px;
    }
`;

// Configuration for Playground libruary
const styles = `
    .CodeMirror-scroll {
        background-color:   #eeeeee;
    }
    .cm-s-react .CodeMirror-linenumber {
        color: black;
    }
    .CodeMirror-gutter {
        background-color:   #eeeeee;
    }
`;

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
const modules = [{ name: 'moment', globalName: 'moment', url: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.14.1/moment.min.js' }];


// Types
type PropTypes = {
    task: {
        code?: string,
        taskDescription?: string
    }

}

export const JsPlayground: FC<PropTypes> = (props) => {
    const [ playgroundWidth, setPlagroundWidth ] = useState(80);
    const key = uuidv4();

    function changePlaygroundWidth(event: React.ChangeEvent<HTMLInputElement>): void {
        const value = Number(event.target.value);
        setPlagroundWidth(value);
    }

    return (
        <Container>
            <div className = 'js-title'> Element JsPlayground</div>

            <div className = 'task-description'>
                <pre>{props.task.taskDescription}</pre>
            </div>

            <div>
                <label htmlFor = 'input-playground-width'>Width ⚙️</label>
                <input
                    defaultValue = { 80 }
                    id = 'input-playground-width'
                    max = { 95 }
                    min = { 50 }
                    type = 'range'
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
                style = {{ width: playgroundWidth + '%', height: 700 }}
            />

        </Container>
    );
};
