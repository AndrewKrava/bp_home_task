/* eslint-disable no-plusplus */
// Core
import React, { FC, useState } from 'react';
import moment from 'moment';

// Components
import { ArticleReact } from '../../components';

// Elements
import { TagReact } from '../../elements';
import { CommentsCounterReact, LikesCounterReact } from '../../elements';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

//temp
import testData from '../../../bus/test_data/news.json';

// Types
type PropTypes = {
    /* type props here */
}


export const NewsReact: FC<PropTypes> = () => {
    const [ listNews, setListNews ] = useState(testData);

    function clickOnLikes(id: number) {
        setListNews(
            listNews.map((news) => {
                if (news.id === id) {
                    news.likes = news.isLiked ? --news.likes : ++news.likes;
                    news.isLiked = !news.isLiked;
                }

                return news;
            }),
        );
    }

    return (
        <S.Container>
            <h2>Container: NewsReact</h2>

            <div className = 'news'>
                {listNews.map((news) => {
                    return (
                        <ArticleReact
                            commentsCounter = { <CommentsCounterReact counts = { news.comments }/> }
                            description = { news.description }
                            key = { news.id }
                            likesCounter = {
                                <LikesCounterReact
                                    click = { clickOnLikes }
                                    likes = {{
                                        counts:  news.likes,
                                        isLiked: news.isLiked,
                                        id:      news.id,
                                    }}
                                /> }
                            published = { moment(news.published).format('DD.MM.YYYY') }
                            tagCmp = { <TagReact source = { news.tags } /> }
                            title = { news.title }
                            url = { news.image }
                        />
                    );
                })}
            </div>
        </S.Container>
    );
};
