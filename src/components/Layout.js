import React from 'react'
import '../App.css'
import { Layout } from 'antd';
import { Resize, ResizeHorizon, ResizeVertical } from "react-resize-layout";
import { ATable } from './Table';
import { MapWrapper } from './Map';

const { Header, Content } = Layout;

export const MainLayout = () => {
    return (
        <Layout>
            <Header className='headerLayout'>
                <h1>Заявки на грузоперевозки</h1>
            </Header>
            <Content>
                <ResizeVertical height="80vh" >
                    <Resize handleWidth="8px" handleColor="rgb(216, 213, 213)">
                        <ResizeHorizon width="40%" minWidth="150px">
                            <ATable />
                        </ResizeHorizon>
                        <ResizeHorizon width="60%">
                            <MapWrapper />
                        </ResizeHorizon>
                    </Resize>
                </ResizeVertical>
            </Content>
        </Layout>
    )
}
