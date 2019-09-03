import React, { Component } from 'react';
import {Button, Divider, Header, Icon} from 'semantic-ui-react';
import CardComponent from '../CardComponent';
import skills from '../../configs/skills';

export default class SkillsComponent extends Component {
    state = {
        skillsList: skills,
        pageList: [],
        currentPage: 1,
        numPerPage: 5,
        numOfPages: 6,
    }

    getNumberOfPages = (arr, numPer) => (Math.ceil(arr.length / numPer));

    nextPage = () => {
        this.setState({ currentPage: this.state.currentPage + 1 }, () => {
            this.loadList(this.state.skillsList);
        });
    }

    prevPage = () => {
        this.setState({ currentPage: this.state.currentPage - 1 }, () => {
            this.loadList(this.state.skillsList);
        });
    }

    firstPage = () => {
        const currentPage = 1;
        this.setState({ currentPage }, () => {
            this.loadList(this.state.skillsList);
        });
    }

    lastPage = () => {
        const currentPage = this.state.numOfPages;
        this.setState({ currentPage }, () => {
            this.loadList(this.state.skillsList);
        });
    }

    loadList = (list) => {
        const begin = ((this.state.currentPage - 1) * this.state.numPerPage);
        const end = begin + this.state.numPerPage;
        const pageList = list.slice(begin, end);
        this.setState({ pageList }, () => {
            console.log(this.state.pageList);
        });
    }

    componentDidMount() {
        this.loadList(this.state.skillsList);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', this.state.pageList);
    }

    render() {
        const {currentPage, numOfPages, pageList} = this.state;
        const disablePrevFirstPage = (currentPage === 1);
        const disableLastNextPage = (currentPage === 6);
        return (
            <div>
                <div className='skills-header'>
                    <Header as='h2'>
                        Technical Skill Set
                    </Header>
                </div>
                <div className='page-list-wrapper'>
                    <Divider />
                </div>
                <div className='card-skill-wrapper'>
                    {this.state.pageList.map((item, index) => <CardComponent key={index} skill={item} />)}
                </div>
                <div className='page-counter-wrapper'>
                    <Header>
                        Page {currentPage} of {numOfPages}
                    </Header>
                </div>
                <div className='page-btn-wrapper'>
                    <Button circular size='large' disabled={disablePrevFirstPage} onClick={e => this.firstPage()}>
                        <Icon name='fast backward'/>First
                    </Button>
                    <Button circular disabled={disablePrevFirstPage}  onClick={e => this.prevPage()}>
                        <Icon name='backward'/>Prev
                    </Button>
                    <Button circular disabled={disableLastNextPage} onClick={e => this.nextPage()}>
                        <Icon name='forward'/>Next
                    </Button>
                    <Button circular disabled={disableLastNextPage} onClick={e => this.lastPage()}>
                        <Icon name='fast forward'/>Last
                    </Button>
                </div>
            </div>
        )

    }
}
