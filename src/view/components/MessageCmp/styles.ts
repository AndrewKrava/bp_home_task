// Core
import styled from 'styled-components';

export const Container = styled.section`
    .accordion-item {
        margin-bottom: 10px;

        &:hover {
            .accordion-question {
                color: #000;
            }
        }

        &.selected {
            .accordion-question {
                
                color: #4886FF;

                &:after {
                    content: '-';
                    }
            }

            .accordion-answer {
                display: inline-block;
            }
        }
    }

    .accordion-question {
        position: relative;
        padding: 15px 30px;
        background: #F1F4FB;
        font-size: 16px;
        color: rgba(0,0,0,0.6);
        line-height: 24px;
        cursor: pointer;
        border-radius: 4px;
        margin-bottom: 22px;
        transition: color 0.3s;

        &:after {
            content: '+';
            position: absolute;
            right: 30px;
        }
    }

    .accordion-answer {
        padding: 0 30px;
        margin: 0 0 22px;
        font-size: 16px;
        color: #000;
        display: none;
    }
`;
// remove from         &.selected { .accordion-question {
// cursor: initial;