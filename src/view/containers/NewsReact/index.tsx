// Core
import React, { FC, useState } from 'react';
import moment from 'moment';
import { ArticleReact } from '../../components';
import { TagReact } from '../../elements';
import { CommentsCounterReact, LikesCounterReact } from '../../elements';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

//temp
import testData from '../../../bus/test_data/news.json';


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
                {testData.map((el) => {
                    return (
                        <ArticleReact
                            commentsCounter = { <CommentsCounterReact counts = { el.comments }/> }
                            description = { el.description }
                            key = { el.id }
                            likesCounter = {
                                <LikesCounterReact
                                    click = { clickOnLikes }
                                    likes = {{
                                        counts:  el.likes,
                                        isLiked: el.isLiked,
                                        id:      el.id,
                                    }}
                                /> }
                            published = { moment(el.published).format('DD.MM.YYYY') }
                            tagCmp = { <TagReact source = { el.tags } /> }
                            title = { el.title }
                            url = { el.image }
                        />
                    );
                })}
            </div>
        </S.Container>
    );
};
