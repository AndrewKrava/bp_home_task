// Core
import styled from 'styled-components';

export const Container = styled.section`
        width: 330px;
        height: 530px;
        margin-right: 30px;
        border-radius: 10px;
        box-shadow: 2px 2px 7px 0 rgba(0,0,0,0.5);

        .title-cmp {
            margin: 5px;
        }
        
        &:last-child {
            margin-right: 0;
        }

        header {
            position: relative;
            background: red;
            height: 280px;
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;

            .poster {
            width: 100%;
            height: 100%;
            overflow: hidden;


                img {
                    height: 100%;
                }
            }

            .tags {
            display: flex;
            position: absolute;
            bottom: 20px;
            left: 35px;

                div {
                    margin-right: 8px;

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }

            & .buttons {
            position: relative;
            top: 160px;
            left: 30px;

                & .button{
                    display: inline-block;
                    margin-right: 10px;
                }
            }
        }

        article {
            padding: 35px 34px 15px;

            h1 {
            margin-top: 0;
            margin-bottom: 15px;
            font-family: Helvetica;
            font-size: 20px;
            font-weight: bold;
            }

            p {
            font-family: Helvetica;
            font-size: 16px;
            line-height: 26px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.6);
            margin: 0;
            }
        }

        footer {
            display: flex;
            justify-content: space-between;
            border-top-color: lightgray;
            border-top-width: 1px;
            border-top-style: solid;
            padding: 16px 34px 0;
            font-family: Helvetica;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.6);

            .controls {
                display: flex;
                width: 136px;
                justify-content: space-between;
            }
        }
`;
